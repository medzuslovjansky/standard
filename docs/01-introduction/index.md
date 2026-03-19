# Introduction and Scope
:::caution[Unverified Content]
Sections through  (Normative status, Scope, and What this specification does not cover) are new specification framework content with no basis in the source material. The normative keyword definitions, module breakdown, and scope exclusions are not derived from any source.
:::

## Purpose of this Specification
### Normative status
This specification employs the following key words to indicate requirement levels, in accordance with established standards practice:

- **SHALL** and **MUST** indicate an absolute requirement. Conforming implementations and conforming text MUST satisfy the stated condition without exception.
- **SHALL NOT** and **MUST NOT** indicate an absolute prohibition.
- **SHOULD** indicates a recommendation. Departures from such recommendations are permitted but require justification.
- **SHOULD NOT** indicates a recommendation against a practice. Departures are permitted but require justification.
- **MAY** indicates that an option is permitted and is neither required nor recommended above alternatives.

Normative sections are those that contain requirements on Interslavic text, implementations, or tooling. They are identifiable by the use of the keywords above and are unmarked unless they also contain informative sub-content. Informative sections provide explanation, motivation, examples, and historical background; they are labeled **NOTE** or enclosed in shaded callout boxes. Informative content does not impose requirements.

:::note
The terms defined above apply throughout the entire specification. Where this specification uses the verb forms "is", "are", or "defines" in descriptive contexts, those forms carry no normative weight.
:::

### Scope: what this specification covers
This specification normatively describes the **Interslavic language** (:isv[Medžuslovjansky jezyk] / :cyrl[Меджусловјанскы језык]) — a zonal auxiliary language constructed to be broadly intelligible to speakers of the Slavic language family without prior study. The following linguistic modules are covered:

| Module | Sections |
|---|---|
| Phonology (phonemic inventory, phonotactics, stress, sandhi) |  |
| Orthography and writing systems (Latin, Cyrillic, etymological registers) |  |
| Morphology (nominal, pronominal, adjectival, verbal, and minor word-class inflection; derivational morphology) |  |
| Syntax (phrase structure, clause types, word order, agreement, subordination) |  |
| Semantics and pragmatics (aspect, tense, modality, information structure, discourse norms) |  |
| Lexicon and vocabulary policy (selection criteria, borrowing, neologism formation) |  |
| Flavorization (systematic regional adaptation) |  |

The specification covers **Standard Interslavic** (the full grammatical system) and **Basic Interslavic** (the simplified register sometimes called :isv[Slovianto]), defining which rules in each section apply to each register.

### What this specification does not cover
The following topics are explicitly **outside the scope** of this specification:

- **Historical and comparative Slavic linguistics.** This specification does not provide reconstruction procedures for Proto-Slavic, comparative etymological tables, or a full account of Slavic language divergence. Such material is referenced where relevant but is not presented normatively.
- **Frequency corpus data.** Lexical frequency statistics, collocational databases, and corpus-derived usage norms are not included. The vocabulary policy in the relevant section defines selection principles without requiring corpus enumeration.
- **Pedagogical sequencing.** This specification defines the language, not a curriculum. It does not prescribe the order in which features should be taught, nor does it provide graded exercises or learning-path guidance. Those are the province of teaching materials derived from this specification.
- **Non-linguistic cultural content.** This specification does not address Slavic cultural practices, historiography, folklore, or geopolitics, except to the extent they bear directly on normative linguistic choices (e.g., political neutrality as a design criterion, ).
- **Dialectology and sociolinguistic variation.** Natural Slavic dialect continua and sociolinguistic registers within individual Slavic languages are not described. Controlled variation within Interslavic is covered exclusively through the flavorization module .

### Relationship to prior Interslavic works
This specification consolidates and supersedes a body of prior descriptive work on Interslavic. The primary reference sources integrated into this document are:

**Jan van Steenbergen's materials at steen.free.fr/interslavic** constitute the principal prior description of modern Interslavic. These materials — covering grammar, vocabulary, phonology, and orthography — represent the accumulated result of the :isv[Slovianski] project (2006–2017) and its subsequent merger with :isv[Neoslavonic] (:isv[Novoslověnsky]). Where this specification is silent on a point of grammar, the steen.free.fr description SHOULD be consulted as an authoritative reference, but it is not itself normative in the sense defined by 

:::caution[Unverified Content]
The SHOULD requirement that steen.free.fr be consulted as authoritative reference for gaps in this specification is a new normative claim not present in the source material. The sources do not define a fallback hierarchy for unspecified grammar points.
:::

:::caution[Unverified Content]
The source material specifies the conference location as "Staré Město near Uherské Hradiště in the Czech Republic." The additional geographic qualifier "near Uherské Hradiště" is omitted below.
:::

**The 2017 merger and unified standard.** On 1–2 June 2017, the First Conference on the Interslavic Language (CISLa 2017) was held in Staré Město, Czech Republic. Immediately following that conference, Jan van Steenbergen and Vojtěch Merunka formed a five-member committee (with Roberto Lombino, Michał Swat, and Pavel Skrylev) that unified the two principal active projects — :isv[Slovianski] and :isv[Novoslověnsky] — into a single standard. The resulting unified form, named :isv[Medžuslovjansky], is the language described by this specification.

**Earlier zonal constructed language projects.** The following historical projects contributed linguistic material and methodology to modern Interslavic; they are incorporated rather than superseded:

| Project | Author(s) | Year | Contribution |
|---|---|---|---|
| *Ruski* (manuscript) | Juraj Križanić | 1666 | First systematic description of an inter-Slavic language |
| *Universalis Lingua Slavica* | Ján Herkeľ | 1826 | West Slavic comparative basis |
| *Uzajemni Pravopis Slavjanski* | Matija Majar-Ziljski | 1865 | Mutual orthography; comparison-based grammar methodology |
| :isv[Mežduslavjanski jezik] | Ladislav Podmele | 1950s | 20th-century naturalistic attempt |
| :isv[Slovianski] | Rečnik, Svoboda, van Steenbergen, Polyakov et al. | 2006 | Direct precursor; systematic comparison of living Slavic languages |
| :isv[Slovioski] | Radzikowski, Moraczewski, Borovička | 2009 | Merged into :isv[Interslavic] in 2010 |
| :isv[Novoslověnsky] (:isv[Neoslavonic]) | Merunka, Molhanec | 2010 | Old Church Slavonic modernization; merged 2017 |

:::caution[Unverified Content]
In the table above, Podmele's project is described as a "20th-century naturalistic attempt," but the source material describes it as "based mostly on Russian, probably due to the political reality of those days." It is not characterized as "naturalistic" in the sources.
:::

This specification does **not** incorporate or endorse *Slovio* (Mark Hučko). *Slovio* is a distinct and unrelated constructed language, and claims of derivation or equivalence are factually incorrect.

:::caution[Committee Review Needed]
The specification should formally enumerate which specific steen.free.fr pages are normatively incorporated by reference, which are informative background, and which are superseded. A precise list with URLs and access dates is needed to establish citable precedent.
:::

---

:::caution[Unverified Content]
The entire Section (Intended Audiences) and its subsections ( through ) are new specification content with no basis in the source material. The audience categories, conformance requirements for NLP tool authors, and guidance for linguists and educators are not derived from any source.
:::

## Intended Audiences
This specification is written for multiple audiences. The normative requirements apply uniformly regardless of audience; the guidance below indicates which sections will be most relevant to each group.

### Language implementers and NLP tool authors
Software developers building spell-checkers, grammar checkers, morphological analyzers, machine translation engines, or other natural-language processing tools for Interslavic SHALL treat all normative sections as binding conformance requirements. Normative sections employ formal rule notation suitable for algorithmic interpretation wherever feasible. Paradigm tables in the relevant section are intended to be machine-readable.

:::note
Requirements on text producers (authors, speakers) do not imply requirements on consumers (parsers, readers), and vice versa. Conformance claims SHOULD specify which conformance class they address.
:::

### Linguists and language researchers
Linguists and language researchers SHOULD use this specification as the primary reference for the synchronic description of Interslavic. IPA transcriptions (in /slashes/ for phonemic and [brackets] for phonetic representations) and comparative Slavic data are provided in the relevant section and throughout for scientific reference. Historical and comparative context is informative, not normative.

### Educators and advanced learners
Educators and advanced learners SHOULD use this specification alongside derived pedagogical materials. Paradigm tables, worked examples, and informative notes throughout the document are provided for pedagogical utility but are not themselves normative. For introductory learning, the :isv[Slovianto] simplified grammar (, Basic Interslavic register) provides a sufficient starting point.

:::note
This specification defines the language; it does not define a teaching sequence. Recommended learning paths are the responsibility of derived teaching materials. Beginners are referred to the :isv[Slovianto] overview before consulting the full morphological paradigms in the relevant section
:::

---

:::caution[Unverified Content]
The entire Section (How to Read this Specification) and all its subsections ( through ) are new specification framework content with no basis in the source material. This includes typographical conventions, paradigm table abbreviations, version numbering, and the change process.
:::

## How to Read this Specification
### Typographical and notational conventions
The following typographical conventions are used consistently throughout this specification:

| Convention | Usage | Example |
|---|---|---|
| *Italics* | Interslavic words and forms in running text | :isv[ruka] / :cyrl[рука] |
| **Bold** | First occurrence of a defined term | **flavorization** |
| `monospace` | Formal rule notation, code, and data strings | `NOM.SG.M` |
| /slashes/ | Phonemic (underlying) representation | :ipa[ˈruka] |
| [brackets] | Phonetic (surface) representation | :ipa[ˈrukɐ] |
| 'single quotes' | Glosses and translations | 'hand' |
| §N.N | Cross-reference to section |  |
| SMALL CAPS | Normative keywords (SHALL, MUST, SHOULD, MAY) | SHALL |

Interslavic examples SHALL be given in both Latin and Cyrillic scripts when introducing a form for the first time. Subsequent references in the same section MAY use Latin script alone.

:::note[Example]
:isv[Medžuslovjansky jezyk] / :cyrl[Меджусловјанскы језык] — 'the Interslavic language'. After its first appearance, this may be referred to as :isv[Medžuslovjansky] alone.
:::

### Normative vs. informative content
The normative/informative distinction follows these conventions:

- **Normative text** appears in the main body of sections without special marking, except for the required use of normative keywords (SHALL, MUST, SHOULD, MAY).
- **NOTE callouts** (blue shaded boxes) contain informative supplementary material: background explanation, motivation for a rule, or contextual observations. Notes do not impose requirements.
- **EXAMPLE callouts** (grey shaded boxes) contain illustrative examples. Examples are informative; a rule is not restricted to only those cases illustrated.
- **TODO callouts** (yellow shaded boxes labeled `:::info[TODO: Committee Input Needed]`) mark locations where the committee must supply a normative decision before the specification is finalized.
- **CAUTION callouts** (orange shaded boxes labeled `:::caution[Committee Review Needed]`) mark locations where two or more sources are in conflict or where the committee must choose among competing documented practices.

### Phonemic and morphophonemic notation
This specification distinguishes three levels of representation:

1. **Underlying (phonemic) representation**: enclosed in /slashes/. Represents the phoneme inventory without phonological alternations applied. Example: the root of :isv[ruka] 'hand' is /ruk-/.
2. **Surface (phonetic) representation**: enclosed in [brackets]. Represents the realized pronunciation, including all allophonic processes. Example: /ruka/ → :ipa[ˈrukɐ] in a Polish-influenced variety.
3. **Morphophonemic representation**: enclosed in curly braces `{}`. Represents underlying morphological alternants before phonological rules apply. Used in the relevant section to capture stem alternations. Example: the verb root `{pis-}/{piš-}` for :isv[pisati] / :cyrl[писати] 'to write'.

When a rule applies at all three levels, all three representations MAY be provided. When only phonemic representation is needed, /slashes/ alone suffice.

### Paradigm table conventions
All declension and conjugation paradigm tables in this specification use the following labeling conventions:

**Grammatical cases** (abbreviated in column and row headers):

| Abbreviation | Case |
|---|---|
| NOM | Nominative |
| ACC | Accusative |
| GEN | Genitive |
| DAT | Dative |
| INS | Instrumental |
| LOC | Locative |
| VOC | Vocative |

**Number:**

| Abbreviation | Number |
|---|---|
| SG | Singular |
| PL | Plural |
| DU | Dual |

**Gender:**

| Abbreviation | Gender |
|---|---|
| M | Masculine |
| F | Feminine |
| N | Neuter |
| ANIM | Animate (sub-class of M) |
| INANIM | Inanimate (sub-class of M) |

**Person:**

| Abbreviation | Person |
|---|---|
| 1P | First person |
| 2P | Second person |
| 3P | Third person |

**Verbal aspect:**

| Abbreviation | Aspect |
|---|---|
| IPFV | Imperfective |
| PFV | Perfective |

Additional abbreviations used in morphological analysis:

| Abbreviation | Meaning |
|---|---|
| INF | Infinitive |
| PTCP | Participle |
| ACT | Active |
| PASS | Passive |
| PRES | Present |
| PAST | Past |
| FUT | Future |
| COND | Conditional |
| IMP | Imperative |
| REFL | Reflexive |

### Version, stability, and change process
**Version identifier format.** This specification SHALL carry a version identifier of the form `MAJOR.MINOR.PATCH` (e.g., ``). The MAJOR number increments on normative changes that are not backward compatible. The MINOR number increments on backward-compatible normative additions. The PATCH number increments on corrections and clarifications that do not alter normative content.

**Stability commitment.** Normative rules designated as **stable** SHALL NOT change in patch releases and SHALL NOT be removed or replaced without a MAJOR version increment. Rules designated as **provisional** MAY change in MINOR releases.

**Change process.** Proposed changes to normative content SHALL be submitted to the Interslavic Language Committee (the successor body to the 2017 merger committee). Changes SHALL be accepted only after:

1. Review against the primary source languages (see  for the twelve-language voting set);
2. Assessment of impact on mutual intelligibility;
3. Public comment period of not less than thirty (30) days.

**Conflict resolution.** Where existing Slavic language data yield contradictory evidence for a normative choice, the weighted-majority voting mechanism defined in the relevant section SHALL be applied. Conflicts that cannot be resolved by that mechanism SHALL be logged in a public errata register and marked `:::caution[Committee Review Needed]` in the specification text until resolved.

:::info[TODO: Committee Input Needed]
The formal governance structure of the Interslavic Language Committee — its membership criteria, voting procedures, quorum rules, and public accountability mechanisms — must be defined before this specification is designated as a version 1.0 normative release.
:::

---

## Background: What is Interslavic?

:::note
The following section is **informative**. It provides foundational context for readers unfamiliar with Interslavic. It does not impose normative requirements.
:::

### The language and its purpose

**Interslavic** (:isv[Medžuslovjansky] / :cyrl[Меджусловјанскы]) is a language for communication among Slavs of different nationalities, rooted in centuries of geographical proximity, shared history, and common cultural heritage. More than anything else, it is based on linguistic similarity, because the Slavic language family is essentially one large continuum of closely related dialects with a relatively high degree of mutual intelligibility.

Interslavic may be understood along three complementary dimensions:

- As an **improvised contact language** that has evolved spontaneously in inter-Slavic contexts across centuries;
- As a **scientific interpolation** of the hypothetical language at the center of the Slavic dialect continuum;
- As a **modernized continuation** of the common ancestor of the Slavic languages (Proto-Slavic) or its close relative, Old Church Slavonic.

The goals of Interslavic are characterized by the keywords **communication** and **education**:

- to be well understood by speakers of any Slavic language without any prior study;
- to be learned and used easily by speakers of any Slavic language;
- to help those who have learned it in achieving a better passive understanding of other Slavic languages;
- to provide non-Slavs with a useful introduction into the world of the Slavic languages.

:::caution[Unverified Content]
The specific enumeration of domains "tourism, culture, business, and scholarship" is not present in the source material. The source describes the purpose more generally as "communication" and "education" without listing specific domains.
:::

Interslavic is not related to any religion, ideology, or political movement. It is not intended to replace any living language, nor to become a universal second language of any kind. It is a purely linguistic project whose objective is to foster communication in tourism, culture, business, and scholarship across the Slavic-speaking world.

### Classification

Interslavic occupies a distinctive position in language typology. It is not a fully natural language — it has never had native speakers and has undergone deliberate shaping. It is not a purely schematic constructed language either — its grammar, vocabulary, and phonology are derived from the actual material of living Slavic languages rather than invented for regularity. The most accurate characterization is as a **semiconstructed** or **naturalistic zonal auxiliary language**: one that reproduces the commonalities of a group of closely related natural languages in order to be understood by their speakers with little or no prior study.

From a utilitarian standpoint, Interslavic belongs to the family of **zonal auxiliary languages** (*Dachsprachen*) — languages created for communication among speakers of a family of related languages — as distinct from universal auxiliary languages such as Esperanto or Interlingua, which are designed for global use.

### Naturalism and the target group

Features that might appear complex in a universal auxiliary language — grammatical gender, nominal case, verbal aspect, the hard/soft consonant distinction, irregular verbs — are preserved in Interslavic because they are natural and familiar to its target audience: speakers of Slavic languages. Stripping these features would make the language artificial and unfamiliar to the very people it is intended to serve.

:::caution[Unverified Content]
The claim that "Basic Interslavic is a proper subset of Standard Interslavic" is a formal characterization not found in the source material. The source describes two levels that can be mixed, with knowledge expanded gradually, but does not use the formal term "proper subset."
:::

At the same time, Interslavic maintains **scalability**. A **Basic Interslavic** register (corresponding to the earlier :isv[Slovianto] materials) provides a significantly simplified grammar with reduced case distinctions and regularized morphology, intended for beginners, non-Slavic learners, and informal communication contexts. The two registers are compatible: Basic Interslavic is a proper subset of Standard Interslavic, and knowledge can be built incrementally.

### The name :isv[Medžuslovjansky]

The name :isv[Medžuslovjansky] means "Inter-Slavic" and was chosen in 2011 as the common moniker for all converging Interslavic projects, becoming the official name after the 2017 merger. Alternative names that appear in historical sources include:

| Name | Meaning | Status |
|---|---|---|
| :isv[Slovianski] | 'Slavic' | Former name of principal precursor project; now historical |
| :isv[Medžuslovjanski] | 'Inter-Slavic' | Earlier spelling; superseded by :isv[Medžuslovjansky] (2017) |
| :isv[Vseslovjanski] | 'All-Slavic, Pan-Slavic' | Historical; not current |
| :isv[Novoslovjanski] | 'New Slavic, Neo-Slavonic' | Historical; not current |
| :isv[Neoslavonic] / :isv[Novoslověnsky] | 'Neo-Slavonic' | Former name of second principal precursor project; now historical |

:::caution[Unverified Content]
The lists of languages below are incomplete compared to the source material. The source lists :isv[slov-] also in Upper and Lower Sorbian, and :isv[-jan-] also in Rusyn, Cashubian, and Upper Sorbian. The source also provides a more detailed breakdown including the :isv[-an-] and :isv[-en-] variants not mentioned here.
:::

The form :isv[Slovjansky] (rather than :isv[Slavjansky] or :isv[Slověnsky]) reflects the most widely distributed root form across Slavic languages: :isv[slov-] appears in Ukrainian, Polish, Czech, Slovak, Slovene, Serbian, Macedonian, and Cashubian, while :isv[-jan-] appears in Russian, Belarusian, Ukrainian, Polish, and Bulgarian, making this combination representative of all three Slavic subbranches.

### Brief history

The idea of a common inter-Slavic language predates modern linguistics. The first systematic description was written by Juraj Križanić in 1666. The 19th century saw a wave of Pan-Slavist projects, of which Matija Majar-Ziljski's *Uzajemni Pravopis Slavjanski* (1865) is the most direct methodological ancestor of modern Interslavic, as it introduced the principle of basing the language on systematic comparison of the major Slavic languages rather than on a single model.

:::caution[Unverified Content]
The claim that Slovianski was "the first fully collaborative, internet-era inter-Slavic language effort" is contradicted by the source material, which identifies an earlier collaborative project called "Slovo" that was "active in 2001-2002."
:::

The modern era began in 2006 with the launch of the :isv[Slovianski] project, the first fully collaborative, internet-era inter-Slavic language effort, followed in 2010 by :isv[Neoslavonic]. These two projects collaborated increasingly closely until, following CISLa 2017, they were merged into the unified :isv[Medžuslovjansky] standard described by this specification.

A milestone for public awareness came in September 2019, when Václav Marhoul's film *The Painted Bird* (*Nabarvené ptáče*), in which most dialogue was written in Interslavic, premiered at the 76th Venice Film Festival to critical acclaim and became the Czech candidate for the Academy Awards in 2020.
