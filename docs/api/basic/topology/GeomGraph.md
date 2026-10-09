---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Topology</code></p>

# GeomGraph class

普适几何图：节点带 `Point`，边为无向连接。 可与 `LineSeg` / `Polyline` 互转，供骨架、路网等复用。

```csharp
public sealed class GeomGraph
```

## Public Members

| name | description |
| --- | --- |
| GeomGraph(…) | 由节点与边列表构造图（不复制拓扑，仅持有引用）。 |
| static FromSegments(…) | 线段端点按容差吸附后建无向图；丢弃零长边与重复边。 |
| Edges { get; } | 所有边。 |
| Nodes { get; } | 所有节点。 |
| AllEdgeIds() | 全部边 id 的集合（0 .. Count-1）。 |
| Degrees(…) | 各节点在存活边子图中的度。 |
| ExtractBranches(…) | 从度≠2 端点出发，沿度=2 链拆成多条折线。 |
| FindDiameter(…) | 加权直径路径（节点 id 序列）与长度；树上为最长路。 |
| FirstAliveNode(…) | 在存活边集中任取一条边，返回其一端节点 id。 |
| IsConnected(…) | 在存活边诱导的子图上是否连通（仅含至少一条存活边的节点参与判定）。 |
| LongestChain(…) | 图上的最长链（加权直径路径）→ 不封闭折线。 对树等价于任意两叶之间边长之和最大的路径。 |
| PathToPolyline(…) | 节点 id 序列转为不封闭折线。 |
| PruneLeafSpurs(…) | 迭代剪叶枝：对每个叶→分叉路径，若 *shouldPrune* 为真则删除。 |
| RootAt(…) | 从 root 做 BFS 定向。返回 parent[i]（根为 null）与 children 列表。 要求 alive 边导出的子图连通。 |
| ToLineSegs(…) | 全部边（或指定边集）转为线段。 |
| TryWalkLeafToJunction(…) | 从叶沿度=2 链走到分叉/端点。 |

### GeomGraph.AllEdgeIds method

全部边 id 的集合（0 .. Count-1）。

```csharp
public HashSet<int> AllEdgeIds()
```

#### Return Value

边 id 集合。

### GeomGraph.Degrees method

各节点在存活边子图中的度。

```csharp
public int[] Degrees(HashSet<int> aliveEdges = null)
```

| parameter | description |
| --- | --- |
| aliveEdges | 存活边 id；null 表示全部边。 |

#### Return Value

与节点 id 对齐的度数数组。

### GeomGraph.Edges property

所有边。

```csharp
public IReadOnlyList<GeomGraphEdge> Edges { get; }
```

### GeomGraph.ExtractBranches method

从度≠2 端点出发，沿度=2 链拆成多条折线。

```csharp
public Polyline[] ExtractBranches(HashSet<int> aliveEdges = null)
```

| parameter | description |
| --- | --- |
| aliveEdges | 存活边；null 为全部边。 |

#### Return Value

各分支折线。

### GeomGraph.FindDiameter method

加权直径路径（节点 id 序列）与长度；树上为最长路。

```csharp
public (int[] pathNodes, double length) FindDiameter(HashSet<int> aliveEdges = null)
```

| parameter | description |
| --- | --- |
| aliveEdges | 存活边；null 为全部边。 |

#### Return Value

直径路径节点序列与路径长度；无边时为 (null, 0)。

### GeomGraph.FirstAliveNode method

在存活边集中任取一条边，返回其一端节点 id。

```csharp
public int FirstAliveNode(HashSet<int> aliveEdges)
```

| parameter | description |
| --- | --- |
| aliveEdges | 非空边 id 集合。 |

#### Return Value

节点 id；无边时返回 0。

### GeomGraph.FromSegments method

线段端点按容差吸附后建无向图；丢弃零长边与重复边。

```csharp
public static GeomGraph FromSegments(IReadOnlyList<LineSeg> segments, double snapTol)
```

| parameter | description |
| --- | --- |
| segments | 输入线段。 |
| snapTol | 端点合并容差。 |

#### Return Value

几何图。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentNullException | segments 为 null。 |
| ArgumentOutOfRangeException | snapTol 非正。 |
| InvalidOperationException | 无有效线段时抛出。 |

### GeomGraph constructor

由节点与边列表构造图（不复制拓扑，仅持有引用）。

```csharp
public GeomGraph(IReadOnlyList<GeomGraphNode> nodes, IReadOnlyList<GeomGraphEdge> edges)
```

| parameter | description |
| --- | --- |
| nodes | 节点集合。 |
| edges | 边集合。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentNullException | nodes 或 edges 为 null 时抛出。 |

### GeomGraph.IsConnected method

在存活边诱导的子图上是否连通（仅含至少一条存活边的节点参与判定）。

```csharp
public bool IsConnected(HashSet<int> aliveEdges = null)
```

| parameter | description |
| --- | --- |
| aliveEdges | 仍存在的边 id；null 表示全部边。 |

#### Return Value

子图连通则为 true。

### GeomGraph.LongestChain method

图上的最长链（加权直径路径）→ 不封闭折线。 对树等价于任意两叶之间边长之和最大的路径。

```csharp
public Polyline LongestChain(HashSet<int> aliveEdges = null)
```

| parameter | description |
| --- | --- |
| aliveEdges | 存活边；null 为全部边。 |

#### Return Value

最长链折线。

### GeomGraph.Nodes property

所有节点。

```csharp
public IReadOnlyList<GeomGraphNode> Nodes { get; }
```

### GeomGraph.PathToPolyline method

节点 id 序列转为不封闭折线。

```csharp
public Polyline PathToPolyline(IReadOnlyList<int> nodeIds)
```

| parameter | description |
| --- | --- |
| nodeIds | 路径上的节点 id。 |

#### Return Value

对应折线。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentNullException | nodeIds 为 null。 |
| ArgumentException | 路径为空。 |

### GeomGraph.PruneLeafSpurs method

迭代剪叶枝：对每个叶→分叉路径，若 *shouldPrune* 为真则删除。

```csharp
public void PruneLeafSpurs(HashSet<int> aliveEdges, 
    Func<int, double, int, int, double, bool> shouldPrune)
```

| parameter | description |
| --- | --- |
| aliveEdges | 可修改的存活边集合。 |
| shouldPrune | 判定是否删除该 spur 的回调。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentNullException | 参数为 null。 |

### GeomGraph.RootAt method

从 root 做 BFS 定向。返回 parent[i]（根为 null）与 children 列表。 要求 alive 边导出的子图连通。

```csharp
public (int?[] parent, IReadOnlyList<int>[] children) RootAt(int rootId, 
    HashSet<int> aliveEdges = null)
```

| parameter | description |
| --- | --- |
| rootId | 根节点 id。 |
| aliveEdges | 存活边；null 为全部边。 |

#### Return Value

父指针数组与各节点子节点列表。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentOutOfRangeException | rootId 越界。 |
| InvalidOperationException | 子图不连通。 |

### GeomGraph.ToLineSegs method

全部边（或指定边集）转为线段。

```csharp
public LineSeg[] ToLineSegs(IEnumerable<int> edgeIds = null)
```

| parameter | description |
| --- | --- |
| edgeIds | 边 id 序列；null 表示全部边。 |

#### Return Value

按 id 排序的线段数组。

### GeomGraph.TryWalkLeafToJunction method

从叶沿度=2 链走到分叉/端点。

```csharp
public bool TryWalkLeafToJunction(HashSet<int> aliveEdges, HashSet<int> pendingRemove, int leaf, 
    out List<int> pathEdges, out double pathLen, out int junction, out int endDeg)
```

| parameter | description |
| --- | --- |
| aliveEdges | 仍存在的边。 |
| pendingRemove | 待删除边（遍历时忽略）。 |
| leaf | 起始叶节点。 |
| pathEdges | 输出：路径上的边 id。 |
| pathLen | 输出：路径总长度。 |
| junction | 输出：终止节点（分叉或端点）。 |
| endDeg | 输出：终止节点在存活边中的度。 |

#### Return Value

是否走出至少一条边。
