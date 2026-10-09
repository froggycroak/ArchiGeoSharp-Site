---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ICurveUnit interface

单参数曲线单元。自身维数 1D；Base 维数为 `PointAt` 返回点的维度。

```csharp
public interface ICurveUnit : ICurve
```

## Members

| name | description |
| --- | --- |
| PointAt(…) | 参数点；约定 t ∈ [0,1]。 |

### ICurveUnit.PointAt method

参数点；约定 t ∈ [0,1]。

```csharp
public Point PointAt(double t)
```

| parameter | description |
| --- | --- |
| t | 归一化参数。 |

#### Return Value

曲线上的点。
