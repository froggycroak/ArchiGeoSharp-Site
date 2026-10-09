---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Prism class

棱柱：底面坐标系下的二维多边形沿 Z 拉伸。

```csharp
public class Prism : IPrism, ISolid
```

## Public Members

| name | description |
| --- | --- |
| Prism(…) | [obsolete] 请使用 Plane 构造方法。 (2 constructors) |
| BasePlane { get; } | 底面坐标系。 |
| BasePoly2d { get; } | 局部二维底面多边形。 |
| BottomPoly { get; } | 世界坐标底面多边形。 |
| Corners { get; } | 棱柱的全部顶点，共 2N 个。 |
| Height { get; } | 高度。 |
| HeightLine { get; } | 高度线段。 |
| HeightVec { get; } | 高度方向向量（世界坐标）。 |
| PolyCount { get; } | 底面顶点数。 |
| TopPoly { get; } | 世界坐标顶面多边形。 |
| ToMeshTriangle(…) | 生成棱柱三角网格。 |

### Prism.BasePlane property

底面坐标系。

```csharp
public Plane BasePlane { get; }
```

### Prism.BasePoly2d property

局部二维底面多边形。

```csharp
public Polyline BasePoly2d { get; }
```

### Prism.BottomPoly property

世界坐标底面多边形。

```csharp
public Polyline BottomPoly { get; }
```

### Prism.Corners property

棱柱的全部顶点，共 2N 个。

```csharp
public Point[] Corners { get; }
```

### Prism.Height property

高度。

```csharp
public double Height { get; }
```

### Prism.HeightLine property

高度线段。

```csharp
public LineSeg HeightLine { get; }
```

### Prism.HeightVec property

高度方向向量（世界坐标）。

```csharp
public Vector HeightVec { get; }
```

### Prism.PolyCount property

底面顶点数。

```csharp
public int PolyCount { get; }
```

### Prism constructor (1 of 2)

由底面坐标系、局部二维多边形与高度构造棱柱。

```csharp
public Prism(Plane basePlane, IPoly basePoly, double height)
```

| parameter | description |
| --- | --- |
| basePlane | 底面坐标系。 |
| basePoly | 局部二维底面。 |
| height | 高度。 |

### Prism constructor (2 of 2)

[obsolete] 请使用 Plane 构造方法。

```csharp
public Prism(Space3d basePlane, IPoly basePoly, double height)
```

| parameter | description |
| --- | --- |
| basePlane | 参考坐标系。 |
| basePoly | 参考坐标系描述下的二维多边形。 |
| height | 参考坐标系 Z 正方向的高度。 |

### Prism.ToMeshTriangle method

生成棱柱三角网格。

```csharp
public MeshTriangle ToMeshTriangle(int divisions = 1)
```

| parameter | description |
| --- | --- |
| divisions | 预留参数，当前未使用。 |

#### Return Value

三角网格。

### Prism.TopPoly property

世界坐标顶面多边形。

```csharp
public Polyline TopPoly { get; }
```
