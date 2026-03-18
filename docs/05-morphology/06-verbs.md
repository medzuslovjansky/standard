# 5.7. Verbs

This section specifies the grammatical categories, conjugation classes, tense and mood systems, non-finite forms, and irregular verb paradigms for verbs in Interslavic. All normative rules use the terms MUST, SHALL, SHOULD, and MAY as defined in RFC 2119.

---

## 5.7.1. Verbal Aspect

### 5.7.1.1. Perfective and Imperfective: Definition

Interslavic verbs possess **verbal aspect**, a grammatical category inherited from Proto-Slavic and present in all Slavic languages. Every verb is lexically marked as either **perfective** (pf.) or **imperfective** (impf.), and most verbs exist in aspect pairs that share a common meaning but differ in their temporal perspective.

- **Imperfective aspect** focuses on the action itself: its ongoing progress, habituality, iteration, or duration. It does not assert completion.
- **Perfective aspect** focuses on the result or completion of the action. It presents the action as a bounded, whole event.

**Examples:**

| Imperfective | Perfective | Gloss |
|---|---|---|
| :isv[dělati] | :isv[sdělati] | "to do/make" |
| :isv[čistiti] | :isv[izčistiti] | "to clean" |
| :isv[pisati] | :isv[napisati] | "to write" |

Both forms MUST be listed separately in the dictionary; they cannot be predicted from each other without reference to the lexical entry.

### 5.7.1.2. Aspect Pairs: Morphological Relationships

Aspect pairs are formed by one of three mechanisms:

1. **Prefixation of a bare imperfective** creates a perfective with a narrowed or directional meaning. The resulting perfective then frequently acquires a secondary imperfective (see §5.7.1.3):
   - :isv[pisati] (impf.) → :isv[napisati] (pf.) "to write / to have written"
   - :isv[čistiti] (impf.) → :isv[izčistiti] (pf.) "to clean / to have cleaned"

2. **Suppletive pairs** use morphologically unrelated roots:
   - :isv[nazyvati] (impf.) / :isv[nazvati] (pf.) "to call, to name"
   - :isv[prihoditi] (impf.) / :isv[prijdti] (pf.) "to come"
   - :isv[podimati] (impf.) / :isv[podjeti] (pf.) "to take up, to undertake"

:::caution[Unverified Content]
The "suffix alternation" category and its examples (:isv[vråćati]/:isv[vråtiti], :isv[ględěti]/:isv[ględnųti]) are not present in the primary source material. The source describes only prefixation and irregular/suppletive pairs. These examples may come from other sources.
:::

3. **Suffix alternation** without a prefix change:
   - :isv[vråćati] (impf.) / :isv[vråtiti] (pf.) "to return"
   - :isv[ględěti] (impf.) / :isv[ględnųti] (pf.) "to look / to glance"

### 5.7.1.3. Secondary Imperfective Formation Rules

When a prefixed perfective verb requires an imperfective counterpart, a **secondary imperfective** is derived from the perfective stem according to the following rules:

| Perfective ending | Secondary imperfective | Mechanism | Example |
|---|---|---|---|
| `-ati` | `-yvati` / `-ivati` | `-yvati` after hard consonant, `-ivati` after soft | :isv[dokazati] → :isv[dokazyvati] "to prove"; :isv[poddržati] → :isv[poddrživati] "to maintain" |
| `-iti` | `-jati` (with vowel lengthening) | Stem-final consonant + iotation: `s/z/t/d/st/zd` → `š/ž/č/dž/šč/ždž`; preceding `o` → `a` | :isv[napraviti] → :isv[napravjati]; :isv[pozvoliti] → :isv[pozvaljati]; :isv[oprostiti] → :isv[opraščati] |
| Monosyllabic stem | `-vati` | Appended directly to the stem | :isv[priznati] → :isv[priznavati]; :isv[ukryti] → :isv[ukryvati] |

:::caution[Unverified Content]
The normative claim that rules "MUST be applied in the order given above" is not stated in the source material. The source lists the three formation patterns without specifying a priority order.
:::

These rules MUST be applied in the order given above. When none of the rules apply predictably, the secondary imperfective is listed separately in the dictionary.

### 5.7.1.4. Aspect Selection Rules

:::caution[Unverified Content]
The source material provides informal guidance on aspect usage but does not formulate these as MUST/SHOULD normative rules. In particular, the rules about phase verbs, verbs of perception, and negated contexts are not stated in the source.
:::

The following normative rules govern aspect selection:

- An imperfective verb MUST be used to express an **ongoing or progressive** action: :isv[ja jesm dělal] "I was doing / I have been doing."
- A perfective verb MUST be used to express a **completed action** whose result is relevant: :isv[ja jesm sdělal] "I have done (and finished)."
- An imperfective verb MUST be used for **habitual or repeated** actions: :isv[on jezdil do Moskvy] "he used to go to Moscow."
- An imperfective verb MUST be used with **phase verbs** (begin, continue, stop) and with verbs of perception governing a subordinate action.
- An imperfective verb SHOULD be used in negated contexts where completion of the action is denied: :isv[ja ne pisal] "I was not writing / I did not write."

### 5.7.1.5. Verbs of Motion: Three-Way Aspect Distinction

Verbs of motion in Interslavic make a **three-way** distinction rather than the two-way distinction of most other verbs:

| Type | Example | Meaning |
|---|---|---|
| Non-directional imperfective | :isv[jezditi] | movement without a specific direction ("to drive around") |
| Directional imperfective | :isv[jehati] | movement toward a goal ("to drive / be driving to") |
| Perfective | :isv[pojehati] | completed departure ("to have gone, to set off") |

**Examples in context:**
- :isv[Igor jezdil po Moskvě] — "Igor was driving around in Moscow."
- :isv[Igor jehal do Moskvy] — "Igor was driving to Moscow."
- :isv[Igor pojehal do Moskvy] — "Igor has gone to Moscow."

When a non-directional verb of motion takes a goal complement, it expresses **habitual** movement: :isv[Igor jezdil do Moskvy] "Igor [always/often] went to Moscow."

In prefixed compounds, the **non-directional** form MUST be used for the imperfective member and the **directional** form for the perfective member:

| Imperfective | Perfective | Gloss |
|---|---|---|
| :isv[odhoditi] | :isv[oditi] | "to go away" |
| :isv[dolětati] | :isv[doletiti] | "to arrive by flight" |
| :isv[prinositi] | :isv[prinesti] | "to bring" |

---

## 5.7.2. Conjugation Classes

### 5.7.2.1. Two-Stem System: Infinitive Stem and Present Tense Stem

All inflected forms of a verb derive from one of two stems:

1. **The infinitive stem** is obtained by removing the infinitive ending `-ti`. It serves as the base for the past tense, conditional mood, past participles, and verbal nouns.
2. **The present tense stem** is used for the present tense, imperative mood, and present participles.

The infinitive ending in Interslavic is always `-ti`. Verbs with stems ending in `-k` or `-g` retain those consonants in the infinitive (:isv[mogti], :isv[pekti]) rather than using the contracted forms (:isv[moči], :isv[peči]) in order to keep the stem transparent.

**Special case — verbs in `-sti`:** The infinitive stem may end in `d`, `t`, or `s`. These verbs are listed in the dictionary with the 3rd person singular present tense shown in parentheses, e.g. :isv[klasti] (:isv[klade]), :isv[pasti] (:isv[pade]), :isv[gnesti] (:isv[gnete]), to distinguish them from verbs like :isv[nesti] (stem: :isv[nes-]).

When the present tense stem cannot be derived by the regular rules below, it is given in the dictionary. Examples: :isv[pisati] (:isv[piše]), :isv[htěti] (:isv[hoče]), :isv[spati] (:isv[spi]), :isv[zvati] (:isv[zove]), :isv[brati] (:isv[bere]), :isv[vzeti] (:isv[vozme]).

### 5.7.2.2. First Conjugation (Non-i-Stems)

The **First Conjugation** covers verbs whose present tense stem does not end in `-i`. The present tense stem is derived from the infinitive stem as follows:

| Infinitive type | Present tense stem | Example |
|---|---|---|
| Stem ends in consonant | Identical to infinitive stem | :isv[nesti] → :isv[nes-]; :isv[vezti] → :isv[vez-]; :isv[klasti] (< :isv[klad-ti]) → :isv[klad-] |
| `-ati` verbs; monosyllabic vowel stems; some `-ěti` verbs | Infinitive stem + `-j-` | :isv[dělati] → :isv[dělaj-]; :isv[uměti] → :isv[uměj-]; :isv[biti] → :isv[bij-]; :isv[čuti] → :isv[čuj-] |
| `-ovati` / `-evati` verbs | Replace `-ova-` / `-eva-` with `-uj-` | :isv[kovati] → :isv[kuj-]; :isv[organizovati] → :isv[organizuj-] |
| `-nuti` verbs | Drop `-u-` from the suffix | :isv[tegnuti] → :isv[tegn-]; :isv[dvignuti] → :isv[dvign-] |

Present tense endings for the First Conjugation:

| Person/Number | Ending | Alternate |
|---|---|---|
| 1sg. | `-u` | `-em` |
| 2sg. | `-eš` | — |
| 3sg. | `-e` | — |
| 1pl. | `-emo` | — |
| 2pl. | `-ete` | — |
| 3pl. | `-ut` | — |

**Morphophonological note:** If the present stem ends in `k` or `g`, these consonants become `č` and `ž` respectively before the front vowel `e`: :isv[mog-eš] → :isv[možeš]; :isv[pek-eš] → :isv[pečeš].

### 5.7.2.3. Second Conjugation (-iti / -ěti, i-Stems)

The **Second Conjugation** covers verbs in `-iti` and most verbs in `-ěti`. The present tense stem ends in `-i-`.

| Infinitive | Present stem | Example: :isv[hvaliti] / :isv[viděti] |
|---|---|---|
| :isv[hvaliti] "to praise" | :isv[hval-i-] | — |
| :isv[viděti] "to see" | :isv[vid-i-] | — |

Present tense endings for the Second Conjugation:

| Person/Number | Ending | Alternate |
|---|---|---|
| 1sg. | `-ju` | `-im` |
| 2sg. | `-iš` | — |
| 3sg. | `-i` | — |
| 1pl. | `-imo` | — |
| 2pl. | `-ite` | — |
| 3pl. | `-et` | — |

**Iotation in 1sg.:** When the stem-final consonant is `s`, `z`, `t`, `d`, `st`, or `zd`, it merges with the `-j-` of the ending to produce `š`, `ž`, `č`, `dž`, `šč`, `ždž` respectively:

| Infinitive | 1sg. derivation | 1sg. form |
|---|---|---|
| :isv[prositi] "to ask" | :isv[pros-] + `-ju` | :isv[prošu] |
| :isv[viděti] "to see" | :isv[vid-] + `-ju` | :isv[vidžu] / :isv[vidim] |
| :isv[nositi] "to carry" | :isv[nos-] + `-ju` | :isv[nošu] |

### 5.7.2.4. Third Conjugation (Contracted -aje- Forms)

A **Third (contracted) Conjugation** is an optional variant used principally in West and South Slavic. It applies to `-ati` and `-ěti` verbs that otherwise belong to the First Conjugation with the `-aj-` stem.

The contracted forms compress the `-aje-` sequence, producing endings: **-m, -š, -Ø, -mo, -te, -jut**.

| Person/Number | Full form | Contracted form |
|---|---|---|
| 1sg. | :isv[dumajų] | :isv[dumam] |
| 2sg. | :isv[dumaješ] | :isv[dumaš] |
| 3sg. | :isv[dumaje] | :isv[duma] |
| 1pl. | :isv[dumajemo] | :isv[dumamo] |
| 2pl. | :isv[dumajete] | :isv[dumate] |
| 3pl. | :isv[dumajųt] | (:isv[dumajųt]) |

Use of the contracted forms is **permitted** (MAY) and represents a natural stylistic variant. It MUST NOT be treated as an error in any register.

---

## 5.7.3. Present Tense

The present tense is formed by appending the personal endings of the appropriate conjugation to the present tense stem.

**Paradigm — First Conjugation, example :isv[nesti] "to carry":**

| Person/Number | Form |
|---|---|
| 1sg. | :isv[nesų] / :isv[nesem] |
| 2sg. | :isv[neseš] |
| 3sg. | :isv[nese] |
| 1pl. | :isv[nesemo] |
| 2pl. | :isv[nesete] |
| 3pl. | :isv[nesųt] |

**Paradigm — First Conjugation, example :isv[dělati] "to do/make":**

| Person/Number | Form |
|---|---|
| 1sg. | :isv[dělajų] / :isv[dělam] |
| 2sg. | :isv[dělaješ] / :isv[dělaš] |
| 3sg. | :isv[dělaje] / :isv[děla] |
| 1pl. | :isv[dělajemo] / :isv[dělamo] |
| 2pl. | :isv[dělajete] / :isv[dělate] |
| 3pl. | :isv[dělajųt] |

**Paradigm — Second Conjugation, example :isv[hvaliti] "to praise":**

| Person/Number | Form |
|---|---|
| 1sg. | :isv[hvaljų] / :isv[hvalim] |
| 2sg. | :isv[hvališ] |
| 3sg. | :isv[hvali] |
| 1pl. | :isv[hvalimo] |
| 2pl. | :isv[hvalite] |
| 3pl. | :isv[hvalęt] |

:::caution[Unverified Content]
The 3pl. form :isv[hvalęt] uses the nasal vowel `ę`, but the source gives the ending as plain `-et`. The secondary source (code observations) shows the 3pl. of :isv[govoriti] as `govorųt` (with `-ųt`), which contradicts both. The use of `ę` here is unverified.
:::

**Note on 1sg. alternates:** The `-em` / `-im` variants in the 1st person singular (e.g. :isv[nesem], :isv[hvalim]) are characteristic of Slovak and South Slavic usage; the `-ų` / `-jų` forms are characteristic of East Slavic and Polish usage. Both sets are correct in Interslavic.

:::caution[Unverified Content]
The rule that negation is "always written separately" is not discussed in the source material. The source does not address negation of verbs.
:::

**Negation** is formed by prefixing the particle :isv[ne] to the conjugated form; it is always written separately: :isv[ne govorjų] "I do not speak", :isv[ne kažų] "I will not say."

---

## 5.7.4. Past Tense

### 5.7.4.1. Compound Past (Primary): L-Participle + byti

The primary past tense of Interslavic is the **compound past**, formed by combining the present tense of the auxiliary verb :isv[byti] "to be" with the **L-participle** of the main verb.

The L-participle is formed by appending the suffix `-l` (+ gender/number ending) to the **infinitive stem**:

| Gender/Number | Suffix | Example (:isv[pisati]) |
|---|---|---|
| Masculine singular | `-l` | :isv[pisal] |
| Feminine singular | `-la` | :isv[pisala] |
| Neuter singular | `-lo` | :isv[pisalo] |
| Plural (all genders) | `-li` | :isv[pisali] |

**Full compound past paradigm (:isv[pisati]):**

| Person/Number | Form |
|---|---|
| 1sg. (m./f.) | :isv[jesm pisal] / :isv[jesm pisala] |
| 2sg. (m./f.) | :isv[jesi pisal] / :isv[jesi pisala] |
| 3sg. (m./f./n.) | :isv[jest pisal] / :isv[jest pisala] / :isv[jest pisalo] |
| 1pl. | :isv[jesmo pisali] |
| 2pl. | :isv[jeste pisali] |
| 3pl. | :isv[sųt pisali] |

In the **3rd person**, the forms of :isv[byti] (:isv[jest], :isv[sųt]) are typically omitted in informal usage, though their use is not incorrect: :isv[on pisal] "he was writing / he wrote."

### 5.7.4.2. L-Participle Formation

The L-participle is always formed regularly from the infinitive stem, with one exception:

- :isv[idti] "to go" has the suppletive L-participle :isv[šel] (m.), :isv[šla] (f.), :isv[šlo] (n.), :isv[šli] (pl.). The alternative forms :isv[išel], :isv[išla] etc. are also acceptable.
- This suppletive form carries through **all prefixed compounds**: :isv[pojdti] → :isv[pošel], :isv[vojdti] → :isv[všel], :isv[prijdti] → :isv[prišel], etc.

:::caution[Unverified Content]
The rule about consonant cluster preservation in the L-participle (no cluster simplification) is not discussed in the source material. The examples :isv[mogl], :isv[grebl], :isv[izrěkl] are not attested in the source.
:::

When the infinitive stem ends in a consonant cluster (e.g. :isv[mogti] → stem :isv[mog-]), the L-participle does not undergo the cluster simplification that occurs in East Slavic: :isv[mogl], :isv[grebl], :isv[izrěkl] (not :isv[mog], :isv[greb], :isv[izrěk]).

### 5.7.4.3. Interpretation: Aspect Determines Perfectivity of Past

The aspectual value of the compound past is determined by the lexical aspect of the main verb:

- **Imperfective + compound past** = ongoing or habitual past: :isv[ja jesm dělal] "I was doing / I used to do."
- **Perfective + compound past** = completed past (perfect): :isv[ja jesm sdělal] "I have done (and finished)."

### 5.7.4.4. Simple Past (Aorist/Imperfect — Optional)

:::caution[Committee Review Needed]
The simple past conflates the aorist and imperfect. The Steen grammar treats this as a single optional category; the Ranmaru sources note the distinction and propose treating them separately for audiences familiar with South Slavic. The present specification follows the Steen position: aorist and imperfect are merged into a single **simple past** paradigm for Standard Interslavic, with an informative note that speakers with South Slavic backgrounds MAY distinguish them. The detailed aorist/imperfect paradigms given in §5.7.4.4.1–§5.7.4.4.2 are optional extensions.
:::

The **simple past** is an optional tense that fulfills the combined role of the aorist and imperfect. It denotes an action that took place in the past and is formed by adding personal endings directly to the **infinitive stem**. Its use is **stylistically marked** and SHOULD NOT be used in communication with speakers whose native language is East Slavic or Polish, as the forms are not broadly intelligible.

**Endings — vowel-final infinitive stem:**

| Person/Number | Ending |
|---|---|
| 1sg. | `-h` |
| 2sg. | `-še` |
| 3sg. | `-še` |
| 1pl. | `-hmo` |
| 2pl. | `-ste` |
| 3pl. | `-hų` |

:::caution[Unverified Content]
The 3pl. ending is written as `-hų` (with nasal ų) but the source gives it as `-hu` (without nasal marker). The same applies to the consonant-stem variant `-ehų` vs. source `-ehu`.
:::

**Endings — consonant-final infinitive stem** (connecting vowel `e` is inserted):

| Person/Number | Ending |
|---|---|
| 1sg. | `-eh` |
| 2sg. | `-eše` |
| 3sg. | `-eše` |
| 1pl. | `-ehmo` |
| 2pl. | `-este` |
| 3pl. | `-ehų` |

:::caution[Unverified Content]
The First Palatalization rule for simple past consonant stems (`k` → `č`, `g` → `ž`, `h` → `š`) and the example paradigms for :isv[izrěkti] and :isv[mogti] are not in the source material. The source gives no examples of the simple past with velar-stem verbs.
:::

Before the connecting vowel `e`, the consonants `k`, `g`, `h` undergo the First Palatalization: `k` → `č`, `g` → `ž`, `h` → `š`.

**Simple past paradigm — selected examples:**

| Person/Number | :isv[kazati] | :isv[nesti] | :isv[izrěkti] | :isv[mogti] |
|---|---|---|---|---|
| 1sg. | :isv[kazah] | :isv[neseh] | :isv[izrěčeh] | :isv[možeh] |
| 2sg. | :isv[kazaše] | :isv[neseše] | :isv[izrěčeše] | :isv[možeše] |
| 3sg. | :isv[kazaše] | :isv[neseše] | :isv[izrěčeše] | :isv[možeše] |
| 1pl. | :isv[kazahmo] | :isv[nesehmo] | :isv[izrěčehmo] | :isv[možehmo] |
| 2pl. | :isv[kazaste] | :isv[neseste] | :isv[izrěčeste] | :isv[možeste] |
| 3pl. | :isv[kazahų] | :isv[nesehų] | :isv[izrěčehų] | :isv[možehų] |

### 5.7.4.5. Pluperfect (Optional)

The **pluperfect** (past-before-past) is an optional tense. It is formed by combining the L-participle with the **past tense of :isv[byti]**, either the simple past or compound past:

- :isv[ja běh dělal] "I had been doing" (using simple past of :isv[byti])
- :isv[ja byl jesm dělal] "I had been doing" (using compound past of :isv[byti])

The pluperfect SHOULD be used to explicitly signal that one past action preceded another past action. Its use is optional and MAY be replaced by the compound past with appropriate temporal adverbs.

---

## 5.7.5. Future Tense

### 5.7.5.1. Compound Future: bųdų + Infinitive

The primary future tense is formed by combining the **future tense forms of :isv[byti]** with the **infinitive** of the main verb. The future forms of :isv[byti] are conjugated as if from the stem :isv[bud-] in the present tense:

| Person/Number | :isv[byti] future | Full example (:isv[pisati]) |
|---|---|---|
| 1sg. | :isv[bųdų] / :isv[bųdem] | :isv[bųdų pisati] |
| 2sg. | :isv[bųdeš] | :isv[bųdeš pisati] |
| 3sg. | :isv[bųde] | :isv[bųde pisati] |
| 1pl. | :isv[bųdemo] | :isv[bųdemo pisati] |
| 2pl. | :isv[bųdete] | :isv[bųdete pisati] |
| 3pl. | :isv[bųdųt] | :isv[bųdųt pisati] |

:::caution[Unverified Content]
The claim that the compound future is used for "both imperfective and perfective" verbs is not explicitly stated in the source. The source describes the compound future without specifying its applicability to perfective verbs.
:::

This construction is used for **both imperfective and perfective** verbs to express future meaning in Standard Interslavic.

### 5.7.5.2. Perfective Present as Future

In East and West Slavic languages, the present tense forms of a **perfective** verb regularly express future meaning (e.g. Russian *напишу* "I will write"). This usage is possible in Interslavic but **SHOULD be avoided** when addressing South Slavic speakers, for whom the present tense of a perfective verb does not carry automatic future meaning and may be misunderstood as present habitual.

:::info[TODO: Committee Input Needed]
A normative ruling is needed on whether the use of the perfective present as future is (a) fully equivalent to the compound future, (b) a permitted stylistic variant, or (c) restricted to registers targeting non-South-Slavic audiences. Currently the Steen source recommends avoidance; the Ranmaru source explains the South Slavic motivation in detail.
:::

---

## 5.7.6. Conditional Mood

### 5.7.6.1. Present Conditional: by + L-Participle

The conditional mood is formed by combining the **conditional auxiliary forms of :isv[byti]** with the **L-participle** of the main verb. The conditional forms of :isv[byti] derive historically from the aorist of :isv[byti]:

| Person/Number | Conditional auxiliary | Example (:isv[dělati]) |
|---|---|---|
| 1sg. | :isv[byh] | :isv[byh dělal(a)] |
| 2sg. | :isv[bys] | :isv[bys dělal(a)] |
| 3sg. | :isv[by] | :isv[by dělal(a/o)] |
| 1pl. | :isv[byhmo] | :isv[byhmo dělali] |
| 2pl. | :isv[byste] | :isv[byste dělali] |
| 3pl. | :isv[by] | :isv[by dělali] |

The L-participle MUST agree with the grammatical subject in gender and number (singular masculine, singular feminine, neuter, or plural).

**Examples:**
- :isv[Ako byh ja věděl o tym, ne pošel byh tamo.] — "If I had known about that, I would not have gone there."
- :isv[Dětę ne plakalo by, ako by go ničto ne bolělo.] — "The child would not have cried if nothing hurt it."

:::caution[Unverified Content]
The distinction between South Slavic and West Slavic 3pl. conditional forms and the MAY permission for :isv[byhų] are not discussed in the source material.
:::

**Note on 3pl.:** In the South Slavic tradition the 3pl. conditional auxiliary is :isv[by] (same as 3sg.); in the West Slavic tradition a distinct 3pl. form :isv[byhų] MAY be used.

### 5.7.6.2. Past Conditional

The **past conditional** (expressing a counterfactual about the past) is formed by inserting the past form of :isv[byti] into the standard conditional:

- :isv[ja byl byh dělal] "I would have done" (masculine)
- :isv[ja byla byh dělala] "I would have done" (feminine)

---

## 5.7.7. Imperative Mood

### 5.7.7.1. Formation from Present Stem

The imperative is formed from the **present tense stem**. Specifically, take the **3rd person singular present tense** form and remove the personal ending to obtain the imperative base; then attach the imperative endings:

| Person/Number | Ending after consonant | Ending after `-j-` | Ending after `-j` |
|---|---|---|---|
| 2sg. | `-i` | `-j` | `-Ø` (zero) |
| 1pl. | `-imo` | `-jmo` | `-mo` |
| 2pl. | `-ite` | `-jte` | `-te` |

**Formation rule summary:** Add `-i` to the present stem if the stem ends in a consonant; add `-j` if the stem ends in a vowel; add zero ending if the stem already ends in `-j`.

**Examples:**

| Infinitive | 3sg. present | Imperative base | 2sg. imp. | 1pl. imp. | 2pl. imp. |
|---|---|---|---|---|---|
| :isv[nesti] | :isv[nese] | :isv[nes-] | :isv[nesi] | :isv[nesimo] | :isv[nesite] |
| :isv[dělati] | :isv[dělaje] | :isv[dělaj-] | :isv[dělaj] | :isv[dělajmo] | :isv[dělajte] |
| :isv[hvaliti] | :isv[hvali] | :isv[hvali-] | :isv[hvali] | :isv[hvalimo] | :isv[hvalite] |
| :isv[kovati] | :isv[kuje] | :isv[kuj-] | :isv[kuj] | :isv[kujmo] | :isv[kujte] |
| :isv[prositi] | :isv[proši] | :isv[proši-] | :isv[proši] | :isv[prošimo] | :isv[prošite] |

:::caution[Unverified Content]
The 3sg. present of :isv[prositi] is shown as :isv[proši] (with iotation), but the source states that iotation in 2nd conjugation only affects the 1sg. form (where `-ju` triggers the change). The 3sg. should be :isv[prosi] (stem `pros-` + ending `-i`), and consequently the imperative forms should be :isv[prosi], :isv[prosimo], :isv[prosite].
:::

**Morphophonological note:** Before the connecting `-i-`, the consonants `k`, `g`, `h` undergo the First Palatalization: `k` → `č`, `g` → `ž`, `h` → `š`. This is triggered by the 3sg. form used as the base (:isv[pomože] → :isv[pomoži], :isv[izrěče] → :isv[izrěči]). These forms are characteristic of West Slavic as well as Bulgarian and Macedonian.

:::caution[Unverified Content]
The special imperative rule for `-avati` verbs is not mentioned in the source material. The source describes imperative formation only from the present tense stem.
:::

**Verbs in `-avati` (with suffix `-va-`):** The imperative is formed from the **infinitive stem** via connecting `-j-`, not from the present stem: :isv[davati] → :isv[davaj], :isv[sòzdavati] → :isv[sòzdavaj].

**Accent note:** It is recommended to shift stress to the ending in the imperative to distinguish it from the indicative, particularly for verbs with endings in `-i/-imo/-ite`: :isv[prósi] (3sg. ind. "asks") vs. :isv[prosí] (2sg. imp. "ask!").

:::caution[Unverified Content]
The source says the accent shift "deserves recommendation" but does not formalize it as a normative rule. The indicative form cited here as "3sg." (:isv[prósi]) appears to be the 2nd conjugation 3sg. present, which is correct.
:::

### 5.7.7.2. Third-Person Optative with nehaj

Interslavic has no synthetic imperative for the 3rd person. Third-person commands and wishes are expressed with the **optative particle :isv[nehaj]** followed by the indicative form of the verb:

- :isv[Nehaj umre!] — "Let him die!"
- :isv[Nehaj žive dolgo!] — "May he live long!"

### 5.7.7.3. Hortative First Plural

The 1st person plural imperative functions as an **inclusive hortative** ("let us"):

- :isv[dělajmo] — "let's do!"
- :isv[pojdimo] — "let's go!"

---

## 5.7.8. Non-Finite Forms

### 5.7.8.1. Infinitive

All infinitives end in **`-ti`**. This ending is invariant and serves as the dictionary citation form. The infinitive stem is the infinitive minus `-ti`.

:::caution[Unverified Content]
The source describes :isv[moči], :isv[peči], :isv[běči] as "less transparent" but does not say a `-ći` variant is "fully acceptable" nor does it use the normative SHOULD NOT. The source also does not mention a `-ći` ending variant at all (it uses `-či`).
:::

Verbs whose stems end in `-k` or `-g` retain these consonants before `-ti` (:isv[mogti], :isv[pekti], :isv[běgti]) rather than using the contracted South Slavic forms (:isv[moči], :isv[peči], :isv[běči]). The `-ći` variant is fully acceptable as an alternative but SHOULD NOT be the primary form in Standard Interslavic. The form :isv[iti] is an acceptable alternative to :isv[idti].

### 5.7.8.2. Present Active Participle (-uči / -eči)

The **present active participle** is derived from the **present tense stem** by replacing the 3rd person plural ending `-t` with `-či`:

- First Conjugation: 3pl. ends in `-ut` → participle ends in `-uči`
- Second Conjugation: 3pl. ends in `-et` → participle ends in `-eči`

:::caution[Unverified Content]
The variant form :isv[dělajući] (with `-ući` instead of `-uči`) is not attested in the source material. The source gives only `-uči` for the first conjugation.
:::

| Infinitive | 3pl. present | Present active participle | Gloss |
|---|---|---|---|
| :isv[dělati] | :isv[dělajųt] | :isv[dělajuči] / :isv[dělajući] | "doing" |
| :isv[nesti] | :isv[nesųt] | :isv[nesuči] | "carrying" |
| :isv[hvaliti] | :isv[hvalęt] | :isv[hvaleči] | "praising" |
| :isv[viděti] | :isv[vidęt] | :isv[videči] | "seeing" |

When used as an **attributive adjective**, the present active participle inflects as a soft-type adjective: :isv[běgajuči muž] "the running man", :isv[ljubeča mati] "a loving mother."

When used as an **adverbial participle (transgressive)**, the form is uninflected for gender and is co-indexed with the grammatical subject: :isv[Iduči do raboty, ona vsegda dymi cigaretoju] "While going to her work, she always smokes a cigarette."

### 5.7.8.3. Adverbial Present Active Participle (Transgressive)

The transgressive form (also called the adverbial present active participle) has the same endings as the attributive present active participle (`-uči`, `-eči`) but is **not inflected** for gender, number, or case. It MUST be co-indexed with the subject of the main clause. See §5.7.8.2 for formation.

### 5.7.8.4. Past Active Participle (-vši / -ši)

The **past active participle** is formed from the **infinitive stem**:

- If the stem ends in a **vowel**: add `-vši`
- If the stem ends in a **consonant**: add `-ši`

| Infinitive | Infinitive stem | Past active participle | Gloss |
|---|---|---|---|
| :isv[sdělati] | :isv[sděla-] | :isv[sdělavši] | "having done" |
| :isv[ukrasti] (< :isv[ukrad-ti]) | :isv[ukrad-] | :isv[ukradši] | "having stolen" |
| :isv[nesti] | :isv[nes-] | :isv[nesši] | "having carried" |

This participle can be used adjectivally or adverbially. Its adjectival use is very rare. The past active participle is a **bookish form**: it exists in most Slavic languages but is rarely used in spoken language. In Standard Interslavic it MAY be used in formal or literary registers.

### 5.7.8.5. Present Passive Participle (-omy / -imy)

The **present passive participle** is derived from the **present tense stem**:

- First Conjugation: present stem + `-omy` (or `-emy` after a soft consonant)
- Second Conjugation: present stem + `-imy`

| Infinitive | Present stem | Present passive participle | Gloss |
|---|---|---|---|
| :isv[dělati] | :isv[dělaj-] | :isv[dělajemy] | "being done" |
| :isv[nesti] | :isv[nes-] | :isv[nesomy] | "being carried" |
| :isv[hvaliti] | :isv[hvali-] | :isv[hvalimy] | "being praised" |

This participle is rarely used in most Slavic languages. Some forms have become **lexicalized adjectives** with shifted meanings: :isv[vidimy] means "visible" rather than "being seen." Its use in Interslavic is permitted but not required; the reflexive passive construction (§5.7.10.2) is generally preferred.

### 5.7.8.6. Past Passive Participle (-ny / -eny / -ty)

The **past passive participle** is formed from the **infinitive stem**:

| Infinitive type | Suffix | Example |
|---|---|---|
| Stem ends in vowel | `-ny` | :isv[dělati] → :isv[dělany] "done"; :isv[pisati] → :isv[pisany] "written" |
| Stem ends in consonant | `-eny` | :isv[nesti] → :isv[neseny] "carried"; :isv[vezti] → :isv[vezeny] "carried (by vehicle)" |
| `-iti` verbs | `-jeny` (with iotation) | :isv[govoriti] → :isv[govorjeny] "spoken"; :isv[ljubiti] → :isv[ljubjeny] "loved"; :isv[prositi] → :isv[prošeny] "required" |
| `-nuti` verbs | `-neny` | :isv[tegnuti] → :isv[tegneny] "pulled"; :isv[dvignuti] → :isv[dvigneny] "moved" |
| Monosyllabic stems (except `-a`), i.e. stems with `-j-` in present | `-ty` | :isv[biti] → :isv[bity] "beaten"; :isv[čuti] → :isv[čuty] "felt"; :isv[podjeti] → :isv[podjety] "undertaken" |

**Iotation in `-iti` verbs:** The stem-final consonant merges with `-j-` as follows: `sj` → `š`, `zj` → `ž`, `tj` → `č`, `dj` → `dž`, `stj` → `šč`, `zdj` → `ždž`.

The past passive participle inflects as a regular hard-type adjective.

---

## 5.7.9. Verbal Nouns (Gerunds)

### 5.7.9.1. Formation from Past Passive Participle

A **verbal noun** (gerund) is formed from the past passive participle by substituting:

- `-ny` → `-nje`
- `-ty` → `-tje`

| Verb | Past passive participle | Verbal noun | Gloss |
|---|---|---|---|
| :isv[dělati] | :isv[dělany] | :isv[dělanje] | "the act of doing" |
| :isv[piti] | :isv[pity] | :isv[pitje] | "drinking" |
| :isv[pisati] | :isv[pisany] | :isv[pisanje] | "writing" |
| :isv[govoriti] | :isv[govorjeny] | :isv[govorjenije] | "speaking, speech" |

:::caution[Unverified Content]
The verbal noun form :isv[govorjenije] appears inconsistent with the stated rule (`-ny` → `-nje`), which would produce :isv[govorjenje], not :isv[govorjenije]. The source gives no explicit example of verbal nouns from `-iti` verbs with `-eny` endings.
:::

Verbal nouns are grammatically neuter nouns and decline as regular Second Declension neuter nouns in `-e` (soft type). They express the action as an abstract concept.

---

## 5.7.10. Passive Voice

### 5.7.10.1. Passive with byti + Past Passive Participle

:::caution[Unverified Content]
The MUST requirement for participle agreement in "gender, number, and case" is not explicitly stated in the source. The source describes the passive construction but does not formalize agreement rules. The elaborated table below (with conditional and past conditional rows) goes beyond the source's examples.
:::

The **analytical passive** is formed by combining an appropriate form of :isv[byti] with the **past passive participle** (or, for imperfective verbs in the present tense, the present passive participle). The participle MUST agree with the grammatical subject in gender, number, and case.

| Tense/Mood | Construction | Example | Gloss |
|---|---|---|---|
| Present (impf.) | :isv[byti] (pres.) + pres. pass. part. | :isv[ja jesm nesomy] | "I am being carried" |
| Present (pf.) | :isv[byti] (pres.) + past pass. part. | :isv[ja jesm neseny] | "I am carried (resultative)" |
| Past | :isv[byl] + past pass. part. | :isv[ja byl neseny] | "I was carried / have been carried" |
| Future | :isv[bųdų] + past pass. part. | :isv[ja bųdų neseny] | "I will be carried" |
| Conditional | :isv[byh] + past pass. part. | :isv[ja byh neseny] | "I would be carried" |
| Past conditional | :isv[byl byh] + past pass. part. | :isv[ja byl byh neseny] | "I would have been carried" |

:::caution[Unverified Content]
Sections 5.7.10.2 and 5.7.10.3 on the reflexive passive and the passive avoidance recommendation are not covered in the source material. The source does not discuss the reflexive-passive construction or register-based preferences for passive voice strategies.
:::

### 5.7.10.2. Reflexive Passive with -sę

The **reflexive-passive** construction, using the reflexive particle :isv[sę], is the **preferred** alternative to the analytical passive in most registers:

- :isv[pica dělaje sę] — "pizza is being made"
- :isv[Kak sę to dělaje?] — "How is that done?"

The reflexive passive SHOULD be used in preference to the analytical passive in casual and colloquial speech.

### 5.7.10.3. Avoidance Recommendation

Analytical passive constructions SHOULD be avoided in casual speech in favor of active or reflexive-passive constructions. In formal, administrative, and written registers the analytical passive is fully acceptable.

---

## 5.7.11. Irregular Verbs

### 5.7.11.1. Byti (to be): Full Paradigm

The verb :isv[byti] "to be" is the only truly irregular verb in Interslavic. Its paradigm must be learned in full.

**Present tense:**

| Person/Number | Form |
|---|---|
| 1sg. | :isv[jesm] |
| 2sg. | :isv[jesi] |
| 3sg. | :isv[jest] / :isv[je] |
| 1pl. | :isv[jesmo] |
| 2pl. | :isv[jeste] |
| 3pl. | :isv[sųt] |

:::caution[Unverified Content]
The normative claims that the copula is "obligatory" (MUST NOT omit) and that short/enclitic forms are "not part of Standard Interslavic" are not stated in the source material. The source does not discuss copula omission rules or enclitic forms of :isv[byti].
:::

The use of the copula is **obligatory** in Interslavic in the present tense, following the West and South Slavic pattern. East Slavic speakers MUST NOT omit the present-tense copula in the way that Russian omits *есть*.

The short (enclitic) forms of the copula (:isv[sòm, si, je, smo, ste, sųt]) are present in many Slavic languages (Serbian/Croatian, Slovenian, Slovak, Bulgarian) but are **not** part of Standard Interslavic. Speakers who know these forms MAY use them; if doing so, the South Slavic convention that the short form cannot begin a sentence SHOULD be followed.

**Future tense of :isv[byti]:** Formed regularly from the stem :isv[bud-]:

| Person/Number | Form |
|---|---|
| 1sg. | :isv[bųdų] / :isv[bųdem] |
| 2sg. | :isv[bųdeš] |
| 3sg. | :isv[bųde] |
| 1pl. | :isv[bųdemo] |
| 2pl. | :isv[bųdete] |
| 3pl. | :isv[bųdųt] |

**Simple past (aorist) of :isv[byti]:** Two stems are available:

| Person/Number | Stem :isv[by-] | Stem :isv[bě-] |
|---|---|---|
| 1sg. | :isv[byh] | :isv[běh] |
| 2sg. | :isv[by] | :isv[bě] |
| 3sg. | :isv[by] | :isv[bě] |
| 1pl. | :isv[byhmo] | :isv[běhmo] |
| 2pl. | :isv[byste] | :isv[běste] |
| 3pl. | :isv[byhų] | :isv[běhų] |

:::caution[Unverified Content]
The explanation that the :isv[bě-] forms "arose under the influence of the imperfect" is not stated in the source material.
:::

The :isv[by-] stem forms are used for the **conditional auxiliary** (see §5.7.6). The :isv[bě-] forms arose under the influence of the imperfect.

**L-participle of :isv[byti]:** :isv[byl] (m.), :isv[byla] (f.), :isv[bylo] (n.), :isv[byli] (pl.)

**Imperative of :isv[byti]:** :isv[bųď] (2sg.), :isv[bųďmo] (1pl.), :isv[bųďte] (2pl.)

### 5.7.11.2. Dati, Jesti, Věděti (Athematic Conjugation)

The verbs :isv[dati] "to give", :isv[jesti] "to eat", and :isv[věděti] "to know" form their present tense according to the **athematic conjugation**, whose root ends in a vowel:

**Present tense:**

| Person/Number | :isv[dati] | :isv[jesti] | :isv[věděti] |
|---|---|---|---|
| 1sg. | :isv[dam] | :isv[jem] | :isv[věm] |
| 2sg. | :isv[daš] | :isv[ješ] | :isv[věš] |
| 3sg. | :isv[da] | :isv[je] | :isv[vě] |
| 1pl. | :isv[damo] | :isv[jemo] | :isv[věmo] |
| 2pl. | :isv[date] | :isv[jeste] | :isv[věte] |
| 3pl. | :isv[dadųt] | :isv[jedųt] | :isv[vědųt] |

:::caution[Unverified Content]
The 2pl. form of :isv[jesti] is shown as :isv[jeste], but the secondary source (code observations) gives :isv[jete]. The form :isv[jeste] is identical to the 2pl. of :isv[byti] ("you are"), which could cause ambiguity.
:::

All other forms of these verbs are formed **regularly** from their respective infinitive stems.

:::caution[Unverified Content]
The imperative forms for :isv[dati], :isv[jesti], and :isv[věděti] are not given in the source material. The source states only that "all other forms of these three verbs are formed regularly" without providing imperative paradigms.
:::

**Imperative forms:**

| Verb | 2sg. | 1pl. | 2pl. |
|---|---|---|---|
| :isv[dati] | :isv[daj] | :isv[dajmo] | :isv[dajte] |
| :isv[jesti] | :isv[jěď] | :isv[jěďmo] | :isv[jěďte] |
| :isv[věděti] | :isv[věď] | :isv[věďmo] | :isv[věďte] |

**Note:** The verb :isv[iměti] "to have" is not athematic in Standard Interslavic. It follows the Third (contracted) Conjugation or the First Conjugation with the `-aj-` stem (see §5.7.2.4 and §5.7.11.4).

### 5.7.11.3. Idti and Its Compounds

The verb :isv[idti] "to go (on foot, directional)" is conjugated **regularly** in the present tense:

| Person/Number | Form |
|---|---|
| 1sg. | :isv[idų] / :isv[idem] |
| 2sg. | :isv[ideš] |
| 3sg. | :isv[ide] |
| 1pl. | :isv[idemo] |
| 2pl. | :isv[idete] |
| 3pl. | :isv[idųt] |

Its only irregularity is the **suppletive L-participle**: :isv[šel] (m.), :isv[šla] (f.), :isv[šlo] (n.), :isv[šli] (pl.), sometimes written with an initial vowel: :isv[išel], :isv[išla], :isv[išlo], :isv[išli].

The suppletive form carries through all **prefixed compounds**:

| Compound | Meaning | L-participle (m.) |
|---|---|---|
| :isv[pojdti] | "to go, to set off" | :isv[pošel] |
| :isv[vojdti] | "to enter" | :isv[všel] |
| :isv[prijdti] | "to come, to arrive" | :isv[prišel] |
| :isv[odidti] | "to go away" | :isv[otšel] |
| :isv[najdti] | "to find" | :isv[našel] |

:::caution[Unverified Content]
The L-participle forms :isv[otšel] and :isv[našel] are not attested in the source material. The source only gives :isv[pošel] and :isv[všel] as examples of prefixed compounds of :isv[idti]. The form :isv[otšel] (with `t` instead of `d`) implies a devoicing rule not stated in the source.
:::

The alternative infinitive spelling :isv[iti] (without the *d*) is fully acceptable.

:::caution[Unverified Content]
This entire subsection on :isv[iměti] has no basis in the source material. The source does not mention :isv[iměti], its conjugation, the :isv[němati] negative form, or the recommendation to use :isv[iměti] instead of the Russian-style construction. The paradigm tables, the note on :isv[němati], and the impersonal usage of :isv[něma] are all unsourced.
:::

### 5.7.11.4. Iměti (to have)

The verb :isv[iměti] "to have" is the standard means of expressing possession in Interslavic. (Russian speakers should note that the *u menja jest* construction, while comprehensible, is not idiomatic Interslavic; the verb :isv[iměti] SHOULD be used instead.)

:isv[Iměti] follows the Third (contracted) Conjugation or the First Conjugation with `-aj-` stem:

| Person/Number | Full form (1st Conj.) | Contracted form (3rd Conj.) |
|---|---|---|
| 1sg. | :isv[imajų] | :isv[imam] |
| 2sg. | :isv[imaješ] | :isv[imaš] |
| 3sg. | :isv[imaje] | :isv[ima] |
| 1pl. | :isv[imajemo] | :isv[imamo] |
| 2pl. | :isv[imajete] | :isv[imate] |
| 3pl. | :isv[imajųt] | :isv[imajųt] |

**Negation:** The negative "to not have" is expressed either with regular :isv[ne iměti] or with the lexicalized form :isv[němati]:

| Person/Number | :isv[němati] (contracted) |
|---|---|
| 1sg. | :isv[němam] |
| 2sg. | :isv[němaš] |
| 3sg. | :isv[něma] |
| 1pl. | :isv[němamo] |
| 2pl. | :isv[němate] |
| 3pl. | :isv[němajųt] |

The 3sg. form :isv[něma] MAY be used impersonally with the meaning "there is no / there are no": :isv[Nema nas tu] "We are not here / There's none of us here."
