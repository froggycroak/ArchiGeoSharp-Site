---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# BspNode class

BSP 树节点（区域 + 割缝 + 左右子），不绑定某一具体宿主类型。

```csharp
public sealed class BspNode
```

## Public Members

| name | description |
| --- | --- |
| BspNode(…) | 构造 BSP 树节点。 |
| Code { get; } | 编码字符。 |
| Cut { get; } | 本节点割缝（开放折线）；叶节点为 null。 |
| Index { get; } | 堆序下标。 |
| IsLeaf { get; } | 是否为叶节点。 |
| Left { get; } | 左子节点。 |
| Ratio { get; } | 剖分比。 |
| Region { get; } | 本节点区域。 |
| Right { get; } | 右子节点。 |
| Blocks() | 收集全部叶地块。 |
| Streets() | 收集各级割缝为线段。 |

### BspNode.Blocks method

收集全部叶地块。

```csharp
public Polyline[] Blocks()
```

### BspNode constructor

构造 BSP 树节点。

```csharp
public BspNode(Polyline region, char code, double ratio, int index, Polyline cut, BspNode left, 
    BspNode right)
```

| parameter | description |
| --- | --- |
| region | 本节点区域多边形。 |
| code | 编码字符 0/1/2。 |
| ratio | 剖分比。 |
| index | 堆序下标。 |
| cut | 割缝；叶为 null。 |
| left | 左子。 |
| right | 右子。 |

### BspNode.Code property

编码字符。

```csharp
public char Code { get; }
```

### BspNode.Cut property

本节点割缝（开放折线）；叶节点为 null。

```csharp
public Polyline Cut { get; }
```

### BspNode.Index property

堆序下标。

```csharp
public int Index { get; }
```

### BspNode.IsLeaf property

是否为叶节点。

```csharp
public bool IsLeaf { get; }
```

### BspNode.Left property

左子节点。

```csharp
public BspNode Left { get; }
```

### BspNode.Ratio property

剖分比。

```csharp
public double Ratio { get; }
```

### BspNode.Region property

本节点区域。

```csharp
public Polyline Region { get; }
```

### BspNode.Right property

右子节点。

```csharp
public BspNode Right { get; }
```

### BspNode.Streets method

收集各级割缝为线段。

```csharp
public LineSeg[] Streets()
```
