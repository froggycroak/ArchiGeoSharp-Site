---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# PointSetExtension class

`IPointSet` 的包围与统计扩展，逻辑委托给点列扩展方法。

```csharp
public static class PointSetExtension
```

## Public Members

| name | description |
| --- | --- |
| static AABBValues(…) | AABB 的 min/max 数值矩阵。 |
| static AxisAlignedBoundingBox(…) | 轴对齐包围矩形（AABB）。 |
| static Centroid(…) | 质心。 |
| static ConvexHull(…) | 点集的凸包折线。 |
| static MinimumBoundingCircle(…) | 最小包围圆。 |
| static OrientedBoundingBox(…) | 给定方向的定向包围矩形（OBB）。 (2 methods) |
| static PrincipalAxes(…) | 二维主方向轴。 |

### PointSetExtension.AABBValues method

AABB 的 min/max 数值矩阵。

```csharp
public static double[] AABBValues(this IPointSet ptSet)
```

| parameter | description |
| --- | --- |
| ptSet | 点集。 |

#### Return Value

各维最小与最大值。

### PointSetExtension.AxisAlignedBoundingBox method

轴对齐包围矩形（AABB）。

```csharp
public static Rect AxisAlignedBoundingBox(this IPointSet ptSet)
```

| parameter | description |
| --- | --- |
| ptSet | 点集。 |

#### Return Value

包围矩形。

### PointSetExtension.Centroid method

质心。

```csharp
public static Point Centroid(this IPointSet ptSet)
```

| parameter | description |
| --- | --- |
| ptSet | 点集。 |

#### Return Value

质心坐标。

### PointSetExtension.ConvexHull method

点集的凸包折线。

```csharp
public static Polyline ConvexHull(this IPointSet ptSet)
```

| parameter | description |
| --- | --- |
| ptSet | 点集。 |

#### Return Value

凸包。

### PointSetExtension.MinimumBoundingCircle method

最小包围圆。

```csharp
public static Circle MinimumBoundingCircle(this IPointSet ptSet)
```

| parameter | description |
| --- | --- |
| ptSet | 点集。 |

#### Return Value

包围圆。

### PointSetExtension.OrientedBoundingBox method (1 of 2)

主方向上的定向包围矩形。

```csharp
public static Rect OrientedBoundingBox(this IPointSet ptSet)
```

| parameter | description |
| --- | --- |
| ptSet | 点集。 |

#### Return Value

OBB。

### PointSetExtension.OrientedBoundingBox method (2 of 2)

给定方向的定向包围矩形（OBB）。

```csharp
public static Rect OrientedBoundingBox(this IPointSet ptSet, Angle angle)
```

| parameter | description |
| --- | --- |
| ptSet | 点集。 |
| angle | 长边方向角。 |

#### Return Value

OBB。

### PointSetExtension.PrincipalAxes method

二维主方向轴。

```csharp
public static PrincipalAxes2d PrincipalAxes(this IPointSet ptSet)
```

| parameter | description |
| --- | --- |
| ptSet | 点集。 |

#### Return Value

主成分轴。
