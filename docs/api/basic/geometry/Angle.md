---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Angle structure

平面角，内部以度为单位存储。支持隐式从 `double`/`int` 转换。

```csharp
public struct Angle
```

## Public Members

| name | description |
| --- | --- |
| Angle(…) | 由度数构造角。 (3 constructors) |
| static PI { get; } | 平角（180°）。 |
| static TWO_PI { get; } | 周角（360°）。 |
| static Zero { get; } | 零角。 |
| static FromCos(…) | 由余弦值创建角（arccos）。 |
| static FromDegree(…) | 由度数创建角。 |
| static FromRadian(…) | 由弧度创建角。 |
| static FromSin(…) | 由正弦值创建角（arcsin）。 |
| static FromTan(…) | 由正切值创建角（arctan）。 |
| static FromVector(…) | 由向量方位角创建。 |
| Complement { get; } | 余角：90 − Degree。 |
| Cos { get; } | 余弦。 |
| Cot { get; } | 余切。 |
| Csc { get; } | 余割。 |
| Degree { get; } | 角度（度）。 |
| Mod180 { get; } | 取模到 0, 180)。 |
| [Mod360 { get; } | 取模到 0, 360)。 |
| [Mod90 { get; } | 取模到 0, 90)。 |
| [Norm180180 { get; } | 规范到 (−180, 180]。 |
| Norm9090 { get; } | 规范到 (−90, 90]。 |
| Radian { get; } | 角度（弧度）。 |
| Sec { get; } | 正割。 |
| Sin { get; } | 正弦。 |
| Supplement { get; } | 补角：180 − Degree。 |
| Tan { get; } | 正切。 |
| UnitVec { get; } | 对应的二维单位向量 (cos, sin)。 |
| limitTo(…) | 将角限制到区间 minAngle, minAngle + cycle)。 |
| override [ToString() |  |
| static DegreeToRadian(…) | 度转弧度。 |
| static RadianToDgree(…) | 弧度转度。 |
| operator + | 角相加。 |
| operator / | 角 ÷ 标量。 |
| operator == | 在 0,360) 意义下近似相等。 |
| [implicit operator | 从度数隐式转换。 (2 operators) |
| operator != | 不等比较。 |
| operator % | 对角取模（周期为度数）。 |
| operator * | 角 × 标量。 (2 operators) |
| operator - | 取反。 (2 operators) |

### Angle constructor (1 of 3)

由度数构造角。

```csharp
public Angle(double degree)
```

| parameter | description |
| --- | --- |
| degree | 角度值（度）。 |

### Angle constructor (2 of 3)

由二维向量方位角构造（范围 (−180, 180]）。

```csharp
public Angle(Vector vec)
```

| parameter | description |
| --- | --- |
| vec | 二维方向向量。 |

### Angle constructor (3 of 3)

由两点连线方向构造。

```csharp
public Angle(Point ptFrom, Point ptTo)
```

| parameter | description |
| --- | --- |
| ptFrom | 起点。 |
| ptTo | 终点。 |

### Angle.Complement property

余角：90 − Degree。

```csharp
public Angle Complement { get; }
```

### Angle.Cos property

余弦。

```csharp
public double Cos { get; }
```

### Angle.Cot property

余切。

```csharp
public double Cot { get; }
```

### Angle.Csc property

余割。

```csharp
public double Csc { get; }
```

### Angle.Degree property

角度（度）。

```csharp
public double Degree { get; }
```

### Angle.DegreeToRadian method

度转弧度。

```csharp
public static double DegreeToRadian(double degree)
```

| parameter | description |
| --- | --- |
| degree | 度数。 |

#### Return Value

弧度。

### Angle.FromCos method

由余弦值创建角（arccos）。

```csharp
public static Angle FromCos(double cos)
```

| parameter | description |
| --- | --- |
| cos | 余弦值。 |

#### Return Value

角。

### Angle.FromDegree method

由度数创建角。

```csharp
public static Angle FromDegree(double degree)
```

| parameter | description |
| --- | --- |
| degree | 角度值（度）。 |

#### Return Value

角。

### Angle.FromRadian method

由弧度创建角。

```csharp
public static Angle FromRadian(double radian)
```

| parameter | description |
| --- | --- |
| radian | 角度值（弧度）。 |

#### Return Value

角。

### Angle.FromSin method

由正弦值创建角（arcsin）。

```csharp
public static Angle FromSin(double sin)
```

| parameter | description |
| --- | --- |
| sin | 正弦值。 |

#### Return Value

角。

### Angle.FromTan method

由正切值创建角（arctan）。

```csharp
public static Angle FromTan(double tan)
```

| parameter | description |
| --- | --- |
| tan | 正切值。 |

#### Return Value

角。

### Angle.FromVector method

由向量方位角创建。

```csharp
public static Angle FromVector(Vector vec)
```

| parameter | description |
| --- | --- |
| vec | 方向向量。 |

#### Return Value

角。

### Angle.limitTo method

将角限制到区间 minAngle, minAngle + cycle)。

```csharp
public Angle limitTo(Angle minAngle, Angle cycle)
```

| parameter | description |
| --- | --- |
| minAngle | 区间下界。 |
| cycle | 周期长度。 |

#### Return Value

限制后的角。

### Angle.Mod180 property

取模到 0, 180)。

```csharp
public Angle Mod180 { get; }
```

### Angle.Mod360 property

取模到 0, 360)。

```csharp
public Angle Mod360 { get; }
```

### Angle.Mod90 property

取模到 0, 90)。

```csharp
public Angle Mod90 { get; }
```

### Angle.Norm180180 property

规范到 (−180, 180]。

```csharp
public Angle Norm180180 { get; }
```

### Angle.Norm9090 property

规范到 (−90, 90]。

```csharp
public Angle Norm9090 { get; }
```

### Angle Addition operator

角相加。

```csharp
public static Angle operator +(Angle angle1, Angle angle2)
```

### Angle Division operator

角 ÷ 标量。

```csharp
public static Angle operator /(Angle angle, double scalar)
```

### Angle Equality operator

在 0,360) 意义下近似相等。

```csharp
public static bool operator ==(Angle angle1, Angle angle2)
```

### Angle Implicit operator (1 of 2)

从度数隐式转换。

```csharp
public static implicit operator Angle(double degree)
```

### Angle Implicit operator (2 of 2)

从整数度数隐式转换。

```csharp
public static implicit operator Angle(int degree)
```

### Angle Inequality operator

不等比较。

```csharp
public static bool operator !=(Angle angle1, Angle angle2)
```

### Angle Modulus operator

对角取模（周期为度数）。

```csharp
public static Angle operator %(Angle angle, double cycleDegree)
```

### Angle Multiply operator (1 of 2)

角 × 标量。

```csharp
public static Angle operator *(Angle angle, double scalar)
```

### Angle Multiply operator (2 of 2)

标量 × 角。

```csharp
public static Angle operator *(double scalar, Angle angle)
```

### Angle UnaryNegation operator (1 of 2)

取反。

```csharp
public static Angle operator -(Angle angle)
```

### Angle Subtraction operator (2 of 2)

角相减。

```csharp
public static Angle operator -(Angle angle1, Angle angle2)
```

### Angle.PI property

平角（180°）。

```csharp
public static Angle PI { get; }
```

### Angle.Radian property

角度（弧度）。

```csharp
public double Radian { get; }
```

### Angle.RadianToDgree method

弧度转度。

```csharp
public static double RadianToDgree(double radian)
```

| parameter | description |
| --- | --- |
| radian | 弧度。 |

#### Return Value

度数。

### Angle.Sec property

正割。

```csharp
public double Sec { get; }
```

### Angle.Sin property

正弦。

```csharp
public double Sin { get; }
```

### Angle.Supplement property

补角：180 − Degree。

```csharp
public Angle Supplement { get; }
```

### Angle.Tan property

正切。

```csharp
public double Tan { get; }
```

### Angle.ToString method

```csharp
public override string ToString()
```

### Angle.TWO_PI property

周角（360°）。

```csharp
public static Angle TWO_PI { get; }
```

### Angle.UnitVec property

对应的二维单位向量 (cos, sin)。

```csharp
public Vector UnitVec { get; }
```

### Angle.Zero property

零角。

```csharp
public static Angle Zero { get; }
```
