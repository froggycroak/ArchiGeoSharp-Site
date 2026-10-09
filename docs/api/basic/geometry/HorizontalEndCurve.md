---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# HorizontalEndCurve class

连接 A 到 B 的二维曲线，并保证终点切线为水平。 使用二次贝塞尔： P(t)=(1-t)^2*P0 + 2(1-t)t*P1 + t^2*P2 其中 P0=A, P2=B, 且 P1.y=B.y，因此在 t=1 时 dY/dt=0。

```csharp
public class HorizontalEndCurve : IBezierCurve
```

## Public Members

| name | description |
| --- | --- |
| HorizontalEndCurve(…) | 构造函数。 (4 constructors) |
| ControlPoints { get; } | 控制点列表 [起点, 控制点, 终点]。 |
| ControlPt { get; } | 中间控制点。 |
| Degree { get; } | 次数（二次）。 |
| EndPt { get; } | 终点。 |
| StartPt { get; } | 起点。 |
| PointAt(…) | t∈[0,1] 时返回曲线上对应二维点。 |

### HorizontalEndCurve.ControlPoints property

控制点列表 [起点, 控制点, 终点]。

```csharp
public IList<Point> ControlPoints { get; }
```

### HorizontalEndCurve.ControlPt property

中间控制点。

```csharp
public Point ControlPt { get; }
```

### HorizontalEndCurve.Degree property

次数（二次）。

```csharp
public int Degree { get; }
```

### HorizontalEndCurve.EndPt property

终点。

```csharp
public Point EndPt { get; }
```

### HorizontalEndCurve constructor (1 of 4)

由高度、宽度构造末端水平曲线（起点 (0,height)，终点 (width,0)）。

```csharp
public HorizontalEndCurve(double height, double width, double controlXRatio = 0.5m)
```

| parameter | description |
| --- | --- |
| height | 起点高度。 |
| width | 水平跨度。 |
| controlXRatio | 控制点 X 插值比例 [0,1]。 |

### HorizontalEndCurve constructor (2 of 4)

根据端点自动生成一条末端水平的曲线。

```csharp
public HorizontalEndCurve(Point startPt, Point endPt, double controlXRatio = 0.5m)
```

| parameter | description |
| --- | --- |
| startPt | 起点 A（二维） |
| endPt | 终点 B（二维） |
| controlXRatio | 控制点在 A-&gt;B 的 x 方向插值比例，范围 [0,1]。 0.5 表示控制点 x 在两端中点。 |

#### Return Value

末端水平曲线实例

### HorizontalEndCurve constructor (3 of 4)

构造函数。

```csharp
public HorizontalEndCurve(Point startPt, Point controlPt, Point endPt)
```

| parameter | description |
| --- | --- |
| startPt | 起点 A（二维） |
| controlPt | 控制点（二维） |
| endPt | 终点 B（二维） |

### HorizontalEndCurve constructor (4 of 4)

由三维起终点构造局部曲线，并输出附着平面。

```csharp
public HorizontalEndCurve(Point startPt, Point endPt, double controlXRatio, ref Space3d basePlane)
```

| parameter | description |
| --- | --- |
| startPt | 三维起点。 |
| endPt | 三维终点。 |
| controlXRatio | 控制点 X 插值比例。 |
| basePlane | 输出：曲线所在三维坐标系。 |

### HorizontalEndCurve.PointAt method

t∈[0,1] 时返回曲线上对应二维点。

```csharp
public Point PointAt(double t)
```

### HorizontalEndCurve.StartPt property

起点。

```csharp
public Point StartPt { get; }
```
