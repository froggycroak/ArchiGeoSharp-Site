---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# PlaneSeg class

平面上的矩形面片：scale 恒为 1 的局部 `Plane` 上 u∈[0,W]、v∈[0,D] 的参数域。

```csharp
public class PlaneSeg : IPlaneExpr, IPoly, IRect, ISurfaceUnit
```

## Public Members

| name | description |
| --- | --- |
| PlaneSeg(…) | 由角点、X/Y 方向与宽高构造矩形面片。 |
| Area { get; } | 面积 W×D。 |
| BasePt { get; } | 角点/原点。 |
| Center { get; } | 形心。 |
| Corners { get; } | 矩形四角点（闭合顺序）。 |
| D { get; } | 深度 D。 |
| DDir { get; } | 深度方向单位向量（D）。 |
| Expr { get; } | 过 `BasePt` 且法向为 `Normal` 的平面方程。 |
| IsClosed { get; } | 恒为闭合多边形。 |
| IsConvex { get; } | 恒为凸。 |
| KeyCorner { get; } | 关键角点，同 `BasePt`。 |
| Normal { get; } | 外法向（Z 轴）。 |
| Pts { get; } | 顶点数组，同 `Corners`。 |
| ToPoly { get; } | 边界闭合折线。 |
| W { get; } | 宽度 W。 |
| WDir { get; } | 宽度方向单位向量（W）。 |
| ZDir { get; } | 法向，同 `Normal`。 |
| GetPoint(…) | 按索引返回角点，0–3 对应 `Corners` 顺序。 |
| PointAt(…) | 参数 (u,v) 处三维点：u、v 为面上长度坐标，经 `Plane` 变换到世界系。 |
| ToMeshTriangle(…) | 将面片三角化。 |

### PlaneSeg.Area property

面积 W×D。

```csharp
public double Area { get; }
```

### PlaneSeg.BasePt property

角点/原点。

```csharp
public Point BasePt { get; }
```

### PlaneSeg.Center property

形心。

```csharp
public Point Center { get; }
```

### PlaneSeg.Corners property

矩形四角点（闭合顺序）。

```csharp
public Point[] Corners { get; }
```

### PlaneSeg.D property

深度 D。

```csharp
public double D { get; }
```

### PlaneSeg.DDir property

深度方向单位向量（D）。

```csharp
public Vector DDir { get; }
```

### PlaneSeg.Expr property

过 `BasePt` 且法向为 `Normal` 的平面方程。

```csharp
public PlaneExpr Expr { get; }
```

### PlaneSeg.GetPoint method

按索引返回角点，0–3 对应 `Corners` 顺序。

```csharp
public Point GetPoint(int index)
```

| parameter | description |
| --- | --- |
| index | 角点索引。 |

#### Return Value

角点坐标。

#### Exceptions

| exception | condition |
| --- | --- |
| IndexOutOfRangeException | 索引不在 0–3 时抛出。 |

### PlaneSeg.IsClosed property

恒为闭合多边形。

```csharp
public bool IsClosed { get; }
```

### PlaneSeg.IsConvex property

恒为凸。

```csharp
public bool IsConvex { get; }
```

### PlaneSeg.KeyCorner property

关键角点，同 `BasePt`。

```csharp
public Point KeyCorner { get; }
```

### PlaneSeg.Normal property

外法向（Z 轴）。

```csharp
public Vector Normal { get; }
```

### PlaneSeg constructor

由角点、X/Y 方向与宽高构造矩形面片。

```csharp
public PlaneSeg(Point basePt, Vector xDir, Vector yDirMaybe, double width, double depth)
```

| parameter | description |
| --- | --- |
| basePt | 角点/原点。 |
| xDir | 宽度方向（W）。 |
| yDirMaybe | 深度方向提示（将正交化）。 |
| width | 宽度 W。 |
| depth | 深度 D。 |

### PlaneSeg.PointAt method

参数 (u,v) 处三维点：u、v 为面上长度坐标，经 `Plane` 变换到世界系。

```csharp
public Point PointAt(double u, double v)
```

| parameter | description |
| --- | --- |
| u | 沿 W 的长度，0 为 `BasePt`。 |
| v | 沿 D 的长度。 |

#### Return Value

世界坐标点。

### PlaneSeg.Pts property

顶点数组，同 `Corners`。

```csharp
public Point[] Pts { get; }
```

### PlaneSeg.ToMeshTriangle method

将面片三角化。

```csharp
public MeshTriangle ToMeshTriangle(int divisions = 1)
```

| parameter | description |
| --- | --- |
| divisions | u、v 方向相同分段数。 |

#### Return Value

三角网格。

### PlaneSeg.ToPoly property

边界闭合折线。

```csharp
public Polyline ToPoly { get; }
```

### PlaneSeg.W property

宽度 W。

```csharp
public double W { get; }
```

### PlaneSeg.WDir property

宽度方向单位向量（W）。

```csharp
public Vector WDir { get; }
```

### PlaneSeg.ZDir property

法向，同 `Normal`。

```csharp
public Vector ZDir { get; }
```
