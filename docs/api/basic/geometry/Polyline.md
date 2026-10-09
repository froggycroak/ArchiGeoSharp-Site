---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Polyline class

多段线 / 多边形。可开可闭；闭合时支持面积、质心与主轴等分析。

多段线 / 多边形（三角剖分部分）。

```csharp
public class Polyline : IPointSet, IPoly, IPolyCurve, IVector
```

## Public Members

| name | description |
| --- | --- |
| Polyline(…) | 由点序列构造。 (4 constructors) |
| Area { get; } | 有向面积（闭合多边形，逆时针为正）；未闭合时抛异常。 |
| Centroid { get; } | 闭合多边形面积质心。 |
| Count { get; } | 顶点数量。 |
| Dimension { get; } | 维度（取首点；空折线为 0）。 |
| IsClosed { get; } | 是否闭合。 |
| IsConvex { get; } | 是否为凸多边形。 |
| Item { get; } | 按索引取点（循环取模）。 |
| Perimeter { get; } | 折线总长度；闭合时即为周长。 |
| PrincipalAxes { get; } | 闭合多边形质心二阶矩与等效椭圆主轴。 |
| Pts { get; } | 顶点列表（可修改）。 |
| SegmentCount { get; } | 线段数量（闭合等于顶点数；开折线为顶点数−1）。 |
| Segments { get; } | 全部线段。 |
| ToArray { get; } | 转为锯齿状坐标数组。 |
| ToMatrix { get; } | 转为坐标矩阵（行=点，列=维度）。 |
| ToPoly { get; } | 自身作为多边形引用。 |
| Add(…) | 在末尾追加顶点。 |
| AddRange(…) | 追加多个顶点。 |
| AntiClockwise() | 强制闭合多边形为逆时针（面积为负则反转）。 |
| Brother(…) | 返回起点不同、形状相同的兄弟折线。 |
| ChangeStart(…) | 就地更改起点索引（旋转顶点顺序）。 |
| Clear() | 清空全部顶点。 |
| Clockwise() | 强制闭合多边形为顺时针（面积为正则反转）。 |
| Close() | 标记为闭合。 |
| DimensionalShift(…) | 升降维。 |
| GetPoint(…) | 按索引取点（循环取模）。 |
| IndexOf(…) | 查找顶点索引。 |
| Insert(…) | 在指定位置插入顶点。 |
| InsertRange(…) | 在指定位置插入多个顶点。 |
| Open() | 标记为开折线。 |
| PointOn(…) | 按连续参数取点：整数部分为段索引，小数部分为段内 t。 |
| Remove(…) | 移除指定顶点（首次匹配）。 |
| RemoveAdjacentRepeat(…) | 移除相邻重复点（可按容差）；闭合时亦去掉与首点重复的尾点。 |
| RemoveAt(…) | 按索引移除顶点。 |
| RemoveRange(…) | 移除一段连续顶点。 |
| Reverse() | 反转顶点顺序。 |
| SegmentAt(…) | 取指定索引的线段。 |
| SubPolyByIndices(…) | 按索引抽取子多边形。 |
| override ToString() |  |
| ToStringBracket() | 以方括号格式输出全部顶点。 |
| TriangulateIndices(…) | 耳切法三角剖分，返回三角形顶点索引三元组列表。 |
| TriangulatePoly(…) | 耳切法三角剖分，返回三角形折线数组。 |
| static IsConvexCorner(…) | 判断折角 a→b→c 是否为凸角（逆时针多边形下叉积 ≥ 0）。 |
| operator + | 折线整体平移。 |
| operator ^ | 升降维运算符。 |

### Polyline.Add method

在末尾追加顶点。

```csharp
public void Add(Point item)
```

### Polyline.AddRange method

追加多个顶点。

```csharp
public void AddRange(IEnumerable<Point> collection)
```

### Polyline.AntiClockwise method

强制闭合多边形为逆时针（面积为负则反转）。

```csharp
public void AntiClockwise()
```

### Polyline.Area property

有向面积（闭合多边形，逆时针为正）；未闭合时抛异常。

```csharp
public double Area { get; }
```

#### Exceptions

| exception | condition |
| --- | --- |
| InvalidOperationException | 折线未闭合时抛出。 |

### Polyline.Brother method

返回起点不同、形状相同的兄弟折线。

```csharp
public Polyline Brother(int startIndex)
```

| parameter | description |
| --- | --- |
| startIndex | 新起点索引。 |

#### Return Value

新折线。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentOutOfRangeException | 索引越界时抛出。 |

### Polyline.Centroid property

闭合多边形面积质心。

```csharp
public Point Centroid { get; }
```

#### Exceptions

| exception | condition |
| --- | --- |
| InvalidOperationException | 折线未闭合时抛出。 |

### Polyline.ChangeStart method

就地更改起点索引（旋转顶点顺序）。

```csharp
public void ChangeStart(int startIndex)
```

| parameter | description |
| --- | --- |
| startIndex | 新起点索引。 |

### Polyline.Clear method

清空全部顶点。

```csharp
public void Clear()
```

### Polyline.Clockwise method

强制闭合多边形为顺时针（面积为正则反转）。

```csharp
public void Clockwise()
```

### Polyline.Close method

标记为闭合。

```csharp
public void Close()
```

### Polyline.Count property

顶点数量。

```csharp
public int Count { get; }
```

### Polyline.Dimension property

维度（取首点；空折线为 0）。

```csharp
public int Dimension { get; }
```

### Polyline.DimensionalShift method

升降维。

```csharp
public Polyline DimensionalShift(int targetDimension)
```

| parameter | description |
| --- | --- |
| targetDimension | 目标维度。 |

#### Return Value

新维度折线。

### Polyline.GetPoint method

按索引取点（循环取模）。

```csharp
public Point GetPoint(int index)
```

| parameter | description |
| --- | --- |
| index | 索引（可为负或超出范围）。 |

#### Return Value

顶点。

### Polyline.IndexOf method

查找顶点索引。

```csharp
public int IndexOf(Point item)
```

| parameter | description |
| --- | --- |
| item | 顶点。 |

#### Return Value

索引；未找到为 −1。

### Polyline.Insert method

在指定位置插入顶点。

```csharp
public void Insert(int index, Point item)
```

### Polyline.InsertRange method

在指定位置插入多个顶点。

```csharp
public void InsertRange(int index, IEnumerable<Point> collection)
```

### Polyline.IsClosed property

是否闭合。

```csharp
public bool IsClosed { get; }
```

### Polyline.IsConvex property

是否为凸多边形。

```csharp
public bool IsConvex { get; }
```

### Polyline.IsConvexCorner method

判断折角 a→b→c 是否为凸角（逆时针多边形下叉积 ≥ 0）。

```csharp
public static bool IsConvexCorner(Point a, Point b, Point c)
```

| parameter | description |
| --- | --- |
| a | 前一点。 |
| b | 当前点。 |
| c | 后一点。 |

#### Return Value

凸角则为 `true`。

### Polyline indexer

按索引取点（循环取模）。

```csharp
public Point this[int index] { get; }
```

### Polyline Addition operator

折线整体平移。

```csharp
public static Polyline operator +(Polyline poly, Vector vec)
```

### Polyline ExclusiveOr operator

升降维运算符。

```csharp
public static Polyline operator ^(Polyline pl, int targetDimension)
```

### Polyline.Open method

标记为开折线。

```csharp
public void Open()
```

### Polyline.Perimeter property

折线总长度；闭合时即为周长。

```csharp
public double Perimeter { get; }
```

### Polyline.PointOn method

按连续参数取点：整数部分为段索引，小数部分为段内 t。

```csharp
public Point PointOn(double t)
```

| parameter | description |
| --- | --- |
| t | 连续参数。 |

#### Return Value

折线上的点。

### Polyline constructor (1 of 4)

由可变参数点构造；若首尾点相同则自动闭合并去掉重复尾点。

```csharp
public Polyline(params Point[] pts)
```

| parameter | description |
| --- | --- |
| pts | 顶点。 |

### Polyline constructor (2 of 4)

```csharp
public Polyline(double[] ptsCoords, bool isClosed = true)
```

### Polyline constructor (3 of 4)

由锯齿状坐标数组构造。

```csharp
public Polyline(double[][] ptsCoords, bool isClosed = true)
```

| parameter | description |
| --- | --- |
| ptsCoords | 每行一个点的坐标。 |
| isClosed | 是否闭合。 |

### Polyline constructor (4 of 4)

由点序列构造。

```csharp
public Polyline(IEnumerable<Point> pts, bool isClosed = true)
```

| parameter | description |
| --- | --- |
| pts | 顶点序列。 |
| isClosed | 是否闭合，默认 `true`。 |

### Polyline.PrincipalAxes property

闭合多边形质心二阶矩与等效椭圆主轴。

```csharp
public PrincipalAxes2d PrincipalAxes { get; }
```

#### Exceptions

| exception | condition |
| --- | --- |
| InvalidOperationException | 折线未闭合时抛出。 |

### Polyline.Pts property

顶点列表（可修改）。

```csharp
public List<Point> Pts { get; }
```

### Polyline.Remove method

移除指定顶点（首次匹配）。

```csharp
public void Remove(Point item)
```

### Polyline.RemoveAdjacentRepeat method

移除相邻重复点（可按容差）；闭合时亦去掉与首点重复的尾点。

```csharp
public void RemoveAdjacentRepeat(double tolerance = 1E-09m)
```

| parameter | description |
| --- | --- |
| tolerance | 容差。 |

### Polyline.RemoveAt method

按索引移除顶点。

```csharp
public void RemoveAt(int index)
```

### Polyline.RemoveRange method

移除一段连续顶点。

```csharp
public void RemoveRange(int index, int count)
```

### Polyline.Reverse method

反转顶点顺序。

```csharp
public void Reverse()
```

### Polyline.SegmentAt method

取指定索引的线段。

```csharp
public ICurveUnit SegmentAt(int index)
```

| parameter | description |
| --- | --- |
| index | 线段索引。 |

#### Return Value

线段。

### Polyline.SegmentCount property

线段数量（闭合等于顶点数；开折线为顶点数−1）。

```csharp
public int SegmentCount { get; }
```

### Polyline.Segments property

全部线段。

```csharp
public LineSeg[] Segments { get; }
```

### Polyline.SubPolyByIndices method

按索引抽取子多边形。

```csharp
public Polyline SubPolyByIndices(IList<int> indices)
```

| parameter | description |
| --- | --- |
| indices | 顶点索引列表（至少 2 个）。 |

#### Return Value

子折线。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 索引不足 2 个时抛出。 |

### Polyline.ToArray property

转为锯齿状坐标数组。

```csharp
public double[][] ToArray { get; }
```

### Polyline.ToMatrix property

转为坐标矩阵（行=点，列=维度）。

```csharp
public double[] ToMatrix { get; }
```

### Polyline.ToPoly property

自身作为多边形引用。

```csharp
public Polyline ToPoly { get; }
```

### Polyline.ToString method

```csharp
public override string ToString()
```

### Polyline.ToStringBracket method

以方括号格式输出全部顶点。

```csharp
public string ToStringBracket()
```

#### Return Value

逗号分隔的坐标串。

### Polyline.TriangulateIndices method

耳切法三角剖分，返回三角形顶点索引三元组列表。

```csharp
public List<(int, int, int)> TriangulateIndices(bool indicesOrder = true)
```

| parameter | description |
| --- | --- |
| indicesOrder | 为 `true` 时输出逆时针（朝向 Z+）索引顺序。 |

#### Return Value

三角形索引列表。

#### Exceptions

| exception | condition |
| --- | --- |
| InvalidOperationException | 未闭合、顶点数不足或非简单多边形时抛出。 |

### Polyline.TriangulatePoly method

耳切法三角剖分，返回三角形折线数组。

```csharp
public Polyline[] TriangulatePoly(bool indicesOrder = true)
```

| parameter | description |
| --- | --- |
| indicesOrder | 为 `true` 时输出逆时针索引顺序。 |

#### Return Value

三角形折线数组。
