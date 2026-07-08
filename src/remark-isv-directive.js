import { visit } from 'unist-util-visit';
import { etymToStandardLatin, etymToStandardCyrillic } from "./isv-etym.js";

/**
 * Remark plugin for Interslavic text directives.
 *
 * Supported inline directives:
 *   :isv[text]              — Interslavic text (input etymological script);
 *                             rendered in the reader's chosen alphabet
 *                             (etymological / standard Latin / standard Cyrillic)
 *                             via the navbar switcher
 *   :latn[text]             — Explicitly Latin-script text
 *   :cyrl[text]             — Explicitly Cyrillic-script text
 *   :ipa[text]              — IPA transcription
 *   :abbr[text]{title="…"}  — Abbreviation with optional expansion
 *
 * Slavic language directives (BCP 47 lang attribute):
 *   Proto-Slavic: :sla
 *   East Slavic:  :ru :uk :be :rue
 *   West Slavic:  :pl :cs :sk :hsb :dsb :csb :szl :rsk
 *   South Slavic: :sl :hr :bs :sr :mk :bg :cu
 */
const DIRECTIVE_LANG = {
  // Interslavic
  isv: 'isv',
  latn: 'isv-Latn',
  cyrl: 'isv-Cyrl',
  ipa: 'x-ipa',
  // Proto-Slavic
  sla: 'x-sla',  // Proto-Slavic (reconstructed)
  // East Slavic
  ru: 'ru',    // Russian
  uk: 'uk',    // Ukrainian
  be: 'be',    // Belarusian
  rue: 'rue',  // Rusyn (Carpathian)
  // West Slavic
  pl: 'pl',    // Polish
  cs: 'cs',    // Czech
  sk: 'sk',    // Slovak
  hsb: 'hsb',  // Upper Sorbian
  dsb: 'dsb',  // Lower Sorbian
  csb: 'csb',  // Kashubian
  szl: 'szl',  // Silesian
  rsk: 'rsk',  // Pannonian Rusyn
  // South Slavic
  sl: 'sl',    // Slovenian
  hr: 'hr',    // Croatian
  bs: 'bs',    // Bosnian
  sr: 'sr',    // Serbian
  mk: 'mk',    // Macedonian
  bg: 'bg',    // Bulgarian
  cu: 'cu',    // Old Church Slavonic / Church Slavonic
};

export default function remarkIsvDirective() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'textDirective') return;

      const data = node.data || (node.data = {});

      // Etymological directive → three pre-rendered spans, one per alphabet.
      // The active one is chosen at read time by CSS keyed on the
      // `data-isv-alphabet` attribute set on <html> by the navbar switcher.
      if (node.name === "isv") {
        const source = (node.children || [])
          .map((child) => (typeof child.value === "string" ? child.value : ""))
          .join("");

        const variant = (className, lang, value) => ({
          type: "element",
          tagName: "span",
          properties: { className: [className], lang },
          children: [{ type: "text", value }],
        });

        data.hName = "span";
        data.hProperties = { className: ["etym"] };
        data.hChildren = [
          variant("etym-etym", "isv-Latn", source),
          variant("etym-latn", "isv-Latn", etymToStandardLatin(source)),
          variant("etym-cyrl", "isv-Cyrl", etymToStandardCyrillic(source)),
        ];
        return;
      }

      // Abbreviation directive → <abbr>
      if (node.name === 'abbr') {
        data.hName = 'abbr';
        const title = node.attributes?.title;
        if (title) {
          data.hProperties = { title };
        }
        return;
      }

      // Language directives → <span lang="...">
      const lang = DIRECTIVE_LANG[node.name];
      if (!lang) return;

      data.hName = 'span';
      data.hProperties = { lang };
    });
  };
}
