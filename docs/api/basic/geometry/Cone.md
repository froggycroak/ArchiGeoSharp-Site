---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Cone class

圆锥体：底面圆心、轴向、高度与底面半径（3D）。

```csharp
public class Cone : ISolid
```

## Public Members

| name | description |
| --- | --- |
| Cone(…) | 构造圆锥。 |
| Apex { get; } | 锥顶。 |
| BaseCenter { get; } | 底面圆心（同 `Center`）。 |
| Center { get; } | 底面圆心。 |
| Dir { get; } | 单位轴向。 |
| Height { get; } | 高度。 |
| Radius { get; } | 底面半径。 |
| SideArea { get; } | 侧面积。 |
| SlantHeight { get; } | 母线长。 |
| SurfaceArea { get; } | 表面积（侧 + 底）。 |
| Volume { get; } | 体积。 |
| ToMeshTriangle(…) | 生成圆锥三角网格。 |

### Cone.Apex property

锥顶。

```csharp
public Point Apex { get; }
```

### Cone.BaseCenter property

底面圆心（同 `Center`）。

```csharp
public Point BaseCenter { get; }
```

### Cone.Center property

底面圆心。

```csharp
public Point Center { get; }
```

### Cone constructor

构造圆锥。

```csharp
public Cone(double height, Point center, Vector dir, double radius)
```

| parameter | description |
| --- | --- |
| height | 高度（须为正）。 |
| center | 底面圆心（须为 3D）。 |
| dir | 轴向（非零，将单位化）。 |
| radius | 底面半径（须为正）。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentOutOfRangeException | 高度或半径非正时抛出。 |
| ArgumentException | 方向向量为零时抛出。 |

### Cone.Dir property

单位轴向。

```csharp
public Vector Dir { get; }
```

### Cone.Height property

高度。

```csharp
public double Height { get; }
```

### Cone.Radius property

底面半径。

```csharp
public double Radius { get; }
```

### Cone.SideArea property

侧面积。

```csharp
public double SideArea { get; }
```

### Cone.SlantHeight property

母线长。

```csharp
public double SlantHeight { get; }
```

### Cone.SurfaceArea property

表面积（侧 + 底）。

```csharp
public double SurfaceArea { get; }
```

### Cone.ToMeshTriangle method

生成圆锥三角网格。

```csharp
public MeshTriangle ToMeshTriangle(int divisions = 24)
```

| parameter | description |
| --- | --- |
| divisions | 圆周细分段数，至少 3。 |

#### Return Value

三角网格。

### Cone.Volume property

体积。

```csharp
public double Volume { get; }
```
