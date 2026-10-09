---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ISpace3d interface

三维正交坐标系 / 变换。

```csharp
public interface ISpace3d : IMatrix, IOrtho, IPlaneExpr, ITransform
```

## Members

| name | description |
| --- | --- |
| ToSpace3d { get; } | 转为 `Space3d`。 |

### ISpace3d.ToSpace3d property

转为 `Space3d`。

```csharp
public Space3d ToSpace3d { get; }
```
