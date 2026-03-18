# 6.8. Negation

:::caution[Unverified Content]
This entire file lacks direct source material. The source file (grammar-syntax.md by Jan van Steenbergen) does not cover negation syntax. All rules, examples, and paradigms in this section are AI-generated extrapolations from general Slavic patterns and cannot be verified against the original Interslavic documentation.
:::

This section specifies the syntax of negation in Interslavic: sentential negation with the particle :isv[ne], constituent negation, the obligatory double-negation concord system with negative pronouns and adverbs, the genitive of negation under sentential negation, and the special behavior of negated existential :isv[byti].

---

## 6.8.1. Sentential Negation with :isv[Ne]

Sentential (clausal) negation is expressed by the particle :isv[ne], which is placed **immediately before** the finite verb. This negates the proposition expressed by the entire clause.

> :isv[Otec ne kupil knigu.]
> "Father did not buy a book."

> :isv[Ona ne čita.]
> "She does not read."

> :isv[My ne poidemo tamo.]
> "We will not go there."

The particle :isv[ne] is a **proclitic**: it is pronounced without a break before the verb and orthographically written as a separate word. In compound verb forms (auxiliary + participle), :isv[ne] precedes the auxiliary:

> :isv[On ne byl kupil knigu.]
> "He had not bought the book."

> :isv[Ona ne jest zdrava.]
> "She is not healthy."

---

## 6.8.2. Constituent Negation

The particle :isv[ne] may also precede a **non-verbal constituent** to negate that specific constituent rather than the entire clause. This is **constituent negation** (narrow-scope negation) as opposed to sentential (wide-scope) negation.

> :isv[Ne otec kupil knigu, a mati.]
> "Not father bought a book, but (rather) mother."

> :isv[Ona prinosi ne jabloka, a hrušky.]
> "She brings not apples, but pears."

:::caution[Unverified Content]
The form `posětetь` contains a stray Cyrillic soft sign character (ь) mixed into Latin-script ISV text. This is likely a character encoding error; the correct form would be `posětet`.
:::

> :isv[Turisti posětetь ne Niderlandiju, a Belgiju.]
> "The tourists will visit not the Netherlands, but Belgium."

In constituent negation, the finite verb is **not** negated; only the targeted constituent is. Constituent negation commonly co-occurs with a corrective clause introduced by the adversative conjunction :isv[a] ("but rather").

---

## 6.8.3. Double (Concord) Negation

Interslavic employs an **obligatory negative concord** system. When a negative pronoun, adjective, or adverb is present in a clause, the finite verb **MUST** also be negated by :isv[ne]. The co-occurrence of two or more negative elements does not produce a positive (double-negative) interpretation; both negatives are required to express a single negation.

**Negative pronouns and adjectives:**

| Form | Gloss |
|---|---|
| :isv[nikto] | nobody, no one |
| :isv[ničto] / :isv[ništo] | nothing |
| :isv[nikaky] | no kind of, not any |
| :isv[ničij] | nobody's |
| :isv[nijedin] | not a single, none |

:::caution[Unverified Content]
Several forms in the negative adverbs table below conflict with the morphology chapter (§5.5, pronouns correlative table): `nigde` should be `nikdě` (the form `nigde` mirrors Russian нигде); `nikako` should be `nikak`; `nikoľko` should be `nikoliko` (the form `nikoľko` mirrors Russian нисколько); and `namo` as a standalone negative adverb is not attested in the morphology tables (only `nikamo` is listed).
:::

**Negative adverbs:**

| Form | Gloss |
|---|---|
| :isv[nigde] | nowhere |
| :isv[namo] / :isv[nikamo] | to nowhere |
| :isv[nikogda] | never |
| :isv[nikako] | in no way |
| :isv[nikoľko] | not at all (in quantity) |

**Examples of obligatory negative concord:**

> :isv[Nikto ne přišel.]
> "Nobody came." (NOT "Somebody came"; :isv[ne] is obligatory)

> :isv[Ona ničto ne kupila.]
> "She bought nothing."

:::caution[Unverified Content]
The form `byliь` contains a stray Cyrillic soft sign character (ь). The correct form would be `byli`. The same issue affects `viděliь` in §6.8.4 below.
:::

> :isv[My nigde ne byliь.]
> "We were nowhere."

> :isv[On nikogda ne lže.]
> "He never lies."

> :isv[Nikako ne moram to dělati.]
> "I must do that in no way / I by no means have to do that."

The negative pronoun or adverb may appear in any syntactic position (subject, object, adverbial), but the verbal :isv[ne] MUST always accompany it. Omission of verbal :isv[ne] in the presence of a negative concord item is **ungrammatical**.

---

## 6.8.4. Genitive of Negation

Under **sentential negation** (when :isv[ne] precedes the finite verb and negates the entire clause), a direct object that would otherwise be in the **accusative** case SHOULD shift to the **genitive**. This is the genitive of negation.

**Accusative under affirmation → Genitive under negation:**

| Affirmative (accusative) | Negative (genitive) |
|---|---|
| :isv[Ona čita knigu.] "She reads a book." | :isv[Ona ne čita knigi.] "She does not read a book." |
| :isv[On kupil hlěb.] "He bought bread." | :isv[On ne kupil hlěba.] "He did not buy bread." |
| :isv[My viděliь otca.] "We saw father." | :isv[My ne viděliь otca.] "We did not see father." |

The genitive of negation applies most consistently to **direct (accusative) objects** of transitive verbs. Its application is **stronger** with inanimate objects than with animate ones, and **stronger** in more formal or literary registers.

The shift to genitive is also triggered in **existential** and **presentational** clauses under negation — see §6.8.5.

:::info[TODO: Committee Input Needed]
**§6.8.4 — Obligatoriness of the genitive of negation:** The degree to which the genitive shift is obligatory vs. optional (especially with animate direct objects, with specific NPs, or in colloquial registers) requires a formal normative decision. Some Slavic languages treat this shift as categorical; others treat it as optional or conditioned by definiteness and animacy. The committee should specify the Interslavic norm.
:::

---

## 6.8.5. Negation of :isv[Byti] (Existential)

The verb :isv[byti] in its **existential** function ("to exist, there is/are") behaves specially under negation:

1. **The subject of a negated existential :isv[byti] takes the genitive case** (genitive of negation extended to existential subjects):

   > Affirmative: :isv[Jest voda.] — "There is water." (nominative)
   > Negative: :isv[Ne jest vody.] — "There is no water." (genitive)

   > Affirmative: :isv[Bog jest.] — "God exists."
   > Negative: :isv[Boga ne jest.] — "God does not exist." (genitive)

2. **The short negative existential form :isv[nět]** is available as a lexicalized alternative to :isv[ne jest] in existential negation:

   > :isv[Nět vody.] — "There is no water." (equivalent to :isv[Ne jest vody.])
   > :isv[Nět studentov.] — "There are no students."

   The form :isv[nět] is invariable (it does not inflect for number) and is restricted to the **present tense** existential context. For past and future negated existentials, the full form :isv[ne bylo] (past) and :isv[ne budet] (future) are used:

   > :isv[Ne bylo vody.] — "There was no water."
   > :isv[Ne budet vody.] — "There will be no water."

The genitive marking on the subject in negated existential sentences is **parallel** to the genitive of negation on direct objects (§6.8.4) and is part of the same general principle: negation extends its scope to the NP most directly governed by the negated predicate, shifting it from nominative/accusative to genitive.

---

:::info[TODO: Committee Input Needed]
**§6.8.5 — Status of :isv[nět]:** Whether :isv[nět] is treated as a grammaticalized particle (like Russian *нет*) or as a contracted verbal form should be formally specified. Its morphosyntactic status affects whether it can carry tense morphology, combine with aspect, or appear in embedded clauses. A committee decision is needed.

**§6.8.3 — Negative concord with stacked negatives:** When multiple negative items appear in the same clause (e.g., "nobody never did anything to anyone"), the rules governing accumulation of negative concord items in a single clause — and whether this is stylistically neutral or marked — should be specified.
:::
