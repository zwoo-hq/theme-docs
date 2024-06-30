import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '@zwoo/theme-docs',
  description: 'the zwoo documentation theme',
  lang: 'en-US',
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/zwoo-hq/theme-docs'
      }
    ],
    sidebar: [
      {
        text: 'ZWOO Docs',
        link: '/not-ready'
      }
    ]
  }
});
