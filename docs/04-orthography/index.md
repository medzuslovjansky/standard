# Orthography and Writing Systems

## Historical Context
Over the course of its development, Interslavic and its predecessor projects have employed a wide variety of orthographic systems — including multiple Latin-based proposals, Cyrillic variants, and mixed schemes. A comprehensive archive of these historical orthographies is maintained at [Jan van Steenbergen's reference page](http://steen.free.fr/interslavic/nms.html).

The current standard recognises **two official orthographies**: a Latin alphabet and a Cyrillic alphabet. Both are fully specified, mutually transliterable, and enjoy equal normative status. Neither is derived from any single national Slavic orthography; both were designed as compromises that balance recognisability across the entire Slavic-speaking area.

## The Two Standard Orthographies
### Standard Latin Orthography
The standard Latin alphabet comprises **27 letters** — the 26 letters of the basic Latin alphabet (excluding :latn[q], :latn[w], and :latn[x], which have no native Slavic use) plus four letters with diacritics: :latn[č], :latn[ě], :latn[š], :latn[ž]. Two digraphs — :latn[dž] and :latn[lj]/(:latn[nj]) — are treated as single phonemic units.

The full specification of the Latin orthography, including letter inventory, digraphs, capitalization rules, and fallback encodings, is given in [**Standard Latin and Cyrillic Orthography**](./02-latin.md).

### Standard Cyrillic Orthography
The standard Cyrillic alphabet comprises **29 letters**, drawing on a pan-Slavic selection that avoids exclusive dependence on any single national Cyrillic tradition. It includes letters common to most Cyrillic-using Slavic languages, supplemented by :cyrl[є] (from Ukrainian), :cyrl[ы] (from Russian/Belarusian), and :cyrl[ј] (from Serbian/Macedonian).

The full specification of the Cyrillic orthography is given alongside the Latin in [**Standard Latin and Cyrillic Orthography**](./02-latin.md).

### Script Parity
The two standard orthographies are designed for **bijective transliterability**: every standard Latin text can be mechanically converted to Cyrillic and vice versa, with no loss of information. The transliteration rules are specified in [**Transliteration**](./04-transliteration.md).

All normative Interslavic texts — including this specification — SHOULD be available in both scripts. When only one script is used, neither is preferred over the other; the choice is left to the author or publisher.

## The Etymological (Scientific) Alphabet
In addition to the two standard orthographies, Interslavic defines an **optional** extended Latin alphabet known as the etymological or scientific alphabet (historically *Naučny Medžuslovjansky*). This alphabet adds 13 diacritical letters to the standard Latin inventory, encoding distinctions inherited from Proto-Slavic and Old Church Slavonic that have been neutralised in the standard spelling.

The etymological alphabet is **not a separate language or dialect**. It is the same Interslavic, written with additional diacritics layered on top of the standard Latin orthography. Any etymological text becomes valid standard text when the diacritics are stripped.

Its primary uses are:

- **Dictionaries and grammars** — conveying etymological information that helps learners connect Interslavic words to their cognates in individual Slavic languages;
- **Flavorization** — enabling systematic regional adaptation of Interslavic (see [**Flavorization**](../09-flavorization/index.md));
- **Linguistic analysis** — providing a more precise notation of the ideal pronunciation and historical phonology.

The etymological alphabet SHALL NOT be used as the default orthography in everyday communication. Its full specification is given in [**Etymological (Scientific) Alphabet**](./03-etymological.md).

## Spelling Conventions
Detailed rules for capitalization, punctuation, hyphenation, compound-word orthography, numeral formatting, and abbreviations are specified in [**Spelling Conventions**](./05-spelling.md).
