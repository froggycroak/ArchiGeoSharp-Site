---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ITransformable interface

由任意 `ISpace3d` 描述的三维变换更新自身位姿。

```csharp
public interface ITransformable
```

## Members

| name | description |
| --- | --- |
| Transform(…) | 就地施加三维变换。 |

### ITransformable.Transform method

就地施加三维变换。

```csharp
public void Transform(ISpace3d transform)
```

| parameter | description |
| --- | --- |
| transform | 变换。 |
