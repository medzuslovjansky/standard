import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Interslavic Language Standard',
  tagline: 'Official specification of the Interslavic auxiliary language',
  favicon: 'img/favicon.ico',
  url: 'https://interslavic.fun',
  baseUrl: '/standard/',
  organizationName: 'medzuslovjansky',
  projectName: 'standard',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/medzuslovjansky/standard/edit/main/',
        },
        theme: {
          customCss: './src/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Interslavic Specification',
      logo: {
        alt: 'Interslavic Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/medzuslovjansky/standard',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Spec',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/interslavic',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Interslavic Language Community`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
