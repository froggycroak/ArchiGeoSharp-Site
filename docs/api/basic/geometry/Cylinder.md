---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Cylinder class

圆柱体：底面圆心、轴向、高度与半径（3D）。

```csharp
public class Cylinder : ISolid
```

## Public Members

| name | description |
| --- | --- |
| Cylinder(…) | 构造圆柱。 |
| BottomCenter { get; } | 底面圆心。 |
| Center { get; } | 底面圆心。 |
| Dir { get; } | 单位轴向。 |
| Height { get; } | 高度。 |
| Radius { get; } | 半径。 |
| SideArea { get; } | 侧面积。 |
| SurfaceArea { get; } | 表面积（侧 + 两底）。 |
| TopCenter { get; } | 顶面圆心。 |
| Volume { get; } | 体积。 |
| ToMeshTriangle(…) | 生成圆柱三角网格。 |

### Cylinder.BottomCenter property

底面圆心。

```csharp
public Point BottomCenter { get; }
```

### Cylinder.Center property

底面圆心。

```csharp
public Point Center { get; }
```

### Cylinder constructor

构造圆柱。

```csharp
public Cylinder(double height, Point center, Vector dir, double radius)
```

| parameter | description |
| --- | --- |
| height | 高度（须为正）。 |
| center | 底面圆心（须为 3D）。 |
| dir | 轴向（非零，将单位化）。 |
| radius | 半径（须为正）。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentOutOfRangeException | 高度或半径非正时抛出。 |
| ArgumentException | 方向向量为零时抛出。 |

### Cylinder.Dir property

单位轴向。

```csharp
public Vector Dir { get; }
```

### Cylinder.Height property

高度。

```csharp
public double Height { get; }
```

### Cylinder.Radius property

半径。

```csharp
public double Radius { get; }
```

### Cylinder.SideArea property

侧面积。

```csharp
public double SideArea { get; }
```

### Cylinder.SurfaceArea property

表面积（侧 + 两底）。

```csharp
public double SurfaceArea { get; }
```

### Cylinder.ToMeshTriangle method

生成圆柱三角网格。

```csharp
public MeshTriangle ToMeshTriangle(int divisions = 24)
```

| parameter | description |
| --- | --- |
| divisions | 圆周细分段数，至少 3。 |

#### Return Value

三角网格。

### Cylinder.TopCenter property

顶面圆心。

```csharp
public Point TopCenter { get; }
```

### Cylinder.Volume property

体积。

```csharp
public double Volume { get; }
```
