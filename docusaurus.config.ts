import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkDirective from 'remark-directive';
import remarkIsvDirective from './src/remark-isv-directive';

const config: Config = {
  title: 'Interslavic',
  tagline: 'A language understood by 400 million Slavic speakers — without prior study',
  favicon: 'img/favicon.ico',
  url: 'https://interslavic.online',
  baseUrl: '/',
  organizationName: 'medzuslovjansky',
  projectName: 'interslavic.online',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/standard',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/medzuslovjansky/standard/edit/main/',
          remarkPlugins: [remarkDirective, remarkIsvDirective],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: '/standard',
        indexBlog: false,
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Interslavic',
      logo: {
        alt: 'Interslavic Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/explore', label: 'Explore', position: 'left'},
        {to: '/learn', label: 'Learn', position: 'left'},
        {to: '/standard', label: 'Standard', position: 'left'},
        {to: '/develop', label: 'Develop', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {to: '/blog', label: 'News', position: 'right'},
        {
          href: 'https://github.com/medzuslovjansky/interslavic.online/issues/new',
          label: 'Feedback',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            {label: 'Community', to: '/explore'},
            {label: 'Events', to: '/explore/events'},
            {label: 'Discord', href: 'https://discord.gg/interslavic'},
          ],
        },
        {
          title: 'Learn',
          items: [
            {label: 'Learn', to: '/learn'},
            {label: 'Standard', to: '/standard'},
          ],
        },
        {
          title: 'Develop',
          items: [
            {label: 'Tools & APIs', to: '/develop'},
            {label: 'Contribute', to: '/develop'},
            {label: 'GitHub', href: 'https://github.com/medzuslovjansky'},
          ],
        },
        {
          title: 'About',
          items: [
            {label: 'About', to: '/about'},
            {label: 'History', to: '/about/history'},
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
