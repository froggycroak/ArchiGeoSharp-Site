---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# SmoothArcSeries class

由一系列相切连接的 `Arc` 组成的平滑折线曲线（`IPolyCurve`）。

```csharp
public class SmoothArcSeries : IPolyCurve
```

## Public Members

| name | description |
| --- | --- |
| SmoothArcSeries(…) | 按顶点序列构造：首段使用给定起始切向角，后续段切向由前弧终点切向传递。 (2 constructors) |
| Arcs { get; } | 内部弧段列表。 |
| SegmentCount { get; } | 弧段数量。 |
| PointOn(…) | 复合参数 t：整数部分为段索引，小数部分为段内参数；索引越界时对段数取模。 |
| SegmentAt(…) | 按索引返回弧段。 |

### SmoothArcSeries.Arcs property

内部弧段列表。

```csharp
public List<Arc> Arcs { get; }
```

### SmoothArcSeries.PointOn method

复合参数 t：整数部分为段索引，小数部分为段内参数；索引越界时对段数取模。

```csharp
public Point PointOn(double t)
```

| parameter | description |
| --- | --- |
| t | 复合参数。 |

#### Return Value

曲线上的点。

### SmoothArcSeries.SegmentAt method

按索引返回弧段。

```csharp
public ICurveUnit SegmentAt(int index)
```

| parameter | description |
| --- | --- |
| index | 段索引。 |

#### Return Value

第 index 段弧。

### SmoothArcSeries.SegmentCount property

弧段数量。

```csharp
public int SegmentCount { get; }
```

### SmoothArcSeries constructor (1 of 2)

按顶点序列构造：默认第一段为直线方向（pts[1]−pts[0]）。

```csharp
public SmoothArcSeries(List<Point> pts, bool closed = false)
```

| parameter | description |
| --- | --- |
| pts | 顶点序列。 |
| closed | 为 true 时闭合。 |

### SmoothArcSeries constructor (2 of 2)

按顶点序列构造：首段使用给定起始切向角，后续段切向由前弧终点切向传递。

```csharp
public SmoothArcSeries(List<Point> pts, Angle startTangentAngle, bool closed = false)
```

| parameter | description |
| --- | --- |
| pts | 顶点序列，至少 2 点。 |
| startTangentAngle | 第一段起始切向。 |
| closed | 为 true 时追加闭合段。 |
