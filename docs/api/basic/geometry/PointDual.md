---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# PointDual class

将固定 `Point` 同时视为 `IVector` 与退化的 `ICurveUnit`（参数 t 无关）。

```csharp
public class PointDual : ICurveUnit, IVector
```

## Public Members

| name | description |
| --- | --- |
| PointDual(…) | 包装一个点。 |
| Dimension { get; } | 点的维数。 |
| PointAt(…) | 曲线上参数 t 处的点；本实现恒返回构造时的点。 |

### PointDual.Dimension property

点的维数。

```csharp
public int Dimension { get; }
```

### PointDual.PointAt method

曲线上参数 t 处的点；本实现恒返回构造时的点。

```csharp
public Point PointAt(double t)
```

| parameter | description |
| --- | --- |
| t | 曲线参数（未使用）。 |

#### Return Value

固定点。

### PointDual constructor

包装一个点。

```csharp
public PointDual(Point point)
```

| parameter | description |
| --- | --- |
| point | 底层点。 |
