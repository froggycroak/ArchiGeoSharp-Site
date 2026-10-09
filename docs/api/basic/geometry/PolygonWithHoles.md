---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# PolygonWithHoles class

带孔洞的多边形：外环逆时针、孔洞顺时针；面积为外环减去孔洞。

```csharp
public class PolygonWithHoles : IPointSet, IPoly, IVector
```

## Public Members

| name | description |
| --- | --- |
| PolygonWithHoles(…) | 由外边界构造（自动闭合并强制逆时针）。 (2 constructors) |
| Area { get; } | 净面积（外环面积绝对值 − 孔洞面积绝对值）。 |
| Dimension { get; } | 维度（与外边界一致）。 |
| HoleCount { get; } | 孔洞数量。 |
| Holes { get; } | 孔洞只读列表。 |
| IsConvex { get; } | 外边界是否为凸。 |
| OuterBoundary { get; } | 外边界。 |
| Pts { get; } | 外边界顶点列表。 |
| ToPoly { get; } | 外边界作为多边形引用。 |
| AddHole(…) | 添加孔洞（须闭合且位于外边界内侧；自动强制顺时针）。 |
| ClearHoles() | 清除全部孔洞。 |
| GetAllBoundaries() | 枚举外边界与全部孔洞。 |
| GetAllSegments() | 枚举外边界与孔洞的全部线段。 |
| GetAllVertices() | 枚举外边界与孔洞的全部顶点。 |
| GetPoint(…) | 取外边界顶点。 |
| IsValid(…) | 校验拓扑有效性：外环/孔洞顶点数、自交、孔洞间相交。 |
| RemoveHole(…) | 移除指定孔洞。 |
| RemoveHoleAt(…) | 按索引移除孔洞。 |
| ToDetailedString() | 输出含各边界顶点与面积的详细字符串。 |
| ToSinglePolyline() | 将外边界与孔洞顶点串联为单一闭合折线（简单拼接，不作拓扑桥接）。 |
| override ToString() |  |

### PolygonWithHoles.AddHole method

添加孔洞（须闭合且位于外边界内侧；自动强制顺时针）。

```csharp
public void AddHole(Polyline hole)
```

| parameter | description |
| --- | --- |
| hole | 孔洞折线。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentNullException | 孔洞为 `null` 时抛出。 |
| ArgumentException | 未闭合或不在外边界内时抛出。 |

### PolygonWithHoles.Area property

净面积（外环面积绝对值 − 孔洞面积绝对值）。

```csharp
public double Area { get; }
```

### PolygonWithHoles.ClearHoles method

清除全部孔洞。

```csharp
public void ClearHoles()
```

### PolygonWithHoles.Dimension property

维度（与外边界一致）。

```csharp
public int Dimension { get; }
```

### PolygonWithHoles.GetAllBoundaries method

枚举外边界与全部孔洞。

```csharp
public IEnumerable<Polyline> GetAllBoundaries()
```

#### Return Value

边界折线序列。

### PolygonWithHoles.GetAllSegments method

枚举外边界与孔洞的全部线段。

```csharp
public IEnumerable<LineSeg> GetAllSegments()
```

#### Return Value

线段序列。

### PolygonWithHoles.GetAllVertices method

枚举外边界与孔洞的全部顶点。

```csharp
public IEnumerable<Point> GetAllVertices()
```

#### Return Value

顶点序列。

### PolygonWithHoles.GetPoint method

取外边界顶点。

```csharp
public Point GetPoint(int index)
```

| parameter | description |
| --- | --- |
| index | 索引。 |

#### Return Value

顶点。

### PolygonWithHoles.HoleCount property

孔洞数量。

```csharp
public int HoleCount { get; }
```

### PolygonWithHoles.Holes property

孔洞只读列表。

```csharp
public IReadOnlyList<Polyline> Holes { get; }
```

### PolygonWithHoles.IsConvex property

外边界是否为凸。

```csharp
public bool IsConvex { get; }
```

### PolygonWithHoles.IsValid method

校验拓扑有效性：外环/孔洞顶点数、自交、孔洞间相交。

```csharp
public bool IsValid(double tolerance = 1E-10m)
```

| parameter | description |
| --- | --- |
| tolerance | 容差（预留）。 |

#### Return Value

有效则为 `true`。

### PolygonWithHoles.OuterBoundary property

外边界。

```csharp
public Polyline OuterBoundary { get; }
```

### PolygonWithHoles constructor (1 of 2)

由外边界构造（自动闭合并强制逆时针）。

```csharp
public PolygonWithHoles(Polyline outerBoundary)
```

| parameter | description |
| --- | --- |
| outerBoundary | 外边界折线。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentNullException | 外边界为 `null` 时抛出。 |

### PolygonWithHoles constructor (2 of 2)

由外边界与孔洞集合构造。

```csharp
public PolygonWithHoles(Polyline outerBoundary, IEnumerable<Polyline> holes)
```

| parameter | description |
| --- | --- |
| outerBoundary | 外边界。 |
| holes | 孔洞集合（可空）。 |

### PolygonWithHoles.Pts property

外边界顶点列表。

```csharp
public List<Point> Pts { get; }
```

### PolygonWithHoles.RemoveHole method

移除指定孔洞。

```csharp
public void RemoveHole(Polyline hole)
```

| parameter | description |
| --- | --- |
| hole | 孔洞引用。 |

### PolygonWithHoles.RemoveHoleAt method

按索引移除孔洞。

```csharp
public void RemoveHoleAt(int index)
```

| parameter | description |
| --- | --- |
| index | 索引。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentOutOfRangeException | 索引越界时抛出。 |

### PolygonWithHoles.ToDetailedString method

输出含各边界顶点与面积的详细字符串。

```csharp
public string ToDetailedString()
```

#### Return Value

多行描述。

### PolygonWithHoles.ToPoly property

外边界作为多边形引用。

```csharp
public Polyline ToPoly { get; }
```

### PolygonWithHoles.ToSinglePolyline method

将外边界与孔洞顶点串联为单一闭合折线（简单拼接，不作拓扑桥接）。

```csharp
public Polyline ToSinglePolyline()
```

#### Return Value

合并后的折线。

### PolygonWithHoles.ToString method

```csharp
public override string ToString()
```
