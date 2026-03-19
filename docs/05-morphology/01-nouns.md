# Nouns
:::caution[Unverified Content]
The source material does not use RFC 2119 terminology (MUST, SHALL, SHOULD, MAY). The normative framing throughout this document is an editorial addition not present in the original grammar description.
:::

This section specifies the grammatical categories, declension classes, and morphological paradigms for nouns in Interslavic. All normative rules use the terms MUST, SHALL, SHOULD, and MAY as defined in RFC 2119.

---

## Grammatical Gender
### Three-gender system (masculine, feminine, neuter)
Interslavic has three grammatical genders: **masculine**, **feminine**, and **neuter**. Gender is an inherent property of the noun lexeme and is listed in the dictionary entry for each noun. Gender is not determined by the referent's biological sex, although in the case of nouns denoting persons and higher animals there is typically a natural correspondence.

Gender governs agreement in adjectives, pronouns, numerals, and past-tense verb forms.

### Gender assignment by form
:::caution[Unverified Content]
The source does not present a formal gender-assignment table. The table below is an editorial synthesis. The `-ę` ending row is derived from the athematic declension discussion but is not stated as a gender-assignment rule in the source.
:::

The following default rules assign gender on the basis of the noun's nominative singular form:

| Ending | Default gender | Examples |
|--------|---------------|---------|
| Consonant (zero ending) | Masculine | :isv[brat] "brother", :isv[dom] "house", :isv[kost] "bone" (fem.) |
| `-a` | Feminine | :isv[žena] "woman", :isv[zemja] "earth" |
| `-o` | Neuter | :isv[slovo] "word", :isv[okno] "window" |
| `-e` | Neuter | :isv[morje] "sea", :isv[polje] "field" |
| `-ę` | Neuter | :isv[imę] "name", :isv[telę] "calf" |

The following exceptions and special cases apply:

- A small class of nouns denoting male persons ends in `-a` but is grammatically masculine: :isv[sluga] "servant", :isv[sudja] "judge", :isv[kolega] "colleague". These nouns MUST be treated as masculine for purposes of adjective agreement and animacy.
:::caution[Unverified Content]
The example :isv[věšč] "thing" does not appear in the source material. Its form as a Third Declension noun cannot be verified.
:::

- A small number of nouns ending in a consonant are grammatically feminine, most notably those forming the Third Declension: :isv[kost] "bone", :isv[noć] "night", :isv[věšč] "thing".
:::caution[Unverified Content]
Internal inconsistency: :isv[pani] ends in `-i`, not `-a`. The source material describes :isv[pani] as a word on `-i` that belongs to the second declension group (inflected as if the nominative were :isv[*panja]).
:::

- Some nouns ending in `-a` (e.g., :isv[pani] "lady") follow a soft-stem pattern.

### Animacy in masculine nouns
The category of **animacy** applies exclusively to **masculine nouns** in Interslavic. Feminine and neuter nouns are always treated as inanimate regardless of their referent.

Animate masculine nouns comprise:
- Nouns denoting male persons (and some epicene person-nouns);
- Nouns denoting animals.

**Normative rule:** For animate masculine nouns, the accusative case MUST be identical to the genitive case. For inanimate masculine nouns, the accusative MUST be identical to the nominative.

| Type | Nominative sg. | Accusative sg. | Genitive sg. |
|------|---------------|---------------|-------------|
| Animate | :isv[brat] | :isv[brata] | :isv[brata] |
| Inanimate | :isv[dom] | :isv[dom] | :isv[doma] |

This distinction also applies in the plural accusative: animate masculine nouns take the genitive plural, inanimate masculine nouns take the nominative plural.

---

## Number
### Singular and plural
Interslavic has two primary grammatical numbers: **singular** and **plural**. All nouns have both forms unless lexically restricted (see  for irregular plurals). The plural paradigms are specified within each declension class below.

:::caution[Unverified Content]
The concepts of pluralia tantum and singularia tantum, and the example :isv[dveri] "door(s)", are not discussed in the source material.
:::

Certain nouns are used only in the plural (*pluralia tantum*), such as :isv[dveri] "door(s)", :isv[děti] "children" (as the suppletive plural of :isv[dětę]). Certain nouns are used only in the singular (*singularia tantum*), such as many abstract and mass nouns.

### Optional dual number
Interslavic provides an **optional** dual number. Its use is not required in standard Interslavic but MAY be employed in literary or archaic registers and to explicitly denote exactly two entities, especially naturally paired body parts.

The dual number is fully preserved as a productive category in Slovenian and the Sorbian languages (Upper and Lower Sorbian). It was a core feature of Old Church Slavonic and Proto-Slavic. All other modern Slavic languages have lost the dual as a productive category, but its traces survive universally in the special agreement patterns triggered by the numerals 2, 3, and 4 (where nouns take nominative plural rather than genitive plural), in the irregular plurals of paired body-part nouns (:isv[oči] "eyes", :isv[uši] "ears"), and in frozen lexical forms.

:::warning[Unresolved: Status of the Dual Number]
The dual number presents a genuine tension in Interslavic language design. On one hand, it is historically authentic (attested in Old Church Slavonic and Proto-Slavic), it is part of everyday grammar for approximately 2.5 million Slovenian speakers and 50,000 Sorbian speakers, and its traces permeate all Slavic languages. Including it preserves Common Slavic heritage and improves intelligibility for these communities. On the other hand, the dual is absent as a productive category from the vast majority of modern Slavic languages (Russian, Polish, Czech, Slovak, Serbo-Croatian, Bulgarian, Macedonian, Ukrainian, Belarusian), and requiring or even encouraging its use would add significant morphological complexity for the majority of Interslavic users who have no experience with dual forms.

The current position treats the dual as entirely optional: it MAY be used but is never required. The dual paradigm documented here is based on Roberto Lombino's proposal (2021), which reconstructs a full Interslavic dual system from Old Church Slavonic and Slovenian models. No committee decision has been made on whether the dual should be more actively promoted for literary registers or explicitly discouraged in standard communication.
:::

The dual paradigm merges certain cases: nominative and accusative share one form (with an animacy distinction only in masculine, where accusative of animate nouns equals genitive), genitive merges with locative, and dative merges with instrumental.

**Dual paradigm for nouns:**

| Case | I masc. hard (:isv[brat]) | I masc. hard (:isv[grad]) | I masc. soft (:isv[muž]) | I masc. soft (:isv[kraj]) | II fem. hard (:isv[žena]) | II fem. soft (:isv[duša]) | III fem. (:isv[kost]) | I neut. hard (:isv[slovo]) | I neut. soft (:isv[polje]) | Athematic -ęt- (:isv[telę]) |
|------|---|---|---|---|---|---|---|---|---|---|
| Nom. | :isv[brata] | :isv[grada] | :isv[muža] | :isv[kraja] | :isv[ženě] | :isv[duši] | :isv[kosti] | :isv[slově] or :isv[slovesě] | :isv[polji] | :isv[telętě] |
| Acc. | = Gen. (anim.) | = Nom. (inan.) | = Gen. (anim.) | = Nom. (inan.) | = Nom. | = Nom. | = Nom. | = Nom. | = Nom. | = Nom. |
| Gen./Loc. | :isv[bratu] | :isv[gradu] | :isv[mužu] | :isv[kraju] | :isv[ženu] | :isv[dušu] | :isv[kosťu] | :isv[slovu] or :isv[slovesu] | :isv[polju] | :isv[telętu] |
| Dat./Instr. | :isv[bratoma] | :isv[gradoma] | :isv[mužema] | :isv[krajema] | :isv[ženama] | :isv[dušama] | :isv[kosťma] | :isv[slovoma] or :isv[slovesoma] | :isv[poljema] | :isv[telętoma] |

Notes on dual noun endings:
- The nominative of First Declension masculine nouns ends in **`-a`** regardless of animacy.
- The nominative of First Declension neuter and Second Declension feminine nouns ends in **`-ě`** after hard stems and **`-i`** after soft stems.
- The nominative of Third Declension nouns ends in **`-i`**.
- The genitive/locative takes **`-u`** across all declensions.
- The dative/instrumental takes **`-oma`** after hard stems, **`-ema`** after soft stems, **`-ama`** after vowel stems (Second Declension feminine), and **`-ma`** after a consonant (Third Declension feminine).
- For animate masculine nouns, the accusative dual equals the genitive dual: :isv[Vidžu dvu mužu] "I see two men." For inanimate masculine, and all feminine and neuter nouns, the accusative dual equals the nominative dual: :isv[Vidžu dva grada, dvě ženě, dvě polji] "I see two cities, two women, two fields."

**Special dual forms of :isv[oko] and :isv[uho]:**

The nouns :isv[oko] "eye" and :isv[uho] "ear", as well as nouns with stems extended by :isv[-en-], have a special nominative dual ending in **`-i`**, with stem softening for :isv[oko] and :isv[uho]:

| Case | :isv[oko] | :isv[uho] | :isv[ramę] (shoulder) |
|------|-----------|-----------|-----------|
| Nom./Acc. | :isv[oči] | :isv[uši] | :isv[rameni] |
| Gen./Loc. | :isv[očju] | :isv[ušju] | :isv[ramenu] |
| Dat./Instr. | :isv[očima] | :isv[ušima] | :isv[ramenoma] |

Example sentences:
- :isv[Vidžu dvu mužu.] — "I see two men."
- :isv[Vidžu dva grada, dvě ženě, dvě polji.] — "I see two cities, two women, two fields."

---

## Case system (7 cases)
Interslavic has **seven grammatical cases**: nominative, accusative, genitive, dative, instrumental, locative, and vocative.

:::caution[Unverified Content]
The detailed case function descriptions ( through ) with their MUST/SHOULD/MAY normative claims are not present in the source material, which only lists the seven case names without elaborating on their individual functions.
:::

### Nominative: subject and predicate nominal
The nominative case marks the **subject** of a finite clause and the **predicate nominal** in equative constructions with :isv[byti] "to be". It is the citation form of the noun.

### Accusative: direct object and motion
The accusative case marks:
- The **direct object** of a transitive verb;
- The destination of motion with certain prepositions (e.g., :isv[v] "into", :isv[na] "onto", :isv[za] "behind", :isv[pod] "under", :isv[nad] "above", :isv[prěd] "before", :isv[meždu] "between" — when motion is implied).

For animate masculine nouns, the accusative is **identical to the genitive** .

### Genitive: possession, partitivity, negation
The genitive case marks:
- **Possessive** and partitive relationships;
- **Genitive of negation**: when the verb is negated, the direct object MAY (and in some contexts SHOULD) appear in the genitive rather than the accusative;
- The object of numerous prepositions (e.g., :isv[do] "to/until", :isv[iz] "from/out of", :isv[od] "from", :isv[bez] "without", :isv[dlja] "for", :isv[u] "at/near").

:::info[Literary Register: Obligatory Genitive of Negation and Partitive Genitive]
In the rich/literary register (Lombino 2022), the genitive of negation is **obligatory** rather than optional: :isv[Vidžų drěvo. Ne vidžų drěva.] ("I see a tree. I do not see a tree.") Additionally, the genitive may express **partitivity** (a portion of something), paralleling usage in Russian, Polish, and other Slavic languages: :isv[Naliju ti vody.] ("I'll pour you some water" --- specifically a portion, not all water). In Standard Interslavic, the partitive genitive is permitted but not required; the literary register treats it as the expected construction when quantity is partial or unspecified.

The literary register also permits a dative of possession: :isv[Mama jest mi prišla.] ("My mother has come", lit. "Mother has-to-me come"), paralleling Czech and South Slavic patterns. This construction is not documented in Standard Interslavic but is widely attested across the Slavic family.
:::

### Dative: indirect object and recipient
The dative case marks:
- The **indirect object** (recipient or beneficiary) of a ditransitive verb;
- Experiencer arguments with certain verbs (e.g., :isv[nraviti se] "to please");
- The object of certain prepositions (e.g., :isv[k] "towards", :isv[protivu] "against").

### Instrumental: means, comitative, predicate
The instrumental case marks:
- The **instrument or means** by which an action is performed;
- **Accompaniment**, with the preposition :isv[s/so] "with";
- **Predicative nominal** after :isv[byti] in some constructions, indicating a temporary or role-based state.

### Locative: location (always with preposition)
The locative case marks **location in space or time**. It MUST always be used with a preposition; it never appears without one. Common governing prepositions include :isv[v] "in", :isv[na] "on", :isv[pri] "at/near", :isv[po] "along/after", :isv[o] "about".

### Vocative: direct address
The vocative is used for **direct address**. It differs structurally from the other cases: it exists only in the masculine and feminine singular, never affects adjectives or pronouns, and plays no role in the syntactic structure of the sentence. In neuter nouns and all plurals, the nominative form serves as the vocative. In informal registers, the nominative MAY substitute for the vocative throughout.

Vocative forms are specified per declension class in the relevant section

:::warning[Unresolved: Literary Register Case Endings and Additional Cases]
Lombino (2022) documents a rich set of variant case endings and supplementary cases that exist in the broader Interslavic system but are not part of Standard Interslavic. These represent a tension between the standard language's goal of simplicity and the full expressive capacity of the Common Slavic heritage:

**Variant endings within the standard seven cases:**
- Masculine animate nominative plural `-ove`/`-eve` (e.g., :isv[panove], :isv[muževe]) alongside standard `-i`
- Masculine dative singular `-ovi`/`-evi` (e.g., :isv[bratrovi], :isv[muževi]) alongside standard `-u`
- Masculine/neuter locative singular `-ě` (hard stems) / `-i` (soft stems) as the primary form rather than alternant
- Masculine/neuter dative plural `-om`/`-em` and locative plural `-oh`/`-eh` (Czech-Slovak pattern) alongside standard `-am`/`-ah`
- Masculine/neuter instrumental plural `-y`/`-i` alongside standard `-ami`
- Feminine genitive singular of adjectives in `-ě` (e.g., :isv[bez dobrojě ženy])

**Second palatalization in declension:**
Before the endings `-i` and `-ě`, the consonant alternations `k > c`, `g > dz`, `h > s/š` apply (e.g., :isv[vŭlk] > :isv[vŭlci], :isv[rųka] > :isv[rųcě], :isv[noga] > :isv[nodzě]). This pattern is attested in West and South Slavic languages and in Old Church Slavonic, but is excluded from Standard Interslavic to preserve stem transparency.

**Supplementary cases (extreme literary register):**
Lombino describes four additional cases that can replace prepositional constructions:
- *Ablative* (departing-case): replaces :isv[iz] + genitive, with endings `-u` (masc.), `-e` (fem.)
- *Inessive* (inside-case): replaces :isv[v] + locative, with endings `-ě`/`-i`
- *Allative* (approaching-case): replaces :isv[k] + dative, with endings `-ovi`/`-evi` (masc./neut.), `-i` (fem.)
- *Partitive*: replaces genitive in partitive function, with ending `-u` (masc.), `-e` (fem.)

These supplementary cases are marked with an asterisk in the source, indicating even the author considers them extreme extensions. No committee decision has been made on whether these should be formally documented as part of the Interslavic system.
:::

---

## Declension classes
Interslavic has three primary declension classes and one optional athematic (archaic) declension.

**Hard and soft stems.** Every declension distinguishes between **hard** and **soft** stem variants. Soft stems are stems ending in :isv[š], :isv[ž], :isv[č], :isv[c], :isv[j], :isv[lj], or :isv[nj]. The following systematic alternations apply throughout the declension system:

| After hard consonant | After soft consonant |
|---------------------|---------------------|
| `-o` | `-e` |
| `-y` | `-e` |
| `-ě` | `-i` |

In the tables that follow, soft-stem endings are shown in parentheses where they differ from the hard-stem endings.

---

### First Declension (masculine and neuter)
The First Declension covers:
- All masculine nouns ending in a consonant (zero ending);
- All neuter nouns ending in `-o` (hard) or `-e` (soft).

#### Hard masculine nouns (:isv[brat], :isv[dom])
:isv[brat] "brother" (animate); :isv[dom] "house" (inanimate)

| Case | :isv[brat] sg. | :isv[dom] sg. | :isv[brati] pl. | :isv[domy] pl. |
|------|-----------|----------|------------|-----------|
| Nominative | :isv[brat] | :isv[dom] | :isv[brati] | :isv[domy] |
| Accusative | :isv[brata] | :isv[dom] | :isv[bratov] | :isv[domy] |
| Genitive | :isv[brata] | :isv[doma] | :isv[bratov] | :isv[domov] |
| Dative | :isv[bratu] | :isv[domu] | :isv[bratam] | :isv[domam] |
| Instrumental | :isv[bratom] | :isv[domom] | :isv[bratami] | :isv[domami] |
| Locative | :isv[bratu] | :isv[domu] | :isv[bratah] | :isv[domah] |
| Vocative | :isv[brate] | :isv[dome] | — | — |

Notes:
- The locative singular primary ending is `-u`, identical to the dative. Alternatively, `-ě` MAY be used after hard consonants: :isv[bratě], :isv[domě].
- The vocative singular of masculine hard-stem nouns ends in `-e`. Before this ending, the consonant alternations `k > č`, `g > ž`, `h > š` apply: :isv[člověk] → :isv[člověče], :isv[Bog] → :isv[Bože].
- Nouns ending in `-ec` take the vocative ending `-če` instead of the expected `-cu`: :isv[otec] → :isv[otče], :isv[hlåpec] → :isv[hlåpče].
:::caution[Unverified Content]
The vocative `-u` exceptions for :isv[dom], :isv[syn], :isv[děd] are not mentioned in the source material.
:::

- A small number of hard-stem nouns take vocative `-u`: :isv[dom] → :isv[domu], :isv[syn] → :isv[synu], :isv[děd] → :isv[dědu].

#### Soft masculine nouns (:isv[muž], :isv[kraj])
:isv[muž] "man" (animate); :isv[kraj] "country/region" (inanimate)

| Case | :isv[muž] sg. | :isv[kraj] sg. | :isv[muži] pl. | :isv[kraje] pl. |
|------|----------|----------|-----------|------------|
| Nominative | :isv[muž] | :isv[kraj] | :isv[muži] | :isv[kraje] |
| Accusative | :isv[muža] | :isv[kraj] | :isv[mužev] | :isv[kraje] |
| Genitive | :isv[muža] | :isv[kraja] | :isv[mužev] | :isv[krajev] |
| Dative | :isv[mužu] | :isv[kraju] | :isv[mužam] | :isv[krajam] |
| Instrumental | :isv[mužem] | :isv[krajem] | :isv[mužami] | :isv[krajami] |
| Locative | :isv[mužu] | :isv[kraju] | :isv[mužah] | :isv[krajah] |
| Vocative | :isv[mužu] | :isv[kraju] | — | — |

Notes:
- For animate nouns (e.g., :isv[muž]), the accusative plural equals the genitive plural: :isv[mužev].
- For inanimate nouns (e.g., :isv[kraj]), the accusative plural equals the nominative plural: :isv[kraje].
- The locative singular MAY alternatively take `-i` after soft consonants: :isv[muži], :isv[kraji].
:::caution[Unverified Content]
The source material does not explicitly state that all soft-stem masculine vocatives end in `-u`. The source mentions `-u` as a soft-stem vocative only in passing for specific examples.
:::

- The vocative singular of soft-stem masculine nouns ends in `-u`.

**Summary of First Declension masculine endings:**

| Case | Hard stem sg. | Soft stem sg. | Hard stem pl. (anim.) | Hard stem pl. (inan.) | Soft stem pl. (anim.) | Soft stem pl. (inan.) |
|------|--------------|--------------|----------------------|----------------------|----------------------|----------------------|
| Nom. | `-Ø` | `-Ø` | `-i` | `-y` | `-i` | `-e` |
| Acc. | `-a` (anim.) / `-Ø` (inan.) | `-a` (anim.) / `-Ø` (inan.) | `-ov` | `-y` | `-ev` | `-e` |
| Gen. | `-a` | `-a` | `-ov` | `-ov` | `-ev` | `-ev` |
| Dat. | `-u` | `-u` | `-am` | `-am` | `-am` | `-am` |
| Instr. | `-om` | `-em` | `-ami` | `-ami` | `-ami` | `-ami` |
| Loc. | `-u` (alt. `-ě`) | `-u` (alt. `-i`) | `-ah` | `-ah` | `-ah` | `-ah` |
| Voc. | `-e` | `-u` | — | — | — | — |

#### Hard neuter nouns (:isv[slovo], :isv[okno])
:isv[slovo] "word"

| Case | Singular | Plural |
|------|---------|-------|
| Nominative | :isv[slovo] | :isv[slova] |
| Accusative | :isv[slovo] | :isv[slova] |
| Genitive | :isv[slova] | :isv[slov] |
| Dative | :isv[slovu] | :isv[slovam] |
| Instrumental | :isv[slovom] | :isv[slovami] |
| Locative | :isv[slovu] | :isv[slovah] |
| Vocative | :isv[slovo] | — |

Notes:
- Neuter nouns have no separate vocative; the nominative serves for all direct address.
- The accusative is always identical to the nominative for neuter nouns.
- The genitive plural has a zero ending `-Ø`. When this would produce an impossible consonant cluster, an epenthetic vowel is inserted: `-o-` between hard consonants (:isv[okno] → :isv[okon]), `-e-` before `-j` or after a soft consonant.
- The locative singular MAY alternatively take `-ě` after hard consonants: :isv[slově].

#### Soft neuter nouns (:isv[morje], :isv[polje])
:isv[morje] "sea"

| Case | Singular | Plural |
|------|---------|-------|
| Nominative | :isv[morje] | :isv[morja] |
| Accusative | :isv[morje] | :isv[morja] |
| Genitive | :isv[morja] | :isv[morij] |
| Dative | :isv[morju] | :isv[morjam] |
| Instrumental | :isv[morjem] | :isv[morjami] |
| Locative | :isv[morju] | :isv[morjah] |
| Vocative | :isv[morje] | — |

Notes:
- The genitive plural of soft neuter nouns inserts `-ij` to avoid the cluster *-rj + Ø*: :isv[morij].
- The locative singular MAY alternatively take `-i`: :isv[morji].

---

### Second Declension (feminine -a nouns)
The Second Declension covers:
- Feminine nouns ending in `-a` (hard and soft stems);
:::caution[Unverified Content]
The example :isv[bogyni] is not mentioned in the source material. Only :isv[pani] is given as an example of `-i` nouns in this declension class.
:::

- A small class of feminine nouns ending in `-i` (:isv[pani], :isv[bogyni]);
- Masculine nouns ending in `-a` that denote male persons (see the relevant section).

#### Hard feminine -a nouns (:isv[žena], :isv[ruka])
:isv[žena] "woman"

| Case | Singular | Plural |
|------|---------|-------|
| Nominative | :isv[žena] | :isv[ženy] |
| Accusative | :isv[ženų] | :isv[ženy] |
| Genitive | :isv[ženy] | :isv[žen] |
| Dative | :isv[ženě] | :isv[ženam] |
| Instrumental | :isv[ženojų] | :isv[ženami] |
| Locative | :isv[ženě] | :isv[ženah] |
| Vocative | :isv[ženo] | — |

Notes:
- The accusative singular takes `-ų` (representing the Common Slavic nasal vowel *ǫ*, written `ų` in Latin script; in standard Interslavic it is pronounced as *u* in most realizations).
- The dative and locative singular are identical: `-ě`.
- The genitive plural takes a zero ending `-Ø`: :isv[žen].
- The vocative singular ends in `-o`.

#### Soft feminine -ja nouns (:isv[zemja], :isv[duša])
:isv[zemja] "earth"

| Case | Singular | Plural |
|------|---------|-------|
| Nominative | :isv[zemja] | :isv[zemje] |
| Accusative | :isv[zemjų] | :isv[zemje] |
| Genitive | :isv[zemje] | :isv[zem] (or :isv[zemej]) |
| Dative | :isv[zemji] | :isv[zemjam] |
| Instrumental | :isv[zemjejų] | :isv[zemjami] |
| Locative | :isv[zemji] | :isv[zemjah] |
| Vocative | :isv[zemjo] | — |

Notes:
- The soft-stem alternations apply: `-y` → `-e`, `-ě` → `-i`.
- The genitive plural zero ending after `-j` may produce an epenthetic vowel: :isv[zemej] is an acceptable alternative to :isv[zem].

#### Masculine -a nouns denoting males (:isv[sluga], :isv[sudja])
:::caution[Unverified Content]
The source says these nouns "follow the pattern of masculine animate nouns" in the plural but does not use the normative "MUST". The MUST requirement is an editorial addition.
:::

Nouns such as :isv[sluga] "servant" and :isv[sudja] "judge" are grammatically masculine but follow the Second Declension in the singular. In the plural they MUST use First Declension masculine endings with the animate distinction.

| Case | :isv[sluga] sg. | :isv[sudja] sg. | :isv[slugi] pl. | :isv[sudji] pl. |
|------|------------|------------|------------|------------|
| Nominative | :isv[sluga] | :isv[sudja] | :isv[slugi] | :isv[sudji] |
| Accusative | :isv[slugų] | :isv[sudjų] | :isv[slugov] | :isv[sudjev] |
| Genitive | :isv[slugy] | :isv[sudje] | :isv[slugov] | :isv[sudjev] |
| Dative | :isv[slugě] | :isv[sudji] | :isv[slugam] | :isv[sudjam] |
| Instrumental | :isv[slugojų] | :isv[sudjejų] | :isv[slugami] | :isv[sudjami] |
| Locative | :isv[slugě] | :isv[sudji] | :isv[slugah] | :isv[sudjah] |
| Vocative | :isv[slugo] | :isv[sudjo] | — | — |

---

### Third Declension (feminine consonant-final nouns)
The Third Declension covers feminine nouns ending in a consonant (zero ending). The most numerous subgroup ends in `-ost`. The accusative is always identical to the nominative in this declension (no animacy distinction applies).

:::caution[Unverified Content]
The source material does not provide an explicit Third Declension paradigm table for :isv[kost]. The forms in this table (e.g., instrumental singular :isv[kosťjų]) cannot be directly verified against the source.
:::

#### Feminine -ost and similar (:isv[kost], :isv[noć])
:isv[kost] "bone"

| Case | Singular | Plural |
|------|---------|-------|
| Nominative | :isv[kost] | :isv[kosti] |
| Accusative | :isv[kost] | :isv[kosti] |
| Genitive | :isv[kosti] | :isv[kostij] |
| Dative | :isv[kosti] | :isv[kosťam] |
| Instrumental | :isv[kosťjų] | :isv[kosťami] |
| Locative | :isv[kosti] | :isv[kosťah] |
| Vocative | :isv[kosti] | — |

Notes:
- The genitive plural ends in `-ij` to avoid the final cluster *-stj* or similar: :isv[kostij].
- The dative and locative plural take `-am` and `-ah` preceded by a soft consonant alternant where applicable.
- Words historically masculine that have shifted to the Third Declension (e.g., :isv[pųť] "path") are discussed in the relevant section

:::caution[Unverified Content]
The section on :isv[pųť] "path" with its dual-paradigm table is not present in the source material.
:::

#### Note on :isv[pųť] "path"
The word :isv[pųť] "path, way" is variable across Slavic languages: feminine Third Declension in most, masculine First Declension in Serbo-Croatian. Interslavic **recommends** treating it as a feminine Third Declension noun, but permits First Declension masculine use as well.

| Case | III Declension sg. | III Declension pl. | I Declension sg. | I Declension pl. |
|------|-------------------|-------------------|-----------------|-----------------|
| Nominative | :isv[pųť] | :isv[pųťi] | :isv[pųť] | :isv[pųťe] |
| Accusative | :isv[pųť] | :isv[pųťi] | :isv[pųť] | :isv[pųťe] |
| Genitive | :isv[pųťi] | :isv[pųťij] | :isv[pųťa] | :isv[pųťev] |
| Dative | :isv[pųťi] | :isv[pųťam] | :isv[pųťu] | :isv[pųťam] |
| Instrumental | :isv[pųťjų] | :isv[pųťami] | :isv[pųťem] | :isv[pųťami] |
| Locative | :isv[pųťi] | :isv[pųťah] | :isv[pųťu] | :isv[pųťah] |

---

### Athematic (n-stem, t-stem, s-stem) nouns (optional)
The athematic declension derives from Old Church Slavonic and Proto-Slavic stem classes that have been lost or merged in most modern Slavic languages. In Interslavic, use of the athematic paradigm is **optional** (MAY be employed). Every athematic noun has a regular-declension equivalent that is equally correct.

The athematic declension applies to nouns of all three genders organized by stem extension:

:::caution[Unverified Content]
The example :isv[denj] "day" is not listed among the -en- stem nouns in the source material, which gives only :isv[kamen] "stone" and :isv[koren] "root". Also, the spelling :isv[doći] "daughter" differs from the source material, which has :isv[doči].
:::

| Subtype | Gender | Nominative sg. | Stem extension | Examples |
|---------|--------|---------------|---------------|---------|
| -en- stem | Masculine | `-enj` | `-enj-` (obl. stem) | :isv[kamenj] "stone", :isv[korenj] "root", :isv[denj] "day" (see note below on softness) |
| -en- stem | Neuter | `-ę` | `-en-` | :isv[imę] "name", :isv[brěmę] "burden", :isv[vrěmę] "time" |
| -et- stem | Neuter | `-ę` | `-et-` | :isv[telę] "calf", :isv[kotę] "kitten", :isv[prase] "piglet" |
| -es- stem | Neuter | `-o` | `-es-` | :isv[nebo] "sky", :isv[drěvo] "tree" |
| -ov- stem | Feminine | `-ov` | `-v-` | :isv[crkov] "church", :isv[mrkov] "carrot", :isv[ljubov] "love" |
| -er- stem | Feminine | `-i` | `-er-` | :isv[mati] "mother", :isv[doći] "daughter" |

:::warning[Unresolved: Softness in Athematic Masculine Nominatives]
The athematic masculine nouns listed above (:isv[kamenj], :isv[korenj], :isv[denj], and others such as :isv[jeleń], :isv[jęčmeń], :isv[kremeń], :isv[plåmeń], :isv[grebeń], :isv[remeń], :isv[stųpeń], :isv[šeršeń]) present an unresolved orthographic problem. The final softness in these nouns is **yer-derived** (Proto-Slavic \*kamy, oblique \*kamene; \*dьnь; etc.), not iotation-derived. Yer-derived softness is reflected in Northern Slavic languages (Russian _камень_, Polish _kamień_) but not in Southern Slavic (Croatian _kamen_, Serbian _камен_ — both with hard N).

Under the principle that standard Interslavic follows the South Slavic pattern for yer-derived softness (dropping it), the standard nominative should end in a hard consonant: :isv[kamen], :isv[koren], :isv[den]. The MS Plus form would then use :isv[ń]: :isv[kameń], :isv[koreń], :isv[dėń]. The current notation with the iotation digraph :isv[-nj] (:isv[kamenj], :isv[korenj]) conflates yer-derived softness with iotation-derived softness.

This affects how these nouns interact with the declension system: if the nominative ends in hard :isv[-n], the noun would pattern with hard-stem First Declension masculines; if it ends in soft :isv[-nj], it patterns with soft stems. The athematic paradigm itself (with the extended oblique stem :isv[-en-]) sidesteps this problem, but the regular-declension alternative does not.

No committee decision has been made on this question. Both :isv[kamenj] and :isv[kamen] are encountered in practice.
:::

#### Neuter -en- stem nouns (:isv[ime], :isv[pleme])
:isv[imę] "name"; :isv[brěmę] "burden"

**Singular:**

| Case | :isv[imę] | :isv[brěmę] |
|------|-------|--------|
| Nominative | :isv[imę] | :isv[brěmę] |
| Accusative | :isv[imę] | :isv[brěmę] |
| Genitive | :isv[imene] | :isv[brěmene] |
| Dative | :isv[imeni] | :isv[brěmeni] |
| Instrumental | :isv[imenem] | :isv[brěmenem] |
| Locative | :isv[imeni] | :isv[brěmeni] |

**Plural:**

| Case | :isv[imę] | :isv[brěmę] |
|------|-------|--------|
| Nominative | :isv[imena] | :isv[brěmena] |
| Accusative | :isv[imena] | :isv[brěmena] |
| Genitive | :isv[imen] | :isv[brěmen] |
| Dative | :isv[imenam] | :isv[brěmenam] |
| Instrumental | :isv[imenami] | :isv[brěmenami] |
| Locative | :isv[imenah] | :isv[brěmenah] |

**Regular alternative:** Nouns of this type MAY be declined as ordinary hard neuter nouns, as if their nominative were :isv[imeno], :isv[brěmeno]: gen.sg. :isv[imena], dat.sg. :isv[imenu], etc.

#### Neuter -et- stem nouns (:isv[tele], :isv[děte])
:isv[telę] "calf"; :isv[kotę] "kitten"

**Singular:**

| Case | :isv[telę] | :isv[kotę] |
|------|-------|-------|
| Nominative | :isv[telę] | :isv[kotę] |
| Accusative | :isv[telę] | :isv[kotę] |
| Genitive | :isv[telęte] | :isv[kotęte] |
| Dative | :isv[telęti] | :isv[kotęti] |
| Instrumental | :isv[telętem] | :isv[kotętem] |
| Locative | :isv[telęti] | :isv[kotęti] |

**Plural:**

| Case | :isv[telę] | :isv[kotę] |
|------|-------|-------|
| Nominative | :isv[telęta] | :isv[kotęta] |
| Accusative | :isv[telęta] | :isv[kotęta] |
| Genitive | :isv[telęt] | :isv[kotęt] |
| Dative | :isv[telętam] | :isv[kotętam] |
| Instrumental | :isv[telętami] | :isv[kotętami] |
| Locative | :isv[telętah] | :isv[kotętah] |

**Regular alternative:** These nouns MAY be declined as ordinary hard neuter nouns, as if their nominative were :isv[telęto], :isv[kotęto].

#### Neuter -es- stem nouns (:isv[nebo], :isv[slovo] archaic)
:isv[nebo] "sky/heaven"

| Case | Singular | Plural |
|------|---------|-------|
| Nominative | :isv[nebo] | :isv[nebesa] |
| Accusative | :isv[nebo] | :isv[nebesa] |
| Genitive | :isv[nebese] | :isv[nebes] |
| Dative | :isv[nebesi] | :isv[nebesam] |
| Instrumental | :isv[nebesem] | :isv[nebesami] |
| Locative | :isv[nebesi] | :isv[nebesah] |

**Regular alternative:** :isv[nebo] MAY be declined as an ordinary neuter noun: gen.sg. :isv[neba], dat.sg. :isv[nebu].

**Complete athematic paradigm for all six subtypes:**

**Singular:**

| Case | :isv[kamenj] (m.) | :isv[imę] (n.) | :isv[telę] (n.) | :isv[nebo] (n.) | :isv[crkov] (f.) | :isv[mati] (f.) |
|------|-------------|----------|-----------|-----------|------------|-----------|
| Nom. | :isv[kamenj] | :isv[imę] | :isv[telę] | :isv[nebo] | :isv[crkov] | :isv[mati] |
| Acc. | :isv[kamenj] | :isv[imę] | :isv[telę] | :isv[nebo] | :isv[crkov] | :isv[mati] |
| Gen. | :isv[kamenje] | :isv[imene] | :isv[telęte] | :isv[nebese] | :isv[crkve] | :isv[matere] |
| Dat. | :isv[kamenji] | :isv[imeni] | :isv[telęti] | :isv[nebesi] | :isv[crkvi] | :isv[materi] |
| Instr. | :isv[kamenjem] | :isv[imenem] | :isv[telętem] | :isv[nebesem] | :isv[crkvjų] | :isv[materjų] |
| Loc. | :isv[kamenji] | :isv[imeni] | :isv[telęti] | :isv[nebesi] | :isv[crkvi] | :isv[materi] |

**Plural:**

| Case | :isv[kamenj] (m.) | :isv[imę] (n.) | :isv[telę] (n.) | :isv[nebo] (n.) | :isv[crkov] (f.) | :isv[mati] (f.) |
|------|-------------|----------|-----------|-----------|------------|-----------|
| Nom. | :isv[kamenji] | :isv[imena] | :isv[telęta] | :isv[nebesa] | :isv[crkvi] | :isv[materi] |
| Acc. | :isv[kamenji] | :isv[imena] | :isv[telęta] | :isv[nebesa] | :isv[crkvi] | :isv[materi] |
| Gen. | :isv[kamenjev] | :isv[imen] | :isv[telęt] | :isv[nebes] | :isv[crkvij] | :isv[materij] |
| Dat. | :isv[kamenjam] | :isv[imenam] | :isv[telętam] | :isv[nebesam] | :isv[crkvam] | :isv[materam] |
| Instr. | :isv[kamenjami] | :isv[imenami] | :isv[telętami] | :isv[nebesami] | :isv[crkvami] | :isv[materami] |
| Loc. | :isv[kamenjah] | :isv[imenah] | :isv[telętah] | :isv[nebesah] | :isv[crkvah] | :isv[materah] |

**Avoiding the athematic declension.** Since the athematic declension is optional, the following regular substitutions are permitted:

| Athematic noun | Regular alternative |
|---------------|-------------------|
| :isv[kamenj] (m.) | Decline as First Declension masculine: gen.sg. :isv[kamenja] |
| :isv[imę], :isv[brěmę] (n.) | Decline as :isv[imeno], :isv[brěmeno] (First Declension neuter) |
| :isv[telę], :isv[prase] (n.) | Decline as :isv[telęto], :isv[praseto] (First Declension neuter) |
| :isv[nebo] (n.) | Decline as ordinary neuter: gen.sg. :isv[neba], dat.sg. :isv[nebu] |
| :isv[crkov] (f.) | Decline as :isv[crkva] (Second Declension) or :isv[crkvi] (Third Declension) |
| :isv[mati] (f.) | Decline as Third Declension: gen./dat.sg. :isv[materi] |

---

## Irregular nouns
### Suppletive plurals
Interslavic is designed to be as regular as possible, but the following nouns have suppletive or irregular plurals rooted in natural Slavic usage. The irregular plural forms are **preferred** in standard usage; regular alternatives exist but sound unnatural to Slavic speakers.

**:isv[člověk] "human being, person" → plural: :isv[ljudi] "people"**

The plural is formed from a completely different stem and declines as a Third Declension feminine noun:

| Case | Singular | Plural |
|------|---------|-------|
| Nominative | :isv[člověk] | :isv[ljudi] |
| Accusative | :isv[člověka] | :isv[ljudij] |
| Genitive | :isv[člověka] | :isv[ljudij] |
| Dative | :isv[člověku] | :isv[ljuďam] |
| Instrumental | :isv[člověkom] | :isv[ljuďami] |
| Locative | :isv[člověku] | :isv[ljuďah] |

The regular form :isv[člověki] exists but SHOULD be avoided in favour of :isv[ljudi].

**:isv[dětę] "child" → plural: :isv[děti] "children"**

The singular declines as an athematic -et- stem noun (or alternatively as a regular neuter). The plural is irregular and declines as a Third Declension feminine:

:::caution[Unverified Content]
The genitive singular form :isv[dětęte] does not match the source, which gives :isv[děteta] or :isv[dětete]. The form :isv[dětęta] is also not in the source (source has :isv[děteta]).
:::

| Case | Singular | Plural |
|------|---------|-------|
| Nominative | :isv[dětę] | :isv[děti] |
| Accusative | :isv[dětę] | :isv[děti] |
| Genitive | :isv[dětęte] or :isv[dětęta] | :isv[dětij] |
| Dative | :isv[dětęti] or :isv[dětętu] | :isv[děťam] |
| Instrumental | :isv[dětętem] or :isv[dětętom] | :isv[děťami] |
| Locative | :isv[dětęti] or :isv[dětętu] | :isv[děťah] |

:::caution[Unverified Content]
The source states that regular plurals (:isv[člověki], :isv[oka], etc.) "can be used as well" but "some of them sound very strange." The doc's claim that :isv[člověki] "SHOULD be avoided" is stronger than the source's description.
:::

### Nouns with paired body-part plurals
The nouns :isv[oko] "eye" and :isv[uho] "ear" have irregular plural forms derived from the historical dual number, reflecting the fact that these body parts naturally come in pairs. The plural forms :isv[oči] and :isv[uši] are **preferred**; regular forms :isv[oka], :isv[uha] (and athematic :isv[očesa], :isv[ušesa]) are permitted alternatives.

| Case | :isv[oko] sg. | :isv[uho] sg. | :isv[oči] pl. | :isv[uši] pl. |
|------|----------|----------|----------|----------|
| Nominative | :isv[oko] | :isv[uho] | :isv[oči] | :isv[uši] |
| Accusative | :isv[oko] | :isv[uho] | :isv[oči] | :isv[uši] |
| Genitive | :isv[oka] | :isv[uha] | :isv[očij] | :isv[ušij] |
| Dative | :isv[oku] | :isv[uhu] | :isv[očam] | :isv[ušam] |
| Instrumental | :isv[okom] | :isv[uhom] | :isv[očami] | :isv[ušami] |
| Locative | :isv[oku] | :isv[uhu] | :isv[očah] | :isv[ušah] |

:::caution[Unverified Content]
The full declension table for :isv[Slovjanin] is not in the source material. The source only briefly mentions that words on `-anin` lose `-in-` in the plural and gives nom.sg., gen.sg., nom.pl., and gen.pl. forms.
:::

### -anin nouns (nationalities and inhabitants)
Nouns ending in `-anin` (typically denoting members of an ethnic, national, or geographic group) lose the suffix `-in-` in all plural forms. This is a **regular** pattern for this lexical class, not a true irregularity, but it is documented here because it differs from the standard masculine First Declension.

Example: :isv[Slovjanin] "a Slav"

| Case | Singular | Plural |
|------|---------|-------|
| Nominative | :isv[Slovjanin] | :isv[Slovjani] |
| Accusative | :isv[Slovjanina] | :isv[Slovjanov] |
| Genitive | :isv[Slovjanina] | :isv[Slovjanov] |
| Dative | :isv[Slovjaninu] | :isv[Slovjanam] |
| Instrumental | :isv[Slovjaninom] | :isv[Slovjanami] |
| Locative | :isv[Slovjaninu] | :isv[Slovjanah] |

:::caution[Unverified Content]
The claim that the zero-ending variant :isv[slovjan] is "attested and acceptable in informal usage" is not in the source material.
:::

The genitive plural :isv[Slovjanov] (with the full `-ov` ending) is normative; a zero-ending variant :isv[slovjan] is attested and acceptable in informal usage.

---

## Vocative forms
The vocative is used for direct address and exists only in the masculine and feminine singular. The following rules govern vocative formation:

### Masculine First Declension vocative
| Stem type | Ending | Examples |
|-----------|--------|---------|
| Hard stem | `-e` | :isv[pan] → :isv[pane], :isv[profesor] → :isv[profesore], :isv[Jan] → :isv[Jane] |
| Hard stem (exceptions) | `-u` | :isv[dom] → :isv[domu], :isv[syn] → :isv[synu], :isv[děd] → :isv[dědu] |
| Soft stem | `-u` | :isv[prijatelj] → :isv[prijatelju], :isv[kraj] → :isv[kraju], :isv[konj] → :isv[konju] |
| Stem ending in `-ec` | `-če` | :isv[otec] → :isv[otče], :isv[hlåpec] → :isv[hlåpče], :isv[starec] → :isv[starče] |

Consonant alternations before the vocative ending `-e`:
- `k → č`: :isv[člověk] → :isv[člověče]
- `g → ž`: :isv[Bog] → :isv[Bože]
- `h → š`: (rare examples in this class)

### Feminine Second and Third Declension vocative
| Declension | Ending | Examples |
|-----------|--------|---------|
| Second Declension (`-a` nouns) | `-o` | :isv[mama] → :isv[mamo], :isv[Marija] → :isv[Marijo], :isv[sudja] → :isv[sudjo] |
| Second Declension (`-i` nouns) | `-i` (no change) | :isv[pani] → :isv[pani] |
| Third Declension | `-i` (no change) | :isv[noć] → :isv[noći], :isv[kost] → :isv[kosti] |

### Summary
Neuter nouns and all plural forms have no distinct vocative; the nominative serves in its place. In informal registers, the nominative MAY substitute for the vocative throughout.

---

## Indeclinable nouns
Borrowed international vocabulary ending in `-e`, `-i`, or `-u` (e.g., :isv[alibi], :isv[hobi], :isv[intervju], :isv[kafe], :isv[kakao], :isv[kliše], :isv[menju], :isv[tabu], :isv[taksi]) and abbreviations are indeclinable. These nouns do not take case endings and remain invariant across all grammatical contexts.

If case endings are nonetheless added to such nouns (which is permissible), they SHOULD be separated from the noun by an apostrophe: :isv[togo alibi'a], :isv[te intervju'y], :isv[tyh taksi'ov].

:::caution[Unverified Content]
The declension table for :isv[video] and the rules about borrowed nouns ending in `-o`, Slavic place names ending in `-o`, and personal names ending in `-i` (through the end of section) are not present in the source material.
:::

Nouns ending in `-o` borrowed from international vocabulary (e.g., :isv[video], :isv[metro], :isv[avto], :isv[džudo]) MAY be declined according to the First Declension, treating the final `-o` as the neuter/masculine nominative ending:

| Case | :isv[video] sg. | :isv[video] pl. |
|------|------------|------------|
| Nominative | :isv[video] | :isv[videa] |
| Accusative | :isv[video] | :isv[videa] |
| Genitive | :isv[videa] | :isv[videj] |
| Dative | :isv[videu] | :isv[videam] |
| Instrumental | :isv[videom] | :isv[videami] |
| Locative | :isv[videu] | :isv[videah] |

Slavic place names ending in `-o` (e.g., :isv[Brno], :isv[Puškino]) SHOULD be declined according to the regular neuter paradigm.

Personal names ending in `-i` (e.g., :isv[Dmitri], :isv[Juri]) SHOULD be declined as if they formerly ended in `-ij`: nom. :isv[Dmitri], gen. :isv[Dmitrija], dat. :isv[Dmitriju], instr. :isv[Dmitrijem], loc. :isv[Dmitriju]; plural nom. :isv[Dmitriji], etc.

---

:::caution[Unverified Content]
This entire section () elaborates on genitive plural strategies for `-j-` stems well beyond what the source provides. The source only briefly mentions epenthetic vowel insertion in the genitive plural of neuter nouns. The three-strategy analysis and the specific recommendations are unsourced.
:::

## Genitive plural of nouns with -j- stems
Nouns whose stem ends in `-j-` (primarily Second Declension feminine nouns and soft First Declension neuter nouns) may form the genitive plural by more than one strategy. The choice depends on the individual word and SHOULD favour the form closest to the majority of Slavic languages:

1. **Zero ending with consonant truncation** (parallels Slovenian): :isv[banja] → :isv[banj], :isv[nedělja] → :isv[nedělj]. This is not possible when the result would end in an impermissible cluster (e.g., :isv[burja] → :isv[burj] is avoided).

2. **Epenthetic vowel insertion** (parallels Russian and Slovenian): :isv[morje] → :isv[morij], :isv[večerja] → :isv[večerij]. This is the recommended form when truncation is phonologically impossible.

3. **Removal of -j- before zero ending** (parallels Polish): :isv[zemja] → :isv[zem], :isv[višnja] → :isv[višen] (with epenthesis between consonants).

For First Declension masculine nouns with `-j-` stems, the genitive plural invariably takes `-ev`: :isv[konj] → :isv[konjev].

For Third Declension nouns with stem-final `-j-`, the genitive plural takes `-ij`: :isv[basnj] → :isv[basnij].

:::caution[Committee Review Needed]
The exact recommended form for genitive plural of specific `-j-` stem nouns (e.g., :isv[burja], :isv[zemja], :isv[morje]) is not uniformly specified across existing reference materials. A normative list or decision rule SHOULD be adopted by the committee.
:::
