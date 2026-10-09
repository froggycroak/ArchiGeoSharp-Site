---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# BilinearCoonsPatch class

双线性 Coons 嵌面 / 四边界曲线嵌面（非纯拓扑定义）。 四条边界 u=0、u=1、v=0、v=1 上精确匹配给定曲线。

```csharp
public class BilinearCoonsPatch : ISurfaceUnit
```

## Public Members

| name | description |
| --- | --- |
| BilinearCoonsPatch(…) | 由四条边界曲线构造；四角点须一致（见 `CheckCurvesMatch`）。 (2 constructors) |
| PointAt(…) | Coons 双线性混合：边界插值减去角点双线性项再加回。 |
| ToMeshTriangle(…) | u、v 方向相同分段数的三角网格。 (2 methods) |

### BilinearCoonsPatch constructor (1 of 2)

由四条边界曲线构造；四角点须一致（见 `CheckCurvesMatch`）。

```csharp
public BilinearCoonsPatch(ICurveUnit u0, ICurveUnit u1, ICurveUnit v0, ICurveUnit v1)
```

| parameter | description |
| --- | --- |
| u0 | v=0 边（u 从 0 到 1）。 |
| u1 | v=1 边。 |
| v0 | u=0 边。 |
| v1 | u=1 边。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 边界端点不匹配时抛出。 |

### BilinearCoonsPatch constructor (2 of 2)

由四角点构造：边界为直线段，顺序为 pt00–pt01（u0）、pt00–pt10（v0）等。

```csharp
public BilinearCoonsPatch(Point pt00, Point pt10, Point pt11, Point pt01)
```

| parameter | description |
| --- | --- |
| pt00 | (u,v)=(0,0)。 |
| pt10 | (1,0)。 |
| pt11 | (1,1)。 |
| pt01 | (0,1)。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 隐含边界不一致时抛出。 |

### BilinearCoonsPatch.PointAt method

Coons 双线性混合：边界插值减去角点双线性项再加回。

```csharp
public Point PointAt(double u, double v)
```

| parameter | description |
| --- | --- |
| u | 参数 u∈[0,1]。 |
| v | 参数 v∈[0,1]。 |

#### Return Value

曲面上的点。

### BilinearCoonsPatch.ToMeshTriangle method (1 of 2)

u、v 方向相同分段数的三角网格。

```csharp
public MeshTriangle ToMeshTriangle(int divisions)
```

| parameter | description |
| --- | --- |
| divisions | 每向分段数。 |

#### Return Value

三角网格。

### BilinearCoonsPatch.ToMeshTriangle method (2 of 2)

指定 u、v 分段数的三角网格。

```csharp
public MeshTriangle ToMeshTriangle(int uDivisions, int vDivisions)
```

| parameter | description |
| --- | --- |
| uDivisions | u 分段数。 |
| vDivisions | v 分段数。 |

#### Return Value

三角网格。
