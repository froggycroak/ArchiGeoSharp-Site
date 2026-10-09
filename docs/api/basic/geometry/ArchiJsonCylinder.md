---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ArchiJsonCylinder class

圆柱 DTO。

```csharp
public class ArchiJsonCylinder : ArchiJsonObjectBase
```

## Public Members

| name | description |
| --- | --- |
| ArchiJsonCylinder() | The default constructor. |
| height { get; set; } | 高度。 |
| matrix { get; set; } | 4×4 齐次变换矩阵（默认单位阵）。 |
| position { get; set; } | 位置偏移。 |
| radius { get; set; } | 半径。 |
| override type { get; } |  |

### ArchiJsonCylinder constructor

The default constructor.

```csharp
public ArchiJsonCylinder()
```

### ArchiJsonCylinder.height property

高度。

```csharp
public double height { get; set; }
```

### ArchiJsonCylinder.matrix property

4×4 齐次变换矩阵（默认单位阵）。

```csharp
public double[] matrix { get; set; }
```

### ArchiJsonCylinder.position property

位置偏移。

```csharp
public ArchiJsonPosition position { get; set; }
```

### ArchiJsonCylinder.radius property

半径。

```csharp
public double radius { get; set; }
```

### ArchiJsonCylinder.type property

```csharp
public override string type { get; }
```
