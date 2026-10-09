---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# TransCopable&lt;T&gt; interface

返回变换副本而不修改自身。

```csharp
public interface TransCopable<T>
```

| parameter | description |
| --- | --- |
| T | 结果类型。 |

## Members

| name | description |
| --- | --- |
| TransformCopy(…) | 变换并返回副本。 |

### TransCopable&lt;T&gt;.TransformCopy method

变换并返回副本。

```csharp
public T TransformCopy(Space3d transform)
```

| parameter | description |
| --- | --- |
| transform | 变换。 |

#### Return Value

变换后的副本。
