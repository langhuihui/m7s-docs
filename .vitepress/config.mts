import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Monibuca docs v4",
  description: "Monibuca is a Modularized, Extensible framework for building Streaming Server.",
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
      { text: '教程', link: '/guide/intro', activeMatch: '/guide/' },
      { text: '插件', link: '/plugins/basic', activeMatch: '/plugins/' },
      { text: '关于', link: '/about/born' }
    ],

    sidebar: {
      '/guide/': {
        base: '/guide/', items: [
          {
            text: '介绍',
            collapsed: false,
            items: [
              { text: '什么是 Monibuca', link: 'intro' },
              { text: '快速开始', link: 'getting-started' },
            ]
          },
          {
            text: '接口',
            collapsed: false,
            items: [
              { text: '引擎API', link: 'api-basic' },
              { text: '接口文档', link: 'api-http' },
            ]
          },
          {
            text: '架构',
            collapsed: false,
            items: [
              { text: '基本概念', link: 'principle-basic' },
              { text: '设计架构', link: 'principle-architecture' },
            ]
          },
        ],
      },
      '/plugins/': {
        base: '/plugins/', items: [
          {
            text: '介绍',
            collapsed: false,
            items: [
              { text: '插件介绍', link: 'basic' },
            ]
          },
          {
            text: '官方插件',
            collapsed: false,
            items: [
              { text: '集群插件', link: 'cluster' },
              { text: '网关插件', link: 'gateway' },
              { text: 'GB28181 插件', link: 'GB28181' },
              { text: 'hdl 插件', link: 'hdl' },
              { text: 'hls 插件', link: 'hls' },
              { text: 'jessica 插件', link: 'jessica' },
              { text: 'LogRotate插件', link: 'logrotate' },
              { text: 'record 插件', link: 'record' },
              { text: 'RTMP 插件', link: 'rtmp' },
              { text: 'RTSP 插件', link: 'rtsp' },
              { text: 'Summary 插件', link: 'summary' },
              { text: 'TS 插件', link: 'ts' },
              { text: 'WebRTC 插件', link: 'webrtc' },
            ]
          },
        ],
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/langhuihui/monibuca' }
    ],

    footer: {
      copyright: '@2023 Monibuca All Rights Reserved 南京莫妮不卡科技有限公司',
      message: 'Released under the MIT License.',
    },
  }
})
