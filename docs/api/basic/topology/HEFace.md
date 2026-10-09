---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Topology</code></p>

# HEFace class

半边网格面：由半边环界定。

```csharp
public class HEFace
```

## Public Members

| name | description |
| --- | --- |
| HEFace() | The default constructor. |
| Edges { get; } | 面边界半边环（按 Next 遍历）。 |
| HalfEdge | 面上任意一条半边。 |

### HEFace.Edges property

面边界半边环（按 Next 遍历）。

```csharp
public List<HalfEdge> Edges { get; }
```

### HEFace.HalfEdge field

面上任意一条半边。

```csharp
public HalfEdge HalfEdge;
```

### HEFace constructor

The default constructor.

```csharp
public HEFace()
```
