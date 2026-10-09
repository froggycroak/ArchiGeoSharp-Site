---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# AngleGridExtension class

`AngleGrid` 的约束施加与标记矩阵辅助扩展。

```csharp
public static class AngleGridExtension
```

## Public Members

| name | description |
| --- | --- |
| static MarkMatrix { get; set; } | 与当前网格尺寸对应的格点是否已被直接指定角度的标记矩阵（静态共享）。 |
| static AddDirectNomination(…) | 在格点直接指定角度并标记该格点。 |
| static AddLineSegConstraint(…) | 将线段方向约束施加到其缓冲矩形内的所有格点。 |
| static AddPolyConstraint(…) | 对多边形每条边施加线段方向约束。 |
| static AddRadialConstraint(…) | 在指定中心点的缓冲圆盘内，将格点角度设为径向方向（Mod90）。 (2 methods) |
| static InitMarkMatrix(…) | 按网格尺寸初始化 `MarkMatrix`，全部置为 false。 |
| static ReadMark(…) | 读取格点 (i, j) 是否已被直接指定角度。 |

### AngleGridExtension.AddDirectNomination method

在格点直接指定角度并标记该格点。

```csharp
public static void AddDirectNomination(this AngleGrid ag, int i, int j, Angle angle)
```

| parameter | description |
| --- | --- |
| ag | 角度网格。 |
| i | 列索引。 |
| j | 行索引。 |
| angle | 目标角度（写入 Mod90）。 |

### AngleGridExtension.AddLineSegConstraint method

将线段方向约束施加到其缓冲矩形内的所有格点。

```csharp
public static void AddLineSegConstraint(this AngleGrid ag, LineSeg ls, double bufferDist)
```

| parameter | description |
| --- | --- |
| ag | 角度网格。 |
| ls | 参考线段。 |
| bufferDist | 缓冲半宽（垂直于线段方向）。 |

### AngleGridExtension.AddPolyConstraint method

对多边形每条边施加线段方向约束。

```csharp
public static void AddPolyConstraint(this AngleGrid ag, IPoly poly, double bufferDist)
```

| parameter | description |
| --- | --- |
| ag | 角度网格。 |
| poly | 多边形。 |
| bufferDist | 每条边的缓冲半宽。 |

### AngleGridExtension.AddRadialConstraint method (1 of 2)

在圆盘区域内施加径向角度约束（半径为圆半径）。

```csharp
public static void AddRadialConstraint(this AngleGrid ag, ICircleExpr c)
```

| parameter | description |
| --- | --- |
| ag | 角度网格。 |
| c | 圆表达式。 |

### AngleGridExtension.AddRadialConstraint method (2 of 2)

在指定中心点的缓冲圆盘内，将格点角度设为径向方向（Mod90）。

```csharp
public static void AddRadialConstraint(this AngleGrid ag, Point center, double bufferDist)
```

| parameter | description |
| --- | --- |
| ag | 角度网格。 |
| center | 径向中心。 |
| bufferDist | 缓冲半径。 |

### AngleGridExtension.InitMarkMatrix method

按网格尺寸初始化 `MarkMatrix`，全部置为 false。

```csharp
public static void InitMarkMatrix(this AngleGrid ag)
```

| parameter | description |
| --- | --- |
| ag | 角度网格。 |

### AngleGridExtension.MarkMatrix property

与当前网格尺寸对应的格点是否已被直接指定角度的标记矩阵（静态共享）。

```csharp
public static bool[] MarkMatrix { get; set; }
```

### AngleGridExtension.ReadMark method

读取格点 (i, j) 是否已被直接指定角度。

```csharp
public static bool ReadMark(this AngleGrid ag, int i, int j)
```

| parameter | description |
| --- | --- |
| ag | 角度网格。 |
| i | 列索引。 |
| j | 行索引。 |

#### Return Value

已标记为 true。
