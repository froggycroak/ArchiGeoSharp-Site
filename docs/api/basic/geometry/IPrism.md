---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# IPrism interface

棱柱接口：二维底面多边形 + 高度。

```csharp
public interface IPrism
```

## Members

| name | description |
| --- | --- |
| BasePoly2d { get; } | 局部二维底面多边形。 |
| Height { get; } | 高度（沿底面法向）。 |

### IPrism.BasePoly2d property

局部二维底面多边形。

```csharp
public Polyline BasePoly2d { get; }
```

### IPrism.Height property

高度（沿底面法向）。

```csharp
public double Height { get; }
```
