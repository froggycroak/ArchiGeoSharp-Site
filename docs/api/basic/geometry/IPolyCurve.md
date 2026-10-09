---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# IPolyCurve interface

由多段曲线单元组成的折线型曲线。

```csharp
public interface IPolyCurve : ICurve
```

## Members

| name | description |
| --- | --- |
| SegmentCount { get; } | 段数。 |
| PointOn(…) | 连续参数取点；t ∈ 0, n)。 |
| [SegmentAt(…) | 取指定段。 |

### IPolyCurve.PointOn method

连续参数取点；t ∈ 0, n)。

```csharp
public Point PointOn(double t)
```

### IPolyCurve.SegmentAt method

取指定段。

```csharp
public ICurveUnit SegmentAt(int index)
```

### IPolyCurve.SegmentCount property

段数。

```csharp
public int SegmentCount { get; }
```
