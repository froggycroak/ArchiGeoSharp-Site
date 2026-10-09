---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# MeshTrianglesExtension class

三角网格接口与 `MeshTriangle` 列表的转换、合并扩展。

```csharp
public static class MeshTrianglesExtension
```

## Public Members

| name | description |
| --- | --- |
| static Merge(…) | 合并多个 MeshTriangle，保留重复顶点（仅偏移面索引）。 |
| static ToMeshTriangles(…) | 将多个 `IMeshTriangle` 各自转为 `MeshTriangle` 数组。 (2 methods) |

### MeshTrianglesExtension.Merge method

合并多个 MeshTriangle，保留重复顶点（仅偏移面索引）。

```csharp
public static MeshTriangle Merge(this IList<MeshTriangle> meshes)
```

| parameter | description |
| --- | --- |
| meshes | 待合并网格；null 或空则返回空网格。 |

#### Return Value

合并后的单一网格。

### MeshTrianglesExtension.ToMeshTriangles method (1 of 2)

将多个 `IMeshTriangle` 各自转为 `MeshTriangle` 数组。

```csharp
public static MeshTriangle[] ToMeshTriangles(this IList<IMeshTriangle> imeshTriangles, 
    int divisions = 0)
```

| parameter | description |
| --- | --- |
| imeshTriangles | 源网格列表。 |
| divisions | 传给各元素 `ToMeshTriangle` 的分段参数。 |

#### Return Value

三角网格数组。

### MeshTrianglesExtension.ToMeshTriangles method (2 of 2)

将单个网格接口包装为长度为 1 的数组（可带细分）。

```csharp
public static MeshTriangle[] ToMeshTriangles(this IMeshTriangle imeshTriangle, int divisions = 10)
```

| parameter | description |
| --- | --- |
| imeshTriangle | 源网格。 |
| divisions | 细分参数。 |

#### Return Value

单元素数组。
