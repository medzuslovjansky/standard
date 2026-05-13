# Phonemic Inventory
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

## Vowels
### Core Vowel Phonemes (7)
Interslavic has **seven vowel phonemes**.
Five of them — :ipa[/a/], :ipa[/e/], :ipa[/i/], :ipa[/o/], :ipa[/u/] — have a relatively uniform pronunciation across speakers and are mandatory in all registers.
The remaining two — :ipa[/ě/] and :ipa[/y/] — have a pronunciation that may differ between speakers.

The following table lists the core vowels with their canonical IPA values and permitted allophonic realizations:

| Grapheme (Latin) | Grapheme (Cyrillic) | IPA (canonical) | Allophonic range | Example | Gloss |
|---|---|---|---|---|---|
| :latn[a] | :cyrl[а] | :ipa[/a/] | :ipa[[a]] ~ :ipa[[ä]] | :isv[mama] | mother |
| :latn[e] | :cyrl[е] | :ipa[/e/] | :ipa[[e]], :ipa[[ɛ]] | :isv[meso] | meat |
| :latn[i] | :cyrl[и] | :ipa[/i/] | :ipa[[i]] | :isv[mi] | we |
| :latn[o] | :cyrl[о] | :ipa[/o/] | :ipa[[ɔ]] | :isv[dom] | house |
| :latn[u] | :cyrl[у] | :ipa[/u/] | :ipa[[u]] | :isv[ruka] | hand |
| :latn[ě] | :cyrl[є] | :ipa[/ě/] | :ipa[[jɛ]], :ipa[[ʲe]], :ipa[[e]] | :isv[rěka] | river |
| :latn[y] | :cyrl[ы] | :ipa[/y/] | :ipa[[ɨ]], :ipa[[i]], :ipa[[ɪ]] | :isv[syn] | son |

**Notes on :ipa[/ě/]:** This phoneme represents the historical yat. Its core realization is :ipa[[jɛ]], matching the pronunciation of Ukrainian :cyrl[є]. It softens the preceding consonant, with the degree of softening left to the speaker. East Slavic speakers typically pronounce it :ipa[[jɛ]] or :ipa[[ʲe]]; South Slavic speakers (especially Serbian/Croatian) as :ipa[[e]].
The phoneme :ipa[/ě/] MUST always follow a hard consonant or :ipa[/c/] (see the relevant section).

**Notes on :ipa[/y/]:** The ideal pronunciation is :ipa[[ɨ]], as in Russian :cyrl[ы], Polish :latn[y], and Ukrainian :cyrl[и]. The realization :ipa[[ɪ]] is acceptable but too close to :ipa[[i]] to reliably maintain the contrast. The German-style :ipa[[y]] (rounded front vowel) is not found in any Slavic language and should not be used. The phoneme :isv[y] never softens the preceding consonant, which is significant for morphology (e.g., the hard/soft declension distinction: :isv[dobry] → :isv[dobrogo] vs. :isv[svěži] → :isv[svěžego]).
In South Slavic and Ukrainian, :ipa[/i/] and :ipa[/y/] have merged into one vowel; substituting all occurrences of :isv[y] with :isv[i] is an acceptable simplification in written Interslavic, though this obscures certain morphological patterns.
The phoneme :ipa[/y/] MUST NOT follow a soft consonant, appear word-initially, or appear after a vowel (see the relevant section).

### Optional (Etymological) Vowel Phonemes (5)
In addition to the seven core vowels, Interslavic has **five optional vowels** that belong to the etymological register.
Their diacritical marks are not written in the standard (basic) orthography; they SHALL only appear in etymological-register texts.

:::caution[Unverified Content]
The canonical IPA `/ɛ̃/` for `ę` in the table below uses a nasal vowel symbol, but the source explicitly states that `ę` is "NOT pronounced as nasal vowels like in Polish." This contradicts both the source and the note on /ę/ later in this document (which also says "NOT a nasal vowel").
:::

| Grapheme (Latin) | Grapheme (Cyrillic) | IPA (canonical) | Relationship to standard | Example | Gloss |
|---|---|---|---|---|---|
| :latn[å] | :cyrl[а̊] | :ipa[/ɒ/] ~ :ipa[/ɑ/] | standard equivalent is :isv[a]; pronounced as :isv[o] in Northern flavourised forms | :isv[kråva] | cow |
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
It derives from Proto-Slavic \*or and \*ol sequences.
In standard Interslavic it is written and pronounced as :isv[a] (following the South Slavic reflex).
In Northern flavourised Interslavic it may be written and pronounced as :isv[o] (following the Polish and East Slavic reflexes).
The ideal etymological pronunciation is :ipa[[ɒ]] or :ipa[[ɑ]] — intermediate between :ipa[[a]] and :ipa[[ɔ]].

:::caution[Unverified Content]
The vowel feature matrix below is not present in the source material. The distinctive-feature classifications (High, Back, Round, Nasal) are an editorial elaboration not found in the original phonology description.
:::

### Vowel Phoneme Feature Matrix
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
| :ipa[/å/] | − | + | ± | − | optional; open back; between :ipa[[a]] and :ipa[[ɔ]] |
| :ipa[/ė/] | − | − | − | − | optional; schwa-like; fleeting |
| :ipa[/ę/] | − | − | − | + (hist.) | optional; front, historically nasal |
| :ipa[/ȯ/] | − | + | + | − | optional; mid-back; fleeting |
| :ipa[/ų/] | + | + | + | + (hist.) | optional; high back, historically nasal |

:::caution[Unverified Content]
This systematic allophonic variation table is not present in the source material. The source provides general guidance that "pronunciation of most sounds is variable, depending on the nationality of the speaker" and notes some variation on the "open/closed and front/back" scale, but does not enumerate per-vowel allophonic ranges as presented here.
:::

### Allophonic Variation of Core Vowels
Interslavic permits the following allophonic variation in natural speech:

- **:ipa[/a/]**: realized uniformly as :ipa[[a]] across all positions.
- **:ipa[/e/]**: MAY be realized as :ipa[[e]] or :ipa[[ɛ]]; the more open realization :ipa[[ɛ]] is characteristic of South Slavic speakers. The pronunciation of :isv[e] is always hard — the preceding consonant is never softened. This contrasts with some northern Slavic languages (notably Russian and Polish) where the native reflex of Proto-Slavic \*e softens the preceding consonant in inherited vocabulary while remaining hard in loanwords. Interslavic makes no such distinction: :isv[e] is uniformly hard in all words regardless of origin.
- **:ipa[/i/]**: realized uniformly as :ipa[[i]], similar to the vowel in English "knee" or "beach"; in unstressed syllables MAY reduce toward :ipa[[ɪ]]. Czech speakers should note that the Interslavic :isv[i] is always the close front :ipa[[i]], not the more centralized :ipa[[ɪ]] that Czech uses for short :latn[i] and :latn[y]. Regarding softening of preceding consonants before :isv[i], standard Interslavic imposes no prescriptive rules — each speaker MAY soften or not according to their native habits.
- **:ipa[/o/]**: the standard realization is :ipa[[ɔ]] (open-mid back rounded vowel), regardless of position in the word. Pronouncing it as a close :ipa[[o]] is not recommended, as it sounds unnatural in a Slavic context.
- **:ipa[/u/]**: realized uniformly as :ipa[[u]].
- **:ipa[/ě/]**: the core realization is :ipa[[jɛ]], which matches the Ukrainian letter :cyrl[є] that represents this phoneme in Cyrillic. The phoneme softens the preceding consonant, but the degree of softening is left to the speaker's preference. For example, :isv[sědy] (grey-haired) may be pronounced :ipa[[sjɛdɨ]], :ipa[[sʲɛdɨ]], or :ipa[[ɕɛdɨ]]; :isv[tělo] (body) may be :ipa[[tjɛlɔ]], :ipa[[tʲɛlɔ]], or :ipa[[t͡sʲɛlɔ]]; :isv[dělo] (affair) may be :ipa[[djɛlɔ]], :ipa[[dʲɛlɔ]], or :ipa[[dzʲɛlɔ]]. However, the extreme Polish-style double palatalization (e.g., :ipa[[t͡ɕ]] for :isv[t] before :isv[ě]) is not recommended, as it may be confused with entirely different phonemes and impair intelligibility.
- **:ipa[/y/]**: the ideal realization is :ipa[[ɨ]] (as in Russian :cyrl[ы], Polish :latn[y], or Ukrainian :cyrl[и]). The realization :ipa[[ɪ]] is acceptable but somewhat too close to :ipa[[i]], while :ipa[[ʏ]] (sometimes attributed to certain Russian speakers) is too deep. The German :ipa[[y]] (as in :latn[über]) is not acceptable — no Slavic language uses this sound. The phoneme :isv[y] never softens the preceding consonant, which has morphological significance: e.g., :isv[dobry] → :isv[dobrogo] (hard declension), but :isv[svěži] → :isv[svěžego] (soft declension) — when the orthography is simplified by writing only :isv[i], this declension-class distinction is lost. Speakers whose native language does not distinguish :ipa[/i/] from :ipa[/y/] MAY merge both to :ipa[[i]].

:::caution[Unverified Content]
The minimal pairs below are not present in the source material and some are questionable: `dum` ("thought") is not a standard ISV form (the word is `duma`); `roka` ("hand, dial.") is not standard ISV (the standard form is `ruka`); `mest` as gen.pl. of "place" is unattested.
:::

### Minimal Pairs for Vowel Contrasts
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

### Syllabic Consonants r and ŕ
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

## Consonants
### Core Consonant Phonemes (23)
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

### Optional (Etymological) Consonant Phonemes (7)
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

### Hard vs. Soft Consonant Distinction
Like all Slavic languages, Interslavic MUST distinguish between **hard** (plain) and **soft** (palatalised) consonants.
This distinction is binary and phonologically significant.

#### Two Sources of Consonant Softness

The soft consonants :isv[lj], :isv[nj], and (in the etymological register) :isv[ŕ] can arise from two historically distinct processes, which have different reflexes across modern Slavic languages:

1. **Iotation-derived softness** (Proto-Slavic \*lj, \*nj, \*rj — consonant + \*j). This softness is reflected in **all** modern Slavic languages, both Northern and Southern. Examples: :isv[kralj] "king" (< \*korljь), :isv[polje] "field" (< \*polje), :isv[konj] "horse" (< \*konjь), :isv[morje] "sea" (< \*morje). In standard orthography these are written with the digraphs :isv[lj], :isv[nj], :isv[rj].

2. **Yer-derived softness** (Proto-Slavic \*lь, \*nь, \*rь — consonant + front yer). This softness is reflected in **Northern Slavic** languages (Russian, Polish, Czech, Slovak, etc.) but **not** in Southern Slavic (Serbian, Croatian, Slovene, etc.), where the consonant remains hard after the yer was lost. Examples: :isv[velmi]/​:isv[veĺmi] "very" (< \*velьmi; cf. Croatian _veoma_ with hard L), :isv[den]/​:isv[dėń] "day" (< \*dьnь; cf. Croatian _dan_ with hard N), :isv[kamen]/​:isv[kameń] "stone" (< \*kamy, gen. \*kamene; cf. Croatian _kamen_ with hard N).

In the etymological register (MS Plus), these two types are distinguished orthographically: iotation-derived softness uses the digraphs :isv[lj], :isv[nj], while yer-derived softness uses the háček letters :isv[ĺ] (or :isv[ľ]), :isv[ń], :isv[ŕ]. In standard orthography, yer-derived softness is simply dropped (the consonant is written hard), since Southern Slavic speakers pronounce it hard.

:::warning[Unresolved: Iotation vs. Yer-Derived Softness]
The current Interslavic orthography and dictionary are not yet fully consistent in distinguishing iotation-derived softness (present in all Slavic languages) from yer-derived softness (present only in Northern Slavic). Some entries conflate the two: for instance, :isv[bolj] appears with the iotation digraph :isv[lj], but the word derives from \*bolь (yer-softened), and Croatian/Serbian have hard L (:isv[bol]). The standard form should arguably be :isv[bol] (hard), with :isv[boĺ] in MS Plus. Similarly, :isv[velmi] should be :isv[veĺmi] in MS Plus rather than :isv[veljmi]. The athematic masculine nouns (:isv[kamenj], :isv[korenj], etc.) present the same issue — the final softness is yer-derived, not iotated, so the standard form could end in a hard consonant (:isv[kamen]) with the MS Plus form using :isv[ń] (:isv[kameń]).

The status of :isv[rj] is additionally ambiguous: unlike :isv[lj] and :isv[nj], the sequence :isv[rj] is not officially recognized as a phoneme pair by the Commission, yet it functions as one in practice (nearly all occurrences correspond to Proto-Slavic soft \*r). Whether :isv[rj] should be permitted word-finally (e.g., :isv[rybarj] vs. :isv[rybaŕ]) remains undecided.

The theoretical framework for this distinction can be stated precisely in terms of Proto-Slavic etymology:

- **Iotated consonants** (Proto-Slavic \*lj, \*nj, \*rj — consonant fused with the glide \*j) were inherently soft from the earliest reconstructable stage. The softness is independent of any adjacent yer. Examples: \*korljь → :isv[kralj], \*konjь → :isv[konj], \*morje → :isv[morje]. Crucially, even in the South Slavic languages — which lost yer-derived softness entirely — iotated softness is preserved: Croatian _kralj_, _konj_, _more_ all retain the palatalized consonant.

- **Yer-softened consonants** (Proto-Slavic \*lь, \*nь, \*rь, \*tь, \*dь, \*sь, \*zь — consonant adjacent to the front yer) acquired their softness from the yer. When the yer was lost in the "fall of the yers" (c. 10th–12th century), the softness persisted in Northern Slavic languages but was lost in most Southern Slavic languages. Examples: \*silьnъ → Russian _сильный_ (soft L) but Croatian _silan_ (hard L); \*kostь → Russian _кость_ (soft T) but Croatian _kost_ (hard T); \*dьnь → Russian _день_ (soft N) but Croatian _dan_ (hard N, with vowel change).

This asymmetry explains a key design property of Interslavic: the standard orthography writes iotated softness explicitly (with digraphs :isv[lj], :isv[nj], :isv[rj]) because it is universal across Slavic, but drops yer-derived softness entirely because it would be alien to South Slavic readers. The MS Plus register restores yer-derived softness for the benefit of Northern Slavic readers.

Known dictionary errors arising from conflation of the two types include :isv[dėnj] (the word for "day"), where the Proto-Slavic form \*dьnь indicates yer-softening, not iotation — the correct standard form should be :isv[den] (hard) with MS Plus :isv[dėń], not :isv[dėnj]. Similarly, :isv[myslj] ("thought," from \*myslь) uses the iotation digraph despite yer-derived softness — cf. Croatian _misao_ with no trace of softness, confirming that the correct standard form should be :isv[mysl] with MS Plus :isv[mysĺ].

Resolving this systematically would require auditing the dictionary to classify each instance of :isv[lj], :isv[nj], :isv[rj] by its Proto-Slavic origin and adjusting the standard and MS Plus forms accordingly.
:::

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

The affricate pair :isv[ć] :ipa[/t͡ɕ/] and :isv[đ] :ipa[/d͡ʑ/] deserve special mention: these are the **iotated counterparts** of :isv[t] and :isv[d] respectively, and are of etymological origin (Proto-Slavic \*tj and \*dj).
In standard orthography they are written and pronounced as :isv[č] and :isv[dž]; the distinction between :isv[ć]/:isv[č] and :isv[đ]/:isv[dž] is etymological only.

The MS Plus pronunciation of :isv[ć] and :isv[đ] was chosen as the midpoint of Slavic reflexes: :ipa[[t͡ɕ]] and :ipa[[d͡ʑ]], identical to the Serbo-Croatian (Shtokavian) pronunciation. These sounds are close to English "ch" and "j" respectively, but softer — produced with maximally relaxed, lowered jaw position. Unlike the other iotated consonants (\*lj, \*nj, \*rj, whose reflexes are relatively uniform across Slavic), the reflexes of Proto-Slavic \*tj and \*dj have diverged dramatically: Russian щ/ч and жд/ж, Ukrainian/Belarusian ч and дж, Czech c and z, Polish c and dz, Slovak c/ť and dz/ď, Serbo-Croatian ć and đ, Slovene č/t and j/d, Macedonian ќ/ш/т and ѓ/д, Bulgarian щ/т and жд/д. The standard Interslavic forms :isv[č] and :isv[dž] match the Ukrainian and Belarusian reflexes, while :isv[ć] and :isv[đ] in MS Plus match the Serbo-Croatian reflexes.

:isv[ć] and :isv[đ] form a voiceless–voiced pair and exhibit a high degree of symmetry in their morphophonological behaviour.

#### The `tj` and `dj` Sequences and the Absence of Soft T/D

It is important to distinguish the etymological soft consonants :isv[ť] :ipa[/tʲ/] and :isv[ď] :ipa[/dʲ/] — which belong exclusively to the MS Plus register — from the letter sequences :latn[tj] and :latn[dj] that appear in certain dictionary words (e.g., :isv[bratja], :isv[kostjum], :isv[tjulenj], :isv[adjutant], :isv[gospodja], :isv[Madjar]). Standard Interslavic has no soft :ipa[/tʲ/] or :ipa[/dʲ/] phoneme. The core consonant inventory includes only hard :ipa[/t/] and :ipa[/d/]; their iotated counterparts are the postalveolar affricates :isv[č] :ipa[/t͡ʃ/] and :isv[dž] :ipa[/d͡ʒ/] (or :isv[ć] :ipa[/t͡ɕ/] and :isv[đ] :ipa[/d͡ʑ/] in MS Plus), not soft stops.

The sequences :latn[tj] and :latn[dj] in the standard orthography are therefore intended as clusters of two separate hard sounds — :ipa[[t] + [j]] and :ipa[[d] + [j]] — not as soft consonants. However, this conflicts with the visual expectation of any Slavic reader, for whom :latn[tj] and :latn[dj] naturally suggest softened :ipa[[tʲ]] and :ipa[[dʲ]]. The result is a gap in the phonemic system: the orthography implies sounds that the phonology does not recognise.

:::warning[Unresolved: Phonemic Status of Soft T/D in the Consonant Inventory]
Standard Interslavic lacks soft :ipa[/tʲ/] and :ipa[/dʲ/] as phonemes, yet the dictionary contains words with :latn[tj] and :latn[dj] sequences that imply them — creating ambiguity about pronunciation and transliteration. Several of these words have natural alternatives that avoid the problem entirely: :isv[tjulenj] → :isv[tulenj] (cf. Czech _tuleň_), :isv[tjutjun] → :isv[tutun] or :isv[tytun], :isv[gospodja] → :isv[gospodža] (cf. Russian _госпожа_, Serbian _госпођа_), :isv[Madjar] → :isv[Madžar]. Words like :isv[adjutant] and :isv[konjugacija] contain morpheme boundaries (ad-jutant, kon-jugacija) where the pronunciation is genuinely :ipa[[d.j]] and :ipa[[n.j]] — two separate sounds — and should be retained as-is. For the MS Plus register, the existing letters :latn[ť] and :latn[ď] could be extended to cover borrowed soft :ipa[/tʲ/] and :ipa[/dʲ/] in words where no better alternative exists.

See the relevant sectiona (Standard Latin Orthography) and  (Etymological Alphabet) for a full discussion of this issue.
:::

:::caution[Unverified Content]
The consonant feature matrix below is not present in the source material. The distinctive-feature classifications are an editorial elaboration. Note also that it lists 30 phonemes but should account for `ć` and `đ` which the source includes among soft consonants.
:::

### Consonant Phoneme Feature Matrix
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

### Minimal Pairs for Consonant Contrasts
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

### Allophonic Variation of Consonants
The following notes describe the permitted allophonic variation for consonants in standard Interslavic:

- **:isv[c] :ipa[/t͡s/]**: Uniform across Slavic languages. Non-Slavic speakers should note this is always :ipa[[t͡s]], never :ipa[[k]] or :ipa[[s]]. Morphologically, :isv[c] behaves as a soft consonant — words ending in :isv[c] follow the soft declension pattern (e.g., :isv[Amerikancev], not :isv[*Amerikancov]).

- **:isv[č] :ipa[/t͡ʃ/]**: MAY be realized anywhere in the range from hard :ipa[[ʈ͡ʂ]] (as in Polish, Slovak, Belarusian, and most South Slavic languages) to softer :ipa[[t͡ʃ]] (as in Czech). Both are acceptable. However, the very soft :ipa[[t͡ɕ]] realization is not recommended in standard Interslavic, as it is reserved for the distinct phoneme :isv[ć] in the MS Plus register.

- **:isv[dž] :ipa[/d͡ʒ/]**: As the voiced counterpart of :isv[č], permitted realizations range from hard :ipa[[d͡ʐ]] to softer :ipa[[d͡ʒ]]. The very soft :ipa[[d͡ʑ]] is not recommended, as it corresponds to :isv[đ] in MS Plus. In loanwords (e.g., :isv[džaz], :isv[džungla], :isv[džentlemen]), speakers should use the harder realization regardless of register.

- **:isv[g] :ipa[/g/]**: Interslavic is a **G-Slavic** language, meaning the letter :isv[g] corresponds to :isv[h] in the H-Slavic languages (Czech, Slovak, Upper Sorbian, Ukrainian). The standard pronunciation is :ipa[[g]]. As a compromise toward H-Slavic speakers, the Belarusian-style voiced velar fricative :ipa[[ɣ]] is also acceptable. However, :ipa[[h]] is NOT acceptable — speakers should not substitute a voiceless glottal or pharyngeal fricative.

:::warning[Unresolved: The G/H Simplification]
Interslavic collapses a complex four-way distinction in the Slavic consonant system into a simple two-phoneme system (:isv[g] :ipa[/g/] and :isv[h] :ipa[/x/]). In reality, the Slavic languages exhibit up to four distinct categories:

1. **Common Slavic g** — the inherited velar stop that remains :ipa[[g]] in "G-Slavic" languages (Russian, Polish, Serbian, Bulgarian, Macedonian) but shifted to :ipa[[ɦ]] or :ipa[[h]] in "H-Slavic" languages (Czech, Slovak, Ukrainian, Belarusian, Upper Sorbian). This is the source of the famous doublet _Bogdan_ (G-Slavic) / _Bohdan_ (H-Slavic).
2. **Common Slavic h** — the inherited voiceless fricative corresponding to Cyrillic :cyrl[Х]. It surfaces as :ipa[[x]] in East and South Slavic but as the digraph _ch_ :ipa[[x]] in West Slavic. In standard Interslavic, this merges with :isv[h] :ipa[/x/].
3. **Foreign g** — the :ipa[[g]] in loanwords from Latin, Greek, English, etc. This is realized as :ipa[[g]] even in H-Slavic languages: Czech _logika_, Slovak _gravitácia_, Ukrainian :cyrl[ґравітація] (with the special letter :cyrl[Ґ]). Interslavic does not distinguish this from native :isv[g].
4. **Foreign h** — the :ipa[[h]] in loanwords from Greek, Germanic, and other languages. Its reflexes vary: Latin-script languages write _h_, East Slavic typically uses :cyrl[Г] (with Russian :ipa[[g]] pronunciation), and Cyrillic South Slavic uses :cyrl[Х]. Polish further distinguishes _h_ from _ch_ in spelling. Interslavic does not distinguish this from native :isv[h].

The two-phoneme simplification is adequate for everyday communication and is consistent with the Serbian model (which also has just :ipa[[g]] and :ipa[[x]]). However, it means that flavorization to H-Slavic languages cannot be fully automated: an algorithm cannot determine whether a given :isv[g] should become Czech _h_ (native) or remain _g_ (foreign) without access to etymological information not encoded in the standard or MS Plus orthography.
:::


- **:isv[l] :ipa[/l/]** and **:isv[lj] :ipa[/lʲ/]**: These form one of only two mandatory hard–soft consonant pairs in standard Interslavic. Slavic languages use four main realizations of :isv[l]: "lazy l" :ipa[[w]] (modern Polish :latn[ł], also found in Slovenian and Bulgarian), dark :ipa[[ɫ]], neutral :ipa[[l]], and palatal :ipa[[ʎ]]. The :ipa[[w]] realization is acceptable for hard :isv[l] but not recommended, as it impairs intelligibility. Each speaker should choose a consistent pair of hard and soft variants from the following options: (a) :ipa[[ɫ]] (hard) / :ipa[[l]] (soft) — the historical Polish pattern; (b) :ipa[[l]] (hard) / :ipa[[ʎ]] (soft) — the Shtokavian pattern; (c) :ipa[[ɫ]] (hard) / :ipa[[ʎ]] (soft) — the East Slavic pattern. Whatever pair is chosen, consistency is important: a speaker's hard and soft :isv[l] must always be distinguishable. Before :isv[i], the neutral :ipa[[l]] is natural for most Slavic speakers (e.g., :isv[list] = :ipa[[list]], not :ipa[[ɫist]]).

- **:isv[n] :ipa[/n/]** and **:isv[nj] :ipa[/nʲ/]**: The second mandatory hard–soft pair. Pronounced :ipa[[n]] and :ipa[[ɲ]] respectively by all Slavic speakers. Before :isv[ě], softening of :isv[n] is always obligatory (e.g., :isv[někto] is always :ipa[[ɲɛktɔ]]). Before :isv[i], softening is optional (e.g., :isv[nikto] may be :ipa[[niktɔ]] or :ipa[[ɲiktɔ]]). When mandatory softening occurs, the orthography marks it explicitly with :isv[j] (Latin) or :cyrl[њ] (Cyrillic) — e.g., :isv[njih] is always pronounced :ipa[[ɲix]].

- **:isv[r] :ipa[/r/]**: Always a trilled :ipa[[r]], as in all Slavic languages. The sequence :isv[rj], although not recognized by the Commission as a separate phoneme, in practice functions as the equivalent of historical soft :ipa[/ŕ/] — nearly all occurrences of :isv[rj] in the lexicon correspond to Proto-Slavic soft :ipa[/r/] rather than two separate phonemes. This sequence may be pronounced either as two sounds :ipa[[rja]] or as a single softened :ipa[[rʲa]] (e.g., :isv[burja] = :ipa[[burja]] or :ipa[[burʲa]]). In the standard Cyrillic orthography, this is written :cyrl[рј] (not :cyrl[рь], since the standalone soft sign is not part of the standard Cyrillic letter inventory).

- **:isv[š] :ipa[/ʃ/]**: MAY be realized from hard :ipa[[ʂ]] (as in most Slavic languages) to softer :ipa[[ʃ]] (as in Czech). Both are acceptable.

- **:isv[v] :ipa[/v/]**: The standard realization is :ipa[[v]]. The labiodental approximant :ipa[[ʋ]] is also acceptable. The semivowel :ipa[[w]] is not recommended. Importantly, :isv[v] does NOT lose its voicing in non-final positions — unlike in Polish, where :isv[v] devoices to :ipa[[f]] after voiceless consonants (e.g., :isv[krvav-] is :ipa[[krvav-]], not :ipa[*[krfav-]]; :isv[tvoj] is :ipa[[tvɔj]], not :ipa[*[tfɔj]]).

- **:isv[ž] :ipa[/ʒ/]**: MAY be realized from hard :ipa[[ʐ]] (the majority Slavic pronunciation) to softer :ipa[[ʒ]] (as in Czech). Both are acceptable.

---

## The Hard/Soft Alternation in Context
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

For the full morphophonemic alternation rules (palatalisation, iotation, the o→e rule, y→i/e rule, fleeting vowels), see the relevant section (Morphophonemic Alternations).
