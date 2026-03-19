# Verbs
This section specifies the grammatical categories, conjugation classes, tense and mood systems, non-finite forms, and irregular verb paradigms for verbs in Interslavic. All normative rules use the terms MUST, SHALL, SHOULD, and MAY as defined in RFC 2119.

---

## Verbal Aspect
### Perfective and Imperfective: Definition
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

### Aspect Pairs: Morphological Relationships
Aspect pairs are formed by one of three mechanisms:

1. **Prefixation of a bare imperfective** creates a perfective with a narrowed or directional meaning. The resulting perfective then frequently acquires a secondary imperfective (see the relevant section):
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

### Secondary Imperfective Formation Rules
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

### Aspect Selection Rules
:::caution[Unverified Content]
The source material provides informal guidance on aspect usage but does not formulate these as MUST/SHOULD normative rules. In particular, the rules about phase verbs, verbs of perception, and negated contexts are not stated in the source.
:::

The following normative rules govern aspect selection:

- An imperfective verb MUST be used to express an **ongoing or progressive** action: :isv[ja jesm dělal] "I was doing / I have been doing."
- A perfective verb MUST be used to express a **completed action** whose result is relevant: :isv[ja jesm sdělal] "I have done (and finished)."
- An imperfective verb MUST be used for **habitual or repeated** actions: :isv[on jezdil do Moskvy] "he used to go to Moscow."
- An imperfective verb MUST be used with **phase verbs** (begin, continue, stop) and with verbs of perception governing a subordinate action.
- An imperfective verb SHOULD be used in negated contexts where completion of the action is denied: :isv[ja ne pisal] "I was not writing / I did not write."

### Verbs of Motion: Three-Way Aspect Distinction
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

## Conjugation Classes
### Two-Stem System: Infinitive Stem and Present Tense Stem
All inflected forms of a verb derive from one of two stems:

1. **The infinitive stem** is obtained by removing the infinitive ending `-ti`. It serves as the base for the past tense, conditional mood, past participles, and verbal nouns.
2. **The present tense stem** is used for the present tense, imperative mood, and present participles.

The infinitive ending in Interslavic is always `-ti`. Verbs with stems ending in `-k` or `-g` retain those consonants in the infinitive (:isv[mogti], :isv[pekti]) rather than using the contracted forms (:isv[moči], :isv[peči]) in order to keep the stem transparent.

**Special case — verbs in `-sti`:** The infinitive stem may end in `d`, `t`, or `s`. These verbs are listed in the dictionary with the 3rd person singular present tense shown in parentheses, e.g. :isv[klasti] (:isv[klade]), :isv[pasti] (:isv[pade]), :isv[gnesti] (:isv[gnete]), to distinguish them from verbs like :isv[nesti] (stem: :isv[nes-]).

When the present tense stem cannot be derived by the regular rules below, it is given in the dictionary. Examples: :isv[pisati] (:isv[piše]), :isv[htěti] (:isv[hoče]), :isv[spati] (:isv[spi]), :isv[zvati] (:isv[zove]), :isv[brati] (:isv[bere]), :isv[vzeti] (:isv[vozme]).

### First Conjugation (Non-i-Stems)
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

### Second Conjugation (-iti / -ěti, i-Stems)
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

### Third Conjugation (Contracted -aje- Forms)
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

## Present Tense
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

## Optional Dual Number in Verb Conjugation

The dual number in verbs is entirely optional and corresponds to the optional dual in nouns and pronouns (see the nouns chapter for the full discussion of dual number status). Dual verb forms distinguish masculine from feminine/neuter in the endings. The dual has distinct forms for 1st person (1du.) and 2nd/3rd person (2du./3du., which share one form).

:::info[Source: Lombino (2021)]
The dual verb paradigm below is based on Roberto Lombino's reconstruction from Old Church Slavonic and Slovenian models. The ending :isv[-tě] for 2du./3du. feminine/neuter was proposed by Konstantin as an innovation to avoid ambiguity with other forms, but is not attested in Old Church Slavonic.
:::

**Present tense dual endings (example: :isv[dělati] "to do"):**

| Person | Masculine | Feminine/Neuter |
|--------|-----------|-----------------|
| 1du. | :isv[na dělajeva] | :isv[ně dělajeve] |
| 2du. | :isv[va dělajeta] | :isv[vě dělajete] (or :isv[-tě]) |
| 3du. | :isv[ona dělajeta] | :isv[one dělajete] (or :isv[-tě]) |

The dual personal pronouns used with these forms are: :isv[na] / :isv[ně] (1du. masc. / fem.), :isv[va] / :isv[vě] (2du.), :isv[ona] / :isv[one] (3du.).

**Simple past (aorist) dual endings:**

| Person | Masculine | Feminine/Neuter |
|--------|-----------|-----------------|
| 1du. | :isv[dělahova] | :isv[dělahově] |
| 2du./3du. | :isv[dělasta] | :isv[dělaste] (or :isv[-tě]) |

For the imperfect, the same pattern applies with the imperfect stem: :isv[dělašta] / :isv[dělašte].

**Compound past (perfect) dual:**

The L-participle takes dual gender agreement, and the auxiliary :isv[byti] takes dual forms:

| Person | Masculine | Feminine/Neuter |
|--------|-----------|-----------------|
| 1du. | :isv[dělala (je)sva] | :isv[dělale (je)svě] |
| 2du./3du. | :isv[dělala (je)sta] | :isv[dělale (je)ste] (or :isv[-tě]) |

---

## Past Tense
### Compound Past (Primary): L-Participle + byti
The primary past tense of Interslavic is the **compound past**, formed by combining the present tense of the auxiliary verb :isv[byti] "to be" with the **L-participle** of the main verb.

The L-participle is formed by appending the suffix `-l` (+ gender/number ending) to the **infinitive stem**:

| Gender/Number | Suffix | Example (:isv[pisati]) |
|---|---|---|
| Masculine singular | `-l` | :isv[pisal] |
| Feminine singular | `-la` | :isv[pisala] |
| Neuter singular | `-lo` | :isv[pisalo] |
| Plural (all genders) | `-li` | :isv[pisali] |

:::info[Literary Register: Gender-Differentiated Plural L-Participle]
In Standard Interslavic, the L-participle plural ending is `-li` for all genders. Lombino (2022) proposes restoring the gender distinction in the plural for the literary register:

- `-li` for masculine animate plural: :isv[dělali] (men did)
- `-ly` for masculine inanimate and feminine plural: :isv[dělaly] (women did, things did)
- `-la` for neuter plural: :isv[dělala] (neuter things did)

Gender precedence in mixed groups follows: masculine animate > masculine inanimate/feminine > neuter. This system is preserved in Ukrainian (_робили/робили/робила_) and partially in Polish (_robili/robiły_), where the virile/non-virile distinction in past tense forms is a core grammatical feature. Standard Interslavic's unified `-li` follows the Russian and South Slavic pattern where the plural L-participle is invariant.
:::

:::info[Literary Register: Full vs. Clitic Forms of byti]
Lombino (2022) formalizes a distinction between **full (stressed)** and **clitic (unstressed)** forms of the present tense of :isv[byti]:

| Person | Full form | Clitic form |
|---|---|---|
| 1sg. | :isv[jesmj] | :isv[sŭm] |
| 2sg. | :isv[jesi] | :isv[si] |
| 3sg. | :isv[jest] | :isv[je] |
| 1pl. | :isv[jesjmo] | :isv[sjmo] |
| 2pl. | :isv[jesjte] | :isv[sjte] |
| 3pl. | :isv[jesųt] | :isv[sųt] |

Full forms appear sentence-initially or after a personal pronoun; clitic forms appear in second position (Wackernagel position) after the first stressed phrase: :isv[Jesmj gladŭn.] vs. :isv[Gladŭn sŭm.] This distinction mirrors Serbian/Croatian, Slovenian, Bulgarian, and Slovak clitic systems. Standard Interslavic already notes that the short forms MAY be used but does not formalize their positional distribution.

Similarly, the first person pronoun has full (:isv[az]) and clitic (:isv[ja]) forms, with :isv[az] used when stressed and :isv[ja] in second position: :isv[Az ne imějų vrěmene.] ("I don't have time" --- emphasis on "I") vs. :isv[Ne imějų ja vrěmene.] ("I don't have time" --- emphasis on "don't have").
:::

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

### L-Participle Formation
The L-participle is always formed regularly from the infinitive stem, with one exception:

- :isv[idti] "to go" has the suppletive L-participle :isv[šel] (m.), :isv[šla] (f.), :isv[šlo] (n.), :isv[šli] (pl.). The alternative forms :isv[išel], :isv[išla] etc. are also acceptable.
- This suppletive form carries through **all prefixed compounds**: :isv[pojdti] → :isv[pošel], :isv[vojdti] → :isv[všel], :isv[prijdti] → :isv[prišel], etc.

:::caution[Unverified Content]
The rule about consonant cluster preservation in the L-participle (no cluster simplification) is not discussed in the source material. The examples :isv[mogl], :isv[grebl], :isv[izrěkl] are not attested in the source.
:::

When the infinitive stem ends in a consonant cluster (e.g. :isv[mogti] → stem :isv[mog-]), the L-participle does not undergo the cluster simplification that occurs in East Slavic: :isv[mogl], :isv[grebl], :isv[izrěkl] (not :isv[mog], :isv[greb], :isv[izrěk]).

### Interpretation: Aspect Determines Perfectivity of Past
The aspectual value of the compound past is determined by the lexical aspect of the main verb:

- **Imperfective + compound past** = ongoing or habitual past: :isv[ja jesm dělal] "I was doing / I used to do."
- **Perfective + compound past** = completed past (perfect): :isv[ja jesm sdělal] "I have done (and finished)."

### Simple Past (Aorist/Imperfect — Optional)
:::caution[Committee Review Needed]
The simple past conflates the aorist and imperfect. The Steen grammar treats this as a single optional category; the Ranmaru sources note the distinction and propose treating them separately for audiences familiar with South Slavic. The present specification follows the Steen position: aorist and imperfect are merged into a single **simple past** paradigm for Standard Interslavic, with an informative note that speakers with South Slavic backgrounds MAY distinguish them. The detailed aorist/imperfect paradigms given in the relevant section are optional extensions.
:::

:::info[Literary Register: Distinct Aorist and Imperfect]
Lombino (2022) treats the aorist and imperfect as distinct tenses in the literary register, following the full Common Slavic and Old Church Slavonic system:

- The **aorist** is used primarily with perfective verbs and denotes a completed action in the past.
- The **imperfect** is used with imperfective verbs and denotes an ongoing or habitual action in the past. Its stem is formed from the infinitive stem with the suffix `-ja-` for consonant-stem verbs: :isv[nesti] > :isv[nesjah], :isv[vezti] > :isv[vezjah], :isv[idti] > :isv[idjah].

The literary register also includes a full tense system with:
- **Pre-present (perfect)**: compound past with :isv[byti]
- **Pre-past (pluperfect)**: :isv[běh] + L-participle
- **Future**: :isv[bųdų] + infinitive
- **Pre-future (future perfect)**: :isv[bųdų] + L-participle
- **Future-in-the-past**: imperfect of :isv[byti] (:isv[budjah]) + infinitive

This expanded tense system mirrors the full Old Church Slavonic temporal paradigm, which no single modern Slavic language preserves in its entirety but whose individual elements survive across the family.
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

### Distinguishing the Aorist and Imperfect (Extended System)

In the extended tense system, the aorist and imperfect are distinct tenses rather than a single "simple past." The **aorist** denotes a past action that reached its endpoint; it is the narrative tense of foregrounded events. The **imperfect** denotes a past action that was ongoing, durative, or repeated; it provides background narration.

As a general principle, **perfective verbs typically take the aorist** and **imperfective verbs typically take the imperfect**, since aspect and tense reinforce each other. However, cross-combinations are possible (see "Usage notes" below).

#### Aorist Formation

The aorist is formed from the **infinitive stem** (or equivalently, the L-participle stem without `-l`). Its endings are identical to the merged simple past given above, with one key difference: the **2sg. and 3sg. have a zero ending** (no `-še`):

| Person/Number | Vowel-stem example (:isv[sdělati]) | Consonant-stem example (:isv[odvesti]) |
|---|---|---|
| 1sg. | :isv[sdělah] | :isv[odvedeh] / :isv[odvedoh] |
| 2sg. | :isv[sděla] | :isv[odvede] |
| 3sg. | :isv[sděla] | :isv[odvede] |
| 1pl. | :isv[sdělahmo] | :isv[odvedehmo] |
| 2pl. | :isv[sdělaste] | :isv[odvedeste] |
| 3pl. | :isv[sdělašę] / :isv[sdělahų] | :isv[odvedešę] / :isv[odvedehų] |

The 3pl. ending `-šę` follows the Serbian/Croatian pattern. Other living languages with the aorist (Bulgarian, Macedonian) use only `-hų` in this position; both forms are acceptable in Interslavic.

#### Imperfect Formation

The imperfect is formed from the **present tense stem** (specifically the 3sg. present form). Three formation strategies exist, all attested in living Slavic languages. They may be combined.

**Strategy 1 — :isv[-jah] endings (from the 3sg. present):** The most regular approach. Take the 3sg. present form and append `-jah`, `-jaše`/`-ješe`, etc. If the 3sg. already ends in `-j`, the endings attach directly to it.

| Person/Number | Ending |
|---|---|
| 1sg. | `-jah` |
| 2sg. | `-jaše` / `-ješe` |
| 3sg. | `-jaše` / `-ješe` |
| 1pl. | `-jahmo` |
| 2pl. | `-jašte` / `-ješte` |
| 3pl. | `-jahų` |

Examples: :isv[peče] → :isv[pečejah]; :isv[ǉubi] → :isv[ǉubijah]; :isv[pije] → :isv[pijah]; :isv[dělaje] → :isv[dělajah].

For verbs with 3sg. in `-aje`/`-a` (the `-ati` class), shortened forms without `-ja-` are also acceptable: :isv[dělah], :isv[dělaše] (identical to the merged simple past).

**Strategy 2 — :isv[-ěh] endings (with vowel ě):** Close to Old Czech and often Bulgarian. Take the 3sg. present, drop the final vowel, and add `-ěh`, `-ěše`, etc.

Examples: :isv[prosi] → :isv[prosěh]; :isv[vede] → :isv[veděh]; :isv[peče] → :isv[pečěh]/`:isv[pečeh]`.

After `č`, `j`, `š`, `ž`, the vowel `ě` MAY be simplified to `e`.

**Strategy 3 — consonant alternation (with -ah endings):** Close to Serbian/Croatian. Based on the past passive participle stem (the `-eny`/`-eńje` form). If a soft consonant precedes `-eny`, add `-ah`, `-aše`; otherwise add `-jah`, `-jaše` (which may trigger iotation).

Examples: :isv[govorjeny] → :isv[govorjah]; :isv[prošeny] → :isv[prošah]; :isv[vedeny] → :isv[vedjah]/`:isv[ved́ah]`.

#### Imperfect Paradigm Example

Full paradigm of :isv[viděti] (impf.) contrasted with :isv[uviděti] (pf.) using Strategy 1:

| Person/Number | Aorist (:isv[uviděti]) | Imperfect (:isv[viděti]) |
|---|---|---|
| 1sg. | :isv[uviděh] | :isv[vidijah] |
| 2sg. | :isv[uvidě] | :isv[vidijaše] / :isv[vidiješe] |
| 3sg. | :isv[uvidě] | :isv[vidijaše] / :isv[vidiješe] |
| 1pl. | :isv[uviděhmo] | :isv[vidijahmo] |
| 2pl. | :isv[uviděste] | :isv[vidijašte] / :isv[vidiješte] |
| 3pl. | :isv[uviděšę] / :isv[uviděhų] | :isv[vidijahų] |

#### Distinctive Endings: Aorist vs. Imperfect

The key formal differences between the two tenses are:

| Feature | Aorist | Imperfect |
|---|---|---|
| 2sg./3sg. | Zero ending (:isv[sděla], :isv[odvede]) | `-jaše`/`-ješe`/`-ěše`/`-aše` |
| 2pl. | `-ste` | `-šte` (following Upper Sorbian and historical Proto-Slavic `-šete`) |
| 3pl. | `-šę` (optional) or `-hų` | `-hų` only |
| Stem base | Infinitive stem | Present tense stem (strategies 1–2) or passive participle stem (strategy 3) |

#### Irregular Imperfects

- :isv[byti]: always :isv[běh], :isv[běše] (alternative 2sg./3sg.: :isv[bě]).
- :isv[iměti]: :isv[imah]/`:isv[imaše]` or :isv[imějěh]/`:isv[imějěše]`.
- :isv[idti] and compounds: :isv[id́ah]/`:isv[id́aše]` or :isv[ideh]/`:isv[ideše]`; compound :isv[prijdti] → :isv[priideh]/`:isv[priide]` (not \*:isv[prišeh]).
- :isv[dati]: aorist :isv[dadeh]/`:isv[dadoh]`/`:isv[dah]`, with 2sg./3sg. :isv[dade]/`:isv[dado]`/`:isv[da]`.

#### Usage Notes

1. **Imperfect of perfective verbs** is possible and expresses a repeated action that always reached completion: :isv[Vsegda, kogda pogledijah...] "Every time I looked..."
2. **Aorist of imperfective verbs** is possible, especially for verbs without a perfective counterpart, to emphasize that the action came to an end: :isv[Hodih v tu školu 9 let] "I went to that school for 9 years (and then stopped)."

:::warning[Unresolved: Merging vs. separating aorist and imperfect]
The standard position (following Jan van Steenbergen's grammar) merges the aorist and imperfect into a single "simple past" with one set of endings. Roberto Lombino's proposal (2022) argues that this merger is unnatural for speakers of languages that preserve the distinction (Bulgarian, Macedonian, Serbian/Croatian) and provides detailed formation rules for keeping the tenses separate. The three imperfect formation strategies described above are from this proposal.

Key tensions:
- **Simplicity vs. naturalness:** A merged paradigm is simpler for learners, but speakers of South Slavic languages expect the distinction.
- **Stem choice for the imperfect:** The three strategies (from 3sg. present with `-jah`, from 3sg. present with `-ěh`, from passive participle stem with consonant alternation) produce different forms; no single strategy has been adopted as normative.
- **2pl. ending:** Should the imperfect use `-šte` (distinct from aorist `-ste`) or should both share `-ste`? The `-šte` form has historical and Upper Sorbian support but adds complexity.
- **3pl. aorist:** Should the ending `-šę` (Serbian/Croatian pattern) be permitted alongside `-hų`?

A committee decision is needed on whether the extended system formally recognizes two separate tenses or retains the merged simple past as the only option.
:::

### Pluperfect (Optional)
The **pluperfect** (past-before-past) is an optional tense. It is formed by combining the L-participle with the **past tense of :isv[byti]**, either the simple past or compound past:

- :isv[ja běh dělal] "I had been doing" (using simple past of :isv[byti])
- :isv[ja byl jesm dělal] "I had been doing" (using compound past of :isv[byti])

The pluperfect SHOULD be used to explicitly signal that one past action preceded another past action. Its use is optional and MAY be replaced by the compound past with appropriate temporal adverbs.

---

## Future Tense
### Compound Future: bųdų + Infinitive
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

### Perfective Present as Future
In East and West Slavic languages, the present tense forms of a **perfective** verb regularly express future meaning (e.g. Russian *напишу* "I will write"). This usage is possible in Interslavic but **SHOULD be avoided** when addressing South Slavic speakers, for whom the present tense of a perfective verb does not carry automatic future meaning and may be misunderstood as present habitual.

:::info[TODO: Committee Input Needed]
A normative ruling is needed on whether the use of the perfective present as future is (a) fully equivalent to the compound future, (b) a permitted stylistic variant, or (c) restricted to registers targeting non-South-Slavic audiences. Currently the Steen source recommends avoidance; the Ranmaru source explains the South Slavic motivation in detail.
:::

:::warning[Unresolved: Multiple Future Tenses and Perfective Present Semantics]
Lombino (2022) describes a system of **three semantically distinct future constructions** in the literary register, each conveying a different degree of certainty or obligation:

1. :isv[bųdų] + infinitive = **certain future** at a concrete moment: :isv[Dnesj večer bųdų govoriti s prijateli.] ("Tonight I will speak with friends." --- it is settled.)
2. :isv[htěti]/`:isv[těti]` + infinitive = **planned or uncertain future**: :isv[Za tydŭnj hoćų jěhati k roditeljem.] ("In a week I intend to go to my parents.")
3. :isv[imati] + infinitive = **obligatory future**: :isv[Iz'jutra imajų cělyj dŭnj sěděti v školě.] ("Tomorrow I have to sit in school all day." --- obligation, not desire.)

Additionally, Lombino proposes that the **perfective present** may express **general/gnomic** truths where completion is inherent but time is unspecified: :isv[Bylŭn čaj pomože protiv mnogym bolestem.] ("Herbal tea helps against many illnesses." --- a general fact about the effect, not a specific future event.) This semantic interpretation differs from both the East Slavic pattern (perfective present = future) and the South Slavic pattern (perfective present = subordinate clause only), and represents a third possibility attested in some West Slavic usage.

All three future constructions can also be projected into the past (future-in-the-past) using the imperfect of the auxiliary: :isv[budjah čitati] "I was going to read", :isv[hočah čitati] "I intended to read", :isv[imah čitati] "I was supposed to read".

These distinctions are productive in individual Slavic languages (Czech, Slovak, and South Slavic for :isv[imati]; Polish and Serbian/Croatian for :isv[htěti]; English calques notwithstanding, the :isv[idti] + infinitive pattern parallels French *aller* + infinitive and is attested colloquially in Czech and Polish). Whether and how to incorporate them into Interslavic norms remains undecided.
:::

---

## Conditional Mood
### Present Conditional: by + L-Participle
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

### Past Conditional
The **past conditional** (expressing a counterfactual about the past) is formed by inserting the past form of :isv[byti] into the standard conditional:

- :isv[ja byl byh dělal] "I would have done" (masculine)
- :isv[ja byla byh dělala] "I would have done" (feminine)

---

## Imperative Mood
### Formation from Present Stem
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

### Third-Person Optative with nehaj
Interslavic has no synthetic imperative for the 3rd person. Third-person commands and wishes are expressed with the **optative particle :isv[nehaj]** followed by the indicative form of the verb:

- :isv[Nehaj umre!] — "Let him die!"
- :isv[Nehaj žive dolgo!] — "May he live long!"

### Hortative First Plural
The 1st person plural imperative functions as an **inclusive hortative** ("let us"):

- :isv[dělajmo] — "let's do!"
- :isv[pojdimo] --- "let's go!"

:::warning[Unresolved: Subjunctive Mood and Supine]
Lombino (2022) describes two additional verbal categories for the literary register that are absent from Standard Interslavic:

**Supine.** The supine is a truncated form of the infinitive (infinitive minus the final `-i`, yielding forms ending in `-t`) used after verbs of motion: :isv[Hoćų spati.] ("I want to sleep" --- infinitive) vs. :isv[Idų spat.] ("I'm going to sleep" --- supine). The supine is preserved productively in Slovenian, Sorbian, and (vestigially) in Czech and Slovak. Its inclusion in Interslavic would provide a syntactic distinction between purpose-of-motion and general complement clauses that many Slavic speakers would recognize.

**Subjunctive (conjunctive) mood.** Lombino proposes a full subjunctive mood distinct from the conditional, formed by adding shortened personal endings to the infinitive stem: :isv[dělam], :isv[dělas], :isv[děla(st)], :isv[dělamo], :isv[dělate], :isv[děla]. This mood would be used after conjunctions expressing uncertainty (:isv[da] "that [subjunctive]", :isv[jestli] "whether") and in subordinate clauses of purpose and doubt. The paradigm derives from the Old Church Slavonic subjunctive (itself historically the optative) and parallels the :isv[da]-construction in South Slavic languages.

The subjunctive would exist across multiple tenses (present, past, future, and their pre- variants), creating a substantial expansion of the verbal paradigm. The author acknowledges potential ambiguity between subjunctive and indicative forms for many verbs and proposes an epenthetic `-d-` to disambiguate: :isv[děladem], :isv[dělades] (subjunctive) vs. :isv[dělajemo], :isv[dělajete] (indicative).

These categories reveal a fundamental tension: the conditional mood (:isv[byh dělal]) already handles counterfactual and hypothetical meaning in Standard Interslavic, and adding a subjunctive would require speakers to master an additional paradigm whose functional territory overlaps significantly with the conditional. The supine, by contrast, is a small addition (a single form per verb) with clear distributional rules. No committee decision has been reached on either feature.
:::

---

## Non-Finite Forms
### Infinitive
All infinitives end in **`-ti`**. This ending is invariant and serves as the dictionary citation form. The infinitive stem is the infinitive minus `-ti`.

:::caution[Unverified Content]
The source describes :isv[moči], :isv[peči], :isv[běči] as "less transparent" but does not say a `-ći` variant is "fully acceptable" nor does it use the normative SHOULD NOT. The source also does not mention a `-ći` ending variant at all (it uses `-či`).
:::

Verbs whose stems end in `-k` or `-g` retain these consonants before `-ti` (:isv[mogti], :isv[pekti], :isv[běgti]) rather than using the contracted South Slavic forms (:isv[moči], :isv[peči], :isv[běči]). The `-ći` variant is fully acceptable as an alternative but SHOULD NOT be the primary form in Standard Interslavic. The form :isv[iti] is an acceptable alternative to :isv[idti].

### Present Active Participle (-uči / -eči)
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

### Adverbial Present Active Participle (Transgressive)
The transgressive form (also called the adverbial present active participle) has the same endings as the attributive present active participle (`-uči`, `-eči`) but is **not inflected** for gender, number, or case. It MUST be co-indexed with the subject of the main clause. See the relevant section for formation.

### Past Active Participle (-vši / -ši)
The **past active participle** is formed from the **infinitive stem**:

- If the stem ends in a **vowel**: add `-vši`
- If the stem ends in a **consonant**: add `-ši`

| Infinitive | Infinitive stem | Past active participle | Gloss |
|---|---|---|---|
| :isv[sdělati] | :isv[sděla-] | :isv[sdělavši] | "having done" |
| :isv[ukrasti] (< :isv[ukrad-ti]) | :isv[ukrad-] | :isv[ukradši] | "having stolen" |
| :isv[nesti] | :isv[nes-] | :isv[nesši] | "having carried" |

This participle can be used adjectivally or adverbially. Its adjectival use is very rare. The past active participle is a **bookish form**: it exists in most Slavic languages but is rarely used in spoken language. In Standard Interslavic it MAY be used in formal or literary registers.

### Present Passive Participle (-omy / -imy)
The **present passive participle** is derived from the **present tense stem**:

- First Conjugation: present stem + `-omy` (or `-emy` after a soft consonant)
- Second Conjugation: present stem + `-imy`

| Infinitive | Present stem | Present passive participle | Gloss |
|---|---|---|---|
| :isv[dělati] | :isv[dělaj-] | :isv[dělajemy] | "being done" |
| :isv[nesti] | :isv[nes-] | :isv[nesomy] | "being carried" |
| :isv[hvaliti] | :isv[hvali-] | :isv[hvalimy] | "being praised" |

This participle is rarely used in most Slavic languages. Some forms have become **lexicalized adjectives** with shifted meanings: :isv[vidimy] means "visible" rather than "being seen." Its use in Interslavic is permitted but not required; the reflexive passive construction  is generally preferred.

### Past Passive Participle (-ny / -eny / -ty)
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

## Verbal Nouns (Gerunds)
### Formation from Past Passive Participle
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

## Passive Voice
### Passive with byti + Past Passive Participle
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
Sections and  on the reflexive passive and the passive avoidance recommendation are not covered in the source material. The source does not discuss the reflexive-passive construction or register-based preferences for passive voice strategies.
:::

### Reflexive Passive with -sę
The **reflexive-passive** construction, using the reflexive particle :isv[sę], is the **preferred** alternative to the analytical passive in most registers:

- :isv[pica dělaje sę] — "pizza is being made"
- :isv[Kak sę to dělaje?] — "How is that done?"

The reflexive passive SHOULD be used in preference to the analytical passive in casual and colloquial speech.

### Avoidance Recommendation
Analytical passive constructions SHOULD be avoided in casual speech in favor of active or reflexive-passive constructions. In formal, administrative, and written registers the analytical passive is fully acceptable.

---

## Irregular Verbs
### Byti (to be): Full Paradigm
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

The :isv[by-] stem forms are used for the **conditional auxiliary** (see the relevant section). The :isv[bě-] forms arose under the influence of the imperfect.

**L-participle of :isv[byti]:** :isv[byl] (m.), :isv[byla] (f.), :isv[bylo] (n.), :isv[byli] (pl.)

**Imperative of :isv[byti]:** :isv[bųď] (2sg.), :isv[bųďmo] (1pl.), :isv[bųďte] (2pl.)

### Dati, Jesti, Věděti (Athematic Conjugation)
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

**Note:** The verb :isv[iměti] "to have" is not athematic in Standard Interslavic. It follows the Third (contracted) Conjugation or the First Conjugation with the `-aj-` stem (see  and ).

### Idti and Its Compounds
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

### Iměti (to have)
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

---

## Yat (ě) Consistency in Verb Stems
### Principle
Verb stems that contain etymological yat (ě) SHOULD retain it consistently across all prefixed, suffixed, and aspect-derived forms. This follows from the general principle that Interslavic spelling preserves etymological vowel distinctions within a morpheme family (see the relevant section).

The distinction between :latn[ě] and :latn[e] in verb stems is not merely orthographic. It encodes a systematic sound correspondence across Slavic languages: etymological ě corresponds to different reflexes in different language groups (e.g., Czech í, Polish a/ia, Russian e/ё, Bulgarian я/е). Inconsistent use of ě within a verb family disrupts these correspondences and impairs the flavourization potential of Interslavic.

### Rule for Infinitive Endings
Interslavic verb infinitives end in :isv[-ěti] or :isv[-ęti] when the preceding consonant is hard. The ending :isv[-eti] occurs only after functionally soft consonants (:latn[j], :latn[č], :latn[š], :latn[ž], :latn[c]), where :latn[ě] is simplified to :latn[e] by the standard orthographic convention. A verb infinitive ending in :isv[-eti] after a non-soft consonant should be treated as a potential error and verified against its Proto-Slavic etymology.

### Examples of Consistent Application
| Root | Correct forms | Incorrect forms | Etymology |
|---|---|---|---|
| :isv[plěn-] "captive, plunder" | :isv[plěniti], :isv[zaplěniti], :isv[zaplěnjati] | \*:isv[pleniti] alongside :isv[zaplěniti] | OCS плѣнъ |
| :isv[trě-] "to rub" | :isv[trěti], :isv[utrěti] | \*:isv[treti], \*:isv[utreti] | PS \*terti; cf. Ru. _тереть_, Cz. _třít_ |
| :isv[mrě-] "to die" | :isv[mrěti], :isv[zamrěti], :isv[umrěti] | \*:isv[zamreti], \*:isv[umreti] | PS \*merti; cf. Ru. _замереть_, Cz. _zemřít_ |

### Special Case: drati vs. dreti
The verb meaning "to tear" presents a distinct issue. While some dictionary entries list :isv[dreti], the majority of Slavic languages reflect a Proto-Slavic form \*dьrati (with the same ablaut pattern as \*bьrati → :isv[brati]). The recommended form is therefore :isv[drati] with the present tense :isv[dere], parallel to :isv[brati] / :isv[bere]. This is not a case of ě restoration but of correcting the stem vowel to match the predominant Slavic evidence.

:::warning[Unresolved: Verb stem yat consistency]
The current dictionary contains several verb families where etymological ě is applied inconsistently — present in some prefixed forms but absent in others, or absent from base verbs where Proto-Slavic and OCS evidence clearly indicates yat. The affected families include at minimum :isv[plěn-], :isv[trě-] ("to rub"), and :isv[mrě-] ("to die"). Additionally, the form :isv[dreti] should likely be corrected to :isv[drati] based on cross-Slavic evidence.

A systematic audit of verb entries against Proto-Slavic and OCS etymologies is needed to identify and correct all such inconsistencies. The governing principle should be: if the Proto-Slavic or OCS form contains yat (ѣ), the Interslavic form retains ě, except after functionally soft consonants where ě is simplified to e (see the relevant section).
:::
