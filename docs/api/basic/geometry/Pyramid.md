---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Pyramid class

棱锥：底面多边形 + 顶点。

```csharp
public class Pyramid : IPrism, ISolid
```

## Public Members

| name | description |
| --- | --- |
| Pyramid(…) | 由底面坐标系、局部底面多边形与顶点构造。 (4 constructors) |
| ApexAbs { get; } | 顶点（世界坐标）。 |
| ApexRel { get; } | 顶点（局部坐标）。 |
| BasePlane { get; } | 底面坐标系。 |
| BasePoly2d { get; } | 局部二维底面。 |
| BasePoly3d { get; } | 世界坐标底面。 |
| Height { get; } | 棱锥的高度，是相对于参考坐标系 Z 正方向的高度。 |
| HeightVec { get; } | 高度方向向量（世界坐标）。 |
| PolyCount { get; } | 底面顶点数。 |
| ToMeshTriangle(…) | 生成棱锥三角网格。 |

### Pyramid.ApexAbs property

顶点（世界坐标）。

```csharp
public Point ApexAbs { get; }
```

### Pyramid.ApexRel property

顶点（局部坐标）。

```csharp
public Point ApexRel { get; }
```

### Pyramid.BasePlane property

底面坐标系。

```csharp
public Plane BasePlane { get; }
```

### Pyramid.BasePoly2d property

局部二维底面。

```csharp
public Polyline BasePoly2d { get; }
```

### Pyramid.BasePoly3d property

世界坐标底面。

```csharp
public Polyline BasePoly3d { get; }
```

### Pyramid.Height property

棱锥的高度，是相对于参考坐标系 Z 正方向的高度。

```csharp
public double Height { get; }
```

### Pyramid.HeightVec property

高度方向向量（世界坐标）。

```csharp
public Vector HeightVec { get; }
```

### Pyramid.PolyCount property

底面顶点数。

```csharp
public int PolyCount { get; }
```

### Pyramid constructor (1 of 4)

在世界 XY 平面上由底面与高度构造棱锥。

```csharp
public Pyramid(IPoly basePoly, double height)
```

| parameter | description |
| --- | --- |
| basePoly | 底面多边形。 |
| height | 高度。 |

### Pyramid constructor (2 of 4)

创建一个位于世界地面上的棱锥。

```csharp
public Pyramid(IPoly basePoly, Point apex)
```

| parameter | description |
| --- | --- |
| basePoly | XoY 平面上的二维多边形。 |
| apex | 顶点（世界坐标）。 |

### Pyramid constructor (3 of 4)

从高度创建棱锥（顶点在底面质心正上方）。

```csharp
public Pyramid(Plane basePlane, IPoly basePoly, double height)
```

| parameter | description |
| --- | --- |
| basePlane | 参考坐标系。 |
| basePoly | 参考坐标系描述下的二维多边形。 |
| height | 参考坐标系 Z 正方向的高度。 |

### Pyramid constructor (4 of 4)

由底面坐标系、局部底面多边形与顶点构造。

```csharp
public Pyramid(Plane basePlane, IPoly basePoly, Point apex, bool absApex = false)
```

| parameter | description |
| --- | --- |
| basePlane | 参考坐标系。 |
| basePoly | 底面多边形。 |
| apex | 顶点。 |
| absApex | 为 `true` 时 *apex* 为世界坐标。 |

### Pyramid.ToMeshTriangle method

生成棱锥三角网格。

```csharp
public MeshTriangle ToMeshTriangle(int divisions = 1)
```

| parameter | description |
| --- | --- |
| divisions | 预留参数，当前未使用。 |

#### Return Value

三角网格。
