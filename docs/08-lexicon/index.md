# 8. Lexicon and Vocabulary Policy

:::caution[Unverified Content]
This file has no direct source material in the original Interslavic documentation corpus. All content in this section requires expert review and committee validation before it can be considered authoritative.
:::

This section specifies the normative principles governing word selection, the treatment of international vocabulary, the management of false cognates, the policy on calques and borrowings, and the criteria for neologism approval in Interslavic. All normative rules use the terms MUST, SHALL, SHOULD, and MAY as defined in RFC 2119.

---

## 8.1. Core Vocabulary Principles

### 8.1.1. The Weighted Voting System: Formalized Procedure

Interslavic vocabulary is selected by a systematic cross-linguistic comparison of the living Slavic languages. Because no single Slavic language may serve as a privileged model, a **weighted voting system** is used to determine which root form achieves the broadest recognition across the Slavic-speaking world.

#### 8.1.1.1. Language Weights and the Six-Group Panel

The twelve source languages are organized into **six subgroups**, each of which casts exactly **one vote** in the selection procedure. This grouping prevents the demographic dominance of Russian from distorting the result while still reflecting realistic intelligibility patterns.

| Subgroup | Languages | Vote |
|---|---|---|
| East Slavic I | Russian | 1 |
| East Slavic II | Ukrainian, Belarusian | 1 |
| West Slavic I | Polish | 1 |
| West Slavic II | Czech, Slovak | 1 |
| South Slavic I | Slovene, Serbian / Croatian / Bosnian | 1 |
| South Slavic II | Bulgarian, Macedonian | 1 |

When the two languages within a subgroup disagree on a form, each receives **½ vote**. Languages with fewer than one million speakers (Sorbian, Kashubian, Rusyn) do not cast votes but are consulted as supplementary evidence and MUST NOT be ignored when they provide unique etymological information.

When two candidate forms have an equal vote total, the deciding criterion is **speaker population**: the form preferred by the subgroup representing the most speakers MUST be selected. In practice, this means that Russian obtains the casting vote in a tie, reflecting the approximately 70% of Slavic speakers who know that language.

:::info[TODO: Committee Input Needed]
The current specification carries forward the six-subgroup model from Steen (2024). The committee should decide whether the subgroup boundaries and tie-breaking rule require revision before ratification, particularly regarding the treatment of Serbo-Croatian as a single block versus three distinct votes.
:::

#### 8.1.1.2. Step 1: Root Inventory Across Source Languages

For each concept that requires a new lexical entry, the following procedure MUST be followed:

1. Compile the full set of words used for that concept in all twelve source languages.
2. Identify the underlying root for each word, stripping derivational and inflectional morphology.
3. Record attested meanings alongside each root to allow for semantic divergence.

The goal of this step is an exhaustive root inventory, not a surface-form list. Dialect and colloquial evidence MAY be included as supporting information but MUST be clearly distinguished from standard-language attestation.

#### 8.1.1.3. Step 2: Semantic Family Analysis

Once the root inventory is complete, the roots are grouped into **semantic families**: clusters of roots whose attested meanings overlap or are historically related.

For each semantic family, the procedure is:

1. Identify all source languages that attest at least one root from the family for the target concept.
2. Calculate the total vote weight that the family attracts.
3. Identify any divergent or shifted meanings that could create misunderstanding if the root is adopted.

A root SHOULD be advanced to step 3 only if its semantic family covers at least four of the six subgroups with the target meaning or a meaning sufficiently close to it.

#### 8.1.1.4. Step 3: Form Selection (Majority or Compromise)

From the set of roots advanced in step 2, the form to be adopted in Interslavic is determined as follows:

1. If a single root form occurs in all six subgroups, that form MUST be adopted without modification.
2. If one or two subgroups diverge but four or more agree on a form, that form SHOULD be adopted.
3. If two or more competing roots each attract significant vote weight, a **Proto-Slavic reconstruction** MUST be used as the tiebreaker: the form whose derivation from Proto-Slavic is most regular and best explained wins.
4. If no single Proto-Slavic reconstruction resolves the tie, both forms MAY be listed as **synonyms** (see §8.1.3).

Words are **never borrowed directly** from any single Slavic language. All adopted forms are derived from the Proto-Slavic (or Common Slavic) ancestor by application of the derivation model specified in section 5.10. This ensures internal phonological consistency and predictable recognition across the entire Slavic spectrum.

#### 8.1.1.5. Step 4: Meaning Assignment (Most Average Meaning)

The meaning assigned to the selected root is the **intersection of attested meanings** across the contributing source languages — the most "average" or least-marked sense shared by the majority.

The procedure is:

1. List all attested meanings of the root across source languages.
2. Identify the meaning or meaning component that recurs most consistently.
3. Assign that meaning as the **primary gloss** in the Interslavic dictionary.
4. Meanings attested in only a minority of source languages MAY be listed as secondary senses with appropriate regional labels.

When the meaning has drifted significantly in at least one language — especially when the drift creates a potential false cognate — a warning MUST be added to the dictionary entry (see §8.3.3).

---

### 8.1.2. Frequency-Based Selection Rationale

The selection procedure in §8.1.1 applies across the entire lexicon, but **priority** is given to high-frequency concepts. The Interslavic lexicon is organized into three frequency tiers:

| Tier | Description | Target coverage |
|---|---|---|
| Core | Basic vocabulary needed for everyday communication | ~2 000 entries |
| Extended | General vocabulary for written and formal registers | ~10 000 entries |
| Specialized | Technical, scientific, and domain-specific vocabulary | Unlimited |

Core-tier entries MUST be fully resolved using the voting procedure before any extended-tier entry for the same semantic field is accepted. Extended-tier entries SHOULD follow the same procedure. Specialized-tier entries MAY rely on international vocabulary (§8.2) or approved calques (§8.4) when no broadly understood Slavic root exists.

:::info[TODO: Committee Input Needed]
The exact size thresholds for core and extended tiers are provisional. The committee should confirm or revise these figures based on the current state of the dictionary.
:::

---

### 8.1.3. Synonym Management

Two synonyms for the same concept MAY coexist in the Interslavic dictionary when they satisfy the following conditions:

1. The two forms cover complementary portions of the Slavic territory (e.g., one is predominantly North Slavic, the other predominantly South Slavic).
2. Both forms pass the voting threshold individually when assessed against their respective regional subgroups.
3. Neither form is a high-risk false cognate of the other (§8.3).

When synonyms are listed, the dictionary entry MUST include a **regional label** (North, South, East, West) and, where relevant, a **register label** (formal, colloquial, archaic). Authors and translators SHOULD select the synonym that aligns best with their target audience; using either synonym is correct from the perspective of the standard.

A third synonym MUST NOT be introduced unless the first two have been in active use and attested in independent texts.

---

## 8.2. International Vocabulary

### 8.2.1. Adoption Criteria

International vocabulary — primarily words of Greek and Latin origin that have entered most European languages — constitutes an integral part of every Slavic language and provides a reliable channel for expressing concepts that lack a broadly recognized Slavic root.

International vocabulary MUST be adopted into Interslavic only when **the majority of Slavic languages** (at least four of the six subgroups) already use a recognizably related form for that concept. If the international word is recognized by all six subgroups, adoption is REQUIRED. If recognized by fewer than four, a Slavic alternative MUST be sought first.

Where an internationally recognized Slavic word exists — for example *vampir* / *вампир* "vampire" or *vodka* / *водка* "vodka" — it is treated as international vocabulary already and requires no further justification for adoption.

---

### 8.2.2. Phonological Adaptation Rules for Borrowings

When adapting an international word, the spelling MUST be brought as close as possible to the form of the original word while conforming to the following rules:

| Source feature | Interslavic adaptation | Example |
|---|---|---|
| Geminated consonant | Simplified to single consonant | *gramma* → *gram* / *грам* |
| Greek `θ` (th) | Written `t` | *theatro* → *teatr* / *театр* |
| Greek `φ` (ph) | Written `f` | *phenomenon* → *fenomen* / *феномен* |
| Greek `υ` (y) | Written `i` | *systema* → *sistem* / *систем* |
| /k/ sound | Always written `k`, never `c` | *contact* → *kontakt* / *контакт* |
| /x/ sound (ch) | Written `h` | *psychology* → *psiholog* / *психолог* |
| /y/ sound (ü, u) | Written `ju` | *bureau* → *bjuro* / *бјуро* |
| Intervocalic /z/ (-s-) | Written `z` | *base* → *baza* / *база* |
| Intervocalic /s/ (-ss-) | Written `s` | *mass* → *masa* / *маса* |

---

### 8.2.2a. Latin and Greek Suffix Adaptation Rules (Merunka)

The seven rules below specify how the most frequent Latin and Greek suffixes MUST be rendered in Interslavic. They supplement the general phonological table in §8.2.2 and apply in the order listed; the first matching rule wins.

**Rule 1 — Nominal endings -ια / -ia and -η / -ις**

| Source | Interslavic ending | Examples |
|---|---|---|
| Greek `-ια` or Latin `-ia` | `-ija` / `-ија` | *filozofija* / *философија*, *astronomija* / *астрономија* |
| Greek `-η` or `-ις` | `-a` / `-а` | *baza* / *база* |

**Rule 2 — Adjectival ending -κος / -cus**

Greek adjectives ending in `-κος` and Latin adjectives ending in `-cus` MUST receive the palatalized Interslavic suffix `-sky` / `-скы`. When the stem-final consonant is `k`, it undergoes the regular Interslavic alternation `k → č` before this suffix.

| Source | Interslavic ending | Examples |
|---|---|---|
| Greek `-κος` / Latin `-cus` | `-sky` / `-скы` | *filosofijsky* / *философијскы*; *ekonomičsky* / *економичскы* (`k → č`) |

**Rule 3 — Verbal-noun endings -sio, -ssio, -tio / -tia**

| Source | Interslavic ending | Examples |
|---|---|---|
| Latin `-sio` | `-zija` / `-зија` | *televizija* / *телевизија* |
| Latin `-ssio` | `-sija` / `-сија` | *diskusija* / *дискусија* |
| Latin `-tio` / `-tia` | `-cija` / `-ција` | *gravitacija* / *гравитација* |

**Rule 4 — Intervocalic -s- and -ss-; suffix -σμος / -smus**

| Source | Interslavic rendering | Examples |
|---|---|---|
| Latin or Greek `-s-` between vowels | `-z-` / `-з-` | *vaza* / *ваза*, *baza* / *база*, *fizika* / *физика* |
| Latin or Greek `-ss-` | `-s-` / `-с-` | *masiv* / *масив* |
| Greek `-σμος` or Latin `-smus` | `-zm` / `-зм` | *kapitalizm* / *капитализм* |

**Rule 5 — Nominal endings -o(ν) / -um and -ος / -us**

| Source | Interslavic ending | Examples |
|---|---|---|
| Greek `-ο(ν)` or Latin `-um` | `-um` / `-ум` | *forum* / *форум* |
| Greek `-ος` or Latin `-us` | `-us` / `-ус` or `-os` / `-ос` | *korpus* / *корпус*; *kosmos* / *космос* |

:::caution[Unverified Content]
The exception *theatrum* → *theatro* retains the digraph "th", which contradicts the general rule in §8.2.2 that Greek θ (th) must be written as "t" (yielding *teatro*). This inconsistency requires clarification.
:::

Note the following lexicalized exceptions: *museum* → *muzej* / *музеј* (*m. inanim.*, Gen. *muzeja*); *theatrum* → *theatro* / *театро* (*n.*, Gen. *theatra*).

**Rule 6 — Adjectival ending -στικος / -sticus**

Greek adjectives ending in `-στικος` and Latin adjectives ending in `-sticus` MUST receive the Interslavic suffix `-stičsky` / `-стичскы`.

| Source | Interslavic ending | Example |
|---|---|---|
| Greek `-στικος` / Latin `-sticus` | `-stičsky` / `-стичскы` | *kapitalističsky* / *капиталистичскы* |

**Rule 7 — Agentive / participial ending -stus / -στος**

Latin or Greek `-stus` / `-στος` MUST be reduced to `-st` / `-ст`.

| Source | Interslavic ending | Example |
|---|---|---|
| Latin `-stus` / Greek `-στος` | `-st` / `-ст` | *kapitalist* / *капиталист* |

---

### 8.2.3. Morphological Adaptation: Endings for Borrowings

In addition to the phonological rules in §8.2.2–§8.2.2a, international words MUST receive Interslavic inflectional endings in accordance with the following table. The table maps the most common source-language endings (English forms are given as the primary reference) to their Interslavic counterparts.

**Verbs:**

| Source ending | Interslavic ending | Example |
|---|---|---|
| `-ate`, `-fy`, `-ise`/`-ize`, Ger. `-ieren` | `-ovati` / `-овати` | *organizovati* / *организовати* |

**Nouns:**

| Source ending | Interslavic ending | Example |
|---|---|---|
| `-ia`, `-y` (Lat. `-ia`) | `-ija` / `-ија` | *ekonomija* / *економија* |
| `-sis` (Gr.) | `-za` / `-за` | *kriza* / *криза* |
| `-ium` | `-ij` / `-иј` | *helij* / *хелиј* |
| `-um`, `-us` | retained | *forum* / *форум*; *korpus* / *корпус* |
| `-ty` (Lat. `-tas`) | `-tet` / `-тет` | *universitet* / *универзитет* |
| `-ics` | `-ika` / `-ика` | *ekonomika* / *економика* |
| `-ism` | `-izm` / `-изм` | *komunizm* / *комунизм* |
| `-ist` | `-ist` / `-ист` | *komunist* / *комунист* |
| `-sion` | `-zija` / `-зија` | *televizija* / *телевизија* |
| `-ssion` | `-sija` / `-сија` | *diskusija* / *дискусија* |
| `-tion` | `-cija` / `-ција` | *akcija* / *акција* |

**Adjectives:**

| Source ending | Interslavic ending | Example |
|---|---|---|
| Derived from `-tion`/`-sion` nouns | `-ijny` / `-ијны` | *televizijny* / *телевизијны* |
| `-al` (Lat. `-alis`) | `-alny` / `-алны` | *neutralny* / *неутралны* |
| `-ic`, `-ical` (Lat. `-icus`) | `-ičny` / `-ичны` | *specifičny* / *специфичны* |
| `-ive` (Lat. `-ivus`) | `-ivny` / `-ивны` | *pozitivny* / *позитивны* |
| `-ous` (Lat. `-osus`) | `-ozny` / `-озны` | *seriozny* / *сериозны* |

---

### 8.2.3a. Borrowings from Non-Latin/Greek Languages (Merunka)

Words borrowed from languages that use the Latin alphabet (but are not of Latin or Greek origin) MUST retain their original Latin-script spelling and pronunciation. However, they MUST acquire the grammatical categories — gender, case declension paradigm, and number — appropriate to Interslavic.

The following examples illustrate the principle (Nom. sg. → Gen. sg. → gender):

| Source form | Interslavic Nom. / Gen. | Gender | Source language |
|---|---|---|---|
| *metro* | *metro* / *метро* → *metr-a* / *метр-а* | *n.* | French |
| *laser* | *laser* / *лазер* → *laser-a* / *лазер-а* | *m.* | English |
| *bypass* | *bypass* / *бајпас* → *bypass-a* / *бајпас-а* | *m.* | English |

Note: When producing text in Cyrillic, or in any mixed-script context, these loanwords SHOULD be rendered phonetically in Cyrillic (e.g., *метро*, *лазер*, *бајпас*) in accordance with the general phonetic spelling policy in §8.2.4.

---

### 8.2.4. English Loanwords and Phonetic Spelling

English loanwords present a special challenge because the English spelling system diverges significantly from the phonological values expected by Cyrillic or Interslavic Latin readers. The following rule applies:

When writing in Cyrillic, or when producing a text that will be read in both scripts, English loanwords MUST be spelled **phonetically** in Interslavic rather than preserving the English orthographic form.

| English form | Interslavic phonetic form |
|---|---|
| bypass | *bajpas* / *бајпас* |
| knockout | *nokaut* / *нокаут* |
| jazz | *džaz* / *џаз* |
| teenager | *tinejdžer* / *тинејџер* |
| budget | *budžet* / *буџет* |
| business | *biznes* / *бизнес* |
| musical | *mjuzikl* / *мјузикл* |
| football | *futbol* / *футбол* |
| cocktail | *koktejl* / *коктејл* |

When writing exclusively in the Latin script for an audience familiar with English, the original English spelling MAY be retained in parentheses as a gloss on first use.

---

### 8.2.5. Diminutive Formation (Merunka)

Diminutives are common to all Slavic languages. They express that a person or thing denoted by a noun is smaller or younger than the base referent, or that the speaker feels a greater degree of closeness or affection toward it. Interslavic productive diminutive suffixes are drawn from the common Slavic stock and MUST follow the patterns below.

Each gender has two grades: a **simple diminutive** (one suffix) and a **double diminutive** (intensified, indicating something very small/young or expressing strong affection).

:::caution[Unverified Content]
The masculine diminutive suffix listed here as `-ek` conflicts with the source word-formation documentation, which specifies `-ok` for masculine nouns ending in a hard consonant (e.g., *pes* → *pesok*) and `-ik`/`-ek` only for soft consonants. The example *slon* (hard consonant) should yield *slonok* by those rules, not *slonek*. The neuter example *děte* → *děko* is also questionable: the doc's own note states that `-T` declension nouns use the oblique stem in `-et-` before diminutive suffixes, which would not produce *děko*. Additionally, the double diminutive Cyrillic column for neuter (*dětičko*) is incorrectly written in Latin script rather than Cyrillic.
:::

**Masculine nouns:**

| Grade | Suffix | Example (Latin) | Example (Cyrillic) | Gloss |
|---|---|---|---|---|
| Base | — | *slon* | *слон* | elephant |
| Simple diminutive | `-ek` | *slonek* | *слонек* | small/young elephant |
| Double diminutive | `-iček` | *sloničеk* | *слоничек* | very small elephant; affectionate |

**Feminine nouns:**

| Grade | Suffix | Example (Latin) | Example (Cyrillic) | Gloss |
|---|---|---|---|---|
| Base | — | *krava* | *крава* | cow |
| Simple diminutive | `-ka` | *kravka* | *кравка* | small/young cow |
| Double diminutive | `-ička` | *kravička* | *кравичка* | very small cow; affectionate |

:::caution[Unverified Content]
The neuter Cyrillic column below contains mixed Latin/Cyrillic characters: *дěте*, *дěко*, and *дětičko* all use the Latin letter "ě" within otherwise Cyrillic text. The double diminutive Cyrillic entry *дětičko* is almost entirely Latin script. These should be rendered in pure Cyrillic.
:::

**Neuter nouns:**

| Grade | Suffix | Example (Latin) | Example (Cyrillic) | Gloss |
|---|---|---|---|---|
| Base | — | *děte* | *дěте* | child |
| Simple diminutive | `-ko` | *děko* | *дěко* | small/young child |
| Double diminutive | `-ičko` | *dětičko* | *дětičko* | very small child; affectionate |

Note: for neuter stems belonging to the `-T` declension (e.g., *tele* "calf"), the oblique stem in `-et-` is used before the diminutive suffix: *tele* → *teletko* / *телетко* (Gen. *teletka*). See §4 (declension) for the `-T` paradigm.

Note: some masculine nouns form their simple diminutive with the neuter-type suffix `-ko`, in which case they retain masculine gender but follow the *sělo* / *сěло* declension in the singular: e.g., *brat* "brother" → *bratko* / *братко* (*m.*, Gen. sg. *bratka*, declined as *sělo*).

Cross-reference: the derivational affixes `-ica` (feminine agent/diminutive) and `-ec` (masculine agent/diminutive, with loss of thematic `-e-`) are covered in the morphology section (§5.10) and are distinct from the productive diminutive paradigm described here.

---

## 8.3. False Cognate Register

### 8.3.1. Definition and Classification

A **false cognate** (also: false friend; *lažny drug* / *лажны друг*) is a word whose phonological or orthographic form is similar — or identical — across two or more Slavic languages but whose meaning diverges between them, such that a reader familiar with form A in language X may incorrectly assume meaning B when encountering the same form in Interslavic or language Y.

False cognates are classified by **risk level**:

| Risk level | Criterion |
|---|---|
| **High** | The form is likely to be used in the same or a closely similar syntactic context in both languages; the meaning difference is substantial and pragmatically consequential. |
| **Medium** | The meaning difference is noticeable but the contexts in which the word is used differ enough that misunderstanding is less likely. |
| **Low** | The form differs in one language only marginally or belongs to a different word category; misunderstanding is unlikely in context. |

Only high-risk and medium-risk false cognates are subject to the mandatory dictionary warning in §8.3.3.

---

### 8.3.2. High-Risk False Cognate Pairs

The following table documents the most consequential false cognate pairs across Slavic languages. This list is not exhaustive; it represents attested high-risk cases that have caused or are likely to cause pragmatic misunderstanding.

| Interslavic form | Meaning assigned | Divergent meaning(s) | Language(s) |
|---|---|---|---|
:::caution[Unverified Content]
The divergent meaning of *duma* listed as "pride" for Polish requires verification. Polish *duma* indeed means "pride", but the assigned ISV meaning "thought, reflection" is not the standard pan-Slavic sense — in Russian, *дума* means "thought" or "parliament", while the ISV meaning choice may not reflect the majority-vote outcome.
:::

| *duma* / *дума* | "thought, reflection" | "pride" | Polish |
| *listopad* / *листопад* | "falling of leaves; October" | "November" | Polish, Czech |
:::caution[Unverified Content]
The table row for *uroda* below has a broken column structure (extra pipe character splitting data across too many columns). The meaning "ugly person, freak" attributed to Russian/Czech also requires verification: in Russian, *урод* means "freak/ugly person" but *урода* is not standard Russian. In Czech, the cognate is not commonly used this way.
:::

| *uroda* / *урода* | "harvest; produce" | "beauty" | Polish; "ugly person, freak" | Russian, Czech |
| *zbožje* / *збоже* | "grain, cereal" | "goods, merchandise" | some Slavic varieties |
| *pozor* / *позор* | "attention, care" | "disgrace, shame" | Russian, Bulgarian |
| *zavisnost* / *зависност* | "dependence" | "envy" | some South Slavic varieties |

:::info[TODO: Committee Input Needed]
The false cognate register requires systematic expansion. The committee should commission a full cross-linguistic audit against the Interslavic core vocabulary to produce a complete high-risk and medium-risk list before this section is finalized.
:::

---

### 8.3.3. Avoidance and Disambiguation Policy

For every high-risk false cognate that enters the Interslavic lexicon, the dictionary entry MUST include:

1. A **warning marker** (e.g., ⚠ *false friend*) visible in both the printed and digital dictionary.
2. A **disambiguation note** specifying in which source language(s) the form carries a different meaning, and what that meaning is.
3. Where a broadly understood alternative exists, a **recommended alternative** clearly labeled as the preferred form for general use.

Authors MUST NOT use a high-risk false cognate word in Interslavic texts without either using the recommended alternative or adding a contextual clarification. Editors reviewing Interslavic texts SHOULD flag high-risk false cognates for author attention.

Slight divergences in meaning — where the Interslavic sense and the divergent sense belong to the same semantic area and misunderstanding is unlikely in context — do not require a warning. For example, the fact that *ljubiti* / *любити* means "to love" in most Slavic languages but "to like" in Polish is a low-risk divergence that does not warrant a mandatory warning.

---

## 8.4. Calque vs. Borrowing Policy

### 8.4.1. Preference Ordering

When a new concept must be expressed and no existing Interslavic word covers it adequately, the following **preference order** MUST be applied:

1. **Existing Slavic word or root compound**: An attested Slavic word or a compound built from Slavic roots that transparently expresses the concept. This is always the first choice.
2. **Semantic extension of an existing word**: Extending the meaning of an existing Interslavic word by regular metonymic or metaphorical shift, provided this does not create a false cognate.
3. **Calque (loan translation)**: A morpheme-by-morpheme translation of an international term into Interslavic roots, following the formation rules in §8.4.2.
4. **Adapted international borrowing**: An international (Greco-Latin or widely recognized) term adapted according to §8.2.2–§8.2.3.
5. **Phonetic borrowing**: A word borrowed from a non-Slavic language (including English) adapted phonetically per §8.2.4, used only when no option above is feasible.

Each step in this hierarchy MUST be explicitly considered and documented in the lexicon proposal before descending to the next level.

---

### 8.4.2. Calque Formation Rules

Calques MUST be formed in accordance with the following rules:

1. Every morpheme in the calque MUST be either an attested Interslavic root or a productive Interslavic affix (see §5.10).
2. The compound MUST follow Interslavic compounding conventions: the first element is the modifying element, the second is the head.
3. The resulting form MUST be phonotactically well-formed in Interslavic.
4. The calque MUST be formally distinct from all existing Interslavic words.

:::caution[Unverified Content]
The calque *nebodrap* uses *drapati* "to scratch" but the standard English calque metaphor is "to scrape", not "to scratch" — verify that *drapati* is the correct ISV root. The calque *zemjetrěs* differs from the form *zemjetresenje* attested in the source word-formation documentation. The Cyrillic forms *земјетрěс* and *колокрěсло* contain the Latin letter "ě" mixed with Cyrillic script.
:::

**Examples of approved calques:**

| International term | Interslavic calque | Gloss of components |
|---|---|---|
| skyscraper | *nebodrap* / *небодрап* | *nebo* "sky" + *drapati* "to scratch" |
| earthquake | *zemjetrěs* / *земјетрěс* | *zemlja* "earth" + *trěsti* "to shake" |
| wheelchair | *kolokrěslo* / *колокрěсло* | *kolo* "wheel" + *krěslo* "armchair" |

If two competing calques are both well-formed, the one whose components are more broadly attested across Slavic languages MUST be preferred.

---

## 8.5. Neologism Approval Criteria

### 8.5.1. Formal Requirements for New Words

A proposed neologism MUST satisfy all of the following formal conditions before it can be submitted for review:

1. The proposed form MUST conform to Interslavic **phonotactic rules** as specified in §3.
2. The proposed form MUST use only **attested Slavic roots** (traceable to Proto-Slavic), **approved international vocabulary** (§8.2), or **productive Interslavic affixes** (§5.10).
3. The proposed form MUST be **formally distinct** from all existing Interslavic lexical entries: no homophony with an established word is permitted unless the difference in word class makes disambiguation reliable in context.
4. If the proposed form contains a sequence not found in any living Slavic language, a phonological justification MUST be provided.

Proposals that fail any of these conditions are inadmissible and MUST be returned to the proposer for revision before entering committee review.

---

### 8.5.2. Semantic Requirements

A proposed neologism MUST fill a **genuine lexical gap** in Interslavic: the concept it expresses MUST NOT be adequately covered by any existing Interslavic word or phrase.

Synonymy with an existing standard word **disqualifies** the proposal unless one of the following justifications is provided and accepted by the committee:

- **Register differentiation**: The proposed word occupies a register (e.g., highly formal, colloquial, poetic) clearly distinct from the existing word.
- **Regional differentiation**: The proposed word is more broadly understood in a geographic subgroup of the Slavic speech area than the existing word, and the existing word functions as the synonym for the complementary subgroup (see §8.1.3).

:::caution[Unverified Content]
The portmanteau example *katka* "duck" is questionable. The claimed blend of Russian *utka*, Polish *kaczka*, and South Slavic *patka* does not transparently produce *katka* — the derivation logic (which segments were blended and how) is unclear and requires expert verification.
:::

In the case of portmanteau words — forms that blend phonological material from multiple Slavic cognates to maximize pan-Slavic recognizability — the proposer MUST demonstrate that the blend is more readily understood by Slavic speakers than either of the contributing words alone. Examples include *katka* / *катка* "duck" (from Russian *utka*, Polish *kaczka*, South Slavic *patka*).

---

### 8.5.3. Community Review Process

The approval of a neologism follows a five-stage procedure:

| Stage | Description | Duration |
|---|---|---|
| **Proposal** | The proposer submits the form, its derivation, its intended meaning, and evidence of the lexical gap. | — |
| **Discussion** | Open community discussion; counterproposals and objections are recorded. | Minimum 30 days |
| **Voting** | Committee vote; simple majority required for provisional adoption. | As scheduled |
| **Provisional adoption** | The word is marked as provisional (*prov.*) in the dictionary and may be used in Interslavic texts. | Minimum 12 months |
| **Full adoption** | Confirmed after attestation in at least three independent published texts; the provisional marker is removed. | After attestation |

A neologism that fails the vote MAY be resubmitted once if the proposer addresses the objections raised during the discussion period. A neologism that fails a second vote MUST NOT be resubmitted for a period of five years.

:::info[TODO: Committee Input Needed]
The discussion and attestation periods (30 days, 12 months, three texts) are provisional figures. The committee should confirm these thresholds or replace them with figures derived from the actual community review track record.
:::

---

## 8.6. Internationalism Adaptation Checklist

The following checklist provides a step-by-step procedure for adapting any international word to Interslavic orthography and morphology. Cross-references to §8.2.2–§8.2.3a are provided at each relevant step.

| Step | Action | Rule reference |
|---|---|---|
| 1 | Verify that the word is recognized in at least 4 of the 6 subgroups. | §8.2.1 |
| 2 | Apply general phonological adaptations: simplify geminates, adapt θ/φ/υ/k/ch/ü/intervocalic-s. | §8.2.2 |
| 2a | If the word is of Latin or Greek origin, apply the seven suffix-specific adaptation rules in the listed order (Rules 1–7). | §8.2.2a |
| 3 | Assign the correct morphological ending based on the source-language suffix. | §8.2.3 |
| 3a | If the word is not of Latin or Greek origin but uses Latin script, retain the original spelling and assign Interslavic grammatical categories (gender, declension). | §8.2.3a |
| 4 | If the word is of English origin and will appear in Cyrillic, apply phonetic spelling. | §8.2.4 |
| 5 | Check the result against the false cognate register. | §8.3 |
| 6 | Confirm that the adapted form is formally distinct from all existing Interslavic entries. | §8.5.1 |
| 7 | Record the etymology, source form, and adaptation decisions in the dictionary entry. | — |
| 8 | If the word fails step 1, proceed to the calque/borrowing preference order. | §8.4.1 |

A word MUST NOT be entered into the dictionary without completing all applicable steps in this checklist.
