---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Sphere class

球体：圆心 + 半径。参数 (u,v) 对应经度/纬度。

```csharp
public class Sphere : ISolid, ISurfaceUnit
```

## Public Members

| name | description |
| --- | --- |
| Sphere(…) | 构造球体。 |
| Center { get; } | 圆心。 |
| Radius { get; } | 半径。 |
| PointAt(…) | 参数点；u ∈ [0,1] 为经度一周，v ∈ [0,1] 为纬度从南到北。 |
| PointAtAngle(…) | 按经度角与纬度角取球面点。 |
| ToMeshTriangle(…) | 生成球面三角网格。 |

### Sphere.Center property

圆心。

```csharp
public Point Center { get; }
```

### Sphere.PointAt method

参数点；u ∈ [0,1] 为经度一周，v ∈ [0,1] 为纬度从南到北。

```csharp
public Point PointAt(double u, double v)
```

| parameter | description |
| --- | --- |
| u | 经度参数。 |
| v | 纬度参数。 |

#### Return Value

球面上的点。

### Sphere.PointAtAngle method

按经度角与纬度角取球面点。

```csharp
public Point PointAtAngle(Angle uAngle, Angle vAngle)
```

| parameter | description |
| --- | --- |
| uAngle | 经度角。 |
| vAngle | 纬度角。 |

#### Return Value

球面上的点。

### Sphere.Radius property

半径。

```csharp
public double Radius { get; }
```

### Sphere constructor

构造球体。

```csharp
public Sphere(Point center, double radius)
```

| parameter | description |
| --- | --- |
| center | 圆心。 |
| radius | 半径。 |

### Sphere.ToMeshTriangle method

生成球面三角网格。

```csharp
public MeshTriangle ToMeshTriangle(int divisions = 10)
```

| parameter | description |
| --- | --- |
| divisions | 细分密度。 |

#### Return Value

三角网格。
