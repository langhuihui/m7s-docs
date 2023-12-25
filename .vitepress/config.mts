import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Monibuca docs v4",
  description: "Monibuca is a Modularized, Extensible framework for building Streaming Server.",
  lastUpdated: true,
  // locales: {
  //   root: { label: '简体中文', lang: 'zh-CN', link: '/' },
  //   fr: {
  //     label: 'English',
  //     lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
  //     link: '/en' // default /fr/ -- shows on navbar translations menu, can be external
  //   },
  // },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/m7s-logo.svg' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/langhuihui/monibuca' }
    ]
  }
})
