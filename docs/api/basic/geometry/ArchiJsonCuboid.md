---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ArchiJsonCuboid class

长方体 DTO。

```csharp
public class ArchiJsonCuboid : ArchiJsonObjectBase
```

## Public Members

| name | description |
| --- | --- |
| ArchiJsonCuboid() | The default constructor. |
| height { get; set; } | 高。 |
| length { get; set; } | 长。 |
| matrix { get; set; } | 4×4 齐次变换矩阵（默认单位阵）。 |
| position { get; set; } | 位置偏移。 |
| override type { get; } |  |
| width { get; set; } | 宽。 |

### ArchiJsonCuboid constructor

The default constructor.

```csharp
public ArchiJsonCuboid()
```

### ArchiJsonCuboid.height property

高。

```csharp
public double height { get; set; }
```

### ArchiJsonCuboid.length property

长。

```csharp
public double length { get; set; }
```

### ArchiJsonCuboid.matrix property

4×4 齐次变换矩阵（默认单位阵）。

```csharp
public double[] matrix { get; set; }
```

### ArchiJsonCuboid.position property

位置偏移。

```csharp
public ArchiJsonPosition position { get; set; }
```

### ArchiJsonCuboid.type property

```csharp
public override string type { get; }
```

### ArchiJsonCuboid.width property

宽。

```csharp
public double width { get; set; }
```
