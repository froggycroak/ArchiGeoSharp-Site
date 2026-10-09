---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ArchiJsonSegments class

折线/线段集 DTO。

```csharp
public class ArchiJsonSegments : ArchiJsonObjectBase
```

## Public Members

| name | description |
| --- | --- |
| ArchiJsonSegments() | The default constructor. |
| closed { get; set; } | 是否闭合。 |
| coordinates { get; set; } | 扁平坐标数组。 |
| filled { get; set; } | 是否填充，默认 false。 |
| matrix { get; set; } | 4×4 齐次变换矩阵（默认单位阵）。 |
| position { get; set; } | 位置偏移。 |
| size { get; set; } | 坐标分量维数，默认 3。 |
| override type { get; } |  |

### ArchiJsonSegments constructor

The default constructor.

```csharp
public ArchiJsonSegments()
```

### ArchiJsonSegments.closed property

是否闭合。

```csharp
public bool closed { get; set; }
```

### ArchiJsonSegments.coordinates property

扁平坐标数组。

```csharp
public double[] coordinates { get; set; }
```

### ArchiJsonSegments.filled property

是否填充，默认 false。

```csharp
public bool filled { get; set; }
```

### ArchiJsonSegments.matrix property

4×4 齐次变换矩阵（默认单位阵）。

```csharp
public double[] matrix { get; set; }
```

### ArchiJsonSegments.position property

位置偏移。

```csharp
public ArchiJsonPosition position { get; set; }
```

### ArchiJsonSegments.size property

坐标分量维数，默认 3。

```csharp
public int size { get; set; }
```

### ArchiJsonSegments.type property

```csharp
public override string type { get; }
```
