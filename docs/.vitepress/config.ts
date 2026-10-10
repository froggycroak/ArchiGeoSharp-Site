import { defineConfig } from 'vitepress'
import { basicApiSidebar } from './basic-api-sidebar'
import {
  moduleApiSidebar,
  moduleSidebarMatchesPartition
} from './module-api-sidebar'

const extensionGuideSidebar = {
  text: '扩展模块',
  collapsed: false,
  items: [
    { text: 'Depute', link: '/guide/depute' },
    { text: 'OpenNurbs', link: '/guide/opennurbs' },
    { text: 'Raylex', link: '/guide/raylex' },
    { text: 'Solver', link: '/guide/grbsolver' }
  ]
}

const learningSidebar = [
  {
    text: '入门',
    items: [
      { text: '快速上手', link: '/guide/getting-started' },
      { text: '模块概览', link: '/guide/modules' },
      { text: '坐标系与变换', link: '/guide/transforms' },
      { text: '相对关系', link: '/guide/relations' },
      { text: '地图与路网（预告）', link: '/guide/maps-preview' }
    ]
  },
  extensionGuideSidebar
]

/** 八个分区同一层级、同一分组形态（Basic.XXX + 四个扩展模块） */
const apiPartitionSidebarWithActive = (activePartition?: string) => [
  ...basicApiSidebar.map((group) => ({
    ...group,
    collapsed: activePartition ? group.text !== activePartition : group.collapsed
  })),
  ...moduleApiSidebar.map((group) => ({
    ...group,
    collapsed: activePartition
      ? !moduleSidebarMatchesPartition(group, activePartition)
      : group.collapsed
  }))
]

const basicGroupBySlug: Record<string, string> = {
  geometry: 'Basic.Geometry',
  transform: 'Basic.Transform',
  numeric: 'Basic.Numeric',
  topology: 'Basic.Topology'
}

/**
 * 关于、许可没有导航项，但仍占左侧栏。
 * VitePress 仅在 sidebar 非空时启用 has-sidebar，空分组用于对齐 API / 入门页的栏宽。
 */
const reservedSidebar = [{ text: '', items: [] }]

const apiSidebarForBasic = (activeSlug?: string) =>
  apiPartitionSidebarWithActive(activeSlug ? basicGroupBySlug[activeSlug] : undefined)

export default defineConfig({
  title: 'ArchiGeoSharp',
  description: '面向建筑几何与计算设计的 C# 几何内核',
  lang: 'zh-CN',
  base: '/ArchiGeoSharp-site/',
  cleanUrls: true,
  head: [['meta', { charset: 'utf-8' }]],
  ignoreDeadLinks: [
    /^https?:\/\/localhost/
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '入门', link: '/guide/getting-started', activeMatch: '^/guide/' },
      { text: 'API', link: '/api/basic-geometry' },
      { text: '关于', link: '/about' },
      {
        text: 'NuGet',
        link: 'https://www.nuget.org/packages/ArchiGeoSharp.Basic'
      }
    ],
    sidebar: {
      '/about': reservedSidebar,
      '/license': reservedSidebar,
      '/guide/': learningSidebar,
      '/api/basic/geometry/': apiSidebarForBasic('geometry'),
      '/api/basic/transform/': apiSidebarForBasic('transform'),
      '/api/basic/numeric/': apiSidebarForBasic('numeric'),
      '/api/basic/topology/': apiSidebarForBasic('topology'),
      '/api/basic-geometry': apiSidebarForBasic('geometry'),
      '/api/basic-transform': apiSidebarForBasic('transform'),
      '/api/basic-numeric': apiSidebarForBasic('numeric'),
      '/api/basic-topology': apiSidebarForBasic('topology'),
      '/api/depute': apiPartitionSidebarWithActive('Depute'),
      '/api/opennurbs': apiPartitionSidebarWithActive('OpenNurbs'),
      '/api/raylex/': apiPartitionSidebarWithActive('Raylex'),
      '/api/raylex': apiPartitionSidebarWithActive('Raylex'),
      '/api/grbsolver': apiPartitionSidebarWithActive('Solver'),
      '/api/': apiPartitionSidebarWithActive()
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/froggycroak/ArchiGeoSharp-Site' }
    ],
    footer: {
      message: 'ArchiGeoSharp.Basic 以专有许可发布为 NuGet 包',
      copyright: 'Copyright © 2026 ArchiFrog'
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    }
  }
})
