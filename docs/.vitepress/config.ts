import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ArchiGeoSharp',
  description: '面向建筑几何与计算设计的 C# 几何内核',
  lang: 'zh-CN',
  base: '/ArchiGeoSharp-site/',
  cleanUrls: true,
  ignoreDeadLinks: [
    /^https?:\/\/localhost/
  ],
  themeConfig: {
    nav: [
      { text: '入门', link: '/guide/getting-started' },
      { text: '教程', link: '/tutorials/transforms' },
      { text: 'API', link: '/api/basic' },
      { text: '许可', link: '/license' },
      {
        text: 'NuGet',
        link: 'https://www.nuget.org/packages/ArchiGeoSharp.Basic'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '快速上手', link: '/guide/getting-started' },
            { text: '模块概览', link: '/guide/modules' }
          ]
        }
      ],
      '/tutorials/': [
        {
          text: '教程',
          items: [
            { text: '坐标系与变换', link: '/tutorials/transforms' },
            { text: '地图与路网（预告）', link: '/tutorials/maps-preview' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: 'Basic', link: '/api/basic' },
            { text: 'Depute（未公开发包）', link: '/api/depute' },
            { text: 'OpenNurbs（未公开发包）', link: '/api/opennurbs' },
            { text: 'Raylex（未公开发包）', link: '/api/raylex' },
            { text: 'GRBSolver（未公开发包）', link: '/api/grbsolver' },
            { text: 'Rhinex（开发中）', link: '/api/rhinex' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/froggycroak/ArchiGeoSharp-site' }
    ],
    footer: {
      message: 'ArchiGeoSharp.Basic 以专有许可发布为 NuGet 包',
      copyright: 'Copyright © 2026 ArchiFrog'
    },
    search: {
      provider: 'local'
    }
  }
})
