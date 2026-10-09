---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# IPoly interface

可转为 `Polyline` 的多边形接口。

```csharp
public interface IPoly
```

## Members

| name | description |
| --- | --- |
| IsConvex { get; } | 是否为凸。 |
| ToPoly { get; } | 对应的折线/多边形。 |
| GetPoint(…) | 根据索引获取点，区别于按参数 t 的 `PointAt`。 |

### IPoly.GetPoint method

根据索引获取点，区别于按参数 t 的 `PointAt`。

```csharp
public Point GetPoint(int index)
```

| parameter | description |
| --- | --- |
| index | 顶点索引。 |

#### Return Value

顶点。

### IPoly.IsConvex property

是否为凸。

```csharp
public bool IsConvex { get; }
```

### IPoly.ToPoly property

对应的折线/多边形。

```csharp
public Polyline ToPoly { get; }
```
