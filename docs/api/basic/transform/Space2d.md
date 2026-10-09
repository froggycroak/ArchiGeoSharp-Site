---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Transform</code></p>

# Space2d class

二维正交坐标系 / 齐次变换。兼作空间描述与变换。

```csharp
public class Space2d : ISpace2d
```

## Public Members

| name | description |
| --- | --- |
| Space2d(…) | 由原点、X 方向、缩放与手性构造二维坐标系。 |
| static Mirror(…) | MR — 关于过原点对称轴的镜像。 (2 methods) |
| static Rotation(…) | R — 纯旋转（无缩放、无平移、无镜像）。 (2 methods) |
| static Scaling(…) | S — 纯缩放（无旋转、无平移、无镜像）。 (2 methods) |
| static Translation(…) | T — 纯平移。 |
| BasePt { get; } | T — 原点 / 平移分量。 |
| Expr { get; } | 作为直线表达式（原点 + X 方向）。 |
| LinearTransMatrix { get; } | 线性部分（2×2）。 |
| Matrix { get; } | 内部存储矩阵。 |
| Reverse { get; } | 逆变换。 |
| RightHanded { get; } | M — 是否为右手系（左手系表示含镜像）。 |
| RotationAngle { get; } | R — 分解出的旋转角（右手系中可直接叠加）。 |
| Scale { get; } | S — 缩放比例。 |
| StandardMatrix { get; } | 标准齐次矩阵（与内部矩阵互为转置）。 |
| ToArray { get; } | 矩阵展平为一维数组。 |
| ToSpace2d { get; } |  |
| XDir { get; } | X 轴方向。 |
| YDir { get; } | Y 轴方向。 |
| AbsoluteDescribe(…) | 将局部矢量角映射到世界。 (5 methods) |
| RelativeDescribe(…) | 将世界矢量角映射到局部。 (4 methods) |
| operator / | 世界点 → 局部点（`/`）。 (4 operators) |
| operator ^ | 升降维：二维坐标系升为三维（Z 由 X×Y 确定）。 |
| operator ! | 逆变换运算符。 |
| operator * | 局部角 → 世界角（`*`）。 (6 operators) |

## Remarks

内部矩阵布局（行优先、便于取轴）：

```csharp
[ XUnit , 0 ]
[ YUnit , 0 ]
[ X0,Y0 , 1 ]
```

运算符：`*` 局部→世界；`/` 世界→局部；`!` 逆变换。

### Space2d.AbsoluteDescribe method (1 of 5)

将局部矢量角映射到世界。

```csharp
public Angle AbsoluteDescribe(Angle angleRelative)
```

| parameter | description |
| --- | --- |
| angleRelative | 局部角。 |

#### Return Value

世界角。

### Space2d.AbsoluteDescribe method (2 of 5)

局部点 → 世界点（应用本变换）。

```csharp
public Point AbsoluteDescribe(Point ptRelative)
```

| parameter | description |
| --- | --- |
| ptRelative | 局部点（3D 时忽略 Z）。 |

#### Return Value

世界点。

### Space2d.AbsoluteDescribe method (3 of 5)

局部折线 → 世界折线。

```csharp
public Polyline AbsoluteDescribe(Polyline polyRelative)
```

### Space2d.AbsoluteDescribe method (4 of 5)

局部矩形 → 世界矩形。

```csharp
public Rect AbsoluteDescribe(Rect rectRelative)
```

### Space2d.AbsoluteDescribe method (5 of 5)

局部向量 → 世界向量。

```csharp
public Vector AbsoluteDescribe(Vector vecRelative)
```

### Space2d.BasePt property

T — 原点 / 平移分量。

```csharp
public Point BasePt { get; }
```

### Space2d.Expr property

作为直线表达式（原点 + X 方向）。

```csharp
public LineExpr Expr { get; }
```

### Space2d.LinearTransMatrix property

线性部分（2×2）。

```csharp
public double[] LinearTransMatrix { get; }
```

### Space2d.Matrix property

内部存储矩阵。

```csharp
public double[] Matrix { get; }
```

### Space2d.Mirror method (1 of 2)

MR — 关于过原点对称轴的镜像。

```csharp
public static Space2d Mirror(Angle axisDir)
```

| parameter | description |
| --- | --- |
| axisDir | 过原点的对称轴方向角。 |

#### Return Value

镜像变换（左手系）。

### Space2d.Mirror method (2 of 2)

MRT — 关于任意直线的镜像。

```csharp
public static Space2d Mirror(ILineExpr le)
```

| parameter | description |
| --- | --- |
| le | 对称轴直线。 |

#### Return Value

镜像变换（左手系）。

### Space2d Division operator (1 of 4)

世界点 → 局部点（`/`）。

```csharp
public static Point operator /(Point pt, Space2d trans)
```

### Space2d Division operator (2 of 4)

世界折线 → 局部折线（`/`）。

```csharp
public static Polyline operator /(Polyline poly, Space2d trans)
```

### Space2d Division operator (3 of 4)

相对变换：toSpace * (!fromSpace)。

```csharp
public static Space2d operator /(Space2d toSpace, Space2d fromSpace)
```

### Space2d Division operator (4 of 4)

世界向量 → 局部向量（`/`）。

```csharp
public static Vector operator /(Vector vec, Space2d trans)
```

### Space2d ExclusiveOr operator

升降维：二维坐标系升为三维（Z 由 X×Y 确定）。

```csharp
public static Space3d operator ^(Space2d space2d, int dimension)
```

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 目标维度不是 3 时抛出。 |

### Space2d LogicalNot operator

逆变换运算符。

```csharp
public static Space2d operator !(Space2d trans)
```

### Space2d Multiply operator (1 of 6)

局部角 → 世界角（`*`）。

```csharp
public static Angle operator *(Angle angleRelative, Space2d trans)
```

### Space2d Multiply operator (2 of 6)

局部点 → 世界点（`*`）。

```csharp
public static Point operator *(Point pt, Space2d trans)
```

| parameter | description |
| --- | --- |
| pt | 局部点。 |
| trans | 变换。 |

#### Return Value

世界点。

### Space2d Multiply operator (3 of 6)

局部折线 → 世界折线（`*`）。

```csharp
public static Polyline operator *(Polyline poly, Space2d trans)
```

### Space2d Multiply operator (4 of 6)

局部矩形 → 世界矩形（`*`）。注意镜像时 Y 轴反向对 Rect 语义的影响。

```csharp
public static Rect operator *(Rect rect, Space2d trans)
```

| parameter | description |
| --- | --- |
| rect | 局部矩形。 |
| trans | 变换。 |

#### Return Value

世界矩形。

### Space2d Multiply operator (5 of 6)

坐标系复合：initSpace ---(trans)---&gt; resultSpace。

```csharp
public static Space2d operator *(Space2d initSpace, Space2d trans)
```

### Space2d Multiply operator (6 of 6)

局部向量 → 世界向量（`*`）。

```csharp
public static Vector operator *(Vector vec, Space2d trans)
```

### Space2d.RelativeDescribe method (1 of 4)

将世界矢量角映射到局部。

```csharp
public Angle RelativeDescribe(Angle angleAbsolute)
```

| parameter | description |
| --- | --- |
| angleAbsolute | 世界角。 |

#### Return Value

局部角。

### Space2d.RelativeDescribe method (2 of 4)

世界点 → 局部点。

```csharp
public Point RelativeDescribe(Point ptAbsolute)
```

| parameter | description |
| --- | --- |
| ptAbsolute | 世界点。 |

#### Return Value

局部点。

### Space2d.RelativeDescribe method (3 of 4)

世界折线 → 局部折线。

```csharp
public Polyline RelativeDescribe(Polyline polyAbsolute)
```

### Space2d.RelativeDescribe method (4 of 4)

世界向量 → 局部向量。

```csharp
public Vector RelativeDescribe(Vector vecAbsolute)
```

| parameter | description |
| --- | --- |
| vecAbsolute | 世界向量。 |

#### Return Value

局部向量。

### Space2d.Reverse property

逆变换。

```csharp
public Space2d Reverse { get; }
```

### Space2d.RightHanded property

M — 是否为右手系（左手系表示含镜像）。

```csharp
public bool RightHanded { get; }
```

### Space2d.Rotation method (1 of 2)

R — 纯旋转（无缩放、无平移、无镜像）。

```csharp
public static Space2d Rotation(Angle angle)
```

| parameter | description |
| --- | --- |
| angle | 旋转角。 |

#### Return Value

旋转变换。

### Space2d.Rotation method (2 of 2)

RT — 绕任意点旋转（含平移）。

```csharp
public static Space2d Rotation(Angle angle, Point basePt)
```

| parameter | description |
| --- | --- |
| angle | 旋转角。 |
| basePt | 旋转中心。 |

#### Return Value

旋转变换。

### Space2d.RotationAngle property

R — 分解出的旋转角（右手系中可直接叠加）。

```csharp
public Angle RotationAngle { get; }
```

### Space2d.Scale property

S — 缩放比例。

```csharp
public double Scale { get; }
```

### Space2d.Scaling method (1 of 2)

S — 纯缩放（无旋转、无平移、无镜像）。

```csharp
public static Space2d Scaling(double scale)
```

| parameter | description |
| --- | --- |
| scale | 缩放因子。 |

#### Return Value

缩放变换。

### Space2d.Scaling method (2 of 2)

ST — 定点缩放（含平移）。

```csharp
public static Space2d Scaling(double scale, Point basePt)
```

| parameter | description |
| --- | --- |
| scale | 缩放因子。 |
| basePt | 缩放中心。 |

#### Return Value

缩放变换。

### Space2d constructor

由原点、X 方向、缩放与手性构造二维坐标系。

```csharp
public Space2d(Point basePt, Vector xDir, double scale = 1m, bool rightHanded = true)
```

| parameter | description |
| --- | --- |
| basePt | 原点。 |
| xDir | X 方向。 |
| scale | 缩放；为 0 时取 xDir 模长。 |
| rightHanded | 是否右手系。 |

### Space2d.StandardMatrix property

标准齐次矩阵（与内部矩阵互为转置）。

```csharp
public double[] StandardMatrix { get; }
```

### Space2d.ToArray property

矩阵展平为一维数组。

```csharp
public double[] ToArray { get; }
```

### Space2d.ToSpace2d property

```csharp
public Space2d ToSpace2d { get; }
```

### Space2d.Translation method

T — 纯平移。

```csharp
public static Space2d Translation(Vector transVec)
```

| parameter | description |
| --- | --- |
| transVec | 平移向量。 |

#### Return Value

平移变换。

### Space2d.XDir property

X 轴方向。

```csharp
public Vector XDir { get; }
```

### Space2d.YDir property

Y 轴方向。

```csharp
public Vector YDir { get; }
```
