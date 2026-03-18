# 3.1. Phonemic Inventory

Interslavic is neither a national language, nor does it attempt to emulate one.
Instead, it is based on twelve national languages, each with its own phonology and orthography tailored to fit its particular characteristics.
In general, the further South one goes in the Slavic world, the smaller the phoneme inventory becomes.
Both spoken and written Interslavic SHALL aim to occupy the middle ground among these languages as much as possible.

A high number of phonemes makes intuitive writing and pronunciation harder for speakers accustomed to fewer phonemes.
A low number, conversely, makes it harder to map a character or sound to an equivalent in one's own language, which has a negative effect on intelligibility.
For example, the ideal pronunciation of the word for "five" would be something like :ipa[[pjætʲ]].
If written as :isv[pęt́], a Russian speaker can easily recognize their own _пять_, a Serb their own _pet_, and a Pole their own _pięć_; but a Serb has no way of knowing when their own :isv[e] and :isv[t] correspond to :isv[ę] and :isv[t́] without consulting a dictionary.
On the other hand, the simplified form :isv[pet] could be misread as Russian _петь_ "to sing" or Polish _pet_ "cigarette butt."

To resolve this dilemma, Interslavic has a **basic set** of phonemes present in all or the vast majority of Slavic languages, more or less with the same phonetic values.
In addition, Interslavic has a set of **optional (etymological) phonemes** that connect directly to Old Church Slavonic and reflect particular phonetic distinctions between individual languages.
These optional phonemes MAY be written by means of the Interslavic etymological alphabet (formerly known as _Naučny Medžuslovjansky_).

---

## 3.1.1. Vowels

### 3.1.1.1. Core Vowel Phonemes (7)

Basic Interslavic has **seven vowel phonemes**.
Five of them — :ipa[/a/], :ipa[/e/], :ipa[/i/], :ipa[/o/], :ipa[/u/] — have a relatively uniform pronunciation across speakers and are mandatory in all registers.
The remaining two — :ipa[/ě/] and :ipa[/y/] — have a pronunciation that may differ between speakers.

The following table lists the core vowels with their canonical IPA values and permitted allophonic realizations:

| Grapheme (Latin) | Grapheme (Cyrillic) | IPA (canonical) | Allophonic range | Example | Gloss |
|---|---|---|---|---|---|
| :latn[a] | :cyrl[а] | :ipa[/a/] | :ipa[[a]] | :isv[mama] | mother |
| :latn[e] | :cyrl[е] | :ipa[/e/] | :ipa[[e]], :ipa[[ɛ]] | :isv[meso] | meat |
| :latn[i] | :cyrl[и] | :ipa[/i/] | :ipa[[i]] | :isv[mi] | we |
| :latn[o] | :cyrl[о] | :ipa[/o/] | :ipa[[o]] | :isv[dom] | house |
| :latn[u] | :cyrl[у] | :ipa[/u/] | :ipa[[u]] | :isv[ruka] | hand |
| :latn[ě] | :cyrl[ѣ] | :ipa[/ě/] | :ipa[[jɛ]], :ipa[[ʲe]], :ipa[[e]], :ipa[[i]] | :isv[rěka] | river |
| :latn[y] | :cyrl[ы] | :ipa[/y/] | :ipa[[ɨ]], :ipa[[i]], :ipa[[ɪ]] | :isv[syn] | son |

:::caution[Unverified Content]
The claim that /ě/ MAY be realized as [i] in flavourised forms is not supported by the source material. The source describes /ě/ as softening preceding consonants or being preceded by `j`, but does not mention an [i] realization.
:::

**Notes on :ipa[/ě/]:** This phoneme is realized differently across the Slavic dialect continuum.
East Slavic speakers typically pronounce it :ipa[[jɛ]] or :ipa[[ʲe]]; South Slavic speakers (especially Serbian/Croatian) as :ipa[[e]]; in some flavourised forms it MAY be realized as :ipa[[i]].
The phoneme :ipa[/ě/] MUST always follow a hard consonant or :ipa[/c/] (see §3.1.2.3).

**Notes on :ipa[/y/]:** The pronunciation of :ipa[/y/] MAY be :ipa[[ɨ]], :ipa[[i]], or :ipa[[ɪ]], or anything in between.
In South Slavic and Ukrainian, :ipa[/i/] and :ipa[/y/] have merged into one vowel; substituting all occurrences of :isv[y] with :isv[i] is an acceptable simplification in written Interslavic.
The phoneme :ipa[/y/] MUST NOT follow a soft consonant, appear word-initially, or appear after a vowel (see §3.1.2.3).

### 3.1.1.2. Optional (Etymological) Vowel Phonemes (5)

In addition to the seven core vowels, Interslavic has **five optional vowels** that belong to the etymological register.
Their diacritical marks are not written in the standard (basic) orthography; they SHALL only appear in etymological-register texts.

:::caution[Unverified Content]
The canonical IPA `/ɛ̃/` for `ę` in the table below uses a nasal vowel symbol, but the source explicitly states that `ę` is "NOT pronounced as nasal vowels like in Polish." This contradicts both the source and the note on /ę/ later in this document (which also says "NOT a nasal vowel").
:::

| Grapheme (Latin) | Grapheme (Cyrillic) | IPA (canonical) | Relationship to standard | Example | Gloss |
|---|---|---|---|---|---|
| :latn[å] | :cyrl[а̊] | :ipa[/å/] | pronounced as :isv[o] in flavourised forms | :isv[tråva] | grass |
| :latn[ė] | :cyrl[ė] | :ipa[/ə/] | fleeting vowel; corresponds to :isv[e] when pronounced | :isv[pes] (nom.) / :isv[p**ė**s] (etym.) | dog |
| :latn[ę] | :cyrl[ѧ] | :ipa[/ɛ̃/] ~ :ipa[/ʲæ/] | pronounced as :isv[ja] in flavourised forms; as :isv[e] in simplified forms | :isv[pęť] | five |
| :latn[ȯ] | :cyrl[ȯ] | :ipa[/ə/] | fleeting vowel; corresponds to :isv[e] when pronounced | :isv[son] (nom.) / :isv[s**ȯ**n] (etym.) | dream |
| :latn[ų] | :cyrl[ѫ] | :ipa[/ʊ/] | pronounced as :isv[u]; in flavourised forms indistinguishable from :isv[u] | :isv[rųka] | hand |

**Notes on :ipa[/ę/]:** Historically, :ipa[/ę/] represents the Proto-Slavic front nasal vowel \*ę.
In modern Interslavic it is NOT a nasal vowel but is pronounced approximately :ipa[[ʲæ]] — intermediate between :ipa[[a]] and :ipa[[e]], with palatalization of the preceding consonant.
It is also acceptable to pronounce it :ipa[[ʲa]] (analogous to Russian _я_), :ipa[[ʲɛ]] (analogous to Czech _ě_), or simply :ipa[[e]].
In simplified Interslavic, :isv[ę] is written and pronounced as :isv[e]; however, in the etymological register, :isv[ę] and :isv[e] are distinct: e.g., _česť_ "honour" vs. _čęsť_ "part/portion."

**Notes on :ipa[/ų/]:** Historically, :ipa[/ų/] represents the Proto-Slavic back nasal vowel \*ǫ.
In modern Interslavic it is NOT a nasal vowel but is pronounced :ipa[[ʊ]] — a sound intermediate between :ipa[[u]] and :ipa[[o]].
It is also acceptable to pronounce it simply as :ipa[[u]], making no distinction between :isv[ų] and :isv[u] in speech.
The Cyrillic etymological form uses the Old Church Slavonic letter **Ѫѫ** (_jus bolšoj_).

**Notes on :ipa[/å/]:** This vowel MUST be preceded by a liquid consonant (:isv[r] or :isv[l]) and followed by a consonant.
It never occurs word-initially or after a vowel.
In flavourised Interslavic it is written and pronounced as :isv[o].

:::caution[Unverified Content]
The vowel feature matrix below is not present in the source material. The distinctive-feature classifications (High, Back, Round, Nasal) are an editorial elaboration not found in the original phonology description.
:::

### 3.1.1.3. Vowel Phoneme Feature Matrix

The following matrix covers all twelve vowels (core + optional) with their distinctive features:

| Phoneme | High | Back | Round | Nasal (historical) | Notes |
|---|---|---|---|---|---|
| :ipa[/a/] | − | − | − | − | open central |
| :ipa[/e/] | − | − | − | − | mid front |
| :ipa[/i/] | + | − | − | − | high front |
| :ipa[/o/] | − | + | + | − | mid back |
| :ipa[/u/] | + | + | + | − | high back |
| :ipa[/ě/] | ±  | − | − | − | variable; front |
| :ipa[/y/] | + | + | − | − | high back unrounded |
| :ipa[/å/] | − | + | + | − | optional; mid-back |
| :ipa[/ė/] | − | − | − | − | optional; schwa-like; fleeting |
| :ipa[/ę/] | − | − | − | + (hist.) | optional; front, historically nasal |
| :ipa[/ȯ/] | − | + | + | − | optional; mid-back; fleeting |
| :ipa[/ų/] | + | + | + | + (hist.) | optional; high back, historically nasal |

:::caution[Unverified Content]
This systematic allophonic variation table is not present in the source material. The source provides general guidance that "pronunciation of most sounds is variable, depending on the nationality of the speaker" and notes some variation on the "open/closed and front/back" scale, but does not enumerate per-vowel allophonic ranges as presented here.
:::

### 3.1.1.4. Allophonic Variation of Core Vowels

Interslavic permits the following allophonic variation in natural speech:

- **:ipa[/a/]**: realized uniformly as :ipa[[a]] across all positions.
- **:ipa[/e/]**: MAY be realized as :ipa[[e]] or :ipa[[ɛ]]; the more open realization :ipa[[ɛ]] is characteristic of South Slavic speakers.
- **:ipa[/i/]**: realized uniformly as :ipa[[i]]; in unstressed syllables MAY reduce toward :ipa[[ɪ]].
:::caution[Unverified Content]
The specific claim that South Slavic speakers realize /o/ as [ɔ] is not stated in the source material. The source mentions general variation on the "open/closed" scale but does not attribute [ɔ] to South Slavic speakers specifically.
:::

- **:ipa[/o/]**: realized uniformly as :ipa[[o]]; South Slavic speakers MAY realize it as :ipa[[ɔ]].
- **:ipa[/u/]**: realized uniformly as :ipa[[u]].
:::caution[Unverified Content]
The realization of /ě/ as [i] is not mentioned in the source material. The source describes /ě/ as producing a `je`-like sound or softening the preceding consonant, but does not list [i] as an allophone.
:::

- **:ipa[/ě/]**: MAY be realized as :ipa[[jɛ]], :ipa[[ʲe]], :ipa[[e]], or :ipa[[i]] (after soft consonants in certain dialects). All realizations are equally correct. The realization :ipa[[i]] occurs in certain South Slavic-flavoured forms.
- **:ipa[/y/]**: MAY be realized as :ipa[[ɨ]], :ipa[[i]], or :ipa[[ɪ]]. Speakers whose native language does not distinguish :ipa[/i/] from :ipa[/y/] MAY merge both to :ipa[[i]].

:::caution[Unverified Content]
The minimal pairs below are not present in the source material and some are questionable: `dum` ("thought") is not a standard ISV form (the word is `duma`); `roka` ("hand, dial.") is not standard ISV (the standard form is `ruka`); `mest` as gen.pl. of "place" is unattested.
:::

### 3.1.1.5. Minimal Pairs for Vowel Contrasts

The following minimal pairs demonstrate contrastive vowel distinctions in core Interslavic:

| Pair | Latin | Gloss 1 | Gloss 2 |
|---|---|---|---|
| :ipa[/a/] ~ :ipa[/e/] | :isv[pas] / :isv[pes] | belt | dog |
| :ipa[/i/] ~ :ipa[/y/] | :isv[biti] / :isv[byti] | to beat | to be |
| :ipa[/o/] ~ :ipa[/u/] | :isv[dom] / :isv[dum] | house | thought |
| :ipa[/e/] ~ :ipa[/ě/] | :isv[mest] / :isv[měst] | place (gen.pl.) | towns (gen.pl.) |
| :ipa[/a/] ~ :ipa[/o/] | :isv[raka] / :isv[roka] | crayfish | hand (dial.) |

:::info[TODO: Committee Input Needed]
The minimal pair table above requires verification and expansion by the committee. Particular attention should be paid to /ě/ ~ /e/ contrasts and /y/ ~ /i/ contrasts in attested Interslavic lexical items.
:::

### 3.1.1.6. Syllabic Consonants r and ŕ

Interslavic has syllabic :ipa[/r/] and :ipa[/ŕ/] (the latter belonging to the optional etymological set).
A consonant is syllabic when it is **preceded by a consonant** and **not followed by a vowel**.
In this position, :ipa[/r/] and :ipa[/ŕ/] function as syllabic nuclei and are pronounced with a preceding schwa: :ipa[[ər]] and :ipa[[ʲər]] respectively.

| Latin | Cyrillic | IPA | Gloss |
|---|---|---|---|
| :latn[trg] | :cyrl[трг] | :ipa[[tərg]] | market |
| :latn[cukr] | :cyrl[цукр] | :ipa[[ʦukər]] | sugar |

:::caution[Unverified Content]
The examples `pŕvy`, `cŕkòv`, and `čŕv` below are not in the source material. The source provides only `trg`, `mŕtvy`, and `cukr` as syllabic-r examples.
:::

| Latin | Cyrillic | IPA | Gloss |
|---|---|---|---|
| :latn[pŕvy] | :cyrl[пŕвы] | :ipa[[pʲərvɪ]] | first |
| :latn[cŕkòv] | :cyrl[цŕков] | :ipa[[ʦʲərkov]] | church |
| :latn[čŕv] | :cyrl[чŕв] | :ipa[[ʧʲərv]] | worm |

:::caution[Unverified Content]
The discussion of Proto-Slavic syllabic l/ľ, the `òl` representation, the examples `vòlk`/`pòlk`/`žòlty`, and the claim about East Slavic reflexes of syllabic r are not present in the source material. The source only mentions syllabic `r` and `ŕ` with examples `trg`, `cukr`, and `mŕtvy`.
:::

Proto-Slavic had four syllabic consonants: hard :ipa[/r/], soft :ipa[/ŕ/], hard :ipa[/l/], and soft :ipa[/ľ/].
In modern Interslavic, syllabic :ipa[/l/] is no longer used; the sequence that would have been syllabic :ipa[/l/] is instead represented as :isv[òl] (Latin) / :cyrl[ол] (Cyrillic) with the optional fleeting-vowel notation :isv[ò]:

| Latin | Cyrillic | Gloss |
|---|---|---|
| :latn[vòlk] | :cyrl[волк] | wolf |
| :latn[pòlk] | :cyrl[полк] | regiment |
| :latn[žòlty] | :cyrl[жолты] | yellow |

Syllabic :ipa[/r/] is attested in Czech, Slovak, Serbo-Croatian, Slovene, and Macedonian, justifying its retention in Interslavic.
The hard/soft distinction for syllabic :ipa[/r/] is supported by East Slavic reflexes: hard syllabic :ipa[/r/] corresponds to Russian _ор_, while soft syllabic :ipa[/r/] corresponds to Russian _ер_ or _ёр_.

---

## 3.1.2. Consonants

### 3.1.2.1. Core Consonant Phonemes (23)

:::caution[Unverified Content]
The place-and-manner table below is missing `nj` /nʲ/, which is one of the "2 palatalised alveolars" counted in the 23 core consonants. Additionally, the source lists `ć` /t͡ɕ/ and `đ` /d͡ʑ/ among the soft consonants, but they do not appear in either the core or optional consonant tables in this document.
:::

Interslavic has **23 mandatory consonant phonemes**, including 3 affricates and 2 palatalised alveolars, with a relatively fixed pronunciation.
The table below organizes them by place and manner of articulation:

| | Labial | Dental/Alveolar | Postalveolar | Palatal | Velar | Glottal |
|---|---|---|---|---|---|---|
| **Stop** (voiceless) | :isv[p] :ipa[/p/] | :isv[t] :ipa[/t/] | | | :isv[k] :ipa[/k/] | |
| **Stop** (voiced) | :isv[b] :ipa[/b/] | :isv[d] :ipa[/d/] | | | :isv[g] :ipa[/g/] | |
| **Affricate** (voiceless) | | :isv[c] :ipa[/t͡s/] | :isv[č] :ipa[/t͡ʃ/] | | | |
| **Affricate** (voiced) | | | :isv[dž] :ipa[/d͡ʒ/] | | | |
| **Fricative** (voiceless) | :isv[f] :ipa[/f/] | :isv[s] :ipa[/s/] | :isv[š] :ipa[/ʃ/] | | :isv[h] :ipa[/x/] | |
| **Fricative** (voiced) | :isv[v] :ipa[/v/] | :isv[z] :ipa[/z/] | :isv[ž] :ipa[/ʒ/] | | | |
| **Nasal** | :isv[m] :ipa[/m/] | :isv[n] :ipa[/n/] | | | | |
| **Lateral** | | :isv[l] :ipa[/l/] | | :isv[lj] :ipa[/lʲ/] | | |
| **Trill/Tap** | | :isv[r] :ipa[/r/] | | | | |
| **Approximant** | | | | :isv[j] :ipa[/j/] | | |

**Cyrillic equivalents of core consonants:**

| Latin | Cyrillic | IPA | Latin | Cyrillic | IPA |
|---|---|---|---|---|---|
| :latn[p] | :cyrl[п] | :ipa[/p/] | :latn[b] | :cyrl[б] | :ipa[/b/] |
| :latn[t] | :cyrl[т] | :ipa[/t/] | :latn[d] | :cyrl[д] | :ipa[/d/] |
| :latn[k] | :cyrl[к] | :ipa[/k/] | :latn[g] | :cyrl[г] | :ipa[/g/] |
| :latn[f] | :cyrl[ф] | :ipa[/f/] | :latn[v] | :cyrl[в] | :ipa[/v/] |
| :latn[s] | :cyrl[с] | :ipa[/s/] | :latn[z] | :cyrl[з] | :ipa[/z/] |
| :latn[š] | :cyrl[ш] | :ipa[/ʃ/] | :latn[ž] | :cyrl[ж] | :ipa[/ʒ/] |
| :latn[h] | :cyrl[х] | :ipa[/x/] | :latn[m] | :cyrl[м] | :ipa[/m/] |
| :latn[n] | :cyrl[н] | :ipa[/n/] | :latn[l] | :cyrl[л] | :ipa[/l/] |
| :latn[r] | :cyrl[р] | :ipa[/r/] | :latn[j] | :cyrl[й]/​:cyrl[ј] | :ipa[/j/] |
| :latn[c] | :cyrl[ц] | :ipa[/t͡s/] | :latn[č] | :cyrl[ч] | :ipa[/t͡ʃ/] |
| :latn[dž] | :cyrl[џ] | :ipa[/d͡ʒ/] | :latn[lj] | :cyrl[љ] | :ipa[/lʲ/] |
| :latn[nj] | :cyrl[њ] | :ipa[/nʲ/] | | | |

### 3.1.2.2. Optional (Etymological) Consonant Phonemes (7)

In addition to the 23 core consonants, Interslavic has **seven optional consonant phonemes** available in the etymological register.
These phonemes are normally written as their core equivalents in standard orthography; the etymological letters are used only when the distinction is phonologically significant at the etymological level.

| Latin (etym.) | Cyrillic (etym.) | IPA | Standard equiv. | Example (etym.) | Example (std.) | Gloss |
|---|---|---|---|---|---|---|
| :latn[ŕ] | :cyrl[рь] | :ipa[/rʲ/] | :isv[r] | :isv[pŕvy] | :isv[prvy] | first |
| :latn[ľ] | :cyrl[љ] | :ipa[/lʲ/] | :isv[lj] | :isv[ovaľny] | :isv[ovaljny] | oval |
| :latn[ń] | :cyrl[нь] | :ipa[/nʲ/] | :isv[nj] | :isv[hođeńje] | :isv[hođenje] | going |
| :latn[ť] | :cyrl[ть] | :ipa[/tʲ/] | :isv[t] | :isv[pamęť] | :isv[pamęt] | memory |
| :latn[ď] | :cyrl[дь] | :ipa[/dʲ/] | :isv[d] | :isv[gvozď] | :isv[gvozd] | nail |
| :latn[ś] | :cyrl[сь] | :ipa[/sʲ/] | :isv[s] | :isv[gųś] | :isv[gųs] | goose |
| :latn[ź] | :cyrl[зь] | :ipa[/zʲ/] | :isv[z] | :isv[vitęź] | :isv[vitęz] | hero |

:::caution[Unverified Content]
The detailed distribution rules below for etymological consonants (when to use `ľ` vs. `lj`, `ń` vs. `nj`, `ŕ` vs. `rj`, etc.) go beyond what the source material specifies. The source states only that `ľ` and `ń` are used for writing `lj` and `nj` before `j` to avoid gemination, and that the acute-accent letters replace Cyrillic soft sign. The specific rules about stem-final contexts and morpheme boundaries are not in the source.
:::

**Notes on usage of etymological consonants:**

The core digraphs :isv[lj] and :isv[nj] are used where the softness is present in **both** standard and etymological Interslavic (i.e., recognized across most Slavic languages).
The letters :isv[ľ], :isv[ń] are used only where the softness appears **exclusively** in the etymological register.

Specifically:
- :isv[nj] (standard) is used in most positions: e.g., :isv[konj] (horse), :isv[banja] (bath);
- :isv[ń] (etymological) is used primarily before :isv[j]: e.g., :isv[hođeńje] (going), :isv[iměńje] (estate).
- :isv[rj] (standard) appears before vowels: e.g., :isv[morje] (sea), :isv[burja] (storm);
- :isv[ŕ] (etymological) appears before consonants and word-finally, and also before vowels in inflected forms where the stem-final soft :ipa[/r/] is preserved: e.g., :isv[lěkaŕ] (doctor, nom.) → :isv[lěkaŕa] (gen.).
- :isv[ľ] (etymological) appears before :isv[j] and at morpheme boundaries when a hard stem-final :ipa[/l/] is softened by a suffix: e.g., :isv[siľny] (strong) from :isv[sila] (force); :isv[nasiľje] (violence).

The etymological consonants :isv[ť], :isv[ď], :isv[ś], :isv[ź] are written in all positions where the corresponding soft sounds occur (word-finally, before consonants, before :isv[j], and before vowels):
e.g., :isv[gosť] (guest), :isv[ryś] (lynx), :isv[gvozď] (nail), :isv[ťma] (darkness).

The acute-accent letters (:isv[ť], :isv[ď], :isv[ś], :isv[ź], :isv[ŕ]) in the etymological Latin orthography replace the Cyrillic soft sign :cyrl[ь], which was originally an ultrashort vowel :ipa[[ĭ]] before becoming a softening marker.

### 3.1.2.3. Hard vs. Soft Consonant Distinction

Like all Slavic languages, Interslavic MUST distinguish between **hard** (plain) and **soft** (palatalised) consonants.
This distinction is binary and phonologically significant.

**Hard consonants:**
- Labials: :isv[p] :ipa[/p/], :isv[b] :ipa[/b/], :isv[f] :ipa[/f/], :isv[v] :ipa[/v/], :isv[m] :ipa[/m/]
- Hard dentals/alveolars: :isv[t] :ipa[/t/], :isv[d] :ipa[/d/], :isv[s] :ipa[/s/], :isv[z] :ipa[/z/], :isv[n] :ipa[/n/], :isv[r] :ipa[/r/], :isv[l] :ipa[/l/]
- Velars: :isv[k] :ipa[/k/], :isv[g] :ipa[/g/], :isv[h] :ipa[/x/]

**Soft consonants:**
- Postalveolars: :isv[š] :ipa[/ʃ/], :isv[ž] :ipa[/ʒ/], :isv[č] :ipa[/t͡ʃ/], :isv[dž] :ipa[/d͡ʒ/]
- Soft dentals/alveolars (core): :isv[lj] :ipa[/lʲ/], :isv[nj] :ipa[/nʲ/]
- Soft dentals/alveolars (etymological): :isv[ŕ] :ipa[/rʲ/], :isv[ť] :ipa[/tʲ/], :isv[ď] :ipa[/dʲ/], :isv[ś] :ipa[/sʲ/], :isv[ź] :ipa[/zʲ/]
- Palatal approximant: :isv[j] :ipa[/j/]

**Special status of :isv[c] :ipa[/t͡s/]:**
The affricate :isv[c] :ipa[[t͡s]] is pronounced hard phonetically, but it **behaves like a soft consonant morphologically** — i.e., it conditions the same morphophonemic alternations that soft consonants trigger.
Its voiced counterpart :ipa[[d͡z]] does not occur in Interslavic.

**Softening:**
Softening is the process of adding the feature [+palatal] to a consonant, resulting in a more palatal pronunciation (marked in IPA as :ipa[[ʲ]]).
In Interslavic, only :isv[lj] and :isv[nj] are mandatory soft consonants; the etymological set adds :isv[ť], :isv[ď], :isv[ś], :isv[ź], :isv[ŕ].

East Slavic speakers are likely to pronounce soft consonants as softened (palatalised) dental or alveolar consonants :ipa[[Cʲ]]; West Slavic speakers more often as fully palatal consonants :ipa[[C̟]].
Both pronunciations are equally correct, although the East Slavic realization is probably easier to understand for South Slavic speakers.

**Soft consonants before vowels:**
Before :isv[i], :isv[ě], :isv[ę], :isv[ė], and :isv[ŕ], a hard consonant MAY be softened or palatalised.
For example, :isv[buditi] (to wake) may be pronounced :ipa[[buditi]], :ipa[[budʲitʲi]], or :ipa[[buɟici]].

The affricate pair :isv[ć] :ipa[/t͡ɕ/] and :isv[đ] :ipa[/d͡ʑ/] deserve special mention: these are the **iotated counterparts** of :isv[t] and :isv[d] respectively, and are of etymological origin.
In standard orthography they are written and pronounced as :isv[č] and :isv[dž]; the distinction between :isv[ć]/:isv[č] and :isv[đ]/:isv[dž] is etymological only.

:::caution[Unverified Content]
The consonant feature matrix below is not present in the source material. The distinctive-feature classifications are an editorial elaboration. Note also that it lists 30 phonemes but should account for `ć` and `đ` which the source includes among soft consonants.
:::

### 3.1.2.4. Consonant Phoneme Feature Matrix

The following matrix covers all 30 consonants (23 core + 7 optional) with their primary distinctive features:

| Phoneme | IPA | Voice | Nasal | Lateral | Stop | Fric. | Affric. | Palat. | Place |
|---|---|---|---|---|---|---|---|---|---|
| :isv[p] | :ipa[/p/] | − | − | − | + | − | − | − | labial |
| :isv[b] | :ipa[/b/] | + | − | − | + | − | − | − | labial |
| :isv[f] | :ipa[/f/] | − | − | − | − | + | − | − | labiodental |
| :isv[v] | :ipa[/v/] | + | − | − | − | + | − | − | labiodental |
| :isv[m] | :ipa[/m/] | + | + | − | − | − | − | − | labial |
| :isv[t] | :ipa[/t/] | − | − | − | + | − | − | − | dental |
| :isv[d] | :ipa[/d/] | + | − | − | + | − | − | − | dental |
| :isv[s] | :ipa[/s/] | − | − | − | − | + | − | − | alveolar |
| :isv[z] | :ipa[/z/] | + | − | − | − | + | − | − | alveolar |
| :isv[n] | :ipa[/n/] | + | + | − | − | − | − | − | alveolar |
| :isv[r] | :ipa[/r/] | + | − | − | − | − | − | − | alveolar |
| :isv[l] | :ipa[/l/] | + | − | + | − | − | − | − | alveolar |
| :isv[c] | :ipa[/t͡s/] | − | − | − | − | − | + | − | alveolar |
| :isv[k] | :ipa[/k/] | − | − | − | + | − | − | − | velar |
| :isv[g] | :ipa[/g/] | + | − | − | + | − | − | − | velar |
| :isv[h] | :ipa[/x/] | − | − | − | − | + | − | − | velar |
| :isv[š] | :ipa[/ʃ/] | − | − | − | − | + | − | + | postalveolar |
| :isv[ž] | :ipa[/ʒ/] | + | − | − | − | + | − | + | postalveolar |
| :isv[č] | :ipa[/t͡ʃ/] | − | − | − | − | − | + | + | postalveolar |
| :isv[dž] | :ipa[/d͡ʒ/] | + | − | − | − | − | + | + | postalveolar |
| :isv[lj] | :ipa[/lʲ/] | + | − | + | − | − | − | + | palatal |
| :isv[nj] | :ipa[/nʲ/] | + | + | − | − | − | − | + | palatal |
| :isv[j] | :ipa[/j/] | + | − | − | − | − | − | + | palatal |
| :isv[ŕ] | :ipa[/rʲ/] | + | − | − | − | − | − | + | alveolar |
| :isv[ľ] | :ipa[/lʲ/] | + | − | + | − | − | − | + | palatal |
| :isv[ń] | :ipa[/nʲ/] | + | + | − | − | − | − | + | palatal |
| :isv[ť] | :ipa[/tʲ/] | − | − | − | + | − | − | + | dental |
| :isv[ď] | :ipa[/dʲ/] | + | − | − | + | − | − | + | dental |
| :isv[ś] | :ipa[/sʲ/] | − | − | − | − | + | − | + | alveolar |
| :isv[ź] | :ipa[/zʲ/] | + | − | − | − | + | − | + | alveolar |

:::caution[Unverified Content]
The consonant minimal pairs below are not in the source material. Several are questionable: `zila` ("vein, alt.") is not a standard ISV form (the word is `žila`); `žum` ("buzz") is unattested in ISV; `njonja` is glossed as "(name)" which is not a meaningful minimal pair; `tma`/`ťma` are the same word in standard vs. etymological spelling, not a true minimal pair.
:::

### 3.1.2.5. Minimal Pairs for Consonant Contrasts

The following minimal pairs demonstrate key consonant contrasts, including hard/soft distinctions:

| Contrast | Pair (Latin) | Gloss 1 | Gloss 2 |
|---|---|---|---|
| :ipa[/p/] ~ :ipa[/b/] | :isv[pas] / :isv[bas] | belt | bass |
| :ipa[/t/] ~ :ipa[/d/] | :isv[tam] / :isv[dam] | there | I will give |
| :ipa[/s/] ~ :ipa[/z/] | :isv[sila] / :isv[zila] | force | vein (alt.) |
| :ipa[/ʃ/] ~ :ipa[/ʒ/] | :isv[šum] / :isv[žum] | noise | buzz |
| :ipa[/l/] ~ :ipa[/lʲ/] | :isv[lěs] / :isv[ljud] | forest | people |
| :ipa[/n/] ~ :ipa[/nʲ/] | :isv[nos] / :isv[njonja] | nose | (name) |
| :ipa[/k/] ~ :ipa[/g/] | :isv[kora] / :isv[gora] | bark | mountain |
| :ipa[/t͡s/] ~ :ipa[/t͡ʃ/] | :isv[car] / :isv[čar] | tsar | charm |
| :ipa[/t/] ~ :ipa[/tʲ/] | :isv[tma] / :isv[ťma] | darkness (std.) | darkness (etym.) |

:::info[TODO: Committee Input Needed]
The minimal pair table for consonant contrasts, particularly for etymological soft consonants (ť, ď, ś, ź, ŕ vs. their plain counterparts), requires verification and expansion with attested Interslavic lexical items.
:::

---

## 3.1.3. The Hard/Soft Alternation in Context

The table below summarizes the relationship between **softened**, **palatalised**, and **iotated** consonant forms — demonstrating the three distinct processes that produce palatal consonants in Interslavic.
Optional/etymological phonemes are indicated with *(etym.)*:

| Base | Softened | Iotated (standard) | Notes |
|---|---|---|---|
| :isv[l] | :isv[lj] | :isv[lj] | softening = iotation for :ipa[/l/] |
| :isv[n] | :isv[nj] | :isv[nj] | softening = iotation for :ipa[/n/] |
| :isv[r] | :isv[ŕ] *(etym.)* | :isv[rj] | softening ≠ iotation in standard |
| :isv[t] | :isv[ť] *(etym.)* | :isv[č] / :isv[ć] *(etym.)* | iotation yields postalveolar |
| :isv[d] | :isv[ď] *(etym.)* | :isv[dž] / :isv[đ] *(etym.)* | iotation yields postalveolar |
| :isv[s] | :isv[ś] *(etym.)* | :isv[š] | iotation yields postalveolar |
| :isv[z] | :isv[ź] *(etym.)* | :isv[ž] | iotation yields postalveolar |
| :isv[k] | — | :isv[č] | palatalisation only |
| :isv[g] | — | :isv[ž] | palatalisation only |
| :isv[h] | — | :isv[š] | palatalisation only |
| :isv[p] | — | :isv[pj] | labials do not palatalise |
| :isv[b] | — | :isv[bj] | labials do not palatalise |
| :isv[m] | — | :isv[mj] | labials do not palatalise |
| :isv[v] | — | :isv[vj] | labials do not palatalise |

:::caution[Unverified Content]
The notes "palatalisation only" for k, g, h in the table above are misleading. The source describes k+j→č, g+j→ž, h+j→š as iotation (not merely palatalisation). The source treats palatalisation and iotation as producing the same result for velars, but labels both processes explicitly.
:::

For the full morphophonemic alternation rules (palatalisation, iotation, the o→e rule, y→i/e rule, fleeting vowels), see §3.3 (Morphophonemic Alternations).
