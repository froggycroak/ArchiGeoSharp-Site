---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# BspAdaptiveOptions class

自适应 BSP：不预定义编码，按最大深度与叶面积停止； 每节点试 u/v 两向，优先切长边且避免过瘦子块。

```csharp
public sealed class BspAdaptiveOptions
```

## Public Members

| name | description |
| --- | --- |
| BspAdaptiveOptions() | The default constructor. |
| MaxDepth { get; set; } | 最大深度（根为 0）；depth ≥ MaxDepth 的节点强制为叶。 |
| MinElongation { get; set; } | 子块最小延伸率（OBB 短边/长边）。任一子块低于此值则该剖分方向作废。 默认约 0.28（长宽比 ≳ 3.5 视为过瘦）。 |
| MinLeafArea { get; set; } | 面积低于该值则停止剖分（编码等价于 2）。≤0 表示不按面积停止。 |
| Ratio { get; set; } | 左右面积目标比（左/总），默认 0.5。 |
| Split { get; set; } | 流线切割等底层选项。 |

### BspAdaptiveOptions constructor

The default constructor.

```csharp
public BspAdaptiveOptions()
```

### BspAdaptiveOptions.MaxDepth property

最大深度（根为 0）；depth ≥ MaxDepth 的节点强制为叶。

```csharp
public int MaxDepth { get; set; }
```

### BspAdaptiveOptions.MinElongation property

子块最小延伸率（OBB 短边/长边）。任一子块低于此值则该剖分方向作废。 默认约 0.28（长宽比 ≳ 3.5 视为过瘦）。

```csharp
public double MinElongation { get; set; }
```

### BspAdaptiveOptions.MinLeafArea property

面积低于该值则停止剖分（编码等价于 2）。≤0 表示不按面积停止。

```csharp
public double MinLeafArea { get; set; }
```

### BspAdaptiveOptions.Ratio property

左右面积目标比（左/总），默认 0.5。

```csharp
public double Ratio { get; set; }
```

### BspAdaptiveOptions.Split property

流线切割等底层选项。

```csharp
public BspSubdivideOptions Split { get; set; }
```
