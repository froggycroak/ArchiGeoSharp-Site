---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Topology</code></p>

# HalfEdge class

半边：从起点出发、指向对偶起点的有向边。

```csharp
public class HalfEdge
```

| parameter | description |
| --- | --- |
| start | 起点顶点。 |

## Public Members

| name | description |
| --- | --- |
| HalfEdge(…) | 半边：从起点出发、指向对偶起点的有向边。 |
| End { get; } | 终点（对偶半边的起点；无对偶时为 `null`）。 |
| Face { get; set; } | 所属面。 |
| Next { get; set; } | 环上的下一条半边。 |
| Opposite { get; set; } | 对偶半边。 |
| Previous { get; } | 环上的上一条半边。 |
| Start { get; set; } | 起点。 |
| Tag { get; set; } | 边标签（默认 1）。 |

### HalfEdge.End property

终点（对偶半边的起点；无对偶时为 `null`）。

```csharp
public HEVertex End { get; }
```

### HalfEdge.Face property

所属面。

```csharp
public HEFace Face { get; set; }
```

### HalfEdge constructor

半边：从起点出发、指向对偶起点的有向边。

```csharp
public HalfEdge(HEVertex start)
```

| parameter | description |
| --- | --- |
| start | 起点顶点。 |

### HalfEdge.Next property

环上的下一条半边。

```csharp
public HalfEdge Next { get; set; }
```

### HalfEdge.Opposite property

对偶半边。

```csharp
public HalfEdge Opposite { get; set; }
```

### HalfEdge.Previous property

环上的上一条半边。

```csharp
public HalfEdge Previous { get; }
```

### HalfEdge.Start property

起点。

```csharp
public HEVertex Start { get; set; }
```

### HalfEdge.Tag property

边标签（默认 1）。

```csharp
public int Tag { get; set; }
```
