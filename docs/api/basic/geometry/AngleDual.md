---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# AngleDual structure

用两个角度表示的三维方向：XY 平面方位角 `AngleXY` 与相对 +Z 的极角 `AngleZ`。

```csharp
public struct AngleDual
```

## Public Members

| name | description |
| --- | --- |
| AngleDual(…) | 由方位角与极角构造。 (2 constructors) |
| static Zero { get; } | 零方向（XY=0，Z=0）。 |
| static FromAngles(…) | 由两角构造。 |
| static FromVector(…) | 由向量构造。 |
| static Transform(…) | 从 from 到 to 的分量变换。 |
| AngleXY { get; } | XY 平面方位角。 |
| AngleZ { get; } | 相对 +Z 的极角。 |
| UnitVec { get; } | 对应的单位方向向量（球坐标形式）。 |
| AngleTo(…) | 求与另一三维方向之间的夹角。 |
| override Equals(…) | 与另一 `AngleDual` 值相等。 |
| override GetHashCode() | 基于 Mod360/Mod180 度数的哈希码。 |
| override ToString() | 可读字符串。 |
| TransformTo(…) | 从本方向到目标方向的逐分量角度差（Norm180180）。 |
| static Between(…) | 两方向夹角。 |
| operator / | 分量角度相减。 |
| operator == | 两方向分量相等。 |
| operator != | 两方向分量不等。 |
| operator * | 分量角度相加（组合旋转角）。 |

### AngleDual constructor (1 of 2)

由向量反算双角表示。

```csharp
public AngleDual(Vector vec)
```

| parameter | description |
| --- | --- |
| vec | 非零向量，至少二维。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 维数不足或零向量时抛出。 |

### AngleDual constructor (2 of 2)

由方位角与极角构造。

```csharp
public AngleDual(Angle angleXY, Angle angleZ)
```

| parameter | description |
| --- | --- |
| angleXY | XY 平面方位角。 |
| angleZ | 极角（Mod180 归一化）。 |

### AngleDual.AngleTo method

求与另一三维方向之间的夹角。

```csharp
public Angle AngleTo(AngleDual other)
```

| parameter | description |
| --- | --- |
| other | 另一方向。 |

#### Return Value

夹角。

### AngleDual.AngleXY property

XY 平面方位角。

```csharp
public Angle AngleXY { get; }
```

### AngleDual.AngleZ property

相对 +Z 的极角。

```csharp
public Angle AngleZ { get; }
```

### AngleDual.Between method

两方向夹角。

```csharp
public static Angle Between(AngleDual a, AngleDual b)
```

| parameter | description |
| --- | --- |
| a | 方向 a。 |
| b | 方向 b。 |

#### Return Value

夹角。

### AngleDual.Equals method

与另一 `AngleDual` 值相等。

```csharp
public override bool Equals(object obj)
```

| parameter | description |
| --- | --- |
| obj | 比较对象。 |

#### Return Value

类型与分量均相等时为 true。

### AngleDual.FromAngles method

由两角构造。

```csharp
public static AngleDual FromAngles(Angle angleXY, Angle angleZ)
```

| parameter | description |
| --- | --- |
| angleXY | XY 方位角。 |
| angleZ | 极角。 |

#### Return Value

新的 `AngleDual`。

### AngleDual.FromVector method

由向量构造。

```csharp
public static AngleDual FromVector(Vector vec)
```

| parameter | description |
| --- | --- |
| vec | 方向向量。 |

#### Return Value

新的 `AngleDual`。

### AngleDual.GetHashCode method

基于 Mod360/Mod180 度数的哈希码。

```csharp
public override int GetHashCode()
```

#### Return Value

哈希值。

### AngleDual Division operator

分量角度相减。

```csharp
public static AngleDual operator /(AngleDual a, AngleDual b)
```

| parameter | description |
| --- | --- |
| a | 被减数。 |
| b | 减数。 |

#### Return Value

分量之差。

### AngleDual Equality operator

两方向分量相等。

```csharp
public static bool operator ==(AngleDual a, AngleDual b)
```

| parameter | description |
| --- | --- |
| a | 左操作数。 |
| b | 右操作数。 |

#### Return Value

相等为 true。

### AngleDual Inequality operator

两方向分量不等。

```csharp
public static bool operator !=(AngleDual a, AngleDual b)
```

| parameter | description |
| --- | --- |
| a | 左操作数。 |
| b | 右操作数。 |

#### Return Value

不等为 true。

### AngleDual Multiply operator

分量角度相加（组合旋转角）。

```csharp
public static AngleDual operator *(AngleDual a, AngleDual b)
```

| parameter | description |
| --- | --- |
| a | 左操作数。 |
| b | 右操作数。 |

#### Return Value

分量之和。

### AngleDual.ToString method

可读字符串。

```csharp
public override string ToString()
```

#### Return Value

xy/z 度数表示。

### AngleDual.Transform method

从 from 到 to 的分量变换。

```csharp
public static AngleDual Transform(AngleDual from, AngleDual to)
```

| parameter | description |
| --- | --- |
| from | 起始方向。 |
| to | 目标方向。 |

#### Return Value

分量差。

### AngleDual.TransformTo method

从本方向到目标方向的逐分量角度差（Norm180180）。

```csharp
public AngleDual TransformTo(AngleDual target)
```

| parameter | description |
| --- | --- |
| target | 目标方向。 |

#### Return Value

分量变换角。

### AngleDual.UnitVec property

对应的单位方向向量（球坐标形式）。

```csharp
public Vector UnitVec { get; }
```

### AngleDual.Zero property

零方向（XY=0，Z=0）。

```csharp
public static AngleDual Zero { get; }
```
