---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# LineSideSplit structure

直线左右半平面剖分结果。 `Left`：`ax+by+c > 0`；`Right`：`ax+by+c < 0`。

```csharp
public struct LineSideSplit
```

## Public Members

| name | description |
| --- | --- |
| LineSideSplit(…) | 构造左右半平面剖分结果。 |
| Left { get; } | 直线左侧（Substitute &gt; 0）的所有封闭块。 |
| Right { get; } | 直线右侧（Substitute &lt; 0）的所有封闭块。 |

### LineSideSplit.Left property

直线左侧（Substitute &gt; 0）的所有封闭块。

```csharp
public Polyline[] Left { get; }
```

### LineSideSplit constructor

构造左右半平面剖分结果。

```csharp
public LineSideSplit(Polyline[] left, Polyline[] right)
```

| parameter | description |
| --- | --- |
| left | 左侧块。 |
| right | 右侧块。 |

### LineSideSplit.Right property

直线右侧（Substitute &lt; 0）的所有封闭块。

```csharp
public Polyline[] Right { get; }
```
