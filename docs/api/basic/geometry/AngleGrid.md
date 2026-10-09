---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# AngleGrid class

二维角度场网格：在规则格点上存储 `Angle`，支持双线性插值与沿场追踪路径。

```csharp
public class AngleGrid
```

## Public Members

| name | description |
| --- | --- |
| AngleGrid(…) | 创建以原点为基准的角度网格。 (3 constructors) |
| AngleMatrix { get; set; } | 格点角度矩阵。 |
| BasePt { get; } | 网格基准点（世界坐标）。 |
| ColCount { get; } | 角度矩阵列数（格点数 = 单元数 + 1）。 |
| Height { get; } | 网格在 Y 方向的物理高度。 |
| Item { get; set; } | 按格点索引读写角度；写入时归一化到 Mod90。 |
| RowCount { get; } | 角度矩阵行数。 |
| Unit { get; } | 单元格边长。 |
| Width { get; } | 网格在 X 方向的物理宽度。 |
| XUnitCount { get; } | X 方向单元格数量。 |
| YUnitCount { get; } | Y 方向单元格数量。 |
| GenerateCrossRep(…) | 在网格上按间距采样，生成表示局部方向的十字线段组。 |
| GenerateSinglePath(…) | 从起点沿当前角度场逐步前进，生成单条开放折线轨迹。 |
| GetAngle(…) | 返回格点 (i, j) 处存储的角度（无插值）。 (3 methods) |
| GetPoint(…) | 返回格点 (i, j) 对应的世界坐标。 |
| PtInRange(…) | 判断点是否落在网格矩形范围内（含边界）。 |

### AngleGrid constructor (1 of 3)

```csharp
public AngleGrid(Angle[] valueMatrix, double unit)
```

### AngleGrid constructor (2 of 3)

创建以原点为基准的角度网格。

```csharp
public AngleGrid(int xUnitCount, int yUnitCount, double unit)
```

| parameter | description |
| --- | --- |
| xUnitCount | X 方向单元格数量。 |
| yUnitCount | Y 方向单元格数量。 |
| unit | 单元格边长。 |

### AngleGrid constructor (3 of 3)

创建以指定二维点为基准的角度网格。

```csharp
public AngleGrid(int xUnitCount, int yUnitCount, double unit, Point basePt)
```

| parameter | description |
| --- | --- |
| xUnitCount | X 方向单元格数量。 |
| yUnitCount | Y 方向单元格数量。 |
| unit | 单元格边长。 |
| basePt | 网格基准角点（二维）。 |

### AngleGrid.AngleMatrix property

格点角度矩阵。

```csharp
public Angle[] AngleMatrix { get; set; }
```

### AngleGrid.BasePt property

网格基准点（世界坐标）。

```csharp
public Point BasePt { get; }
```

### AngleGrid.ColCount property

角度矩阵列数（格点数 = 单元数 + 1）。

```csharp
public int ColCount { get; }
```

### AngleGrid.GenerateCrossRep method

在网格上按间距采样，生成表示局部方向的十字线段组。

```csharp
public LineSeg[] GenerateCrossRep(double repUnit = 0m, double crossLength = 0m)
```

| parameter | description |
| --- | --- |
| repUnit | 采样间距；≤0 时使用 `Unit`。 |
| crossLength | 十字臂半长；≤0 时使用 repUnit/5。 |

#### Return Value

各采样点处的两条正交线段。

### AngleGrid.GenerateSinglePath method

从起点沿当前角度场逐步前进，生成单条开放折线轨迹。

```csharp
public Polyline GenerateSinglePath(Point startPt, double stepDist = 1m, Angle minAngle = default, 
    int countLim = 100)
```

| parameter | description |
| --- | --- |
| startPt | 起点。 |
| stepDist | 每步步长。 |
| minAngle | 第一步角度限制区间的下界（Mod360 后取 90° 宽区间）。 |
| countLim | 最大步数。 |

#### Return Value

轨迹折线（不闭合）。

### AngleGrid.GetAngle method (1 of 3)

在任意世界坐标点处插值查询角度场。

```csharp
public Angle GetAngle(Point pt)
```

| parameter | description |
| --- | --- |
| pt | 查询点。 |

#### Return Value

插值角度；越界时返回 default。

### AngleGrid.GetAngle method (2 of 3)

返回格点 (i, j) 处存储的角度（无插值）。

```csharp
public Angle GetAngle(int i, int j)
```

| parameter | description |
| --- | --- |
| i | 列索引。 |
| j | 行索引。 |

#### Return Value

该格点角度。

### AngleGrid.GetAngle method (3 of 3)

在单元格 (i, j) 内按局部参数 (rx, ry)∈[0,1] 双线性插值角度（单位向量混合）。

```csharp
public Angle GetAngle(int i, int j, double rx, double ry)
```

| parameter | description |
| --- | --- |
| i | 单元格列索引。 |
| j | 单元格行索引。 |
| rx | 单元格内 X 向参数，0 为左缘，1 为右缘。 |
| ry | 单元格内 Y 向参数，0 为下缘，1 为上缘。 |

#### Return Value

插值角度；参数或索引越界时返回 default。

### AngleGrid.GetPoint method

返回格点 (i, j) 对应的世界坐标。

```csharp
public Point GetPoint(int i, int j)
```

| parameter | description |
| --- | --- |
| i | 列索引。 |
| j | 行索引。 |

#### Return Value

格点位置。

### AngleGrid.Height property

网格在 Y 方向的物理高度。

```csharp
public double Height { get; }
```

### AngleGrid indexer

按格点索引读写角度；写入时归一化到 Mod90。

```csharp
public Angle this[int i, int j] { get; set; }
```

| parameter | description |
| --- | --- |
| i | 列索引。 |
| j | 行索引。 |

### AngleGrid.PtInRange method

判断点是否落在网格矩形范围内（含边界）。

```csharp
public bool PtInRange(Point pt)
```

| parameter | description |
| --- | --- |
| pt | 待测点。 |

#### Return Value

在范围内为 true。

### AngleGrid.RowCount property

角度矩阵行数。

```csharp
public int RowCount { get; }
```

### AngleGrid.Unit property

单元格边长。

```csharp
public double Unit { get; }
```

### AngleGrid.Width property

网格在 X 方向的物理宽度。

```csharp
public double Width { get; }
```

### AngleGrid.XUnitCount property

X 方向单元格数量。

```csharp
public int XUnitCount { get; }
```

### AngleGrid.YUnitCount property

Y 方向单元格数量。

```csharp
public int YUnitCount { get; }
```
