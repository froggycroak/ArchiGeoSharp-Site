---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# IBezierCurve interface

贝塞尔曲线。

```csharp
public interface IBezierCurve : ICurveSmooth
```

## Members

| name | description |
| --- | --- |
| ControlPoints { get; } | 控制点列表。 |
| Degree { get; } | 次数。 |
| EndPt { get; } | 终点。 |
| StartPt { get; } | 起点。 |

### IBezierCurve.ControlPoints property

控制点列表。

```csharp
public IList<Point> ControlPoints { get; }
```

### IBezierCurve.Degree property

次数。

```csharp
public int Degree { get; }
```

### IBezierCurve.EndPt property

终点。

```csharp
public Point EndPt { get; }
```

### IBezierCurve.StartPt property

起点。

```csharp
public Point StartPt { get; }
```
