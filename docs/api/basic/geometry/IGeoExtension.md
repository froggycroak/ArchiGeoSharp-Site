---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# IGeoExtension class

几何接口（`ICurveUnit`、`ISurfaceUnit` 等）到折线/三角网格的转换扩展。

```csharp
public static class IGeoExtension
```

## Public Members

| name | description |
| --- | --- |
| static ToMeshTriangle(…) | 在 u、v 参数域上均匀剖分曲面，生成三角网格（每格两三角形）。 |
| static ToPolyline(…) | 将参数曲线均匀采样为折线。 |

### IGeoExtension.ToMeshTriangle method

在 u、v 参数域上均匀剖分曲面，生成三角网格（每格两三角形）。

```csharp
public static MeshTriangle ToMeshTriangle(this ISurfaceUnit isrf, int uDivisions, int vDivisions)
```

| parameter | description |
| --- | --- |
| isrf | 参数曲面。 |
| uDivisions | u 方向分段数。 |
| vDivisions | v 方向分段数。 |

#### Return Value

三角网格。

### IGeoExtension.ToPolyline method

将参数曲线均匀采样为折线。

```csharp
public static Polyline ToPolyline(this ICurveUnit curve, int divisions = 10)
```

| parameter | description |
| --- | --- |
| curve | 源曲线，参数 t∈[0,1]。 |
| divisions | 分段数（采样点数为 divisions+1）。 |

#### Return Value

采样折线。
