# Lexical Semantics
:::caution[No Source Material Available]
This file has no direct source material for verification. All content in this section requires expert review to confirm accuracy and consistency with established Interslavic standards.
:::

This section specifies the principles governing the assignment of meaning to Interslavic words: how the lexicon is organized into semantic fields, how polysemous words are treated, how synonyms and near-synonyms relate to one another, and how false cognates (false friends) are identified and managed.

---

## Semantic Fields and Core Vocabulary
The Interslavic standard lexicon is organized around **semantic fields** — clusters of related meanings that together cover a major domain of human experience or knowledge. Coverage of each field is verified against the twelve source languages of the weighted voting system (see the relevant section).

### Core Semantic Fields
The following semantic fields are recognized as foundational. Each field MUST be representable with core vocabulary that is widely intelligible across all major Slavic language groups.

:::caution[Unverified Content]
In the table below, several words in the "Time and calendar" row appear regionally biased: :isv[segodnja] is Russian-oriented (cf. Czech *dnes*, Polish *dzisiaj*, BCS *danas*); :isv[jutro] meaning "tomorrow" reflects Polish usage — in most other Slavic languages *jutro* means "morning," not "tomorrow." These may not represent pan-Slavic consensus forms.
:::

:::caution[Unverified Content]
The verb "to see" appears as :isv[viditi] in "Basic actions" but as :isv[viděti] in "Cognition and perception." The source verb grammar file (grammar-verbs.md) uses :isv[viděti]. The :isv[viditi] form may be an error.
:::

| Field | Examples of core vocabulary |
|---|---|
| **The human body** | :isv[glava] "head", :isv[ruka] "hand/arm", :isv[noga] "leg/foot", :isv[oko] "eye", :isv[uho] "ear" |
| **Kinship and family** | :isv[otec] "father", :isv[mati] "mother", :isv[brat] "brother", :isv[sestra] "sister", :isv[syn] "son", :isv[dočer] "daughter" |
| **Time and calendar** | :isv[čas] "hour/time", :isv[denj] "day", :isv[tydenj] "week", :isv[měsęc] "month", :isv[leto] "year/summer", :isv[segodnja] "today", :isv[včera] "yesterday", :isv[jutro] "tomorrow" |
| **Space and direction** | :isv[město] "place", :isv[sěver] "north", :isv[jug] "south", :isv[zapad] "west", :isv[vostok] "east" |
| **Nature and environment** | :isv[voda] "water", :isv[zemlja] "earth/land", :isv[nebo] "sky/heaven", :isv[ogonj] "fire", :isv[drěvo] "tree/wood" |
| **Basic actions** | :isv[idti] "to go", :isv[govoriti] "to speak", :isv[viditi] "to see", :isv[dati] "to give", :isv[věděti] "to know" |
| **Cognition and perception** | :isv[mysliti] "to think", :isv[znati] "to know", :isv[čuti] "to feel/hear", :isv[viděti] "to see", :isv[razuměti] "to understand" |
| **Social and institutional** | :isv[narod] "people/nation", :isv[zemlja] "country/land", :isv[grad] "city", :isv[zakon] "law", :isv[vlada] "government" |
| **Numbers and quantities** | :isv[jedin] "one", :isv[dva] "two", :isv[tri] "three", :isv[mnogo] "many", :isv[malo] "few/little" |
| **Properties and qualities** | :isv[dobry] "good", :isv[zly] "bad/evil", :isv[veliky] "great/large", :isv[maly] "small", :isv[novy] "new", :isv[stary] "old" |

### Verification Procedure
When assigning vocabulary to a semantic field, the committee SHOULD verify that the selected form achieves the broadest possible intelligibility by:

1. Consulting word forms in all twelve source languages.
2. Confirming that the form is recognizable to speakers of at least the majority of those languages.
3. Noting where regional gaps exist (e.g., a form that is opaque to East Slavic speakers) and, where possible, providing an alternative or gloss.

:::info[TODO: Committee Input Needed]
Define the complete inventory of semantic fields to be covered in the standard lexicon. Specify minimum coverage depth (number of core items) for each field. Determine whether technology, medicine, and law form separate specialized sublexicons or are handled under the general international vocabulary rules in the relevant section
:::

---

## Polysemy and Disambiguation
**Polysemy** — a single word form carrying multiple related but distinct meanings — is a pervasive feature of the Interslavic lexicon, as it is in all natural Slavic languages.

### Treatment in the Dictionary
Polysemous words are listed in the dictionary with **all attested meanings** enumerated and numbered. No a priori disambiguation rule exists: context determines the intended meaning.

**Example:** :isv[leto]

1. "summer" (season) — primary meaning in Russian, Ukrainian, Bulgarian
2. "year" — primary meaning in South and West Slavic (Serbian/Croatian *ljeto*, Czech *léto*)

:::caution[Unverified Content]
The example :isv[v eto leto] uses `eto`, which appears to be a direct borrowing from Russian (это). The standard ISV demonstrative pronoun is typically :isv[to] or :isv[toje]. This example may not reflect correct ISV usage.
:::

Both meanings are standard in Interslavic. Writers SHOULD be aware that the word may be ambiguous in certain contexts (e.g., :isv[v eto leto] — "this summer" or "this year") and MAY add clarifying context when precision is required.

**Example:** :isv[mir]

1. "peace" (absence of conflict)
2. "world" (the universe, mankind)

:::caution[Unverified Content]
The form :isv[vselennaja] closely mirrors Russian *вселенная* and may not be a pan-Slavic ISV form. Verify whether this is the accepted ISV word for "universe."
:::

Both meanings are attested across Slavic. Context and collocation typically disambiguate: :isv[mir i vojna] "peace and war"; :isv[mir i vselennaja] "world and universe."

### Disambiguation Strategies
When a polysemous word creates genuine ambiguity in a specific context, the writer MAY use the following strategies:

1. **Collocation:** combine the word with a modifier or collocate that activates the intended reading.
2. **Paraphrase:** use a less ambiguous synonym or phrase (see the relevant section).
3. **Explicit gloss:** in formal or technical texts, follow the word with a parenthetical equivalent.

Writers SHOULD NOT rely on typographical devices (e.g., quotation marks, italics) alone to disambiguate polysemous words.

---

## Synonymy and Near-Synonymy
The Interslavic dictionary MAY list **multiple acceptable synonyms** for a single concept. This reflects the reality that different Slavic source languages contribute competing roots, and both (or several) forms may enjoy broad recognition.

### Register and Regional Associations
Each synonym entry in the dictionary SHOULD be marked for:

| Marker | Meaning |
|---|---|
| *(neutral)* | No regional or register restriction; recommended default. |
| *(formal)* | Preferred in written, official, or literary contexts. |
| *(colloquial)* | Characteristic of informal speech; SHOULD be avoided in formal texts. |
| *(N.Sl.)* | North Slavic orientation (Russian, Polish, Czech/Slovak). |
| *(S.Sl.)* | South Slavic orientation (Serbian/Croatian, Bulgarian, Slovenian). |
| *(W.Sl.)* | West Slavic orientation (Polish, Czech, Slovak, Sorbian). |

**Example:** "to speak"

:::caution[Unverified Content]
The forms :isv[rěčati] and :isv[bajati] as synonyms for "to speak" could not be verified against source material. The form :isv[rěčati] is not attested in the verb grammar source; verify it is a recognized ISV form and not an ad hoc construction. The register labels (formal/literary, archaic/folkloric) are also unverified.
:::

| Form | Register/Region |
|---|---|
| :isv[govoriti] | neutral, pan-Slavic |
| :isv[rěčati] | formal/literary |
| :isv[bajati] | archaic/folkloric |

Writers SHOULD default to the form marked *(neutral)* unless a specific stylistic effect is desired.

### Near-Synonyms with Distinct Semantic Coverage
Some near-synonyms differ not in register but in **semantic coverage** — they have overlapping but non-identical referential ranges. In such cases the dictionary entry SHOULD specify the difference.

**Example:** :isv[znati] vs. :isv[věděti]

Both mean "to know," but:
- :isv[znati] expresses acquaintance with persons, places, and facts — knowing in the sense of being familiar with. It is the neutral everyday default.
- :isv[věděti] is the athematic verb (see the relevant section) conveying direct or authoritative knowledge; it appears in more formal and philosophical registers.

:::info[TODO: Committee Input Needed]
Document all major synonym pairs where the register or regional marking is not yet settled by committee decision. In particular: :isv[toljko / toliko], :isv[ili / abo], :isv[čto / što / kaj] as interrogatives, and similar items where competing forms serve partially overlapping functions.
:::

---

## False Cognates (False Friends)
**False cognates** (false friends) are words whose Interslavic form closely resembles a word in another Slavic language, but the two words differ significantly in meaning. These present a particular risk to communication because a reader relying on native-language intuitions may misread the Interslavic text.

### Categories of False Friends
| Type | Description |
|---|---|
| **Complete false friends** | The Interslavic form and the superficially similar native form have entirely unrelated meanings. |
| **Partial false friends** | The two forms share some but not all meanings; one language's usage is narrower or shifted. |
| **Deceptive cognates** | The forms are etymologically related but have diverged in meaning through independent semantic change. |

### Selected High-Risk False Friend Pairs
The following pairs represent the most common sources of misreading across major Slavic language groups. This list is illustrative, not exhaustive.

:::caution[Unverified Content]
The :isv[urod] entry below contradicts other standard files (e.g., 08-lexicon/01-selection.md), which use the form :isv[uroda] with meaning "harvest; produce" and list Polish *uroda* as meaning "beauty" (not "freak"). In Polish, *uroda* means "beauty," while Russian/Czech *урод/úrod* means "freak." The description here appears to have the false-friend relationship inverted.
:::

| Interslavic form | Interslavic meaning | Superficially similar form | That form's meaning | Language(s) affected |
|---|---|---|---|---|
| :isv[urod] | "harvest, yield" (primary); "freak" (secondary) | *urod* | "freak, monster" only | Polish (primary meaning shifted) |
| :isv[čas] | "time; hour" | *čas* / *час* | "time" (Cz.) / "hour" (Ru.) | Czech, Russian (each captures only one sense) |
| :isv[leto] | "summer; year" | *лето* | "summer" only | Russian (*год* = year; ISV *leto* covers both) |
| :isv[nebo] | "sky; heaven" | *nebe* | "sky; palate (of mouth)" | Czech (anatomical meaning absent from ISV) |
| :isv[stol] | "table" | *stol* | "chair" | Slovenian (*stol* = chair) |
| :isv[vrěd] | "harm, damage" | *vreda* | "value, worth" | Serbian/Croatian (*vrednost* = value) |

### Avoidance Strategies
When writing Interslavic for an audience that includes speakers of a language where a false friend is known to occur, the writer SHOULD:

1. Prefer a synonym or paraphrase that does not trigger the false-friend association for that audience.
2. Add a brief parenthetical gloss on first use in a long or formal text.
3. Consult the false-friends appendix of the dictionary (see X).

:::info[TODO: Committee Input Needed]
Compile a comprehensive false-friends reference organized by source-language interference. Prioritize pairs that produce meaning reversals or strongly misleading readings over pairs that merely differ in scope or connotation.
:::
