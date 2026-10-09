---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Transform</code></p>

# RelationType structure

几何相对关系的枚举式结构：用 inside/outside/cross/around 四元布尔编码，并提供 `Index` 与预定义静态值。

```csharp
public struct RelationType
```

## Public Members

| name | description |
| --- | --- |
| RelationType(…) | 按四维标志构造关系类型。 |
| static AROUND { get; } | 环绕另一几何体。 |
| static CROSS { get; } | 相交。 |
| static INSIDE { get; } | 在内侧。 |
| static INVALID { get; } | 无效或未分类。 |
| static ONAROUNDEDGE { get; } | 环绕贴边。 |
| static ONEDGE { get; } | 在边/共线/重合。 |
| static ONINSIDEEDGE { get; } | 内侧贴边。 |
| static ONOUTSIDEEDGE { get; } | 外侧贴边。 |
| static OUTSIDE { get; } | 在外侧。 |
| static FromIndex(…) | 由 `Index` 数值还原标准 `RelationType`。 |
| Binary { get; } | 二进制表示 0: ONEDGE ___ 1: CROSS ___ 2: ONAROUNDEDGE ___ 3: AROUND ___ 4: ONOUTSIDEEDGE ___ 5: OUTSIDE ___ 8: ONINSIDGEEDGE ___ 9: INSIDE |
| Index { get; } | 便于乘法运算的索引值 -4: AROUND ___ -3: OUTSIDE ___ -2: ONAROUNDEDGE ___ -1: ONOUTSIDEEDGE ___ 0: ONEDGE ___ 1: INSIDE ___ 2: CROSS ___ 3: ONINSIDGEEDGE ___ |
| IsAnySide { get; } | Inside &#x7C;&#x7C; Outside &#x7C;&#x7C; Around |
| IsAnywayAround { get; } | Around &#x7C;&#x7C; OnAroundEdge |
| IsAnywayInside { get; } | Inside &#x7C;&#x7C; OnInsideEdge |
| IsAnywayOnEdge { get; } | OnEdge &#x7C;&#x7C; OnAroundEdge &#x7C;&#x7C; OnOutsideEdge &#x7C;&#x7C; OnInsideEdge |
| IsAnywayOutside { get; } | Outside &#x7C;&#x7C; OnOutsideEdge |
| IsAnywayOverlap { get; } | Cross &#x7C;&#x7C; Inside &#x7C;&#x7C; Around &#x7C;&#x7C; OnEdge &#x7C;&#x7C; OnXXXXEdge |
| IsAround { get; } | 环绕/包含另一体（AROUND）。 |
| IsCross { get; } | 相交或严格跨界（CROSS）。 |
| IsInside { get; } | 在内侧（INSIDE）。 |
| IsIntersect { get; } | Cross &#x7C;&#x7C; OnEdge &#x7C;&#x7C; OnXXXXEdge |
| IsInvalid { get; } | 无效占位（0b1111），用于分支兜底。 |
| IsOnAroundEdge { get; } | 环绕方向的贴边（ONAROUNDEDGE）。 |
| IsOnEdge { get; } | 在边界/共线/重合上（ONEDGE）。 |
| IsOnInsideEdge { get; } | 在内侧贴边（ONINSIDEEDGE）。 |
| IsOnOutsideEdge { get; } | 在外侧贴边（ONOUTSIDEEDGE）。 |
| IsOutside { get; } | 在外侧（OUTSIDE）。 |
| IsOverlap { get; } | Cross &#x7C;&#x7C; Inside &#x7C;&#x7C; Around |
| IsRegistered { get; } | 当前 `Index` 是否为已注册的标准关系码。 |
| Name { get; } | 关系名称字符串（如 ONEDGE、CROSS、INVALID）。 |
| override Equals(…) |  |
| override GetHashCode() |  |
| override ToString() |  |
| operator == | 四元标志逐项相等判定。 |
| operator != | 四元标志任一项不等。 |

### RelationType.AROUND property

环绕另一几何体。

```csharp
public static RelationType AROUND { get; }
```

### RelationType.Binary property

二进制表示 0: ONEDGE ___ 1: CROSS ___ 2: ONAROUNDEDGE ___ 3: AROUND ___ 4: ONOUTSIDEEDGE ___ 5: OUTSIDE ___ 8: ONINSIDGEEDGE ___ 9: INSIDE

```csharp
public string Binary { get; }
```

### RelationType.CROSS property

相交。

```csharp
public static RelationType CROSS { get; }
```

### RelationType.Equals method

```csharp
public override bool Equals(object obj)
```

### RelationType.FromIndex method

由 `Index` 数值还原标准 `RelationType`。

```csharp
public static RelationType FromIndex(int index)
```

| parameter | description |
| --- | --- |
| index | -4 至 3 的标准索引，其他值返回 `INVALID`。 |

#### Return Value

对应关系类型。

### RelationType.GetHashCode method

```csharp
public override int GetHashCode()
```

### RelationType.Index property

便于乘法运算的索引值 -4: AROUND ___ -3: OUTSIDE ___ -2: ONAROUNDEDGE ___ -1: ONOUTSIDEEDGE ___ 0: ONEDGE ___ 1: INSIDE ___ 2: CROSS ___ 3: ONINSIDGEEDGE ___

```csharp
public int Index { get; }
```

### RelationType.INSIDE property

在内侧。

```csharp
public static RelationType INSIDE { get; }
```

### RelationType.INVALID property

无效或未分类。

```csharp
public static RelationType INVALID { get; }
```

### RelationType.IsAnySide property

Inside &#x7C;&#x7C; Outside &#x7C;&#x7C; Around

```csharp
public bool IsAnySide { get; }
```

### RelationType.IsAnywayAround property

Around &#x7C;&#x7C; OnAroundEdge

```csharp
public bool IsAnywayAround { get; }
```

### RelationType.IsAnywayInside property

Inside &#x7C;&#x7C; OnInsideEdge

```csharp
public bool IsAnywayInside { get; }
```

### RelationType.IsAnywayOnEdge property

OnEdge &#x7C;&#x7C; OnAroundEdge &#x7C;&#x7C; OnOutsideEdge &#x7C;&#x7C; OnInsideEdge

```csharp
public bool IsAnywayOnEdge { get; }
```

### RelationType.IsAnywayOutside property

Outside &#x7C;&#x7C; OnOutsideEdge

```csharp
public bool IsAnywayOutside { get; }
```

### RelationType.IsAnywayOverlap property

Cross &#x7C;&#x7C; Inside &#x7C;&#x7C; Around &#x7C;&#x7C; OnEdge &#x7C;&#x7C; OnXXXXEdge

```csharp
public bool IsAnywayOverlap { get; }
```

### RelationType.IsAround property

环绕/包含另一体（AROUND）。

```csharp
public bool IsAround { get; }
```

### RelationType.IsCross property

相交或严格跨界（CROSS）。

```csharp
public bool IsCross { get; }
```

### RelationType.IsInside property

在内侧（INSIDE）。

```csharp
public bool IsInside { get; }
```

### RelationType.IsIntersect property

Cross &#x7C;&#x7C; OnEdge &#x7C;&#x7C; OnXXXXEdge

```csharp
public bool IsIntersect { get; }
```

### RelationType.IsInvalid property

无效占位（0b1111），用于分支兜底。

```csharp
public bool IsInvalid { get; }
```

### RelationType.IsOnAroundEdge property

环绕方向的贴边（ONAROUNDEDGE）。

```csharp
public bool IsOnAroundEdge { get; }
```

### RelationType.IsOnEdge property

在边界/共线/重合上（ONEDGE）。

```csharp
public bool IsOnEdge { get; }
```

### RelationType.IsOnInsideEdge property

在内侧贴边（ONINSIDEEDGE）。

```csharp
public bool IsOnInsideEdge { get; }
```

### RelationType.IsOnOutsideEdge property

在外侧贴边（ONOUTSIDEEDGE）。

```csharp
public bool IsOnOutsideEdge { get; }
```

### RelationType.IsOutside property

在外侧（OUTSIDE）。

```csharp
public bool IsOutside { get; }
```

### RelationType.IsOverlap property

Cross &#x7C;&#x7C; Inside &#x7C;&#x7C; Around

```csharp
public bool IsOverlap { get; }
```

### RelationType.IsRegistered property

当前 `Index` 是否为已注册的标准关系码。

```csharp
public bool IsRegistered { get; }
```

### RelationType.Name property

关系名称字符串（如 ONEDGE、CROSS、INVALID）。

```csharp
public string Name { get; }
```

### RelationType.ONAROUNDEDGE property

环绕贴边。

```csharp
public static RelationType ONAROUNDEDGE { get; }
```

### RelationType.ONEDGE property

在边/共线/重合。

```csharp
public static RelationType ONEDGE { get; }
```

### RelationType.ONINSIDEEDGE property

内侧贴边。

```csharp
public static RelationType ONINSIDEEDGE { get; }
```

### RelationType.ONOUTSIDEEDGE property

外侧贴边。

```csharp
public static RelationType ONOUTSIDEEDGE { get; }
```

### RelationType Equality operator

四元标志逐项相等判定。

```csharp
public static bool operator ==(RelationType a, RelationType b)
```

| parameter | description |
| --- | --- |
| a | 关系 a。 |
| b | 关系 b。 |

#### Return Value

是否相同。

### RelationType Inequality operator

四元标志任一项不等。

```csharp
public static bool operator !=(RelationType a, RelationType b)
```

| parameter | description |
| --- | --- |
| a | 关系 a。 |
| b | 关系 b。 |

#### Return Value

是否不同。

### RelationType.OUTSIDE property

在外侧。

```csharp
public static RelationType OUTSIDE { get; }
```

### RelationType constructor

按四维标志构造关系类型。

```csharp
public RelationType(bool inside, bool outside, bool cross, bool around)
```

| parameter | description |
| --- | --- |
| inside | 内侧分量。 |
| outside | 外侧分量。 |
| cross | 相交/重叠分量。 |
| around | 环绕分量。 |

### RelationType.ToString method

```csharp
public override string ToString()
```
