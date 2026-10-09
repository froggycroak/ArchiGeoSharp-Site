---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# CircleExpr structure

二维圆的轻量表达式（圆心坐标 + 半径）。

```csharp
public struct CircleExpr
```

## Public Members

| name | description |
| --- | --- |
| CircleExpr(…) | 由圆心坐标与半径构造。 |
| Area { get; } | 圆面积。 |
| Center { get; } | 圆心点。 |
| CenterX { get; } | 圆心 X。 |
| CenterY { get; } | 圆心 Y。 |
| Perimeter { get; } | 圆周长。 |
| Radius { get; } | 半径。 |
| override ToString() |  |

### CircleExpr.Area property

圆面积。

```csharp
public double Area { get; }
```

### CircleExpr.Center property

圆心点。

```csharp
public Point Center { get; }
```

### CircleExpr.CenterX property

圆心 X。

```csharp
public double CenterX { get; }
```

### CircleExpr.CenterY property

圆心 Y。

```csharp
public double CenterY { get; }
```

### CircleExpr constructor

由圆心坐标与半径构造。

```csharp
public CircleExpr(double centerX, double centerY, double radius)
```

| parameter | description |
| --- | --- |
| centerX | 圆心 X。 |
| centerY | 圆心 Y。 |
| radius | 半径。 |

### CircleExpr.Perimeter property

圆周长。

```csharp
public double Perimeter { get; }
```

### CircleExpr.Radius property

半径。

```csharp
public double Radius { get; }
```

### CircleExpr.ToString method

```csharp
public override string ToString()
```
