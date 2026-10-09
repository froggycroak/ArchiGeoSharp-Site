---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Vector structure

N 维向量。支持点积、叉积、投影（`%`）与升降维（`^`）。

```csharp
public struct Vector : IEquatable<Vector>, IVector
```

## Public Members

| name | description |
| --- | --- |
| Vector(…) | 由分量构造向量。 (4 constructors) |
| static Cross(…) | 三维叉积。 |
| static RandUnit(…) | 随机单位向量（支持 1D/2D/3D）。 |
| static Unitize(…) | 单位化（静态）。 |
| static XUnit(…) | X 轴单位向量。 |
| static YUnit(…) | Y 轴单位向量。 |
| static ZUnit(…) | Z 轴单位向量。 |
| Coords { get; } | 分量数组。 |
| Dimension { get; } | 向量维度。 |
| Item { get; } | 按索引获取分量。 |
| Magnitude { get; } | 欧氏模长。 |
| Normalize { get; } | 单位化向量；零向量原样返回。 |
| ToPoint { get; } | 转换为同坐标的点。 |
| DimensionalShift(…) | 升降维：升高时补 0，降低时截断。 |
| override Equals(…) |  |
| Equals(…) | 判断两向量是否完全相等。 |
| override GetHashCode() |  |
| override ToString() |  |
| static Cross2d(…) | 二维叉积标量（x1·y2 − x2·y1），用于判断转向。 |
| static Dot(…) | 点积。 |
| operator + | 向量加法。 |
| operator == | 相等比较。 |
| operator ^ | 升降维运算符：等价于 `DimensionalShift`。 |
| operator != | 不等比较。 |
| operator % | 投影运算符：将 *vec* 投影到 *baseDir* 方向上。 |
| operator * | 向量 × 标量。 (3 operators) |
| operator - | 取反。 (2 operators) |

### Vector.Coords property

分量数组。

```csharp
public double[] Coords { get; }
```

### Vector.Cross method

三维叉积。

```csharp
public static Vector Cross(Vector a, Vector b)
```

| parameter | description |
| --- | --- |
| a | 向量 a（须为 3D）。 |
| b | 向量 b（须为 3D）。 |

#### Return Value

叉积向量。

#### Exceptions

| exception | condition |
| --- | --- |
| InvalidOperationException | 当维度不是 3 时抛出。 |

### Vector.Cross2d method

二维叉积标量（x1·y2 − x2·y1），用于判断转向。

```csharp
public static double Cross2d(Vector a, Vector b)
```

| parameter | description |
| --- | --- |
| a | 向量 a。 |
| b | 向量 b。 |

#### Return Value

叉积标量。

### Vector.Dimension property

向量维度。

```csharp
public int Dimension { get; }
```

### Vector.DimensionalShift method

升降维：升高时补 0，降低时截断。

```csharp
public Vector DimensionalShift(int newDimension)
```

| parameter | description |
| --- | --- |
| newDimension | 目标维度。 |

#### Return Value

新维度的向量。

### Vector.Dot method

点积。

```csharp
public static double Dot(Vector a, Vector b)
```

| parameter | description |
| --- | --- |
| a | 向量 a。 |
| b | 向量 b。 |

#### Return Value

点积标量。

### Vector.Equals method (1 of 2)

```csharp
public override bool Equals(object obj)
```

### Vector.Equals method (2 of 2)

判断两向量是否完全相等。

```csharp
public bool Equals(Vector other)
```

| parameter | description |
| --- | --- |
| other | 另一向量。 |

#### Return Value

相等则为 `true`。

### Vector.GetHashCode method

```csharp
public override int GetHashCode()
```

### Vector indexer

按索引获取分量。

```csharp
public double this[int index] { get; }
```

| parameter | description |
| --- | --- |
| index | 分量索引。 |

#### Return Value

对应分量值。

### Vector.Magnitude property

欧氏模长。

```csharp
public double Magnitude { get; }
```

### Vector.Normalize property

单位化向量；零向量原样返回。

```csharp
public Vector Normalize { get; }
```

### Vector Addition operator

向量加法。

```csharp
public static Vector operator +(Vector a, Vector b)
```

### Vector Equality operator

相等比较。

```csharp
public static bool operator ==(Vector a, Vector b)
```

### Vector ExclusiveOr operator

升降维运算符：等价于 `DimensionalShift`。

```csharp
public static Vector operator ^(Vector vec, int newDimension)
```

### Vector Inequality operator

不等比较。

```csharp
public static bool operator !=(Vector a, Vector b)
```

### Vector Modulus operator

投影运算符：将 *vec* 投影到 *baseDir* 方向上。

```csharp
public static Vector operator %(Vector vec, Vector baseDir)
```

| parameter | description |
| --- | --- |
| vec | 被投影向量。 |
| baseDir | 投影方向。 |

#### Return Value

投影结果向量。

### Vector Multiply operator (1 of 3)

标量 × 向量。

```csharp
public static Vector operator *(double scalar, Vector v)
```

### Vector Multiply operator (2 of 3)

向量 × 标量。

```csharp
public static Vector operator *(Vector v, double scalar)
```

### Vector Multiply operator (3 of 3)

点积（向量 × 向量）。

```csharp
public static double operator *(Vector vec1, Vector vec2)
```

### Vector UnaryNegation operator (1 of 2)

取反。

```csharp
public static Vector operator -(Vector a)
```

### Vector Subtraction operator (2 of 2)

向量减法。

```csharp
public static Vector operator -(Vector a, Vector b)
```

### Vector.RandUnit method

随机单位向量（支持 1D/2D/3D）。

```csharp
public static Vector RandUnit(int dimensions = 3)
```

| parameter | description |
| --- | --- |
| dimensions | 维度。 |

#### Return Value

随机单位向量。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 当维度不支持时抛出。 |

### Vector.ToPoint property

转换为同坐标的点。

```csharp
public Point ToPoint { get; }
```

### Vector.ToString method

```csharp
public override string ToString()
```

### Vector.Unitize method

单位化（静态）。

```csharp
public static Vector Unitize(Vector vec)
```

| parameter | description |
| --- | --- |
| vec | 源向量。 |

#### Return Value

单位向量。

### Vector constructor (1 of 4)

由分量构造向量。

```csharp
public Vector(params double[] coords)
```

| parameter | description |
| --- | --- |
| coords | 至少一个分量。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 当分量为空时抛出。 |

### Vector constructor (2 of 4)

复制构造。

```csharp
public Vector(Vector vector)
```

| parameter | description |
| --- | --- |
| vector | 源向量。 |

### Vector constructor (3 of 4)

由两点构造向量（end − start）。

```csharp
public Vector(Point start, Point end)
```

| parameter | description |
| --- | --- |
| start | 起点。 |
| end | 终点。 |

### Vector constructor (4 of 4)

由球坐标构造三维向量（单位方向 × r）。

```csharp
public Vector(double r, Angle angleXY, Angle angleZ)
```

| parameter | description |
| --- | --- |
| r | 模长。 |
| angleXY | XY 平面方位角。 |
| angleZ | 与 Z 轴的夹角。 |

### Vector.XUnit method

X 轴单位向量。

```csharp
public static Vector XUnit(int dimensions = 3)
```

| parameter | description |
| --- | --- |
| dimensions | 维度，默认 3。 |

#### Return Value

单位向量。

### Vector.YUnit method

Y 轴单位向量。

```csharp
public static Vector YUnit(int dimensions = 3)
```

| parameter | description |
| --- | --- |
| dimensions | 维度，默认 3。 |

#### Return Value

单位向量。

### Vector.ZUnit method

Z 轴单位向量。

```csharp
public static Vector ZUnit(int dimensions = 3)
```

| parameter | description |
| --- | --- |
| dimensions | 维度，默认 3。 |

#### Return Value

单位向量。
