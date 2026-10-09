---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Box class

长方体 / 盒子。底面左下角由 `Plane` 原点定义，尺寸为宽深高。

```csharp
public class Box : IPrism, ISolid
```

## Public Members

| name | description |
| --- | --- |
| Box(…) | 由底面坐标系与宽深高构造。 (3 constructors) |
| BaseCenter { get; } | 底面中心（世界坐标）。 |
| BasePlane { get; } | 底面坐标系。 |
| BasePoly2d { get; } | 二维底面多边形。 |
| baseRect { get; } | 局部底面矩形（未嵌入世界平面）。 |
| Corners { get; } | 八个角点（世界坐标）。 |
| D { get; } | 深。 |
| Diagonal { get; } | 对角线向量（世界坐标）。 |
| H { get; } | 高。 |
| Height { get; } | 高度。 |
| KeyCorner { get; } | 关键角点（底面左下角）。 |
| Size { get; } | 尺寸向量 (W, D, H)。 |
| Vertical { get; } | 底面是否平行于世界 XoY。 |
| VolumeCenter { get; } | 体积中心（世界坐标）。 |
| W { get; } | 宽。 |
| Frames() | 返回 12 条棱线段。 |
| ToMeshTriangle(…) | 生成盒子三角网格。 |
| Transform(…) | 就地施加三维变换（含缩放）。 |
| TransformCopy(…) | 变换并返回副本。 |

### Box.BaseCenter property

底面中心（世界坐标）。

```csharp
public Point BaseCenter { get; }
```

### Box.BasePlane property

底面坐标系。

```csharp
public Plane BasePlane { get; }
```

### Box.BasePoly2d property

二维底面多边形。

```csharp
public Polyline BasePoly2d { get; }
```

### Box.baseRect property

局部底面矩形（未嵌入世界平面）。

```csharp
public Rect baseRect { get; }
```

### Box constructor (1 of 3)

构造一个底面平行于 XoY 的立方体，强制右手系。

```csharp
public Box(Point bbl, Vector wdh, Angle angle)
```

| parameter | description |
| --- | --- |
| bbl | 底面左下角点。 |
| wdh | 宽深高向量。 |
| angle | 绕 Z 轴旋转角度。 |

### Box constructor (2 of 3)

由二维矩形底面与高度构造盒子。

```csharp
public Box(Rect baseRect, double h, double z0 = 0m)
```

| parameter | description |
| --- | --- |
| baseRect | 底面矩形。 |
| h | 高度。 |
| z0 | 底面 Z 高度，默认 0。 |

### Box constructor (3 of 3)

由底面坐标系与宽深高构造。

```csharp
public Box(Plane baseSpace, double w, double d, double h)
```

| parameter | description |
| --- | --- |
| baseSpace | 底面坐标系（原点为左下角）。 |
| w | 宽。 |
| d | 深。 |
| h | 高。 |

### Box.Corners property

八个角点（世界坐标）。

```csharp
public Point[] Corners { get; }
```

### Box.D property

深。

```csharp
public double D { get; }
```

### Box.Diagonal property

对角线向量（世界坐标）。

```csharp
public Vector Diagonal { get; }
```

### Box.Frames method

返回 12 条棱线段。

```csharp
public LineSeg[] Frames()
```

#### Return Value

棱线段数组。

### Box.H property

高。

```csharp
public double H { get; }
```

### Box.Height property

高度。

```csharp
public double Height { get; }
```

### Box.KeyCorner property

关键角点（底面左下角）。

```csharp
public Point KeyCorner { get; }
```

### Box.Size property

尺寸向量 (W, D, H)。

```csharp
public Vector Size { get; }
```

### Box.ToMeshTriangle method

生成盒子三角网格。

```csharp
public MeshTriangle ToMeshTriangle(int divisions = 1)
```

| parameter | description |
| --- | --- |
| divisions | 预留参数，当前未使用。 |

#### Return Value

三角网格。

### Box.Transform method

就地施加三维变换（含缩放）。

```csharp
public void Transform(Space3d transform)
```

| parameter | description |
| --- | --- |
| transform | 变换。 |

### Box.TransformCopy method

变换并返回副本。

```csharp
public Box TransformCopy(Space3d transform)
```

| parameter | description |
| --- | --- |
| transform | 变换。 |

#### Return Value

新盒子。

### Box.Vertical property

底面是否平行于世界 XoY。

```csharp
public bool Vertical { get; }
```

### Box.VolumeCenter property

体积中心（世界坐标）。

```csharp
public Point VolumeCenter { get; }
```

### Box.W property

宽。

```csharp
public double W { get; }
```
