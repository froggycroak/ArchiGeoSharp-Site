---
layout: home

hero:
  name: ArchiGeoSharp
  text: 建筑几何与计算设计的 C# 内核
  tagline: 以 Plane / Space 统一坐标系与变换，面向建筑与计算设计场景
  actions:
    - theme: brand
      text: 快速上手
      link: /guide/getting-started
    - theme: alt
      text: 安装 NuGet
      link: https://www.nuget.org/packages/ArchiGeoSharp.Basic
    - theme: alt
      text: API 参考
      link: /api/basic

features:
  - title: N 维点与向量
    details: Point / Vector 支持任意维度，通过接口约束降低几何实体间的心智切换成本。
  - title: 对象即坐标系
    details: Plane 与 Space3d 同时描述位姿与变换，支持绝对/相对描述与运算符组合。
  - title: 可组合的强类型
    details: 右手系、无缩放等约束减少隐式错误，同时保持对象可组合、可复用。
  - title: 生态扩展
    details: OpenNurbs / Depute / Raylex 等模块以 coerce 方式对接 Rhino、地图与可视化（后续分包）。
---
