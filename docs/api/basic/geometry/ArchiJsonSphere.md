---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ArchiJsonSphere class

球体 DTO。

```csharp
public class ArchiJsonSphere : ArchiJsonObjectBase
```

## Public Members

| name | description |
| --- | --- |
| ArchiJsonSphere() | The default constructor. |
| matrix { get; set; } | 4×4 齐次变换矩阵（默认单位阵）。 |
| position { get; set; } | 位置偏移。 |
| radius { get; set; } | 半径。 |
| override type { get; } |  |

### ArchiJsonSphere constructor

The default constructor.

```csharp
public ArchiJsonSphere()
```

### ArchiJsonSphere.matrix property

4×4 齐次变换矩阵（默认单位阵）。

```csharp
public double[] matrix { get; set; }
```

### ArchiJsonSphere.position property

位置偏移。

```csharp
public ArchiJsonPosition position { get; set; }
```

### ArchiJsonSphere.radius property

半径。

```csharp
public double radius { get; set; }
```

### ArchiJsonSphere.type property

```csharp
public override string type { get; }
```
