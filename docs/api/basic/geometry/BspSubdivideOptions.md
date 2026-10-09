---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# BspSubdivideOptions class

BSP 剖分选项（流线 / 容差等几何参数）。

```csharp
public sealed class BspSubdivideOptions
```

## Public Members

| name | description |
| --- | --- |
| BspSubdivideOptions() | The default constructor. |
| FallbackStraightCut { get; set; } | 流线失败时是否退化为过种子点的直线切割。 |
| MinArea { get; set; } | 最小可剖分面积。 |
| StreamlineCountLim { get; set; } | 流线最大步数；≤0 时用默认。 |
| StreamlineStep { get; set; } | 流线步长；≤0 时用默认。 |
| Tolerance { get; set; } | 几何容差。 |

### BspSubdivideOptions constructor

The default constructor.

```csharp
public BspSubdivideOptions()
```

### BspSubdivideOptions.FallbackStraightCut property

流线失败时是否退化为过种子点的直线切割。

```csharp
public bool FallbackStraightCut { get; set; }
```

### BspSubdivideOptions.MinArea property

最小可剖分面积。

```csharp
public double MinArea { get; set; }
```

### BspSubdivideOptions.StreamlineCountLim property

流线最大步数；≤0 时用默认。

```csharp
public int StreamlineCountLim { get; set; }
```

### BspSubdivideOptions.StreamlineStep property

流线步长；≤0 时用默认。

```csharp
public double StreamlineStep { get; set; }
```

### BspSubdivideOptions.Tolerance property

几何容差。

```csharp
public double Tolerance { get; set; }
```
