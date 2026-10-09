---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ArchiJsonVertices class

顶点集 DTO：扁平坐标 + 可选变换矩阵。

```csharp
public class ArchiJsonVertices : ArchiJsonObjectBase
```

## Public Members

| name | description |
| --- | --- |
| ArchiJsonVertices() | The default constructor. |
| coordinates { get; set; } | 扁平坐标数组（按 pointSize 分组）。 |
| matrix { get; set; } | 4×4 齐次变换矩阵（行优先展平，默认单位阵）。 |
| pointSize { get; set; } | 每点分量数，默认 3。 |
| position { get; set; } | 位置偏移。 |
| size { get; set; } | 坐标分量维数，默认 3。 |
| override type { get; } |  |

### ArchiJsonVertices constructor

The default constructor.

```csharp
public ArchiJsonVertices()
```

### ArchiJsonVertices.coordinates property

扁平坐标数组（按 pointSize 分组）。

```csharp
public double[] coordinates { get; set; }
```

### ArchiJsonVertices.matrix property

4×4 齐次变换矩阵（行优先展平，默认单位阵）。

```csharp
public double[] matrix { get; set; }
```

### ArchiJsonVertices.pointSize property

每点分量数，默认 3。

```csharp
public int pointSize { get; set; }
```

### ArchiJsonVertices.position property

位置偏移。

```csharp
public ArchiJsonPosition position { get; set; }
```

### ArchiJsonVertices.size property

坐标分量维数，默认 3。

```csharp
public int size { get; set; }
```

### ArchiJsonVertices.type property

```csharp
public override string type { get; }
```
