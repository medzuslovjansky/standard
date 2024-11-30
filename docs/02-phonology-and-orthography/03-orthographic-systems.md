# 2.3. Orthographic Systems

## 2.3.1 General Principles
- Dual Script Approach
- Design Criteria
- Implementation Guidelines

## 2.3.2 Latin Script
- Basic Latin Alphabet
- Extended Latin Features
- Special Characters

### Letter: A a

#### Overview

The letter **A a** represents the open front unrounded vowel [a], serving as a foundational vowel in Interslavic.

#### Usage in Interslavic

- **Universality**: Appears in a vast array of words across all parts of speech.
- **Stability**: Phonetically stable, with minimal variation.

#### Phonological Processes

- **Minimal Participation**: Due to its stability, it does not significantly partake in complex phonological processes.

#### Groups and Classifications

- **Vowel Classification**:
  - **Front Vowel**
  - **Open Vowel**

### Letter: Ę ĕ

#### Overview

The letter **Ę ĕ** represents a nasal front vowel sound in Interslavic, corresponding to the nasalized [ɛ̃] or [ʲæ] sounds. It is essential for accurately reflecting Proto-Slavic nasal vowels and their developments in modern Slavic languages.

#### Historical Context and Etymology

- **Proto-Slavic Origin**: Derived from Proto-Slavic nasal vowels *ę* and *ę̄*, originating from Indo-European *en*, *em*, and other nasalized vowels.
- **Old Church Slavonic Representation**: Denoted by the Cyrillic **Ѧ ѧ** (small yus), signifying its nasal quality.
- **Evolution**: In various Slavic languages, the nasal quality was lost or transformed, but Interslavic retains it for etymological consistency.

#### Phonetic Description

- **IPA Symbol**: [ɛ̃] or [ʲæ]
- **Articulation**:
  - **Vowel Height**: Open-mid
  - **Vowel Backness**: Front
  - **Nasalization**: Air flows through both the nose and mouth.
- **Phonological Features**:
  - **Front Vowel**
  - **Nasal Vowel**
  - **Softening Effect**: May palatalize preceding consonants.

#### Usage in Interslavic

##### Root Words

- Commonly appears in native Slavic roots.
- **Examples**:
  - *klęti* (to curse)
  - *język* (language)
  - *mięso* (meat)
  - *ręka* (hand)

##### Morphological Forms

- **Third Person Plural Verb Ending**: *-ęť*
  - *oni znajęť* (they know)
- **Present Active Participles**: *-ęći*
  - *běgęći* (running)

> **Example**  
> The verb *věděti* (to know) conjugates as *oni vědějęť* in the third person plural.

##### Pronouns

- **Reflexive Pronoun**: *sę* (oneself)
- **Accusative Forms**:
  - *mę* (me)
  - *tę* (you)

#### Orthographic Considerations

- **Diacritic**: The ogonek (˛) indicates nasalization and must be clearly distinguishable.
- **Capitalization**: Maintain the ogonek in uppercase forms (**Ę**), ensuring consistency.

#### Phonological Processes

- **Nasal Assimilation**: May influence adjacent consonants, leading to nasal consonant clusters.
- **Palatalization**: Can cause preceding consonants to become palatalized.

> **Implementation Note**  
> When parsing text, software should recognize **Ę** as a distinct character affecting pronunciation and possibly morphological analysis.

#### Groups and Classifications

- **Vowel Classification**:
  - **Front Vowel**
  - **Nasal Vowel**
  - **Soft Vowel**

#### Recommendations for Font Implementors

- **Ogonek Design**: The ogonek should be proportional and clearly attached to the letter.
- **Legibility**: Ensure that the nasal hook is visible at various font sizes and styles.

> **Warning** ⚠️  
> Inadequate representation of the ogonek can lead to misinterpretation of the nasal vowels, affecting both readability and meaning.

### Letter: Ĺ ĺ

#### Overview

The letter **Ĺ ĺ** represents the palatalized lateral approximant [ʎ], distinct from the digraph **LJ lj**. It captures specific etymological and phonetic nuances in Interslavic.

#### Historical Context and Etymology

- **Proto-Slavic Origin**: Emerged from palatalization of *l* before front vowels or the soft sign *ь*.
- **Distinct from LJ**: While both represent palatal sounds, **Ĺ** is a single palatalized consonant, whereas **LJ** is a digraph representing a consonant cluster or a distinct phoneme in certain languages.

#### Phonetic Description

- **IPA Symbol**: [ʎ]
- **Articulation**:
  - **Place**: Palatal
  - **Manner**: Lateral approximant
  - **Voicing**: Voiced
- **Phonological Features**:
  - **Sonorant Consonant**
  - **Soft Consonant**
  - **Palatal Consonant**

#### Usage in Interslavic

##### Word Examples

- *kĺuč* (key)
- *stĺp* (pillar)
- *sĺza* (tear)

##### Morphological Context

- Appears in words where a palatalized *l* is historically justified.
- Used to distinguish meanings between words that would otherwise be homographs.

> **Example**  
> *pĺatiti* (to pay) vs. *platiti* (to weave)

#### Orthographic Considerations

- **Diacritic**: The acute accent indicates palatalization and must be prominent.
- **Capitalization**: Preserve the diacritic in uppercase forms (**Ĺ**).

#### Phonological Processes

- **Palatalization**: Results from historical palatalization processes affecting *l*.
- **Assimilation**: May influence the pronunciation of neighboring vowels.

#### Groups and Classifications

- **Consonant Classification**:
  - **Palatal Consonant**
  - **Sonorant**
  - **Soft Consonant**

#### Recommendations for Font Implementors

- **Acute Accent Design**: Ensure the accent is clear and does not merge with adjacent letters.
- **Kerning**: Adjust spacing to accommodate the accent without disrupting text flow.

> **Warning** ⚠️  
> Confusing **Ĺ** with **LJ** can lead to mispronunciation and semantic errors.

### Digraph: LJ lj

#### Overview

The digraph **LJ lj** represents the palatal lateral approximant [ʎ] in certain contexts, but it functions differently from **Ĺ** in terms of orthography and etymology.

#### Historical Context and Etymology

- **Origin**: Developed in South Slavic languages as a digraph to represent a palatal sound resulting from the combination of *l* and *j*.
- **Usage**: Common in languages like Serbian and Croatian, influencing Interslavic representation.

#### Phonetic Description

- **IPA Symbol**: [ʎ]
- **Articulation**: Same as **Ĺ**, but orthographically distinct.
- **Phonological Features**:
  - Represents a single sound despite being a digraph.
  - May indicate morphological boundaries in some cases.

#### Usage in Interslavic

##### Word Examples

- *ljubov* (love)
- *miljon* (million)
- *bljesk* (flash)

##### Morphological Context

- Used in words where the palatal sound arises from a historical *l* followed by *j*.
- Indicates different etymological development compared to **Ĺ**.

> **Example**  
> *bolje* (better) uses **LJ**, distinguishing it from words that would use **Ĺ**.

#### Orthographic Considerations

- **Capitalization**:
  - At the beginning of a sentence or proper noun: *Ljubljana*.
  - In all caps: *LJUBLJANA*.
- **Single Phoneme Representation**: Though two letters, it signifies one sound.

#### Phonological Processes

- **Palatalization**: Reflects historical palatalization involving a following *j*.
- **Morphophonemic Variations**: May affect word forms during inflection.

#### Groups and Classifications

- **Consonant Classification**:
  - **Palatal Consonant**
  - **Sonorant**
  - **Soft Consonant**

#### Recommendations for Font Implementors

- **Kerning**: Adjust spacing between **L** and **J** for visual cohesion.
- **Ligature**: Optional ligature may be used but should not obscure the digraph nature.

> **Note**  
> Unlike **Ĺ**, **LJ** is always written as two separate characters.

### Letter: Ų ų

#### Overview

The letter **Ų ų** represents a nasal back vowel sound, akin to [ɔ̃] or [ũ]. It is crucial for denoting Proto-Slavic nasal vowels preserved in Interslavic.

#### Historical Context and Etymology

- **Proto-Slavic Origin**: Evolved from the nasal vowel *ǫ*, stemming from combinations like *an*, *am* in Indo-European languages.
- **Old Church Slavonic Representation**: Denoted by **Ѫ ѫ** (big yus).
- **Evolution**: Maintained in Interslavic to reflect historical linguistic developments.

#### Phonetic Description

- **IPA Symbol**: [ɔ̃] or [ũ]
- **Articulation**:
  - **Vowel Height**: Open-mid or close-mid
  - **Vowel Backness**: Back
  - **Nasalization**: Nasal airflow accompanies oral articulation.
- **Phonological Features**:
  - **Back Vowel**
  - **Nasal Vowel**
  - **Rounded Vowel**

#### Usage in Interslavic

##### Root Words

- Appears in words of Slavic origin where historical nasalization occurred.
- **Examples**:
  - *mųž* (man)
  - *sųd* (court)
  - *brųkva* (turnip)

##### Morphological Endings

- **Accusative Singular Feminine**:
  - Nouns ending with *-a* change to *-ų*.
  - *žena* → *ženų* (woman)
- **Instrumental Singular**:
  - Used in certain noun cases.

> **Example**  
> *Pisati pismų* (to write a letter) uses the instrumental case with **Ų**.

#### Orthographic Considerations

- **Diacritic**: The ogonek must be clearly attached to the bottom of the letter **U u**.
- **Font Styles**: Ensure visibility in italic and bold styles.

#### Phonological Processes

- **Nasal Harmony**: Can trigger nasalization in adjacent vowels or consonants.
- **Denasalization**: In some dialects, may lose nasal quality, becoming a plain vowel.

#### Groups and Classifications

- **Vowel Classification**:
  - **Back Vowel**
  - **Nasal Vowel**
  - **Rounded Vowel**

#### Recommendations for Font Implementors

- **Ogonek Clarity**: The nasal hook should not be mistaken for other diacritics.
- **Unicode Compliance**: Use correct Unicode points for compatibility.

> **Developer Note**  
> When implementing text-to-speech systems, ensure that **Ų** is pronounced with nasalization appropriate to the context.

## 2.3.3 Cyrillic Script
- Basic Cyrillic Alphabet
- Extended Cyrillic Features
- Regional Variations

