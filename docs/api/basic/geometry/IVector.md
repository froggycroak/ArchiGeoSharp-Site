---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# IVector interface

可度量维度的几何对象标记接口。自身无固定维数，Base 维数通常为 2D/3D。

```csharp
public interface IVector
```

## Members

| name | description |
| --- | --- |
| Dimension { get; } | 对象所在（Base）空间的维度。 |

### IVector.Dimension property

对象所在（Base）空间的维度。

```csharp
public int Dimension { get; }
```
