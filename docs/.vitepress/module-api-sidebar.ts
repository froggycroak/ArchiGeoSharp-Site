import type { DefaultTheme } from 'vitepress'
import { raylexApiSidebarGroup } from './raylex-api-sidebar'

/** 用于 API 侧栏展开匹配（标题 text 可含 HTML badge） */
export type ModuleApiSidebarGroup = DefaultTheme.SidebarItem & {
  partition: string
}

const soonPill = '<span class="vp-sidebar-soon-pill">Coming soon</span>'

function moduleGroup(
  partition: string,
  link: string,
  comingSoon = false
): ModuleApiSidebarGroup {
  return {
    partition,
    text: comingSoon ? `${partition}${soonPill}` : partition,
    collapsed: true,
    items: [{ text: 'All types', link }]
  }
}

/** 与 Basic.Geometry 等同级：分组 + items，结构一致（占位仅 All types） */
export const moduleApiSidebar: ModuleApiSidebarGroup[] = [
  moduleGroup('Depute', '/api/depute', true),
  moduleGroup('OpenNurbs', '/api/opennurbs', true),
  raylexApiSidebarGroup,
  moduleGroup('Solver', '/api/grbsolver', true)
]

export function moduleSidebarMatchesPartition(
  group: DefaultTheme.SidebarItem,
  partition: string
): boolean {
  return 'partition' in group && (group as ModuleApiSidebarGroup).partition === partition
}
