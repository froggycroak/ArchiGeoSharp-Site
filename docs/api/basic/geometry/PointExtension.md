---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# PointExtension class

`Point` 到直线/平面的正交投影扩展（保持原坐标描述系，语义同 `%` project）。

```csharp
public static class PointExtension
```

## Public Members

| name | description |
| --- | --- |
| static ProjectTo(…) | 投影到无限直线（经 `LineExpr`）。 (3 methods) |

### PointExtension.ProjectTo method (1 of 3)

投影到无限直线（经 `LineExpr`）。

```csharp
public static Point ProjectTo(this Point pt, Line line)
```

| parameter | description |
| --- | --- |
| pt | 待投影点。 |
| line | 目标直线。 |

#### Return Value

直线上的垂足。

### PointExtension.ProjectTo method (2 of 3)

投影到二维无限直线；保留绝对坐标描述系（非局部 Absorb）。

```csharp
public static Point ProjectTo(this Point pt, LineExpr le)
```

| parameter | description |
| --- | --- |
| pt | 待投影点（二维）。 |
| le | 直线方程。 |

#### Return Value

直线上的垂足。

### PointExtension.ProjectTo method (3 of 3)

投影到三维平面（正交投影，保留绝对坐标描述系）。

```csharp
public static Point ProjectTo(this Point pt, PlaneExpr plane)
```

| parameter | description |
| --- | --- |
| pt | 待投影点。 |
| plane | 平面方程。 |

#### Return Value

平面上的垂足。
