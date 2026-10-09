---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ArchiJsonPrism class

棱柱 DTO：底面折线 + 高度。

```csharp
public class ArchiJsonPrism : ArchiJsonObjectBase
```

## Public Members

| name | description |
| --- | --- |
| ArchiJsonPrism() | The default constructor. |
| height { get; set; } | 高度。 |
| matrix { get; set; } | 4×4 齐次变换矩阵（默认单位阵）。 |
| position { get; set; } | 位置偏移。 |
| segments { get; set; } | 底面折线。 |
| override type { get; } |  |

### ArchiJsonPrism constructor

The default constructor.

```csharp
public ArchiJsonPrism()
```

### ArchiJsonPrism.height property

高度。

```csharp
public double height { get; set; }
```

### ArchiJsonPrism.matrix property

4×4 齐次变换矩阵（默认单位阵）。

```csharp
public double[] matrix { get; set; }
```

### ArchiJsonPrism.position property

位置偏移。

```csharp
public ArchiJsonPosition position { get; set; }
```

### ArchiJsonPrism.segments property

底面折线。

```csharp
public ArchiJsonSegments segments { get; set; }
```

### ArchiJsonPrism.type property

```csharp
public override string type { get; }
```
