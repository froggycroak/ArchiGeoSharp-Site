---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Arc structure

平面圆弧（或退化为弦的直线段）：由起点、终点与起点切向角唯一确定，实现 `ICurveUnit` / `ICurveSmooth`。

```csharp
public struct Arc : ICurveSmooth
```

## Public Members

| name | description |
| --- | --- |
| Arc(…) | 主构造：起点、终点与起点切向角（Mod360 归一化到 0,360)）。 (4 constructors) |
| [Center { get; } | 圆心；半圆或直线等特殊情形可能落在弦中点或默认点。 |
| Chord { get; } | 起点与终点之间的弦段。 |
| ChordVec { get; } | 弦向量（终点减起点）。 |
| Curvature { get; } | 曲率 k（直线时为 0 量级；k × 曲率半径 = 1）。 |
| EndPt { get; } | 终点。 |
| EndRadiusAngle { get; } | 终点相对圆心的半径方向角。 |
| EndRadiusVec { get; } | 终点相对圆心的半径向量。 |
| EndTangentAngle { get; } | 终点切向角。 |
| EndTangentVec { get; } | 终点单位切向量。 |
| IsClosed { get; } | 扫掠角约为 360° 时为闭合圆。 |
| IsLine { get; } | 切向与弦平行时为 true，表示退化为直线段。 |
| Length { get; } | 弧长（直线时为弦长）。 |
| MidPt { get; } | 弧中点；退化为直线时为弦中点。 |
| Radius { get; } | 半径；退化为直线时为 PositiveInfinity。 |
| SecantTangentAngle { get; } | 弦方向角（与弦向量一致，Mod360）。 |
| SectorArea { get; } | 扇形面积,有正负: 逆时针正, 顺时针负 |
| SegmentArea { get; } | 弓形面积 = 扇形面积 - 三角形面积 有正负: 正负性同对应扇形 |
| StartPt { get; } | 起点。 |
| StartRadiusAngle { get; } | 起点相对圆心的半径方向角。 |
| StartRadiusVec { get; } | 起点相对圆心的半径向量。 |
| StartTangentAngle { get; } | 起点切向角（0,360)）。 |
| [StartTangentVec { get; } | 起点单位切向量。 |
| TriangleArea { get; } | 三角形面积, 有正负: (start -&gt; end -&gt; center) 逆时针正, 顺时针负 |
| Turnning { get; } | 扫掠角（(-360,360]，有符号；逆时针为正）。 |
| DerivativeAt(…) | 参数 t 处的切向量（未单位化；直线时为弦向量）。 |
| PointAt(…) | 按参数 t ∈ [0,1] 求弧上点（t 为归一化弧长参数）。 |
| Reverse() | 反向弧：交换起终点并翻转切向。 |

### Arc constructor (1 of 4)

反构造：由终点切向角反推起点切向角（参数顺序与主构造不同，使用需注意）。

```csharp
public Arc(Angle endTangentAngle, Point endPt, Point startPt)
```

| parameter | description |
| --- | --- |
| endTangentAngle | 终点切向角。 |
| endPt | 终点。 |
| startPt | 起点。 |

### Arc constructor (2 of 4)

主构造：起点、终点与起点切向角（Mod360 归一化到 0,360)）。

```csharp
public Arc(Point startPt, Point endPt, Angle startTangentAngle)
```

| parameter | description |
| --- | --- |
| startPt | 起点。 |
| endPt | 终点。 |
| startTangentAngle | 起点处切线方向角。 |

### Arc constructor (3 of 4)

三点构造：过起点、弧上一点与终点的唯一圆弧（共线时退化为直线）。

```csharp
public Arc(Point startPt, Point onArcPt, Point endPt)
```

| parameter | description |
| --- | --- |
| startPt | 起点。 |
| onArcPt | 弧上内点。 |
| endPt | 终点。 |

### Arc constructor (4 of 4)

由圆心、半径与起止半径角截取圆弧。

```csharp
public Arc(Point center, double radius, Angle startRadiusAngle, Angle endRadiusAngle, 
    bool isClockwise = false)
```

| parameter | description |
| --- | --- |
| center | 圆心。 |
| radius | 半径。 |
| startRadiusAngle | 起点相对圆心的半径方向角。 |
| endRadiusAngle | 终点相对圆心的半径方向角。 |
| isClockwise | 为 true 时按顺时针走向。 |

### Arc.Center property

圆心；半圆或直线等特殊情形可能落在弦中点或默认点。

```csharp
public Point Center { get; }
```

### Arc.Chord property

起点与终点之间的弦段。

```csharp
public LineSeg Chord { get; }
```

### Arc.ChordVec property

弦向量（终点减起点）。

```csharp
public Vector ChordVec { get; }
```

### Arc.Curvature property

曲率 k（直线时为 0 量级；k × 曲率半径 = 1）。

```csharp
public double Curvature { get; }
```

### Arc.DerivativeAt method

参数 t 处的切向量（未单位化；直线时为弦向量）。

```csharp
public Vector DerivativeAt(double t)
```

| parameter | description |
| --- | --- |
| t | 弧长参数 [0,1]。 |

#### Return Value

该参数处的导数/切向。

### Arc.EndPt property

终点。

```csharp
public Point EndPt { get; }
```

### Arc.EndRadiusAngle property

终点相对圆心的半径方向角。

```csharp
public Angle EndRadiusAngle { get; }
```

### Arc.EndRadiusVec property

终点相对圆心的半径向量。

```csharp
public Vector EndRadiusVec { get; }
```

### Arc.EndTangentAngle property

终点切向角。

```csharp
public Angle EndTangentAngle { get; }
```

### Arc.EndTangentVec property

终点单位切向量。

```csharp
public Vector EndTangentVec { get; }
```

### Arc.IsClosed property

扫掠角约为 360° 时为闭合圆。

```csharp
public bool IsClosed { get; }
```

### Arc.IsLine property

切向与弦平行时为 true，表示退化为直线段。

```csharp
public bool IsLine { get; }
```

### Arc.Length property

弧长（直线时为弦长）。

```csharp
public double Length { get; }
```

### Arc.MidPt property

弧中点；退化为直线时为弦中点。

```csharp
public Point MidPt { get; }
```

### Arc.PointAt method

按参数 t ∈ [0,1] 求弧上点（t 为归一化弧长参数）。

```csharp
public Point PointAt(double t)
```

| parameter | description |
| --- | --- |
| t | 弧长参数，0 为起点，1 为终点。 |

#### Return Value

对应位置上的点。

### Arc.Radius property

半径；退化为直线时为 PositiveInfinity。

```csharp
public double Radius { get; }
```

### Arc.Reverse method

反向弧：交换起终点并翻转切向。

```csharp
public Arc Reverse()
```

#### Return Value

走向相反的新弧。

### Arc.SecantTangentAngle property

弦方向角（与弦向量一致，Mod360）。

```csharp
public Angle SecantTangentAngle { get; }
```

### Arc.SectorArea property

扇形面积,有正负: 逆时针正, 顺时针负

```csharp
public double SectorArea { get; }
```

### Arc.SegmentArea property

弓形面积 = 扇形面积 - 三角形面积 有正负: 正负性同对应扇形

```csharp
public double SegmentArea { get; }
```

### Arc.StartPt property

起点。

```csharp
public Point StartPt { get; }
```

### Arc.StartRadiusAngle property

起点相对圆心的半径方向角。

```csharp
public Angle StartRadiusAngle { get; }
```

### Arc.StartRadiusVec property

起点相对圆心的半径向量。

```csharp
public Vector StartRadiusVec { get; }
```

### Arc.StartTangentAngle property

起点切向角（0,360)）。

```csharp
public Angle StartTangentAngle { get; }
```

### Arc.StartTangentVec property

起点单位切向量。

```csharp
public Vector StartTangentVec { get; }
```

### Arc.TriangleArea property

三角形面积, 有正负: (start -&gt; end -&gt; center) 逆时针正, 顺时针负

```csharp
public double TriangleArea { get; }
```

### Arc.Turnning property

扫掠角（(-360,360]，有符号；逆时针为正）。

```csharp
public Angle Turnning { get; }
```
