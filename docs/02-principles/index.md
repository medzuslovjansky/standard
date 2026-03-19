# Fundamental Principles and Design Criteria
## Core Design Principles
Interslavic is based on the common heritage of all Slavic nations, and differences are bridged by building compromises. All Slavic languages are treated equally, although it cannot be avoided that a Slavic interlanguage is closer to "middle-of-the-road" languages like Slovak or Rusyn than to peripheral languages like Sorbian or Macedonian.

Interslavic is explicitly not meant to be "more Slavic than the Slavs" by purifying it from foreign influences, even though a language based on the commonalities of the Slavic languages will automatically eliminate many local (non-Slavic) influences anyway. There is no reason to exclude international vocabulary, provided that it can be recognised by all, or at least most, Slavic speakers.

Interslavic has two primary purposes:

1. **Maximum intelligibility for all Slavs**, accomplished by systematically providing the largest common denominator of the Slavic languages, both in terms of grammar, orthography, syntax, and vocabulary.
2. **Ease of learning and use**, primarily for Slavs, but also for non-Slavs — without sacrificing the Slavic character of the language.

When a common solution cannot be found across Slavic languages, a compromise is built. If even a compromise is impossible, a choice must be made or both solutions may be offered.

### Maximum Mutual Intelligibility
Interslavic lexical, phonological, and grammatical choices SHALL maximize passive comprehension by speakers of Slavic languages without prior Interslavic study.

- Word roots, grammatical endings, and phonological forms SHALL be selected according to the weighted-majority voting mechanism described in the relevant section
- When a root or form exists in all Slavic languages in the same meaning, it SHALL be adopted without modification.
- When only one or two languages diverge from the majority, the majority form SHALL nonetheless apply.
- Vocabulary that is broadly recognisable to Slavic speakers SHALL be preferred over vocabulary familiar only to speakers of a single branch.
- International vocabulary MAY be adopted if used in most Slavic languages and recognisable by the majority of Slavic speakers.

### Naturalism over Artificiality
Interslavic MUST preserve grammatical categories that are universal to or widespread among the Slavic languages.

:::caution[Unverified Content]
The source material lists gender, cases, and verbal aspect but does not mention "animacy distinction" as a core structural feature. The MUST NOT rule about features absent from all Slavic languages is not explicitly stated in the source.
:::

- Grammatical gender, case system, verbal aspect, and animacy distinction SHALL be retained as core structural features.
- Features entirely absent from all natural Slavic languages MUST NOT be introduced.
- Words SHALL NOT be borrowed directly from any individual Slavic language. Instead, the derivation SHOULD proceed from the hypothetical Proto-Slavic or Old Church Slavonic base form, then subjected to systematic derivation rules (see the relevant section).
- Irregularity is to be avoided unless preserving it is essential for naturalistic recognisability.
- Artificiality is to be avoided as well: the language SHOULD feel organic to a Slavic speaker.

### Simplicity and Regularity
Interslavic SHOULD keep grammar as simple and regular as possible without sacrificing its Slavic character.

- Irregularities SHALL be reduced to the minimum set unavoidable for naturalism.
- Every grammatical ending SHALL be instantly recognisable, even if the inflected form looks different in a reader's own language. For example, the genitive singular masculine ending `-a` is shared by all Slavic languages and is therefore the normative Interslavic solution for that form.
- Verbal conjugation classes SHALL be reduced to a manageable system derived from two stems: the infinitive stem and the present-tense stem.
- The present-tense stem SHALL in almost all cases be the regular result of the infinitive stem; only a small residual set needs to be learned separately.
:::caution[Unverified Content]
The source discusses simplifying paradigms to avoid "endless tables" but does not prescribe a normative requirement for compact table presentation.
:::

- Nominal and verbal paradigms SHALL be presented in compact tables, avoiding redundancy.

### Neutrality Among Slavic Languages
No single Slavic language SHALL function as the default or primary model for Interslavic.

- All three Slavic subfamilies — East, West, and South — SHALL be treated on an equal basis.
- The voting system defined in the relevant section operationalises this neutrality through balanced subgroup weighting.
- When two candidate forms receive equal votes, population weighting may serve as a tiebreaker.
- Languages with fewer than approximately one million speakers (e.g., Sorbian, Kashubian, Rusyn) do not participate in formal voting but SHALL still be considered in the evaluation of proposed forms.

### Scalability: Basic vs. Extended Register
Interslavic accommodates users with varying levels of proficiency and differing communication needs through two defined usage registers.

**Basic Interslavic** (also referred to as :isv[Slovianto] / :cyrl[Словянто]) is a simplified subset intended primarily for non-Slavs or beginners:

- It uses a minimalistic grammar characterised by the absence of elements not strictly required for simple communication.
- It is structured in progressive levels: Level 1 omits grammatical gender and noun cases; Level 2 introduces grammatical gender and basic verbal conjugation; Level 3 introduces the case system.
:::caution[Unverified Content]
The source says memorising the forms should be "a matter of minutes rather than of hours," not that a learner can express themselves on a basic level within minutes of study.
:::

- A learner at Level 1 can express themselves on a basic level within minutes of study.

**Standard Interslavic** is the full register described by this specification:

- It includes grammatical gender, seven cases, verbal aspect, and full verbal conjugation.
- It is primarily intended for Slavs and for non-Slavs who need to communicate at a serious level.
:::caution[Unverified Content]
The source says the advanced level is suitable for "contacts and publications" and "insight into the nature of Slavic." The claims about "literary use" and "scholarly engagement with Slavic linguistics" are not in the source.
:::

- It is suitable for written publications, literary use, and scholarly engagement with Slavic linguistics.

:::caution[Unverified Content]
The source says "Ideally, level 1 should be a subset of level 2" — a descriptive aspiration, not a normative SHALL requirement. The register names "Basic Interslavic" and "Standard Interslavic" are not used in the source, which refers to "Simple level" and "Advanced level."
:::

The two registers SHALL be defined such that Basic Interslavic is a strict subset of Standard Interslavic. A learner MAY advance from one register to the other without invalidating previously acquired knowledge.

## Linguistic Basis
### Proto-Slavic and Common Slavic Heritage
Word roots and grammatical patterns in Interslavic SHOULD be traceable to reconstructed Proto-Slavic.

- Interslavic forms are not borrowed directly from any modern Slavic language. Instead, derivation proceeds from the reconstructed Proto-Slavic or attested Old Church Slavonic base form, which is then subjected to systematic phonological simplification.
- This approach guarantees internal consistency: whenever a root or morpheme occurs in a compound, it SHALL have the same form regardless of which particular language the compound is drawn from.
- The phonological development of modern Slavic languages from Proto-Slavic is highly regular. Once a speaker recognises how sounds in their own language correspond to Interslavic, they will be able to both recognise and predict unfamiliar words.
- For example, the Common Slavic sequences `tj/dj` become `č/ž` in East Slavic, `c/dz` in Polish, `c/z` in Czecho-Slovak, `č/j` in Slovene, `ć/đ` in Serbo-Croatian, `ḱ/ǵ` in Macedonian, and `št/žd` in Bulgarian. The Interslavic compromise is `č/dž` (e.g., :isv[svěča] / :cyrl[свѣча] 'candle' and :isv[medžu] / :cyrl[меджу] 'between'), which has the additional advantage that `dž` is the voiced equivalent of `č`, creating phonological symmetry.

### Old Church Slavonic Influence
:::caution[Unverified Content]
The source material mentions OCS only briefly as a reference for deriving word forms. The detailed normative claims in this subsection — including the etymological register with specific characters (ě, å, ę, ų, ȯ), the claim that OCS SHALL NOT function as the default model, the guidance on when to consult OCS forms, and the characterisation of Interslavic as a "modern continuation of OCS" — are not present in the source and could not be verified against it.
:::

Old Church Slavonic (OCS) provides a well-attested historical reference point that is very close to Proto-Slavic. It serves as an important source for Interslavic but SHALL NOT function as the default model for contemporary usage.

- OCS forms SHOULD be consulted when the reconstruction of a Proto-Slavic base form is uncertain or when a modern Slavic consensus is absent.
- The etymological register of Interslavic orthography (see the relevant section) draws on OCS-era distinctions such as :isv[ě] / :cyrl[ѣ], and the optional vowels :isv[å], :isv[ę], :isv[ų], and :isv[ȯ].
- OCS phonology, grammar, and syntax are archaic and in many respects incompatible with the needs of modern communication; they SHALL NOT be imposed on standard Interslavic usage.
- Interslavic may be described as a modern continuation of OCS: it begins where OCS ends, incorporating the subsequent shared development of the Slavic languages. One could say that making Interslavic is essentially the undoing of the divergences that caused the Slavic languages to drift apart.

### Relationship to the Twelve Source Languages
Interslavic draws on the following languages in its voting and derivation process:

1. Russian
2. Ukrainian
3. Belarusian
4. Polish
5. Czech
6. Slovak
:::caution[Unverified Content]
The source material lists Sorbian among languages with fewer than one million speakers that "do not participate in the voting process." It is not listed as a full source language in the source's six subgroups.
:::

7. Upper and Lower Sorbian
8. Slovene
9. Serbo-Croatian (Serbian, Croatian, Bosnian)
10. Bulgarian
11. Macedonian
:::caution[Unverified Content]
The source material does not list Old Church Slavonic as a 12th source language or assign it a tiebreaker/etymological reference role in the voting process. The source lists only the six subgroups of living languages.
:::

12. Old Church Slavonic (as a tiebreaker and etymological reference)

For voting purposes, these languages are grouped into six subgroups, each carrying one vote:

| Subgroup | Languages |
|---|---|
| East Slavic A | Russian |
| East Slavic B | Ukrainian and Belarusian |
| West Slavic A | Polish |
| West Slavic B | Czech and Slovak |
| South Slavic A | Slovene and Serbo-Croatian (Serbian/Croatian/Bosnian) |
| South Slavic B | Bulgarian and Macedonian |

When two languages within one subgroup disagree on a form, each receives ½ vote. When two candidate forms are tied on subgroup votes, population size SHALL serve as the tiebreaker. Languages with fewer than approximately one million speakers do not participate in formal voting but SHALL remain eligible for consideration.

### The Weighted Voting Mechanism
Root selection, form selection, and meaning assignment each proceed through the following decision criteria in priority order:

1. If a word root exists in all Slavic languages in the same meaning, it SHALL be adopted.
2. If only one or two languages diverge, the majority form SHALL be adopted.
3. If two or more groups can be distinguished, each based on a different root:
   a. For each candidate root, cognates in remaining languages are identified along with their meanings.
   b. "Semantic families" are constructed by tracing those meanings to related roots.
   c. The form that occurs in the most languages and carries the most "average" meaning SHALL be selected.
4. If no clear majority solution emerges, the following options are considered in order:
   a. The form occurring in the greatest number of languages.
   b. The form most intuitively understandable, even if used in only one language.
   c. Creation of synonyms (both forms are permitted).
   d. Greater weight to larger and better-known languages over smaller ones.
   e. An international equivalent.
   f. Engineered construction where no natural option satisfies the criteria.

These rules describe a general tendency; when a different solution is evidently superior, common sense SHALL prevail over mechanical application of the voting procedure. The voting mechanism is a normative tool, not a mechanical algorithm that overrides linguistic judgment.

## Relationship to Other Languages and Projects
:::caution[Unverified Content]
The entire section (Relationship to Other Languages and Projects), including subsections , , and , has no basis in the primary source material. The source does not discuss Esperanto, Slovio, simplified Slavic schemes, or Russian as a pan-Slavic lingua franca.
:::

### Distinction from Esperanto and Other Universal Auxlangs
Interslavic is a *zonal constructed language* — an auxiliary language for communication with or among speakers of a relatively homogeneous family of languages (the Slavic languages). It SHALL NOT be evaluated against the criteria of a universal auxiliary language.

- Esperanto was designed for global use and maximises cultural neutrality and grammatical simplicity for learners of any background. As a result, knowledge of Esperanto is useful only in communication with other Esperantists.
- Interslavic, by contrast, is designed so that speakers of Slavic languages can understand it without prior study — without even necessarily knowing that they are dealing with a constructed language.
- Although Interslavic grammar is more complex than Esperanto's grammar, it is extremely easy for Slavic speakers, because the essential skill is recognising how forms in one's own language correspond to Interslavic forms.
- The benefits of Interslavic and the benefits of Esperanto are of an entirely different order and serve different communicative purposes.

### Distinction from Simplified or Reduced Slavic Schemes
Several projects have attempted to construct a Slavic auxiliary language by drastically simplifying one existing Slavic language or by building on an Esperanto-like schematic framework (e.g., *Slovio*). Interslavic is structurally distinct from all such approaches.

- Interslavic preserves full case morphology (seven cases), grammatical gender, and verbal aspect, because these categories are present in the natural Slavic languages and their presence maximises passive intelligibility for Slavic speakers.
- Simplifying a natural Slavic language (e.g., stripping Russian of its soft consonants and reducing declensions) does not produce Interslavic — it produces "bad Russian." In mixed groups, native speakers of the base language are always at an advantage, violating the neutrality criterion.
- Interslavic vocabulary relates to all Slavic languages in a predictable, rule-governed way. A speaker who understands the correspondence rules can predict unfamiliar words. Schemes based on one language do not have this property for speakers of other branches.

### Distinction from Russian as a Pan-Slavic Lingua Franca
Russian is the native or well-known second language of approximately half the Slavic-speaking world. Despite this reach, it SHALL NOT be treated as a substitute for Interslavic.

- Russian has undergone substantial independent development from Common Slavic. Its syntax differs significantly from other Slavic languages; the verb "to have" is practically absent, and the verb "to be" is heavily reduced in both form and use. Without prior study, a West or South Slav is unlikely to understand Russian.
- Russian has historically been imposed as a lingua franca on Central and Eastern European countries, and many speakers — both Slavic and non-Slavic — associate it with political coercion. Using Russian as a pan-Slavic medium raises a legitimate political-neutrality objection.
- Russian would not serve equally well across all intra-Slavic communication pairs (e.g., a Polish–Croatian exchange).
- Interslavic draws on Russian as one of six equally-weighted subgroups, ensuring that Russian input is properly represented without being dominant.

:::info[TODO: Committee Input Needed]
Section may require expansion to address the relationship of Interslavic to :isv[Neoslavonic] (:isv[Novoslověnsky]) and other recent naturalistic projects that post-date the original Steen source materials. The committee should clarify whether a normative comparison is warranted, or whether a cross-reference to the historical survey suffices.
:::
