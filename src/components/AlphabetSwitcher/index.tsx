import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';

/**
 * Navbar dropdown that selects which alphabet `:etym[…]` text is displayed in.
 *
 * The choice is stored on `<html data-isv-alphabet="…">` (read by CSS) and
 * persisted to localStorage. An inline <head> script (see docusaurus.config.ts)
 * applies the stored value before first paint to avoid a flash of the default.
 */

const STORAGE_KEY = 'isv-alphabet';

const OPTIONS: ReadonlyArray<[value: string, label: string]> = [
  ['etym', 'Etymological'],
  ['latn', 'Latin'],
  ['cyrl', 'Cyrillic'],
];

export default function AlphabetSwitcher(): React.ReactElement {
  // Render the default on the server; sync from storage after mount.
  const [value, setValue] = useState('etym');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setValue(stored);
      }
    } catch {
      /* localStorage unavailable — keep the default */
    }
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const next = event.target.value;
    setValue(next);
    document.documentElement.setAttribute('data-isv-alphabet', next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore persistence failures */
    }
  };

  return (
    <select
      className={styles.switcher}
      value={value}
      onChange={onChange}
      aria-label="Etymological alphabet display"
      title="Choose the alphabet for etymological text"
    >
      {OPTIONS.map(([optionValue, label]) => (
        <option key={optionValue} value={optionValue}>
          {label}
        </option>
      ))}
    </select>
  );
}
