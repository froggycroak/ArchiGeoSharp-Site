---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Transform</code></p>

# Space3d class

三维正交坐标系 / 齐次变换。兼作空间描述与变换。

```csharp
public class Space3d : ISpace3d
```

## Public Members

| name | description |
| --- | --- |
| Space3d(…) | 由原点、X/Y 方向、缩放与手性构造三维坐标系。 (2 constructors) |
| static WorldXY { get; } | 世界 XY 右手系。 |
| static WorldXYrZ { get; } | 世界 XY 左手系（Z 反向）。 |
| static WorldYZ { get; } | 世界 YZ 右手系。 |
| static WorldZX { get; } | 世界 ZX 右手系。 |
| static FromArray(…) | 从 16 元数组创建 Space3d（可能有数值误差）。 |
| static Mirror(…) | MR — 关于过原点平面的镜像。 (2 methods) |
| static Rotation(…) | R — 绕过原点的轴线旋转。 (2 methods) |
| static Scaling(…) | S — 纯缩放变换。 (2 methods) |
| static Translation(…) | T — 纯平移。 |
| BasePt { get; } | T - 求平移向量 |
| Expr { get; } | 作为平面方程（原点 + Z 法向）。 |
| LinearTransMatrix { get; } | 线性部分（3×3）。 |
| Matrix { get; } | 内部存储矩阵。 |
| MatrixM { get; } | M - 读取预定义的手性矩阵 |
| MatrixR { get; } | R-读取旋转矩阵 |
| MatrixS { get; } | S-读取缩放矩阵 |
| MatrixT { get; } | T - 读取平移矩阵 |
| PlaneExprXY { get; } | XY 平面方程。 |
| PlaneExprYZ { get; } | YZ 平面方程。 |
| PlaneExprZX { get; } | ZX 平面方程。 |
| Reverse { get; } | 逆变换。 |
| RightHanded { get; } | M - 读取手性 |
| RotationAngle { get; } | R - 求旋转角度（有疑问） |
| RotationAxis { get; } | R — 由旋转矩阵分解出的旋转轴方向。 |
| Scale { get; } | S-读取缩放比例 |
| StandardMatrix { get; } | 标准变换矩阵，与本类内部矩阵互为转置。 |
| ToArray { get; } | 矩阵展平为一维数组。 |
| ToSpace3d { get; } |  |
| XDir { get; } | X 轴方向。 |
| YDir { get; } | Y 轴方向。 |
| ZDir { get; } | Z 轴方向。 |
| AbsoluteDescribe(…) | 局部角对偶 → 世界角对偶。 (4 methods) |
| AbsoluteDescriptionWhenValid(…) | 若本对象有效则做 AbsoluteDescribe，否则升维到 3D。 |
| Decompose() | 分解矩阵 [S, R, M, T]。 |
| RelativeDescribe(…) | 世界角对偶 → 局部角对偶。 (4 methods) |
| operator / | 世界点 → 局部点（`/`）。 (5 operators) |
| operator ! | 逆变换运算符。 |
| operator * | 局部点 → 世界点（`*`）。 (5 operators) |

## Remarks

内部存储为标准变换矩阵的转置：

```csharp
[  XUnit  , 0 ]
[  YUnit  , 0 ]
[  ZUnit  , 0 ]
[ X0,Y0,Z0, 1 ]
```

分解顺序：T ← M ← R ← S。运算符：`*` 局部→世界；`/` 世界→局部；`!` 逆变换。

### Space3d.AbsoluteDescribe method (1 of 4)

局部角对偶 → 世界角对偶。

```csharp
public AngleDual AbsoluteDescribe(AngleDual angleDualRelative)
```

### Space3d.AbsoluteDescribe method (2 of 4)

局部点 → 世界点；亦可将本坐标系视为变换作用于世界点。

```csharp
public Point AbsoluteDescribe(Point ptRelative)
```

| parameter | description |
| --- | --- |
| ptRelative | 局部点。 |

#### Return Value

世界点。

### Space3d.AbsoluteDescribe method (3 of 4)

局部折线 → 世界折线。

```csharp
public Polyline AbsoluteDescribe(Polyline polyRelative)
```

### Space3d.AbsoluteDescribe method (4 of 4)

局部向量 → 世界向量。

```csharp
public Vector AbsoluteDescribe(Vector vecRelative)
```

### Space3d.AbsoluteDescriptionWhenValid method

若本对象有效则做 AbsoluteDescribe，否则升维到 3D。

```csharp
public Point AbsoluteDescriptionWhenValid(Point pt)
```

### Space3d.BasePt property

T - 求平移向量

```csharp
public Point BasePt { get; }
```

### Space3d.Decompose method

分解矩阵 [S, R, M, T]。

```csharp
public Space3d[] Decompose()
```

#### Return Value

长度为 4 的数组：缩放、旋转、镜像、平移。

### Space3d.Expr property

作为平面方程（原点 + Z 法向）。

```csharp
public PlaneExpr Expr { get; }
```

### Space3d.FromArray method

从 16 元数组创建 Space3d（可能有数值误差）。

```csharp
public static Space3d FromArray(double[] array)
```

| parameter | description |
| --- | --- |
| array | 布局 [XAxis,0, YAxis,0, ZAxis,0, BasePt,1]。 |

#### Return Value

坐标系。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 长度不是 16 或齐次行非法时抛出。 |

### Space3d.LinearTransMatrix property

线性部分（3×3）。

```csharp
public double[] LinearTransMatrix { get; }
```

### Space3d.Matrix property

内部存储矩阵。

```csharp
public double[] Matrix { get; }
```

### Space3d.MatrixM property

M - 读取预定义的手性矩阵

```csharp
public Space3d MatrixM { get; }
```

### Space3d.MatrixR property

R-读取旋转矩阵

```csharp
public Space3d MatrixR { get; }
```

### Space3d.MatrixS property

S-读取缩放矩阵

```csharp
public Space3d MatrixS { get; }
```

### Space3d.MatrixT property

T - 读取平移矩阵

```csharp
public Space3d MatrixT { get; }
```

### Space3d.Mirror method (1 of 2)

MRT — 关于任意平面的镜像。

```csharp
public static Space3d Mirror(PlaneExpr plane)
```

| parameter | description |
| --- | --- |
| plane | 镜像平面。 |

#### Return Value

镜像变换。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 平面法向为零时抛出。 |

### Space3d.Mirror method (2 of 2)

MR — 关于过原点平面的镜像。

```csharp
public static Space3d Mirror(Vector PlaneVec)
```

| parameter | description |
| --- | --- |
| PlaneVec | 平面法向。 |

#### Return Value

镜像变换。

### Space3d Division operator (1 of 5)

世界角对偶 → 局部（`/`）。

```csharp
public static AngleDual operator /(AngleDual angleDual, Space3d trans)
```

### Space3d Division operator (2 of 5)

世界点 → 局部点（`/`）。

```csharp
public static Point operator /(Point pt, Space3d trans)
```

### Space3d Division operator (3 of 5)

世界折线 → 局部（`/`）。

```csharp
public static Polyline operator /(Polyline poly, Space3d trans)
```

### Space3d Division operator (4 of 5)

相对变换：概念上 fromSpace ---(trans)---&gt; toSpace，求 trans；实际为 toSpace * (!fromSpace)。

```csharp
public static Space3d operator /(Space3d toSpace, Space3d fromSpace)
```

| parameter | description |
| --- | --- |
| toSpace | 目标坐标系。 |
| fromSpace | 源坐标系。 |

#### Return Value

相对变换。

### Space3d Division operator (5 of 5)

世界向量 → 局部向量（`/`）。

```csharp
public static Vector operator /(Vector vec, Space3d trans)
```

### Space3d LogicalNot operator

逆变换运算符。

```csharp
public static Space3d operator !(Space3d trans)
```

### Space3d Multiply operator (1 of 5)

局部角对偶 → 世界（`*`）。

```csharp
public static AngleDual operator *(AngleDual angleDual, Space3d trans)
```

### Space3d Multiply operator (2 of 5)

局部点 → 世界点（`*`）。

```csharp
public static Point operator *(Point pt, Space3d trans)
```

### Space3d Multiply operator (3 of 5)

局部折线 → 世界（`*`）。

```csharp
public static Polyline operator *(Polyline poly, Space3d trans)
```

### Space3d Multiply operator (4 of 5)

坐标系复合：initSpace ---(trans)---&gt; resultSpace。

```csharp
public static Space3d operator *(Space3d initSpace, Space3d trans)
```

| parameter | description |
| --- | --- |
| initSpace | 初始坐标系。 |
| trans | 施加的变换。 |

#### Return Value

结果坐标系。

### Space3d Multiply operator (5 of 5)

局部向量 → 世界向量（`*`）。

```csharp
public static Vector operator *(Vector vec, Space3d trans)
```

### Space3d.PlaneExprXY property

XY 平面方程。

```csharp
public PlaneExpr PlaneExprXY { get; }
```

### Space3d.PlaneExprYZ property

YZ 平面方程。

```csharp
public PlaneExpr PlaneExprYZ { get; }
```

### Space3d.PlaneExprZX property

ZX 平面方程。

```csharp
public PlaneExpr PlaneExprZX { get; }
```

### Space3d.RelativeDescribe method (1 of 4)

世界角对偶 → 局部角对偶。

```csharp
public AngleDual RelativeDescribe(AngleDual angleDualAbsolute)
```

### Space3d.RelativeDescribe method (2 of 4)

世界点 → 局部点。

```csharp
public Point RelativeDescribe(Point ptAbsolute)
```

### Space3d.RelativeDescribe method (3 of 4)

世界折线 → 局部折线。

```csharp
public Polyline RelativeDescribe(Polyline polyAbsolute)
```

### Space3d.RelativeDescribe method (4 of 4)

世界向量 → 局部向量。

```csharp
public Vector RelativeDescribe(Vector vecAbsolute)
```

### Space3d.Reverse property

逆变换。

```csharp
public Space3d Reverse { get; }
```

### Space3d.RightHanded property

M - 读取手性

```csharp
public bool RightHanded { get; }
```

### Space3d.Rotation method (1 of 2)

RT — 绕任意轴旋转。

```csharp
public static Space3d Rotation(Line l, double angleRadians)
```

| parameter | description |
| --- | --- |
| l | 旋转轴直线。 |
| angleRadians | 旋转角（弧度）。 |

#### Return Value

旋转变换。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 轴线方向为零时抛出。 |

### Space3d.Rotation method (2 of 2)

R — 绕过原点的轴线旋转。

```csharp
public static Space3d Rotation(Vector axis, double angle)
```

| parameter | description |
| --- | --- |
| axis | 旋转轴方向。 |
| angle | 旋转角（弧度）。 |

#### Return Value

旋转变换。

### Space3d.RotationAngle property

R - 求旋转角度（有疑问）

```csharp
public Angle RotationAngle { get; }
```

### Space3d.RotationAxis property

R — 由旋转矩阵分解出的旋转轴方向。

```csharp
public Vector RotationAxis { get; }
```

### Space3d.Scale property

S-读取缩放比例

```csharp
public double Scale { get; }
```

### Space3d.Scaling method (1 of 2)

S — 纯缩放变换。

```csharp
public static Space3d Scaling(double scale)
```

| parameter | description |
| --- | --- |
| scale | 缩放因子（非零）。 |

#### Return Value

缩放变换。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 缩放为零时抛出。 |

### Space3d.Scaling method (2 of 2)

ST — 定点缩放。

```csharp
public static Space3d Scaling(double scale, Point basePt)
```

| parameter | description |
| --- | --- |
| scale | 缩放因子。 |
| basePt | 缩放中心。 |

#### Return Value

缩放变换。

### Space3d constructor (1 of 2)

由平面片段构造单位缩放、右手系坐标系。

```csharp
public Space3d(PlaneSeg plane)
```

| parameter | description |
| --- | --- |
| plane | 平面片段。 |

### Space3d constructor (2 of 2)

由原点、X/Y 方向、缩放与手性构造三维坐标系。

```csharp
public Space3d(Point basePt, Vector xDir, Vector yDirMaybe, double scale = 1m, 
    bool rightHanded = true)
```

| parameter | description |
| --- | --- |
| basePt | 原点。 |
| xDir | X 方向。 |
| yDirMaybe | Y 方向提示（将投影正交化）。 |
| scale | 缩放；为 0 时取 xDir 模长。 |
| rightHanded | 是否右手系。 |

### Space3d.StandardMatrix property

标准变换矩阵，与本类内部矩阵互为转置。

```csharp
public double[] StandardMatrix { get; }
```

### Space3d.ToArray property

矩阵展平为一维数组。

```csharp
public double[] ToArray { get; }
```

### Space3d.ToSpace3d property

```csharp
public Space3d ToSpace3d { get; }
```

### Space3d.Translation method

T — 纯平移。

```csharp
public static Space3d Translation(Vector translation)
```

| parameter | description |
| --- | --- |
| translation | 平移向量。 |

#### Return Value

平移变换。

### Space3d.WorldXY property

世界 XY 右手系。

```csharp
public static Space3d WorldXY { get; }
```

### Space3d.WorldXYrZ property

世界 XY 左手系（Z 反向）。

```csharp
public static Space3d WorldXYrZ { get; }
```

### Space3d.WorldYZ property

世界 YZ 右手系。

```csharp
public static Space3d WorldYZ { get; }
```

### Space3d.WorldZX property

世界 ZX 右手系。

```csharp
public static Space3d WorldZX { get; }
```

### Space3d.XDir property

X 轴方向。

```csharp
public Vector XDir { get; }
```

### Space3d.YDir property

Y 轴方向。

```csharp
public Vector YDir { get; }
```

### Space3d.ZDir property

Z 轴方向。

```csharp
public Vector ZDir { get; }
```
