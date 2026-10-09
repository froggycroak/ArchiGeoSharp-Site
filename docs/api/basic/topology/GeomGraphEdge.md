---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Topology</code></p>

# GeomGraphEdge class

无向图边（端点为节点 id）。

```csharp
public sealed class GeomGraphEdge
```

## Public Members

| name | description |
| --- | --- |
| GeomGraphEdge(…) | 创建无向边。 |
| A { get; } | 端点 a。 |
| B { get; } | 端点 b。 |
| Id { get; } | 边 id。 |
| Length { get; } | 边长。 |
| Other(…) | 给定一端，返回另一端节点 id。 |

### GeomGraphEdge.A property

端点 a。

```csharp
public int A { get; }
```

### GeomGraphEdge.B property

端点 b。

```csharp
public int B { get; }
```

### GeomGraphEdge constructor

创建无向边。

```csharp
public GeomGraphEdge(int id, int a, int b, double length)
```

| parameter | description |
| --- | --- |
| id | 边 id。 |
| a | 端点 a 的节点 id。 |
| b | 端点 b 的节点 id。 |
| length | 边长（通常为欧氏距离）。 |

### GeomGraphEdge.Id property

边 id。

```csharp
public int Id { get; }
```

### GeomGraphEdge.Length property

边长。

```csharp
public double Length { get; }
```

### GeomGraphEdge.Other method

给定一端，返回另一端节点 id。

```csharp
public int Other(int nodeId)
```

| parameter | description |
| --- | --- |
| nodeId | 已知端点 id（须为 A 或 B）。 |

#### Return Value

对端节点 id。
