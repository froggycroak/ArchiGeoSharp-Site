---
outline: false
---

# ArchiGeo.Basic.Transform

## ArchiGeo.Basic.Transform namespace

| public type | description |
| --- | --- |
| static class [Distance](/api/basic/transform/Distance) | ?????????????????????? 2D? |
| static class [Intersection](/api/basic/transform/Intersection) | 几何求交工具。二维返回 `Point` / 点数组；三维支持直线与平面求交。 |
| static class [Projection](/api/basic/transform/Projection) | 投影与相关几何构造辅助（点投影见 `Point.ProjectTo` 与运算符 `%` 语义）。 |
| static class [Relation](/api/basic/transform/Relation) | ???????partial?????????????????????????????? |
| struct [RelationType](/api/basic/transform/RelationType) | 几何相对关系的枚举式结构：用 inside/outside/cross/around 四元布尔编码，并提供 `Index` 与预定义静态值。 |
| class [Space2d](/api/basic/transform/Space2d) | 二维正交坐标系 / 齐次变换。兼作空间描述与变换。 |
| class [Space3d](/api/basic/transform/Space3d) | 三维正交坐标系 / 齐次变换。兼作空间描述与变换。 |
