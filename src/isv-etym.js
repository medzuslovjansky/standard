/**
 * Converters for the Interslavic etymological ("Scientific" / MS Plus) alphabet.
 *
 * Input is always assumed to be written in the etymological Latin alphabet.
 * We derive two other renderings:
 *   - standard Latin      (etymological diacritics folded away)
 *   - standard Cyrillic    (via the normative Latin→Cyrillic transliteration)
 *
 * The mappings are taken from docs/04-orthography/03-etymological.md and
 * docs/04-orthography/04-transliteration.md. This is intentionally a
 * character-level converter — "good enough", not a morphological engine.
 */

// Etymological letter → standard Latin.
// Keys are lowercase; casing is restored automatically. Note the two soft
// letters written with a combining acute (t + U+0301, d + U+0301) as well as
// their precomposed caron variants.
const ETYM_TO_LATIN = [
  // vowels
  ['å', 'a'],
  ['ė', 'e'],
  ['ę', 'e'],
  ['ȯ', 'o'],
  ['ų', 'u'],
  // consonants (irregular: the diacritic changes the base letter)
  ['ć', 'č'],
  ['đ', 'dž'],
  // consonants (softness dropped in standard orthography)
  ['ĺ', 'l'],
  ['ľ', 'l'],
  ['ń', 'n'],
  ['ŕ', 'r'],
  ['ť', 't'],
  ['t́', 't'],
  ['ď', 'd'],
  ['d́', 'd'],
  ['ś', 's'],
  ['ź', 'z'],
];

// Standard Latin → standard Cyrillic (normative transliteration table).
// Digraphs must be tried before single letters, hence the length sort below.
const LATIN_TO_CYRILLIC = [
  ['dž', 'дж'],
  ['lj', 'љ'],
  ['nj', 'њ'],
  ['a', 'а'],
  ['b', 'б'],
  ['c', 'ц'],
  ['č', 'ч'],
  ['d', 'д'],
  ['e', 'е'],
  ['ě', 'є'],
  ['f', 'ф'],
  ['g', 'г'],
  ['h', 'х'],
  ['i', 'и'],
  ['j', 'ј'],
  ['k', 'к'],
  ['l', 'л'],
  ['m', 'м'],
  ['n', 'н'],
  ['o', 'о'],
  ['p', 'п'],
  ['r', 'р'],
  ['s', 'с'],
  ['š', 'ш'],
  ['t', 'т'],
  ['u', 'у'],
  ['v', 'в'],
  ['y', 'ы'],
  ['z', 'з'],
  ['ž', 'ж'],
];

function byLengthDesc(pairs) {
  return [...pairs].sort((a, b) => b[0].length - a[0].length);
}

const ETYM_TO_LATIN_SORTED = byLengthDesc(ETYM_TO_LATIN);
const LATIN_TO_CYRILLIC_SORTED = byLengthDesc(LATIN_TO_CYRILLIC);

function isUpper(ch) {
  return ch !== ch.toLowerCase() && ch === ch.toUpperCase();
}

function restoreCase(sourceSegment, target) {
  if (isUpper(sourceSegment[0])) {
    return target.charAt(0).toUpperCase() + target.slice(1);
  }
  return target;
}

// Apply an ordered, case-insensitive replacement map. Unmatched characters
// (spaces, punctuation, letters absent from the map) pass through unchanged.
function applyMap(input, sortedPairs) {
  let out = '';
  let i = 0;
  while (i < input.length) {
    let matched = false;
    for (const [from, to] of sortedPairs) {
      const segment = input.substr(i, from.length);
      if (segment.toLowerCase() === from) {
        out += restoreCase(segment, to);
        i += from.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      out += input[i];
      i += 1;
    }
  }
  return out;
}

export function etymToStandardLatin(text) {
  return applyMap(text, ETYM_TO_LATIN_SORTED);
}

export function etymToStandardCyrillic(text) {
  return applyMap(etymToStandardLatin(text), LATIN_TO_CYRILLIC_SORTED);
}
