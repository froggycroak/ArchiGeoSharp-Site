---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Frustum class

棱台：由棱锥在指定高度截断得到。

```csharp
public class Frustum : ISolid
```

## Public Members

| name | description |
| --- | --- |
| Frustum(…) | 由棱锥与截断高度构造棱台。 (5 constructors) |
| static FromHeight(…) | 由高度创建棱台。 (2 methods) |
| ApexAbs { get; } | 棱锥顶点（世界坐标）。 |
| ApexRel { get; } | 棱锥顶点（局部坐标）。 |
| BasePlane { get; } | 底面坐标系。 |
| BasePoly2d { get; } | 局部二维底面。 |
| BasePoly3d { get; } | 世界坐标底面。 |
| Corners { get; } | 全部角点（底面 + 顶面）。 |
| CutRatio { get; } | 截断比；由于 cutHeight 与 Height 同号，比值必为正。 |
| Height { get; } | 棱台高度（截断高度）。 |
| PolyCount { get; } | 底面顶点数。 |
| TopPolyAbs { get; } | 世界坐标顶面多边形。 |
| TopPolyRel { get; } | 局部顶面多边形。 |
| ToPyramid { get; } | 源棱锥。 |
| ToMeshTriangle(…) | 生成棱台三角网格。 |

### Frustum.ApexAbs property

棱锥顶点（世界坐标）。

```csharp
public Point ApexAbs { get; }
```

### Frustum.ApexRel property

棱锥顶点（局部坐标）。

```csharp
public Point ApexRel { get; }
```

### Frustum.BasePlane property

底面坐标系。

```csharp
public Plane BasePlane { get; }
```

### Frustum.BasePoly2d property

局部二维底面。

```csharp
public Polyline BasePoly2d { get; }
```

### Frustum.BasePoly3d property

世界坐标底面。

```csharp
public Polyline BasePoly3d { get; }
```

### Frustum.Corners property

全部角点（底面 + 顶面）。

```csharp
public Point[] Corners { get; }
```

### Frustum.CutRatio property

截断比；由于 cutHeight 与 Height 同号，比值必为正。

```csharp
public double CutRatio { get; }
```

### Frustum.FromHeight method (1 of 2)

在世界 XY 上由高度创建棱台。

```csharp
public static Frustum FromHeight(IPoly basePoly, double height, double cutHeight)
```

### Frustum.FromHeight method (2 of 2)

由高度创建棱台。

```csharp
public static Frustum FromHeight(Plane basePlane, IPoly basePoly, double height, double cutHeight)
```

### Frustum constructor (1 of 5)

由棱锥与截断高度构造棱台。

```csharp
public Frustum(Pyramid pyramid, double cutHeight)
```

| parameter | description |
| --- | --- |
| pyramid | 源棱锥。 |
| cutHeight | 截断高度（须与棱锥高度同号，且严格介于 0 与高度之间）。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentNullException | 棱锥为 `null` 时抛出。 |
| ArgumentException | 棱锥高度为零时抛出。 |
| ArgumentOutOfRangeException | 截断高度不合法时抛出。 |

### Frustum constructor (2 of 5)

在世界 XY 上由底面、棱锥高度与截断高度构造。

```csharp
public Frustum(IPoly basePoly, double pyramidHeight, double cutHeight)
```

### Frustum constructor (3 of 5)

在世界 XY 上由底面、顶点与截断高度构造。

```csharp
public Frustum(IPoly basePoly, Point apex, double cutHeight)
```

### Frustum constructor (4 of 5)

由底面、棱锥高度与截断高度构造。

```csharp
public Frustum(Plane basePlane, IPoly basePoly, double pyramidHeight, double cutHeight)
```

### Frustum constructor (5 of 5)

由底面、顶点与截断高度构造。

```csharp
public Frustum(Plane basePlane, IPoly basePoly, Point apex, double cutHeight, bool abs = false)
```

### Frustum.Height property

棱台高度（截断高度）。

```csharp
public double Height { get; }
```

### Frustum.PolyCount property

底面顶点数。

```csharp
public int PolyCount { get; }
```

### Frustum.ToMeshTriangle method

生成棱台三角网格。

```csharp
public MeshTriangle ToMeshTriangle(int divisions = 1)
```

| parameter | description |
| --- | --- |
| divisions | 预留参数，当前未使用。 |

#### Return Value

三角网格。

### Frustum.TopPolyAbs property

世界坐标顶面多边形。

```csharp
public Polyline TopPolyAbs { get; }
```

### Frustum.TopPolyRel property

局部顶面多边形。

```csharp
public Polyline TopPolyRel { get; }
```

### Frustum.ToPyramid property

源棱锥。

```csharp
public Pyramid ToPyramid { get; }
```
