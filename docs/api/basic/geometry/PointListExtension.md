---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# PointListExtension class

点列表扩展方法（部分类）。

点列表扩展方法（展平 / 还原部分）。

```csharp
public static class PointListExtension
```

## Public Members

| name | description |
| --- | --- |
| static AABBValues(…) | 轴对齐最小包围盒的XY范围 |
| static Area(…) | 有向面积（shoelace）；点数不足 3 返回 0。 |
| static AveragePoint(…) | 计算点集算术平均点（质心近似）。 |
| static AxisAlignedBoundingBox(…) | AABB: 轴对齐最小包围盒 |
| static Centroid(…) | 闭合点列的面积质心（鞋带公式）。 |
| static ConvexHull(…) | 二维点集凸包（返回闭合折线）。 |
| static DimensionalShift(…) | 对列表中每个点做升降维。 |
| static FlattenAsArray(…) | 将点列表展平为坐标数组（不足维补 0）。 |
| static Info(…) | 将点列表格式化为空格分隔的字符串。 |
| static MinimumBoundingCircle(…) |  |
| static OrientedBoundingBox(…) | 给定角度的最小外接矩形 (2 methods) |
| static PrincipalAxes(…) | 闭合点列的质心二阶矩与等效椭圆主轴。 |
| static RemoveAllRepeat(…) | 原地移除容差内重复点。 |
| static ToString(…) | 等价于 `Info`。 |
| static UnflattenAsPoints(…) | 将扁平坐标数组还原为点列表。 |

### PointListExtension.AABBValues method

轴对齐最小包围盒的XY范围

```csharp
public static double[] AABBValues(this List<Point> pts)
```

| parameter | description |
| --- | --- |
| pts |  |

#### Return Value

[[minX,maxX][minY,maxY]]

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException |  |

### PointListExtension.Area method

有向面积（shoelace）；点数不足 3 返回 0。

```csharp
public static double Area(this List<Point> pts)
```

| parameter | description |
| --- | --- |
| pts | 点列表（视为闭合）。 |

#### Return Value

有向面积。

### PointListExtension.AveragePoint method

计算点集算术平均点（质心近似）。

```csharp
public static Point AveragePoint(this List<Point> pts)
```

| parameter | description |
| --- | --- |
| pts | 点列表。 |

#### Return Value

平均点。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 列表为空时抛出。 |

### PointListExtension.AxisAlignedBoundingBox method

AABB: 轴对齐最小包围盒

```csharp
public static Rect AxisAlignedBoundingBox(this List<Point> pts)
```

| parameter | description |
| --- | --- |
| pts |  |

### PointListExtension.Centroid method

闭合点列的面积质心（鞋带公式）。

```csharp
public static Point Centroid(this List<Point> pts)
```

### PointListExtension.ConvexHull method

二维点集凸包（返回闭合折线）。

```csharp
public static Polyline ConvexHull(this List<Point> pts)
```

| parameter | description |
| --- | --- |
| pts | 点列表。 |

#### Return Value

凸包折线。

### PointListExtension.DimensionalShift method

对列表中每个点做升降维。

```csharp
public static List<Point> DimensionalShift(this List<Point> pts, int newDimension)
```

| parameter | description |
| --- | --- |
| pts | 点列表。 |
| newDimension | 目标维度。 |

#### Return Value

新点列表。

### PointListExtension.FlattenAsArray method

将点列表展平为坐标数组（不足维补 0）。

```csharp
public static double[] FlattenAsArray(this IList<Point> points, int targetDimension = 3)
```

| parameter | description |
| --- | --- |
| points | 点列表。 |
| targetDimension | 目标每点分量数，默认 3。 |

#### Return Value

扁平坐标数组。

### PointListExtension.Info method

将点列表格式化为空格分隔的字符串。

```csharp
public static string Info(this List<Point> pts)
```

| parameter | description |
| --- | --- |
| pts | 点列表。 |

#### Return Value

描述字符串。

### PointListExtension.MinimumBoundingCircle method

```csharp
public static Circle MinimumBoundingCircle(this List<Point> pts)
```

### PointListExtension.OrientedBoundingBox method (1 of 2)

最小面积外接矩形，任意角度

```csharp
public static Rect OrientedBoundingBox(this List<Point> pts)
```

| parameter | description |
| --- | --- |
| pts |  |

### PointListExtension.OrientedBoundingBox method (2 of 2)

给定角度的最小外接矩形

```csharp
public static Rect OrientedBoundingBox(this List<Point> pts, Angle angle)
```

| parameter | description |
| --- | --- |
| pts |  |
| angle |  |

### PointListExtension.PrincipalAxes method

闭合点列的质心二阶矩与等效椭圆主轴。

```csharp
public static PrincipalAxes2d PrincipalAxes(this List<Point> pts)
```

### PointListExtension.RemoveAllRepeat method

原地移除容差内重复点。

```csharp
public static void RemoveAllRepeat(this List<Point> pts, double tolerance)
```

| parameter | description |
| --- | --- |
| pts | 点列表。 |
| tolerance | 容差。 |

### PointListExtension.ToString method

等价于 `Info`。

```csharp
public static string ToString(this List<Point> pts)
```

| parameter | description |
| --- | --- |
| pts | 点列表。 |

#### Return Value

描述字符串。

### PointListExtension.UnflattenAsPoints method

将扁平坐标数组还原为点列表。

```csharp
public static List<Point> UnflattenAsPoints(this double[] coordinates, int dimension)
```

| parameter | description |
| --- | --- |
| coordinates | 扁平坐标。 |
| dimension | 每点分量数。 |

#### Return Value

点列表。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 数组长度不能被维度整除时抛出。 |
