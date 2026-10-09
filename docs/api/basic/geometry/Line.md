---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Line class

无限直线（参数方程：BasePt + t·XUnitVec）。维度与基点/方向一致。

```csharp
public class Line : ICurveUnit, ILineExpr, IVector
```

## Public Members

| name | description |
| --- | --- |
| Line(…) | 由基点与方向向量构造直线。若希望参数尺度为 1，请传入已单位化的方向。 (3 constructors) |
| BasePt { get; } | 直线基点。 |
| Dimension { get; } | 维度（与方向向量一致）。 |
| Expr { get; } | 二维直线隐式方程表达式（仅 2D）。 |
| XUnitVec { get; } | 方向向量（构造时传入，未必单位化）。 |
| Absorb(…) | 将点吸收到直线参数空间，返回参数 t（无界）。 |
| Contain(…) | 判断点是否落在直线上（容差内）。 |
| PointAt(…) | 参数点：BasePt + t·XUnitVec。 |
| SegAt(…) | 取参数区间 [tStart, tEnd] 上的线段。 |
| operator % | 投影运算符：将点投影到直线上。 (2 operators) |

### Line.Absorb method

将点吸收到直线参数空间，返回参数 t（无界）。

```csharp
public double Absorb(Point pt)
```

| parameter | description |
| --- | --- |
| pt | 待吸收点。 |

#### Return Value

参数 t。

### Line.BasePt property

直线基点。

```csharp
public Point BasePt { get; }
```

### Line.Contain method

判断点是否落在直线上（容差内）。

```csharp
public bool Contain(Point pt, double tolerance = 1E-06m)
```

| parameter | description |
| --- | --- |
| pt | 待测点。 |
| tolerance | 容差。 |

#### Return Value

在线上则为 `true`。

### Line.Dimension property

维度（与方向向量一致）。

```csharp
public int Dimension { get; }
```

### Line.Expr property

二维直线隐式方程表达式（仅 2D）。

```csharp
public LineExpr Expr { get; }
```

### Line constructor (1 of 3)

由基点与二维方向角构造直线。

```csharp
public Line(Point basePt, Angle dirAngle)
```

| parameter | description |
| --- | --- |
| basePt | 基点。 |
| dirAngle | 方向角。 |

### Line constructor (2 of 3)

由两点构造直线（方向为 endPt − basePt）。

```csharp
public Line(Point basePt, Point endPt)
```

| parameter | description |
| --- | --- |
| basePt | 起点。 |
| endPt | 终点。 |

### Line constructor (3 of 3)

由基点与方向向量构造直线。若希望参数尺度为 1，请传入已单位化的方向。

```csharp
public Line(Point basePt, Vector xUnit)
```

| parameter | description |
| --- | --- |
| basePt | 基点。 |
| xUnit | 方向向量（不必单位化）。 |

### Line Modulus operator (1 of 2)

投影运算符：将点投影到直线上。

```csharp
public static Point operator %(Point pt, Line line)
```

### Line Modulus operator (2 of 2)

投影运算符：将向量投影到直线方向上。

```csharp
public static Vector operator %(Vector vec, Line line)
```

### Line.PointAt method

参数点：BasePt + t·XUnitVec。

```csharp
public Point PointAt(double t)
```

| parameter | description |
| --- | --- |
| t | 参数。 |

#### Return Value

线上点。

### Line.SegAt method

取参数区间 [tStart, tEnd] 上的线段。

```csharp
public LineSeg SegAt(double tStart, double tEnd)
```

| parameter | description |
| --- | --- |
| tStart | 起点参数。 |
| tEnd | 终点参数。 |

#### Return Value

线段。

### Line.XUnitVec property

方向向量（构造时传入，未必单位化）。

```csharp
public Vector XUnitVec { get; }
```
