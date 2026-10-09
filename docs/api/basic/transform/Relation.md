---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Transform</code></p>

# Relation class

???????partial??????????????????????????????

二维几何相对位置判定：点/线/多边形/圆等的 `RelationType` 扩展方法（partial，见 Relation3）。

几何拓扑关系判定扩展（圆相关部分）。

```csharp
public static class Relation
```

## Public Members

| name | description |
| --- | --- |
| static Tolerance | ???????/??????????????????????? |
| static On(…) | ??????????????????? ? `Tolerance`?? (3 methods) |
| static Relate(…) | 点相对有向直线（半平面）的位置。 (12 methods) |
| static RelateSimp(…) | 两线段关系的简化判定（忽略 ONINSIDEEDGE 等细分类）。 (3 methods) |

### Relation.On method (1 of 3)

??????????????????? ? `Tolerance`??

```csharp
public static bool On(this Point pt, ILineExpr le)
```

| parameter | description |
| --- | --- |
| pt | ???? |
| le | ????? |

#### Return Value

????? true?

### Relation.On method (2 of 3)

?????????????????????? true??

```csharp
public static bool On(this Point pt, IPoly ipoly)
```

| parameter | description |
| --- | --- |
| pt | ???? |
| ipoly | ???? |

#### Return Value

????? true?

### Relation.On method (3 of 3)

??????????????????? t?[0,1]??

```csharp
public static bool On(this Point pt, LineSeg ls)
```

| parameter | description |
| --- | --- |
| pt | ???? |
| ls | ??? |

#### Return Value

????? true?

### Relation.Relate method (1 of 12)

两圆的相对位置（外离、外切、相交、内切、内含、环绕等）。

```csharp
public static RelationType Relate(this ICircleExpr c1, ICircleExpr c2)
```

| parameter | description |
| --- | --- |
| c1 | 圆 1（较大半径时在内含/内切判定中为主体）。 |
| c2 | 圆 2。 |

#### Return Value

`OUTSIDE` 外离；`ONOUTSIDEEDGE` 外切；`CROSS` 相交；`ONINSIDEEDGE`/`ONAROUNDEDGE` 内切；`INSIDE`/`AROUND` 内含。

### Relation.Relate method (2 of 12)

圆相对闭合折线（多边形）的位置：内含、外离、相交、环绕、切边等。

```csharp
public static RelationType Relate(this ICircleExpr circle, Polyline poly)
```

| parameter | description |
| --- | --- |
| circle | 圆。 |
| poly | 闭合折线。 |

#### Return Value

如 `INSIDE` 圆在 poly 内、`AROUND` 圆环绕 poly、`CROSS` 相交、`ONINSIDEEDGE` 内切等。

### Relation.Relate method (3 of 12)

直线相对圆的位置（直线无「圆内」语义）。

```csharp
public static RelationType Relate(this ILineExpr le, ICircleExpr circle)
```

| parameter | description |
| --- | --- |
| le | 直线。 |
| circle | 圆。 |

#### Return Value

`CROSS` 相交；`ONEDGE` 相切；`OUTSIDE` 相离。

### Relation.Relate method (4 of 12)

多边形相对有向直线的整体位置（按顶点半平面统计）。

```csharp
public static RelationType Relate(this IPoly poly, ILineExpr le)
```

| parameter | description |
| --- | --- |
| poly | 多边形。 |
| le | 直线。 |

#### Return Value

如全在内侧 `INSIDE`、跨侧 `CROSS`、全在边上 `ONEDGE` 等。

### Relation.Relate method (5 of 12)

线段相对圆的位置。

```csharp
public static RelationType Relate(this LineSeg ls, ICircleExpr circle)
```

| parameter | description |
| --- | --- |
| ls | 线段。 |
| circle | 圆。 |

#### Return Value

`INSIDE` 整段在圆内；`OUTSIDE` 整段在圆外；`CROSS` 穿过圆；`ONEDGE` 与圆相切。

### Relation.Relate method (6 of 12)

线段相对有向直线的位置（含共线、相切于直线等细分）。

```csharp
public static RelationType Relate(this LineSeg ls, ILineExpr le)
```

| parameter | description |
| --- | --- |
| ls | 线段。 |
| le | 直线。 |

#### Return Value

如 `CROSS` 相交、`INSIDE`/`OUTSIDE` 同侧、`ONEDGE` 共线等。

### Relation.Relate method (7 of 12)

线段与多边形的完整相对关系（含贴边、穿顶点等情形）。

```csharp
public static RelationType Relate(this LineSeg ls, IPoly poly)
```

| parameter | description |
| --- | --- |
| ls | 线段。 |
| poly | 多边形。 |

#### Return Value

如 `ONINSIDEEDGE`、`ONOUTSIDEEDGE`、`CROSS` 等。

#### Exceptions

| exception | condition |
| --- | --- |
| Exception | 内部一致性检查失败时抛出（逻辑上不应出现的状态组合）。 |

### Relation.Relate method (8 of 12)

两线段的完整相对关系。

```csharp
public static RelationType Relate(this LineSeg ls1, LineSeg ls2)
```

| parameter | description |
| --- | --- |
| ls1 | 线段 1（主体）。 |
| ls2 | 线段 2。 |

#### Return Value

含 `ONOUTSIDEEDGE`、`ONAROUNDEDGE` 等；无法分类时为 `INVALID`。

### Relation.Relate method (9 of 12)

点相对圆的位置。

```csharp
public static RelationType Relate(this Point pt, ICircleExpr circle)
```

| parameter | description |
| --- | --- |
| pt | 点。 |
| circle | 圆。 |

#### Return Value

`INSIDE` / `OUTSIDE` / `ONEDGE`（在圆周上）。

### Relation.Relate method (10 of 12)

点相对有向直线（半平面）的位置。

```csharp
public static RelationType Relate(this Point pt, ILineExpr le)
```

| parameter | description |
| --- | --- |
| pt | 待判定点。 |
| le | 直线表达式（内侧由法向定义）。 |

#### Return Value

`ONEDGE` 在直线上；`INSIDE` 内侧；`OUTSIDE` 外侧。

### Relation.Relate method (11 of 12)

点相对闭合多边形的位置（射线法）。

```csharp
public static RelationType Relate(this Point pt, IPoly ipoly)
```

| parameter | description |
| --- | --- |
| pt | 待判定点。 |
| ipoly | 多边形（须可转为闭合折线且至少 3 顶点）。 |

#### Return Value

`INSIDE` / `OUTSIDE` / `ONEDGE`。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 折线未闭合或顶点不足时抛出。 |

### Relation.Relate method (12 of 12)

点相对线段的位置（不含「内部」语义）。

```csharp
public static RelationType Relate(this Point pt, LineSeg ls)
```

| parameter | description |
| --- | --- |
| pt | 待判定点。 |
| ls | 线段。 |

#### Return Value

`ONEDGE` 在线段上；否则 `OUTSIDE`。

### Relation.RelateSimp method (1 of 3)

两多边形的简化相对关系。

```csharp
public static RelationType RelateSimp(this IPoly poly1, IPoly poly2)
```

| parameter | description |
| --- | --- |
| poly1 | 多边形 1。 |
| poly2 | 多边形 2。 |

#### Return Value

`INSIDE` 1 在 2 内；`OUTSIDE` 1 在 2 外；`AROUND` 1 环绕 2；`CROSS` 有交集或相交。

### Relation.RelateSimp method (2 of 3)

线段与多边形的简化关系。

```csharp
public static RelationType RelateSimp(this LineSeg ls, IPoly poly)
```

| parameter | description |
| --- | --- |
| ls | 线段。 |
| poly | 多边形。 |

#### Return Value

`OUTSIDE` 完全在外；`INSIDE` 完全在内；`CROSS` 与边界或内部相交。

### Relation.RelateSimp method (3 of 3)

两线段关系的简化判定（忽略 ONINSIDEEDGE 等细分类）。

```csharp
public static RelationType RelateSimp(this LineSeg ls1, LineSeg ls2)
```

| parameter | description |
| --- | --- |
| ls1 | 线段 1。 |
| ls2 | 线段 2。 |

#### Return Value

`OUTSIDE` 外离；`CROSS` 相交；`ONEDGE` 共线且有端点重合或包含。

### Relation.Tolerance field

???????/???????????????????????

```csharp
public static double Tolerance;
```
