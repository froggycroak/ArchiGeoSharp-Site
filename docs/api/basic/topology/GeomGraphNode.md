---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Topology</code></p>

# GeomGraphNode class

带点位的无向图节点。

```csharp
public sealed class GeomGraphNode
```

## Public Members

| name | description |
| --- | --- |
| GeomGraphNode(…) | 创建图节点。 |
| Degree { get; } | 关联边数量（度）。 |
| EdgeIds { get; } | 与该节点相连的边 id。 |
| Id { get; } | 节点 id。 |
| Position { get; } | 节点坐标。 |

### GeomGraphNode.Degree property

关联边数量（度）。

```csharp
public int Degree { get; }
```

### GeomGraphNode.EdgeIds property

与该节点相连的边 id。

```csharp
public IReadOnlyList<int> EdgeIds { get; }
```

### GeomGraphNode constructor

创建图节点。

```csharp
public GeomGraphNode(int id, Point position, IReadOnlyList<int> edgeIds)
```

| parameter | description |
| --- | --- |
| id | 节点 id。 |
| position | 几何位置。 |
| edgeIds | 关联的无向边 id 列表。 |

### GeomGraphNode.Id property

节点 id。

```csharp
public int Id { get; }
```

### GeomGraphNode.Position property

节点坐标。

```csharp
public Point Position { get; }
```
