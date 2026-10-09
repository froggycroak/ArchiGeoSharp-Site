---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ArchiJsonPlane class

平面矩形片段 DTO（长 × 宽 + 位姿）。

```csharp
public class ArchiJsonPlane : ArchiJsonObjectBase
```

## Public Members

| name | description |
| --- | --- |
| ArchiJsonPlane() | The default constructor. |
| length { get; set; } | 长度。 |
| matrix { get; set; } | 4×4 齐次变换矩阵（默认单位阵）。 |
| position { get; set; } | 位置偏移。 |
| override type { get; } |  |
| width { get; set; } | 宽度。 |

### ArchiJsonPlane constructor

The default constructor.

```csharp
public ArchiJsonPlane()
```

### ArchiJsonPlane.length property

长度。

```csharp
public double length { get; set; }
```

### ArchiJsonPlane.matrix property

4×4 齐次变换矩阵（默认单位阵）。

```csharp
public double[] matrix { get; set; }
```

### ArchiJsonPlane.position property

位置偏移。

```csharp
public ArchiJsonPosition position { get; set; }
```

### ArchiJsonPlane.type property

```csharp
public override string type { get; }
```

### ArchiJsonPlane.width property

宽度。

```csharp
public double width { get; set; }
```
