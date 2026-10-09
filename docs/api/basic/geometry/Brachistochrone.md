---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Brachistochrone class

最速降线（Brachistochrone）：用旋轮线参数方程表示二维曲线。

```csharp
public class Brachistochrone : ICurveSmooth
```

## Public Members

| name | description |
| --- | --- |
| Brachistochrone(…) | 构造最速降线。 |
| static FromDelta(…) | 根据水平距离与高度差（向下为正）生成最速降线。 |
| static FromEndpoints(…) | 根据起点和终点生成最速降线。 |
| Radius { get; } | 旋轮半径参数。 |
| StartPt { get; } | 起点。 |
| ThetaMax { get; } | 参数角上限。 |
| PointAt(…) | t∈[0,1] 时返回最速降线上对应二维点。 |

### Brachistochrone constructor

构造最速降线。

```csharp
public Brachistochrone(Point startPt, double radius, double thetaMax = 3.141592653589793m)
```

| parameter | description |
| --- | --- |
| startPt | 起点（二维）。 |
| radius | 旋轮半径参数（须大于 0；负值表示反向）。 |
| thetaMax | 参数角上限（须大于 0，常用 π）。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | radius 或 thetaMax 非法时抛出。 |

### Brachistochrone.FromDelta method

根据水平距离与高度差（向下为正）生成最速降线。

```csharp
public static Brachistochrone FromDelta(Point startPt, double horizontalDistance, double heightDrop)
```

| parameter | description |
| --- | --- |
| startPt | 起点（二维）。 |
| horizontalDistance | 水平距离，可正可负，符号表示左右方向。 |
| heightDrop | 高度差，向下为正（须大于 0）。 |

#### Return Value

满足给定端点差值的最速降线实例。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 参数非法时抛出。 |

### Brachistochrone.FromEndpoints method

根据起点和终点生成最速降线。

```csharp
public static Brachistochrone FromEndpoints(Point startPt, Point endPt)
```

| parameter | description |
| --- | --- |
| startPt | 起点（二维）。 |
| endPt | 终点（二维，须低于起点）。 |

#### Return Value

满足给定起终点的最速降线实例。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 终点不低于起点时抛出。 |

### Brachistochrone.PointAt method

t∈[0,1] 时返回最速降线上对应二维点。

```csharp
public Point PointAt(double t)
```

| parameter | description |
| --- | --- |
| t | 归一化参数。 |

#### Return Value

曲线上的点。

### Brachistochrone.Radius property

旋轮半径参数。

```csharp
public double Radius { get; }
```

### Brachistochrone.StartPt property

起点。

```csharp
public Point StartPt { get; }
```

### Brachistochrone.ThetaMax property

参数角上限。

```csharp
public double ThetaMax { get; }
```
