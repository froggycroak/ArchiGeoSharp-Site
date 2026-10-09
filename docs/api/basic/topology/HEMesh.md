---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Topology</code></p>

# HEMesh class

半边网格：顶点 / 半边 / 面列表及拓扑操作。

```csharp
public class HEMesh
```

## Public Members

| name | description |
| --- | --- |
| HEMesh() | The default constructor. |
| Faces | 面列表。 |
| HalfEdges | 半边列表。 |
| Vertices | 顶点列表。 |
| FlipEdge(…) | 边翻转操作（适用于三角网格）。 |
| FlipFaceVertex(…) | 面-顶点互换：移除原面，以新顶点为中心扇出三角形。 |
| FromAdjacencyMatrix(…) |  |
| ToAdjacencyMatrix() | 将网格导出为邻接矩阵（元素为边 Tag）。 |

### HEMesh.Faces field

面列表。

```csharp
public List<HEFace> Faces;
```

### HEMesh.FlipEdge method

边翻转操作（适用于三角网格）。

```csharp
public void FlipEdge(HalfEdge he)
```

| parameter | description |
| --- | --- |
| he | 待翻转的半边。 |

### HEMesh.FlipFaceVertex method

面-顶点互换：移除原面，以新顶点为中心扇出三角形。

```csharp
public void FlipFaceVertex(HEFace face, HEVertex newVertex)
```

| parameter | description |
| --- | --- |
| face | 原面。 |
| newVertex | 新插入的中心顶点。 |

### HEMesh.FromAdjacencyMatrix method

```csharp
public void FromAdjacencyMatrix(int[] matrix)
```

### HEMesh.HalfEdges field

半边列表。

```csharp
public List<HalfEdge> HalfEdges;
```

### HEMesh constructor

The default constructor.

```csharp
public HEMesh()
```

### HEMesh.ToAdjacencyMatrix method

将网格导出为邻接矩阵（元素为边 Tag）。

```csharp
public int[] ToAdjacencyMatrix()
```

#### Return Value

n×n 邻接矩阵。

### HEMesh.Vertices field

顶点列表。

```csharp
public List<HEVertex> Vertices;
```
