---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# MeshTriangle class

纯三角面片网格：顶点列表与三角面索引（partial 定义，见 `MeshTriangle3` 等分部）。

`MeshTriangle` 的 partial：按共面分组提取网格轮廓边界线段。

```csharp
public class MeshTriangle : IMeshTriangle
```

## Public Members

| name | description |
| --- | --- |
| MeshTriangle(…) | 由顶点与三角面索引构造网格。 |
| FaceCount { get; } | 三角面数量。 |
| FaceVertexIndices { get; } | 三角面索引列表。 |
| VertexCount { get; } | 顶点数量。 |
| Vertices { get; } | 顶点列表。 |
| AddFace(…) | 追加一个三角面。 (2 methods) |
| AddFaces(…) | 批量追加三角面。 |
| AddVertex(…) | 追加一个顶点。 |
| AddVetices(…) | 批量追加顶点。 |
| GetAllOutlineSegments(…) | 获取网格的所有边界线段（根据共面性分组后提取） |
| GetAllOutlineSegmentsOptimized(…) | 获取网格的所有边界线段（优化版，使用缓存） |
| GetOutlineSegmentsInfo(…) | 可视化显示边界线段的统计信息 |
| IsClosed() | 检查网格是否为封闭流形：每条无向边恰好被两个三角面共享。 |
| ReverseAllFaces() | 将当前网格中所有三角面的顶点顺序反向（法向量随之反向）。 |
| ToMeshTriangle(…) | 网格细分接口实现；本类直接返回自身。 |

### MeshTriangle.AddFace method (1 of 2)

追加一个三角面。

```csharp
public void AddFace(int v1, int v2, int v3)
```

| parameter | description |
| --- | --- |
| v1 | 顶点索引 1。 |
| v2 | 顶点索引 2。 |
| v3 | 顶点索引 3。 |

### MeshTriangle.AddFace method (2 of 2)

追加一个四边形（拆成两个三角形）。

```csharp
public void AddFace(int v1, int v2, int v3, int v4)
```

| parameter | description |
| --- | --- |
| v1 | 顶点 1。 |
| v2 | 顶点 2。 |
| v3 | 顶点 3。 |
| v4 | 顶点 4。 |

### MeshTriangle.AddFaces method

批量追加三角面。

```csharp
public void AddFaces(IList<(int, int, int)> faces)
```

| parameter | description |
| --- | --- |
| faces | 面索引列表。 |

### MeshTriangle.AddVertex method

追加一个顶点。

```csharp
public void AddVertex(Point pt)
```

| parameter | description |
| --- | --- |
| pt | 新顶点。 |

### MeshTriangle.AddVetices method

批量追加顶点。

```csharp
public void AddVetices(IList<Point> pts)
```

| parameter | description |
| --- | --- |
| pts | 顶点集合。 |

### MeshTriangle.FaceCount property

三角面数量。

```csharp
public int FaceCount { get; }
```

### MeshTriangle.FaceVertexIndices property

三角面索引列表。

```csharp
public List<(int, int, int)> FaceVertexIndices { get; }
```

### MeshTriangle.GetAllOutlineSegments method

获取网格的所有边界线段（根据共面性分组后提取）

```csharp
public LineSeg[] GetAllOutlineSegments(double tolerance = 1E-06m)
```

| parameter | description |
| --- | --- |
| tolerance | 容差 |

#### Return Value

边界线段数组

### MeshTriangle.GetAllOutlineSegmentsOptimized method

获取网格的所有边界线段（优化版，使用缓存）

```csharp
public LineSeg[] GetAllOutlineSegmentsOptimized(double tolerance = 1E-06m)
```

| parameter | description |
| --- | --- |
| tolerance | 容差 |

#### Return Value

边界线段数组

### MeshTriangle.GetOutlineSegmentsInfo method

可视化显示边界线段的统计信息

```csharp
public string GetOutlineSegmentsInfo(double tolerance = 1E-06m)
```

| parameter | description |
| --- | --- |
| tolerance | 容差 |

#### Return Value

统计信息字符串

### MeshTriangle.IsClosed method

检查网格是否为封闭流形：每条无向边恰好被两个三角面共享。

```csharp
public bool IsClosed()
```

#### Return Value

满足封闭边条件且规模足够时为 true。

### MeshTriangle constructor

由顶点与三角面索引构造网格。

```csharp
public MeshTriangle(IList<Point> vertices, IList<(int, int, int)> faceVertexIndices)
```

| parameter | description |
| --- | --- |
| vertices | 顶点列表。 |
| faceVertexIndices | 三角面顶点索引 (v1,v2,v3)。 |

### MeshTriangle.ReverseAllFaces method

将当前网格中所有三角面的顶点顺序反向（法向量随之反向）。

```csharp
public void ReverseAllFaces()
```

### MeshTriangle.ToMeshTriangle method

网格细分接口实现；本类直接返回自身。

```csharp
public MeshTriangle ToMeshTriangle(int divisions = 0)
```

| parameter | description |
| --- | --- |
| divisions | 细分参数（未使用）。 |

#### Return Value

this。

### MeshTriangle.VertexCount property

顶点数量。

```csharp
public int VertexCount { get; }
```

### MeshTriangle.Vertices property

顶点列表。

```csharp
public List<Point> Vertices { get; }
```
