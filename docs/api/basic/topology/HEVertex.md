---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Topology</code></p>

# HEVertex class

半边网格顶点。

```csharp
public class HEVertex
```

| parameter | description |
| --- | --- |
| pt | 空间位置。 |
| id | 可选编号，默认 −1。 |

## Public Members

| name | description |
| --- | --- |
| HEVertex(…) | 半边网格顶点。 |
| AdjacentEdges { get; } | 绕顶点的邻接半边列表。 |
| HalfEdge { get; set; } | 自该顶点出发的一条半边。 |
| Id { get; set; } | 顶点编号。 |
| Pt { get; } | 空间坐标。 |

### HEVertex.AdjacentEdges property

绕顶点的邻接半边列表。

```csharp
public List<HalfEdge> AdjacentEdges { get; }
```

### HEVertex.HalfEdge property

自该顶点出发的一条半边。

```csharp
public HalfEdge HalfEdge { get; set; }
```

### HEVertex constructor

半边网格顶点。

```csharp
public HEVertex(Point pt, int id = -1)
```

| parameter | description |
| --- | --- |
| pt | 空间位置。 |
| id | 可选编号，默认 −1。 |

### HEVertex.Id property

顶点编号。

```csharp
public int Id { get; set; }
```

### HEVertex.Pt property

空间坐标。

```csharp
public Point Pt { get; }
```
