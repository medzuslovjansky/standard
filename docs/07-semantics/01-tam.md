# 7.1. Tense, Aspect, and Mood

This section specifies the semantic interpretation of tense and aspect combinations, the interaction of aspect with negation and phase verbs, the system of modal expressions, and the treatment of evidentiality in Interslavic.

---

## 7.1.1. Tense–Aspect Interaction Matrix

:::caution[Unverified Content]
The source material describes an "anterior future" nowhere. The source mentions present, past (compound), future, plus optional aorist/imperfect (merged) and pluperfect, but no anterior future tense.
:::

Interslavic has two tense systems. The **standard system** (used in the vast majority of contexts) uses three tenses: present, past, and future. The **extended system** adds an aorist/imperfect distinction, a pluperfect, and an anterior future; these are optional and literary in character (see §5.7 for morphological forms).

Within either system, every finite verb bears one of two **aspects**:

- **Imperfective (impf.)** — the action is presented as ongoing, repeated, habitual, or in progress at the reference time.
- **Perfective (pf.)** — the action is presented as a bounded, completed whole; the focus is on its result or endpoint.

The interaction of tense and aspect produces the interpretations listed in the matrix below.

### 7.1.1.1. Standard System: Tense × Aspect Matrix

| Tense | Imperfective aspect | Perfective aspect |
|---|---|---|
| **Present** | Ongoing action; habitual or repeated action; generic statement. :isv[Ja pišu pismo.] "I am writing a letter." / "I write letters (habitually)." | **Not used** for present reference. A present-tense form of a pf. verb is future in meaning (see Future row below). |
| **Past (compound)** | Action was ongoing or repeated at past reference time; past habit. :isv[Ja jesm pisal pismo.] "I was writing a letter." / "I used to write letters." | Action was completed at past reference time; focus on result. :isv[Ja jesm napisal pismo.] "I (have) wrote a letter (and finished it)." |
| **Future** | Ongoing, habitual, or repeated action in the future. :isv[Ja budu pisati pismo.] "I will be writing a letter." | Single completed event anticipated in the future. :isv[Ja budu napisati pismo.] "I will write (and finish) a letter." |

:::caution[Unverified Content]
The source says the perfective present for future "is rather to be avoided, as it can easily be misunderstood by South Slavs," but does not specify that they would "misread it as a present tense." The claim that the analytic future is "the recommended standard form" is editorial interpretation not stated in the source.
:::

**Note on perfective present forms:** Writers SHOULD NOT use the present-tense form of a perfective verb with present meaning. In Interslavic, using the perfective present for future reference (:isv[Ja napišu pismo]) is permitted as a variant but SHOULD be avoided in formal writing, because South Slavic speakers may misread it as a present tense. The analytic future with :isv[budu] is the recommended standard form (see §5.7.4).

### 7.1.1.2. Extended System: Additional Tenses

The extended system provides finer temporal distinctions, primarily useful in literary or narrative prose.

:::caution[Unverified Content]
The source explicitly states that "In modern Interslavic, we simplify this system somewhat by merging the imperfect with the aorist." A separate imperfect tense (row 3 below) distinct from the aorist is not supported by the source, and the example form `pišěh` is not attested. The anterior future (row 5 below) is not mentioned anywhere in the source material and cannot be verified.
:::

| Form | Name | Interpretation | Example |
|---|---|---|---|
| Present of :isv[byti] + L-participle | **Perfect** | Past action with present relevance; action just completed; result visible now. | :isv[Ja jesm pisal.] |
| Simple past (aorist/imperfect endings) | **Aorist / Simple past** | Action fully completed in the past, no present connection. | :isv[Ja pisah.] |
| Imperfect tense | **Imperfect** | Extended or repeated past action (background narration). | :isv[Ja pišěh.] |
| Past of :isv[byti] + L-participle | **Pluperfect** | Action anterior to a past reference point. | :isv[Ja běh pisal.] |
| Future of :isv[byti] + L-participle | **Anterior future** | Action completed before a future reference point. | :isv[Ja budu pisal.] |

When the aorist and imperfect co-occur in a narrative, the aorist expresses the **foregrounded** event (the main narrative action) and the imperfect expresses the **background** condition against which that event occurs. This mirrors the Past Simple / Past Continuous distinction in English.

Writers who use the extended system SHOULD NOT do so in communication with audiences unfamiliar with it, as the simple past endings are not widely intelligible to speakers of North Slavic languages.

---

## 7.1.2. Aspect with Negation

:::caution[Unverified Content]
This entire section on aspect-negation interaction, including the genitive of negation rule, has no basis in the source material, which does not discuss negation semantics.
:::

Aspect interacts with negation in predictable ways:

- **Negated perfective** expresses **failure to complete** an expected action:
  - :isv[On ne sdělal zadaňje.] — "He did not complete the assignment."

- **Negated imperfective** expresses **absence of an ongoing or habitual action**:
  - :isv[On ne dělal zadaňje.] — "He was not doing / did not (habitually) do the assignment."

Under negation, **imperfective is often preferred** when the statement expresses a general fact, denial of habit, or absence of activity. Perfective is used when the negation specifically denies the completion of a bounded act.

The **genitive of negation** (see §6.1.5.2) applies to direct objects of negated verbs; this is a syntactic reflex of the semantic scope of negation over the object's referential status.

---

## 7.1.3. Aspect with Phase Verbs

:::caution[Unverified Content]
This entire section on phase verbs and the MUST requirement for imperfective complements has no basis in the source material, which does not discuss phase verbs or their complement requirements.
:::

**Phase verbs** — verbs denoting the beginning, continuation, or cessation of an activity — **MUST** take an **imperfective** complement. This applies to:

:::caution[Unverified Content]
The verb `prodolžati` (row 3) appears Russian-influenced and is not attested in the source material. The verb `rabotati` in its example is likewise not found in the source (which uses `dělati` for "to do/work").
:::

| Phase verb | Meaning | Example |
|---|---|---|
| :isv[načeti] | to begin | :isv[On načel čitati knigu.] "He began reading the book." |
| :isv[začeti] | to start | :isv[Ona začela govoriti.] "She started speaking." |
| :isv[prodolžati] | to continue | :isv[My prodolžajem rabotati.] "We continue working." |
| :isv[prestati] | to stop, cease | :isv[On prestal paliti.] "He stopped smoking." |
| :isv[končati] | to finish | :isv[Ona končila pisati.] "She finished writing." |

The imperfective complement is required because phase verbs quantify over the **duration or progress** of an activity, which is semantically incompatible with viewing the event as a completed bounded whole.

:::info[TODO: Committee Input Needed]
Confirm the complete list of phase verbs that require imperfective complements. Clarify whether *zakyp­ljati / počynati* and related inchoatives follow the same pattern. Specify behavior when the complement is a stative verb.
:::

---

## 7.1.4. Modality

:::caution[Unverified Content]
This entire modality section (7.1.4, including all subsections on epistemic, deontic, and dynamic modality) is not covered by the source material, which does not discuss modal predicates, epistemic adverbs, or deontic expressions. Only the conditional mood forms (§7.1.4.4) have partial support in the source.
:::

Interslavic expresses modal meanings — possibility, necessity, obligation, permission, ability — primarily through **modal predicates** (lexical items functioning as impersonal predicates or agreeing adjectives/verbs) and through the **conditional mood**. There is no morphological category of "modal auxiliary" as a separate grammatical class.

### 7.1.4.1. Epistemic Modality

Epistemic modality concerns the speaker's degree of confidence in the truth of a proposition.

| Expression | Meaning | Syntactic behavior | Example |
|---|---|---|---|
| :isv[možno] | it is possible; perhaps | Impersonal predicate + infinitive, or sentence adverb | :isv[Možno, čto on zabyl.] "It's possible he forgot." |
| :isv[věrojatno] | probably, likely | Sentence adverb | :isv[Ona věrojatno pridět.] "She will probably come." |
| :isv[naverně] | certainly, surely | Sentence adverb | :isv[On naverně zna.] "He certainly knows." |
| :isv[možebiti] | maybe, perhaps | Sentence adverb | :isv[Možebiti ona jeste doma.] "Maybe she is at home." |
| :isv[podobno] | apparently, it seems | Sentence adverb | :isv[Podobno, on ne prišel.] "Apparently he didn't come." |

Epistemic expressions are **sentence adverbs** that scope over the entire proposition. They do not agree with any noun phrase and do not alter the tense of the main clause.

### 7.1.4.2. Deontic Modality

Deontic modality concerns obligation, necessity, and permission.

| Expression | Meaning | Syntactic behavior | Example |
|---|---|---|---|
| :isv[trěba] | it is necessary; one must | Impersonal predicate + infinitive (dative experiencer optional) | :isv[Trěba rabotati.] "One must work." :isv[Mně trěba idti.] "I need to go." |
| :isv[dolžen, dolžna, dolžno] | ought to, is obliged to | Agreeing short-form adjective + infinitive | :isv[On jest dolžen platiti.] "He ought to pay." |
| :isv[možno] | it is permitted; one may | Impersonal predicate + infinitive | :isv[Možno hoditi suda.] "One may go here." |
| :isv[nělzě] | it is not permitted; one must not | Impersonal predicate + infinitive | :isv[Nělzě kuriti.] "Smoking is not permitted." |
| :isv[iměti] | to have to; to be supposed to | Full verb + infinitive | :isv[On iměje skazati pravdu.] "He is supposed to tell the truth." |

:::caution[Unverified Content]
The use of `iměti` as a modal verb meaning "to have to; to be supposed to" (last row above) is not attested in the source material. The source does not discuss `iměti` as a modal construction.
:::

:isv[Trěba] is strictly **impersonal** and does not agree with any subject. :isv[Dolžen] is an **agreeing predicate adjective** and MUST agree with the grammatical subject in gender and number.

### 7.1.4.3. Dynamic Modality

Dynamic modality concerns ability — whether an agent is capable of performing an action.

:::caution[Unverified Content]
The source uses the infinitive form `mogti` (not `moći`), explicitly noting that `mogti` is preferred over the "expected but less transparent" `moči`. The SHOULD NOT claim about substituting `moći` and `uměti` is also not in the source. Additionally, the form `umě` in the `uměti` row appears incorrect: per the source conjugation rules, `uměti` follows first conjugation with `-j-` stem (`uměj-`), giving 3sg `uměje`, not `umě`.
:::

| Expression | Meaning | Distinction |
|---|---|---|
| :isv[moći] | to be able to (circumstantially); to be allowed to | Expresses **circumstantial or physical ability**, or contextual permission. :isv[On može to sdělati.] "He can do that (he has the means / he is allowed)." |
| :isv[uměti] | to know how to; to have the skill | Expresses **learned, acquired ability or skill**. :isv[Ona umě plavati.] "She knows how to swim." |

The distinction between :isv[moći] and :isv[uměti] is obligatory in formal Interslavic. Writers SHOULD NOT substitute one for the other.

### 7.1.4.4. The Conditional as a Modality Marker

The **conditional mood** (L-participle + conditional forms of :isv[byti]: :isv[byh, by, by, byhmo, byste, by]) expresses hypothetical, counterfactual, and polite meanings in addition to its core conditional function (see §5.7.6).

| Use | Form | Example |
|---|---|---|
| Hypothetical / counterfactual | Past conditional | :isv[Ja byl byh to sdělal, ibo...] "I would have done it, if..." |
| Polite request | Conditional | :isv[Mogli by vy mně pomoći?] "Could you help me?" |
| Wish or desire | Conditional | :isv[Ja byh hotel/a pobyti tamo.] "I would like to be there." |
| Purpose clause complement | Conditional after :isv[že by / da by] | :isv[Ona prišla, že by my mogli govoriti.] "She came so that we could talk." |

The conditional is the preferred polite register for requests. Using the imperative alone in a formal context is pragmatically marked as abrupt (see §7.3.1).

---

## 7.1.5. Evidentiality

:::caution[Unverified Content]
This entire section on evidentiality has no basis in the source material, which does not discuss evidentiality, renarrative mood, or evidential adverbs. The specific lexical items listed (e.g., `slyhom`, `po skazaniju`, `kažetsja`, `po slovam`, `dle`) are not attested in the source.
:::

Interslavic **does not grammaticalize evidentiality**. The morphological system of tense and aspect does not encode the source of information (direct witness, hearsay, inference). Evidential meanings that some Slavic languages convey through specific tense-aspect combinations (e.g., the Bulgarian renarrative mood) are not part of the Interslavic standard.

Evidential meanings are expressed in Interslavic exclusively by **lexical means**:

| Evidential type | Expression | Example |
|---|---|---|
| Hearsay / reported | :isv[slyhom], :isv[po skazaniju], :isv[kako govorjat] | :isv[Slyhom, on prišel včera.] "I heard he came yesterday." |
| Inference / appearance | :isv[podobno], :isv[vidno], :isv[kažetsja] | :isv[Vidno, čto ona ne spala.] "It is evident she didn't sleep." |
| Quotation | :isv[po slovam], :isv[dle] + genitive | :isv[Po slovam gazety...] "According to the newspaper..." |
| Assumption | :isv[věrojatno], :isv[naverně] | :isv[Věrojatno, on zna.] "He probably knows." |

:::info[TODO: Committee Input Needed]
Determine whether a standardized set of evidential adverbs and parentheticals should be formalized in the lexicon. Specify whether *podobno* and *vidno* may also function as manner adverbs (potential ambiguity).
:::
