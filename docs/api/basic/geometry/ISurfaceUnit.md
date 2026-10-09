---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ISurfaceUnit interface

曲面单元。自身维数 2D；Base 维数通常为 3D。

```csharp
public interface ISurfaceUnit : IMeshTriangle
```

## Members

| name | description |
| --- | --- |
| PointAt(…) | 参数点 (u, v)。 |

### ISurfaceUnit.PointAt method

参数点 (u, v)。

```csharp
public Point PointAt(double u, double v)
```
