---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Circle class

圆（曲线参数 t ∈ [0,1] 对应一周；可附带三维附着平面）。

```csharp
public class Circle : ICircleExpr, ICurveSmooth
```

## Public Members

| name | description |
| --- | --- |
| Circle(…) | 由圆心与半径构造二维圆（附着世界 XY 平面）。 (3 constructors) |
| AttachedPlane { get; } | 附着平面（将局部 2D 圆嵌入三维）。 |
| Center { get; } | 圆心。 |
| Radius { get; } | 半径。 |
| PointAt(…) | 参数点；t ∈ [0,1] 对应一周（与 `LineSeg` 参数约定一致）。 |
| PointOn(…) | 按角度取圆上点。 |

### Circle.AttachedPlane property

附着平面（将局部 2D 圆嵌入三维）。

```csharp
public Space3d AttachedPlane { get; }
```

### Circle.Center property

圆心。

```csharp
public Point Center { get; }
```

### Circle constructor (1 of 3)

由圆心与半径构造二维圆（附着世界 XY 平面）。

```csharp
public Circle(Point center, double radius)
```

| parameter | description |
| --- | --- |
| center | 圆心（须为 2D）。 |
| radius | 半径。 |

### Circle constructor (2 of 3)

由圆心、半径与附着平面构造圆。

```csharp
public Circle(Point center, double radius, Space3d attachedPlane)
```

| parameter | description |
| --- | --- |
| center | 圆心（局部 2D）。 |
| radius | 半径。 |
| attachedPlane | 附着的三维坐标系/平面。 |

### Circle constructor (3 of 3)

由三点确定圆。

```csharp
public Circle(Point pt1, Point pt2, Point pt3)
```

| parameter | description |
| --- | --- |
| pt1 | 点 1。 |
| pt2 | 点 2。 |
| pt3 | 点 3。 |

#### Exceptions

| exception | condition |
| --- | --- |
| Exception | 三点共线无法成圆时抛出。 |

### Circle.PointAt method

参数点；t ∈ [0,1] 对应一周（与 `LineSeg` 参数约定一致）。

```csharp
public Point PointAt(double t)
```

| parameter | description |
| --- | --- |
| t | 归一化参数。 |

#### Return Value

圆上点。

### Circle.PointOn method

按角度取圆上点。

```csharp
public Point PointOn(Angle angle)
```

| parameter | description |
| --- | --- |
| angle | 方位角。 |

#### Return Value

圆上点。

### Circle.Radius property

半径。

```csharp
public double Radius { get; }
```
