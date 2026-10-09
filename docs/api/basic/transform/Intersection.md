---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Transform</code></p>

# Intersection class

几何求交工具。二维返回 `Point` / 点数组；三维支持直线与平面求交。

```csharp
public static class Intersection
```

## Public Members

| name | description |
| --- | --- |
| static Tolerance | 去重与数值比较用容差。 |
| static Intersect(…) | 求两二维直线交点；平行则返回 `null`。 (7 methods) |

### Intersection.Intersect method (1 of 7)

求两二维直线交点；平行则返回 `null`。

```csharp
public static Point? Intersect(ILineExpr l1, ILineExpr l2)
```

| parameter | description |
| --- | --- |
| l1 | 直线 1。 |
| l2 | 直线 2。 |

#### Return Value

交点；无交为 `null`。

### Intersection.Intersect method (2 of 7)

求二维直线与线段的交点。

```csharp
public static Point? Intersect(ILineExpr l, LineSeg ls)
```

| parameter | description |
| --- | --- |
| l | 直线。 |
| ls | 线段。 |

#### Return Value

交点；无交为 `null`。

### Intersection.Intersect method (3 of 7)

求三维直线与平面的交点；平行则返回 `null`。

```csharp
public static Point? Intersect(Line line, PlaneExpr plane)
```

| parameter | description |
| --- | --- |
| line | 三维直线。 |
| plane | 平面方程。 |

#### Return Value

交点；无交为 `null`。

### Intersection.Intersect method (4 of 7)

求两二维线段交点；不相交或共线无唯一交点则返回 `null`。

```csharp
public static Point? Intersect(LineSeg ls1, LineSeg ls2)
```

| parameter | description |
| --- | --- |
| ls1 | 线段 1。 |
| ls2 | 线段 2。 |

#### Return Value

交点；无交为 `null`。

### Intersection.Intersect method (5 of 7)

求折线与直线的全部交点（去重）。

```csharp
public static Point[] Intersect(Polyline poly, ILineExpr l)
```

| parameter | description |
| --- | --- |
| poly | 折线。 |
| l | 直线。 |

#### Return Value

交点数组；无交时长度为 0。

### Intersection.Intersect method (6 of 7)

求折线与线段的全部交点（去重）。

```csharp
public static Point[] Intersect(Polyline poly, LineSeg ls)
```

| parameter | description |
| --- | --- |
| poly | 折线。 |
| ls | 线段。 |

#### Return Value

交点数组。

### Intersection.Intersect method (7 of 7)

求两折线的全部交点（去重）。

```csharp
public static Point[] Intersect(Polyline poly1, Polyline poly2)
```

| parameter | description |
| --- | --- |
| poly1 | 折线 1。 |
| poly2 | 折线 2。 |

#### Return Value

交点数组。

### Intersection.Tolerance field

去重与数值比较用容差。

```csharp
public static double Tolerance;
```
