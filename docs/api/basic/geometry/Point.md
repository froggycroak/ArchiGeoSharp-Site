---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Point structure

N 维点。通过 `Dimension` 描述所处空间维数，支持任意维度坐标运算。

N 维点（插值方法部分）。

```csharp
public struct Point : IEquatable<Point>, IVector
```

## Public Members

| name | description |
| --- | --- |
| Point(…) | 由坐标分量构造点（支持 `Point(x, y)` 或 `Point(double[])`）。 (3 constructors) |
| static BilinearInterpolation(…) | 双线性插值：在四边形参数域 (u, v) ∈ [0,1]² 上插值。 |
| static Lerp(…) | 线性插值：`(1−t)·a + t·b`。 |
| static Origin(…) | 指定维度的原点。 |
| Coords { get; } | 坐标分量数组（只读副本引用）。 |
| Dimension { get; } | 点的维度数量。 |
| DistanceToOrigin { get; } | 点到原点的欧氏距离。 |
| Item { get; } | 按索引获取坐标分量。 |
| ToVector { get; } | 将点转换为同坐标的向量。 |
| DimensionalShift(…) | 升降维：升高时用 *defaultCoord* 填充，降低时截断。 |
| override Equals(…) |  |
| Equals(…) | 判断两点是否完全相等（维度与各分量均相同）。 |
| override GetHashCode() |  |
| TildeEqual(…) | 在给定容差下判断两点是否近似相等。 |
| override ToString() |  |
| ToStringBracket() | 以方括号格式输出坐标（不含 `pt` 前缀）。 |
| operator + | 两点对应坐标相加；维度不一致时先对齐到较高维。 (2 operators) |
| operator / | 点坐标按标量除法缩放。 |
| operator == | 相等比较。 |
| operator ^ | 升降维运算符：等价于 `DimensionalShift`。 |
| operator != | 不等比较。 |
| operator * | 点坐标按标量缩放。 (2 operators) |
| operator - | 取点关于原点的对称点（各分量取反）。 (3 operators) |

### Point.BilinearInterpolation method

双线性插值：在四边形参数域 (u, v) ∈ [0,1]² 上插值。

```csharp
public static Point BilinearInterpolation(Point p00, Point p10, Point p01, Point p11, double u, 
    double v)
```

| parameter | description |
| --- | --- |
| p00 | 参数 (0,0) 角点。 |
| p10 | 参数 (1,0) 角点。 |
| p01 | 参数 (0,1) 角点。 |
| p11 | 参数 (1,1) 角点。 |
| u | 第一参数。 |
| v | 第二参数。 |

#### Return Value

插值点。

### Point.Coords property

坐标分量数组（只读副本引用）。

```csharp
public double[] Coords { get; }
```

### Point.Dimension property

点的维度数量。

```csharp
public int Dimension { get; }
```

### Point.DimensionalShift method

升降维：升高时用 *defaultCoord* 填充，降低时截断。

```csharp
public Point DimensionalShift(int newDimension, double defaultCoord = 0m)
```

| parameter | description |
| --- | --- |
| newDimension | 目标维度。 |
| defaultCoord | 升维时新增分量的默认值。 |

#### Return Value

新维度的点。

### Point.DistanceToOrigin property

点到原点的欧氏距离。

```csharp
public double DistanceToOrigin { get; }
```

### Point.Equals method (1 of 2)

```csharp
public override bool Equals(object obj)
```

### Point.Equals method (2 of 2)

判断两点是否完全相等（维度与各分量均相同）。

```csharp
public bool Equals(Point other)
```

| parameter | description |
| --- | --- |
| other | 另一点。 |

#### Return Value

相等则为 `true`。

### Point.GetHashCode method

```csharp
public override int GetHashCode()
```

### Point indexer

按索引获取坐标分量。

```csharp
public double this[int index] { get; }
```

| parameter | description |
| --- | --- |
| index | 分量索引（0 起）。 |

#### Return Value

对应坐标值。

### Point.Lerp method

线性插值：`(1−t)·a + t·b`。

```csharp
public static Point Lerp(Point a, Point b, double t)
```

| parameter | description |
| --- | --- |
| a | 起点。 |
| b | 终点。 |
| t | 插值参数。 |

#### Return Value

插值点。

### Point Addition operator (1 of 2)

两点对应坐标相加；维度不一致时先对齐到较高维。

```csharp
public static Point operator +(Point a, Point b)
```

| parameter | description |
| --- | --- |
| a | 左操作数。 |
| b | 右操作数。 |

#### Return Value

坐标和点。

### Point Addition operator (2 of 2)

点平移：点 + 向量。

```csharp
public static Point operator +(Point pt, Vector vec)
```

| parameter | description |
| --- | --- |
| pt | 起点。 |
| vec | 平移向量。 |

#### Return Value

平移后的点。

### Point Division operator

点坐标按标量除法缩放。

```csharp
public static Point operator /(Point pt, double scale)
```

| parameter | description |
| --- | --- |
| pt | 源点。 |
| scale | 除数。 |

#### Return Value

缩放后的点。

### Point Equality operator

相等比较。

```csharp
public static bool operator ==(Point a, Point b)
```

### Point ExclusiveOr operator

升降维运算符：等价于 `DimensionalShift`。

```csharp
public static Point operator ^(Point pt, int newDimension)
```

| parameter | description |
| --- | --- |
| pt | 源点。 |
| newDimension | 目标维度。 |

#### Return Value

新维度的点。

### Point Inequality operator

不等比较。

```csharp
public static bool operator !=(Point a, Point b)
```

### Point Multiply operator (1 of 2)

标量 × 点（坐标缩放）。

```csharp
public static Point operator *(double scalar, Point p)
```

| parameter | description |
| --- | --- |
| scalar | 缩放因子。 |
| p | 源点。 |

#### Return Value

缩放后的点。

### Point Multiply operator (2 of 2)

点坐标按标量缩放。

```csharp
public static Point operator *(Point pt, double scale)
```

| parameter | description |
| --- | --- |
| pt | 源点。 |
| scale | 缩放因子。 |

#### Return Value

缩放后的点。

### Point UnaryNegation operator (1 of 3)

取点关于原点的对称点（各分量取反）。

```csharp
public static Point operator -(Point a)
```

| parameter | description |
| --- | --- |
| a | 源点。 |

#### Return Value

对称点。

### Point Subtraction operator (2 of 3)

两点相减得到向量（a − b）；维度不一致时先对齐。

```csharp
public static Vector operator -(Point a, Point b)
```

| parameter | description |
| --- | --- |
| a | 终点。 |
| b | 起点。 |

#### Return Value

从 b 指向 a 的向量。

### Point Subtraction operator (3 of 3)

点反向平移：点 − 向量。

```csharp
public static Point operator -(Point pt, Vector vec)
```

| parameter | description |
| --- | --- |
| pt | 起点。 |
| vec | 平移向量。 |

#### Return Value

平移后的点。

### Point.Origin method

指定维度的原点。

```csharp
public static Point Origin(int dimensions)
```

| parameter | description |
| --- | --- |
| dimensions | 维度。 |

#### Return Value

全零坐标点。

### Point constructor (1 of 3)

由坐标分量构造点（支持 `Point(x, y)` 或 `Point(double[])`）。

```csharp
public Point(params double[] coords)
```

| parameter | description |
| --- | --- |
| coords | 至少一个坐标分量。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 当坐标为空时抛出。 |

### Point constructor (2 of 3)

由向量分量构造同坐标的点。

```csharp
public Point(Vector vector)
```

| parameter | description |
| --- | --- |
| vector | 源向量。 |

### Point constructor (3 of 3)

由球坐标构造三维点。

```csharp
public Point(double r, Angle angleXY, Angle angleZ)
```

| parameter | description |
| --- | --- |
| r | 到原点的距离。 |
| angleXY | XY 平面方位角。 |
| angleZ | 与 Z 轴的夹角。 |

### Point.TildeEqual method

在给定容差下判断两点是否近似相等。

```csharp
public bool TildeEqual(Point other, double tolerance)
```

| parameter | description |
| --- | --- |
| other | 另一点。 |
| tolerance | 容差。 |

#### Return Value

近似相等则为 `true`。

### Point.ToString method

```csharp
public override string ToString()
```

### Point.ToStringBracket method

以方括号格式输出坐标（不含 `pt` 前缀）。

```csharp
public string ToStringBracket()
```

#### Return Value

形如 `[x, y, ...]` 的字符串。

### Point.ToVector property

将点转换为同坐标的向量。

```csharp
public Vector ToVector { get; }
```
