---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ISpace2d interface

二维正交坐标系 / 变换。

```csharp
public interface ISpace2d : ILineExpr, IMatrix, IOrtho, ITransform
```

## Members

| name | description |
| --- | --- |
| ToSpace2d { get; } | 转为 `Space2d`。 |

### ISpace2d.ToSpace2d property

转为 `Space2d`。

```csharp
public Space2d ToSpace2d { get; }
```
