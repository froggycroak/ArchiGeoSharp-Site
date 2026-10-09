---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# AngleTripple structure

三维纯旋转（SO(3)）的角度表达： - 内部唯一状态为单位四元数 (w,x,y,z) - 可等价表示一组互相垂直的单位向量 XDir / YDir（ZDir = X×Y） - 可在 ZYX(Tait-Bryan) 约定下转换为 (Roll, Pitch, Yaw)

```csharp
public struct AngleTripple : ISpace3d
```

## Public Members

| name | description |
| --- | --- |
| AngleTripple(…) | 按 ZYX 约定构造：R = Rz(yaw) * Ry(pitch) * Rx(roll)。 (2 constructors) |
| static Zero { get; } | 无旋转单位姿态。 |
| static FromAngles(…) | 由 ZYX 欧拉角创建（同主构造函数）。 |
| static FromXY(…) | 由 X/Y 方向向量创建。 |
| BasePt { get; } | 坐标原点（三维零向量点）。 |
| Expr { get; } | 以 Z 为法向、过原点的平面表达式。 |
| Matrix { get; } | 4×4 齐次变换矩阵（仅旋转块，最后一行/列为标准仿射形式）。 |
| Pitch { get; } | 当前姿态的 Pitch（绕 Y）。 |
| Quaternion { get; } | 内部单位四元数分量 (w,x,y,z)。 |
| Reverse { get; } | 逆旋转（共轭四元数）。 |
| Roll { get; } | 当前姿态的 Roll（绕 X，ZYX 分解）。 |
| Scale { get; } | 纯旋转，缩放恒为 1。 |
| StandardMatrix { get; } | 标准列向量旋转矩阵（`Matrix` 的转置布局）。 |
| ToArray { get; } | 行优先 4×4 矩阵一维展开（16 元素）。 |
| ToSpace3d { get; } | 转为等价 `Space3d`（原点、X/Y 轴、单位缩放）。 |
| XDir { get; } | 局部 X 轴在世界系下的方向。 |
| Yaw { get; } | 当前姿态的 Yaw（绕 Z）。 |
| YDir { get; } | 局部 Y 轴在世界系下的方向。 |
| ZDir { get; } | 局部 Z 轴（X×Y）在世界系下的方向。 |
| AbsoluteDescribe(…) | 将局部坐标点变换到世界系（应用旋转）。 (2 methods) |
| override Equals(…) |  |
| override GetHashCode() |  |
| RelativeDescribe(…) | 将世界系点变换到局部系（逆旋转）。 (2 methods) |
| ToEulerZYX() | 导出 ZYX 欧拉角三元组。 |
| override ToString() |  |
| operator / | 仿照 Space3d：from ---(trans)---&gt; to，求 trans。 实际计算：to * (!from)。 (3 operators) |
| operator == | 四元数等价判定（q 与 -q 视为相同）。 |
| operator != | 旋转不等判定。 |
| operator ! | 求逆旋转。 |
| operator * | 旋转复合：先 right 再 left（与 Space3d 复合语义一致）。 (3 operators) |

### AngleTripple.AbsoluteDescribe method (1 of 2)

将局部坐标点变换到世界系（应用旋转）。

```csharp
public Point AbsoluteDescribe(Point ptRelative)
```

| parameter | description |
| --- | --- |
| ptRelative | 局部点。 |

#### Return Value

世界系点。

### AngleTripple.AbsoluteDescribe method (2 of 2)

将局部向量变换到世界系。

```csharp
public Vector AbsoluteDescribe(Vector vecRelative)
```

| parameter | description |
| --- | --- |
| vecRelative | 局部向量。 |

#### Return Value

世界系向量。

### AngleTripple constructor (1 of 2)

由一对互相垂直（或可正交化）的方向向量构造。

```csharp
public AngleTripple(Vector xDir, Vector yDirMaybe)
```

| parameter | description |
| --- | --- |
| xDir | X 轴方向（将归一化）。 |
| yDirMaybe | Y 轴近似方向（投影到 X 的正交补后归一化）。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 非三维向量、零向量或与 X 平行时抛出。 |

### AngleTripple constructor (2 of 2)

按 ZYX 约定构造：R = Rz(yaw) * Ry(pitch) * Rx(roll)。

```csharp
public AngleTripple(Angle roll, Angle pitch, Angle yaw)
```

| parameter | description |
| --- | --- |
| roll | 绕 X 轴 Roll。 |
| pitch | 绕 Y 轴 Pitch。 |
| yaw | 绕 Z 轴 Yaw。 |

### AngleTripple.BasePt property

坐标原点（三维零向量点）。

```csharp
public Point BasePt { get; }
```

### AngleTripple.Equals method

```csharp
public override bool Equals(object obj)
```

### AngleTripple.Expr property

以 Z 为法向、过原点的平面表达式。

```csharp
public PlaneExpr Expr { get; }
```

### AngleTripple.FromAngles method

由 ZYX 欧拉角创建（同主构造函数）。

```csharp
public static AngleTripple FromAngles(Angle roll, Angle pitch, Angle yaw)
```

| parameter | description |
| --- | --- |
| roll | Roll。 |
| pitch | Pitch。 |
| yaw | Yaw。 |

#### Return Value

对应旋转。

### AngleTripple.FromXY method

由 X/Y 方向向量创建。

```csharp
public static AngleTripple FromXY(Vector xDir, Vector yDirMaybe)
```

| parameter | description |
| --- | --- |
| xDir | X 方向。 |
| yDirMaybe | Y 方向提示。 |

#### Return Value

对应旋转。

### AngleTripple.GetHashCode method

```csharp
public override int GetHashCode()
```

### AngleTripple.Matrix property

4×4 齐次变换矩阵（仅旋转块，最后一行/列为标准仿射形式）。

```csharp
public double[] Matrix { get; }
```

### AngleTripple Division operator (1 of 3)

仿照 Space3d：from ---(trans)---&gt; to，求 trans。 实际计算：to * (!from)。

相对旋转：从 *from* 到 *to*。

```csharp
public static AngleTripple operator /(AngleTripple to, AngleTripple from)
```

| parameter | description |
| --- | --- |
| to | 目标姿态。 |
| from | 起始姿态。 |

#### Return Value

复合旋转 to × inv(from)。

### AngleTripple Division operator (2 of 3)

用逆旋转作用于点（世界→局部）。

```csharp
public static Point operator /(Point pt, AngleTripple rot)
```

### AngleTripple Division operator (3 of 3)

用逆旋转作用于向量。

```csharp
public static Vector operator /(Vector vec, AngleTripple rot)
```

### AngleTripple Equality operator

四元数等价判定（q 与 -q 视为相同）。

```csharp
public static bool operator ==(AngleTripple a, AngleTripple b)
```

### AngleTripple Inequality operator

旋转不等判定。

```csharp
public static bool operator !=(AngleTripple a, AngleTripple b)
```

### AngleTripple LogicalNot operator

求逆旋转。

```csharp
public static AngleTripple operator !(AngleTripple a)
```

| parameter | description |
| --- | --- |
| a | 原旋转。 |

#### Return Value

共轭旋转。

### AngleTripple Multiply operator (1 of 3)

旋转复合：先 right 再 left（与 Space3d 复合语义一致）。

```csharp
public static AngleTripple operator *(AngleTripple left, AngleTripple right)
```

| parameter | description |
| --- | --- |
| left | 左乘旋转。 |
| right | 右乘旋转。 |

#### Return Value

复合后的旋转。

### AngleTripple Multiply operator (2 of 3)

用旋转作用于点（局部→世界）。

```csharp
public static Point operator *(Point pt, AngleTripple rot)
```

### AngleTripple Multiply operator (3 of 3)

用旋转作用于向量。

```csharp
public static Vector operator *(Vector vec, AngleTripple rot)
```

### AngleTripple.Pitch property

当前姿态的 Pitch（绕 Y）。

```csharp
public Angle Pitch { get; }
```

### AngleTripple.Quaternion property

内部单位四元数分量 (w,x,y,z)。

```csharp
public (double W, double X, double Y, double Z) Quaternion { get; }
```

### AngleTripple.RelativeDescribe method (1 of 2)

将世界系点变换到局部系（逆旋转）。

```csharp
public Point RelativeDescribe(Point ptAbsolute)
```

| parameter | description |
| --- | --- |
| ptAbsolute | 世界点。 |

#### Return Value

局部点。

### AngleTripple.RelativeDescribe method (2 of 2)

将世界系向量变换到局部系。

```csharp
public Vector RelativeDescribe(Vector vecAbsolute)
```

| parameter | description |
| --- | --- |
| vecAbsolute | 世界向量。 |

#### Return Value

局部向量。

### AngleTripple.Reverse property

逆旋转（共轭四元数）。

```csharp
public AngleTripple Reverse { get; }
```

### AngleTripple.Roll property

当前姿态的 Roll（绕 X，ZYX 分解）。

```csharp
public Angle Roll { get; }
```

### AngleTripple.Scale property

纯旋转，缩放恒为 1。

```csharp
public double Scale { get; }
```

### AngleTripple.StandardMatrix property

标准列向量旋转矩阵（`Matrix` 的转置布局）。

```csharp
public double[] StandardMatrix { get; }
```

### AngleTripple.ToArray property

行优先 4×4 矩阵一维展开（16 元素）。

```csharp
public double[] ToArray { get; }
```

### AngleTripple.ToEulerZYX method

导出 ZYX 欧拉角三元组。

```csharp
public (Angle Roll, Angle Pitch, Angle Yaw) ToEulerZYX()
```

#### Return Value

(Roll, Pitch, Yaw)。

### AngleTripple.ToSpace3d property

转为等价 `Space3d`（原点、X/Y 轴、单位缩放）。

```csharp
public Space3d ToSpace3d { get; }
```

### AngleTripple.ToString method

```csharp
public override string ToString()
```

### AngleTripple.XDir property

局部 X 轴在世界系下的方向。

```csharp
public Vector XDir { get; }
```

### AngleTripple.Yaw property

当前姿态的 Yaw（绕 Z）。

```csharp
public Angle Yaw { get; }
```

### AngleTripple.YDir property

局部 Y 轴在世界系下的方向。

```csharp
public Vector YDir { get; }
```

### AngleTripple.ZDir property

局部 Z 轴（X×Y）在世界系下的方向。

```csharp
public Vector ZDir { get; }
```

### AngleTripple.Zero property

无旋转单位姿态。

```csharp
public static AngleTripple Zero { get; }
```
