---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# IMeshTriangle interface

可转换为三角网格的对象。

```csharp
public interface IMeshTriangle
```

## Members

| name | description |
| --- | --- |
| ToMeshTriangle(…) | 按细分次数生成三角网格。 |

### IMeshTriangle.ToMeshTriangle method

按细分次数生成三角网格。

```csharp
public MeshTriangle ToMeshTriangle(int divisions)
```

| parameter | description |
| --- | --- |
| divisions | 细分次数。 |

#### Return Value

三角网格。
