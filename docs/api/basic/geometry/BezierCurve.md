---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# BezierCurve class

通用 Bézier 曲线，支持任意阶；控制点至少 2 个且维数一致。

```csharp
public class BezierCurve : IBezierCurve, IVector
```

## Public Members

| name | description |
| --- | --- |
| BezierCurve(…) | 由控制点构造 Bézier 曲线。 |
| static Create(…) | 工厂：由控制点创建曲线。 |
| ControlPoints { get; } | 控制点只读列表。 |
| Degree { get; } | 曲线阶数（控制点数 − 1）。 |
| Dimension { get; } | 坐标维数。 |
| EndPt { get; } | 终点（最后一个控制点）。 |
| StartPt { get; } | 起点（第一个控制点）。 |
| PointAt(…) | De Casteljau 求参数 t∈[0,1] 处的曲线点。 |

### BezierCurve constructor

由控制点构造 Bézier 曲线。

```csharp
public BezierCurve(params Point[] controlPoints)
```

| parameter | description |
| --- | --- |
| controlPoints | 控制点序列。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 少于 2 个点或维数不一致时抛出。 |

### BezierCurve.ControlPoints property

控制点只读列表。

```csharp
public IList<Point> ControlPoints { get; }
```

### BezierCurve.Create method

工厂：由控制点创建曲线。

```csharp
public static BezierCurve Create(params Point[] controlPoints)
```

| parameter | description |
| --- | --- |
| controlPoints | 控制点。 |

#### Return Value

新曲线。

### BezierCurve.Degree property

曲线阶数（控制点数 − 1）。

```csharp
public int Degree { get; }
```

### BezierCurve.Dimension property

坐标维数。

```csharp
public int Dimension { get; }
```

### BezierCurve.EndPt property

终点（最后一个控制点）。

```csharp
public Point EndPt { get; }
```

### BezierCurve.PointAt method

De Casteljau 求参数 t∈[0,1] 处的曲线点。

```csharp
public Point PointAt(double t)
```

| parameter | description |
| --- | --- |
| t | 归一化参数；≤0 返回起点，≥1 返回终点。 |

#### Return Value

曲线上的点。

### BezierCurve.StartPt property

起点（第一个控制点）。

```csharp
public Point StartPt { get; }
```
