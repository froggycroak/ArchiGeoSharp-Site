---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ICircleExpr interface

圆的基础表达：圆心 + 半径。

```csharp
public interface ICircleExpr
```

## Members

| name | description |
| --- | --- |
| Center { get; } | 圆心。 |
| Radius { get; } | 半径。 |

### ICircleExpr.Center property

圆心。

```csharp
public Point Center { get; }
```

### ICircleExpr.Radius property

半径。

```csharp
public double Radius { get; }
```
