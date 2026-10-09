---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Transform</code></p>

# Projection class

投影与相关几何构造辅助（点投影见 `Point.ProjectTo` 与运算符 `%` 语义）。

```csharp
public static class Projection
```

## Public Members

| name | description |
| --- | --- |
| static PerpendicularBisector(…) | 构造两点连线的垂直平分线（二维直线方程）。 |

### Projection.PerpendicularBisector method

构造两点连线的垂直平分线（二维直线方程）。

```csharp
public static LineExpr PerpendicularBisector(Point pt1, Point pt2)
```

| parameter | description |
| --- | --- |
| pt1 | 第一个点。 |
| pt2 | 第二个点。 |

#### Return Value

过中点且垂直于 pt1–pt2 的 `LineExpr`。
