import { visit } from 'unist-util-visit';

/**
 * Remark plugin for Interslavic text directives.
 *
 * Supported inline directives:
 *   :isv[text]              — Interslavic text (Latin script)
 *   :latn[text]             — Explicitly Latin-script text
 *   :cyrl[text]             — Explicitly Cyrillic-script text
 *   :ipa[text]              — IPA transcription
 *   :abbr[text]{title="…"}  — Abbreviation with optional expansion
 */
const DIRECTIVE_LANG = {
  isv: 'isv',
  latn: 'isv-Latn',
  cyrl: 'isv-Cyrl',
  ipa: 'x-ipa',
};

export default function remarkIsvDirective() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'textDirective') return;

      const data = node.data || (node.data = {});

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
