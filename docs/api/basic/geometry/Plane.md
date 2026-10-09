---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Plane structure

无缩放的三维正交右手系（刚体位姿）： 由平移 BasePt 与纯旋转 AngleTripple 组成。

```csharp
public struct Plane : ISpace3d, ITransformable
```

## Public Members

| name | description |
| --- | --- |
| Plane(…) | 由原点与 X/Y 方向构造平面坐标系。 (3 constructors) |
| static PlaneXY { get; } | 世界 XY 平面。 |
| static PlaneYZ { get; } | 世界 YZ 平面。 |
| static PlaneZX { get; } | 世界 ZX 平面。 |
| BasePt { get; } | 原点。 |
| BaseRotation { get; } | 基旋转。 |
| Expr { get; } | 平面隐式方程。 |
| Matrix { get; } | 内部矩阵。 |
| Reverse { get; } | 逆位姿。 |
| RotationAngle { get; } | 由位姿旋转矩阵分解出的旋转角，与 `RotationAngle` 一致。 |
| RotationAxis { get; } | 由位姿旋转矩阵分解出的旋转轴方向，与 `RotationAxis` 一致。 |
| Scale { get; } | 缩放恒为 1。 |
| StandardMatrix { get; } | 标准齐次矩阵。 |
| ToArray { get; } | 矩阵展平数组。 |
| ToSpace3d { get; } | 转为 `Space3d`。 |
| XDir { get; } | X 轴方向。 |
| YDir { get; } | Y 轴方向。 |
| ZDir { get; } | Z 轴方向（法向）。 |
| AbsoluteDescribe(…) | 局部点 → 世界点。 (4 methods) |
| RelativeDescribe(…) | 世界点 → 局部点。 (4 methods) |
| Transform(…) |  |
| operator / | 世界点 → 局部点（`/`）。 (5 operators) |
| operator ! | 逆变换运算符。 |
| operator * | 局部点 → 世界点（`*`）。 (6 operators) |

## Remarks

运算符：`*` 将局部映射到世界；`/` 将世界映射到局部；`!` 为逆变换。

### Plane.AbsoluteDescribe method (1 of 4)

局部角对偶 → 世界角对偶。

```csharp
public AngleDual AbsoluteDescribe(AngleDual angleDualRelative)
```

### Plane.AbsoluteDescribe method (2 of 4)

局部点 → 世界点。

```csharp
public Point AbsoluteDescribe(Point ptRelative)
```

### Plane.AbsoluteDescribe method (3 of 4)

局部折线 → 世界折线。

```csharp
public Polyline AbsoluteDescribe(Polyline polyRelative)
```

### Plane.AbsoluteDescribe method (4 of 4)

局部向量 → 世界向量。

```csharp
public Vector AbsoluteDescribe(Vector vecRelative)
```

### Plane.BasePt property

原点。

```csharp
public Point BasePt { get; }
```

### Plane.BaseRotation property

基旋转。

```csharp
public AngleTripple BaseRotation { get; }
```

### Plane.Expr property

平面隐式方程。

```csharp
public PlaneExpr Expr { get; }
```

### Plane.Matrix property

内部矩阵。

```csharp
public double[] Matrix { get; }
```

### Plane Division operator (1 of 5)

世界角对偶 → 局部（`/`）。

```csharp
public static AngleDual operator /(AngleDual angleDual, Plane plane)
```

### Plane Division operator (2 of 5)

相对变换：toPlane * (!fromPlane)。

```csharp
public static Plane operator /(Plane toPlane, Plane fromPlane)
```

### Plane Division operator (3 of 5)

世界点 → 局部点（`/`）。

```csharp
public static Point operator /(Point pt, Plane plane)
```

### Plane Division operator (4 of 5)

世界折线 → 局部（`/`）。

```csharp
public static Polyline operator /(Polyline poly, Plane plane)
```

### Plane Division operator (5 of 5)

世界向量 → 局部向量（`/`）。

```csharp
public static Vector operator /(Vector vec, Plane plane)
```

### Plane LogicalNot operator

逆变换运算符。

```csharp
public static Plane operator !(Plane plane)
```

### Plane Multiply operator (1 of 6)

局部角对偶 → 世界（`*`）。

```csharp
public static AngleDual operator *(AngleDual angleDual, Plane plane)
```

### Plane Multiply operator (2 of 6)

平面复合：initPlane 再经 trans 变换得到结果位姿。

```csharp
public static Plane operator *(Plane initPlane, Plane trans)
```

### Plane Multiply operator (3 of 6)

与 `Space3d` 复合语义一致：initPlane ---(trans)---&gt; 结果位姿。

```csharp
public static Plane operator *(Plane initPlane, Space3d trans)
```

### Plane Multiply operator (4 of 6)

局部点 → 世界点（`*`）。

```csharp
public static Point operator *(Point pt, Plane plane)
```

### Plane Multiply operator (5 of 6)

局部折线 → 世界（`*`）。

```csharp
public static Polyline operator *(Polyline poly, Plane plane)
```

### Plane Multiply operator (6 of 6)

局部向量 → 世界向量（`*`）。

```csharp
public static Vector operator *(Vector vec, Plane plane)
```

### Plane constructor (1 of 3)

由无缩放、右手系的 `Space3d` 构造。

```csharp
public Plane(Space3d space3d)
```

| parameter | description |
| --- | --- |
| space3d | 源坐标系。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 缩放不为 1 或非右手系时抛出。 |

### Plane constructor (2 of 3)

由原点与旋转三元组构造。

```csharp
public Plane(Point basePt, AngleTripple angleTripple)
```

| parameter | description |
| --- | --- |
| basePt | 原点。 |
| angleTripple | 旋转。 |

### Plane constructor (3 of 3)

由原点与 X/Y 方向构造平面坐标系。

```csharp
public Plane(Point basePt, Vector xDir, Vector yDirMaybe)
```

| parameter | description |
| --- | --- |
| basePt | 原点。 |
| xDir | X 方向。 |
| yDirMaybe | Y 方向提示（将投影正交化）。 |

### Plane.PlaneXY property

世界 XY 平面。

```csharp
public static Plane PlaneXY { get; }
```

### Plane.PlaneYZ property

世界 YZ 平面。

```csharp
public static Plane PlaneYZ { get; }
```

### Plane.PlaneZX property

世界 ZX 平面。

```csharp
public static Plane PlaneZX { get; }
```

### Plane.RelativeDescribe method (1 of 4)

世界角对偶 → 局部角对偶。

```csharp
public AngleDual RelativeDescribe(AngleDual angleDualAbsolute)
```

### Plane.RelativeDescribe method (2 of 4)

世界点 → 局部点。

```csharp
public Point RelativeDescribe(Point ptAbsolute)
```

### Plane.RelativeDescribe method (3 of 4)

世界折线 → 局部折线。

```csharp
public Polyline RelativeDescribe(Polyline polyAbsolute)
```

### Plane.RelativeDescribe method (4 of 4)

世界向量 → 局部向量。

```csharp
public Vector RelativeDescribe(Vector vecAbsolute)
```

### Plane.Reverse property

逆位姿。

```csharp
public Plane Reverse { get; }
```

### Plane.RotationAngle property

由位姿旋转矩阵分解出的旋转角，与 `RotationAngle` 一致。

```csharp
public Angle RotationAngle { get; }
```

### Plane.RotationAxis property

由位姿旋转矩阵分解出的旋转轴方向，与 `RotationAxis` 一致。

```csharp
public Vector RotationAxis { get; }
```

### Plane.Scale property

缩放恒为 1。

```csharp
public double Scale { get; }
```

### Plane.StandardMatrix property

标准齐次矩阵。

```csharp
public double[] StandardMatrix { get; }
```

### Plane.ToArray property

矩阵展平数组。

```csharp
public double[] ToArray { get; }
```

### Plane.ToSpace3d property

转为 `Space3d`。

```csharp
public Space3d ToSpace3d { get; }
```

### Plane.Transform method

```csharp
public void Transform(ISpace3d transform)
```

### Plane.XDir property

X 轴方向。

```csharp
public Vector XDir { get; }
```

### Plane.YDir property

Y 轴方向。

```csharp
public Vector YDir { get; }
```

### Plane.ZDir property

Z 轴方向（法向）。

```csharp
public Vector ZDir { get; }
```
