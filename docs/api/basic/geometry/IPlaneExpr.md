---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# IPlaneExpr interface

可提供三维平面隐式方程的对象。

```csharp
public interface IPlaneExpr
```

## Members

| name | description |
| --- | --- |
| Expr { get; } | 平面方程 Ax + By + Cz + D = 0。 |
| ZDir { get; } | 平面法向（Z 方向）。 |

### IPlaneExpr.Expr property

平面方程 Ax + By + Cz + D = 0。

```csharp
public PlaneExpr Expr { get; }
```

### IPlaneExpr.ZDir property

平面法向（Z 方向）。

```csharp
public Vector ZDir { get; }
```
