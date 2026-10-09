---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# PolylineExtension class

BSP 街网剖分：对封闭 `Polyline` 应用 `BspEncoding` / 自适应策略与 AngleGrid 流线割缝。 类型定义见 `BspNode` 等；本文件仅提供 Polyline 扩展入口。

封闭简单多边形的剖分原语：直线 / 折线切割。

多边形形态分析指标（不依赖 depute）。

折线扩展：定向包围盒（OBB）相关。

折线偏移与缓冲区扩展。

类直链：端段规则修剪 + 两端延长到边界。

Polyline 最小边长约束简化（保守短边合并 + 受限 Douglas-Peucker）。

Polyline 尖角平滑：局部等距切角（可插入新顶点），空间不足时退化为删点。

```csharp
public static class PolylineExtension
```

## Public Members

| name | description |
| --- | --- |
| static AxisAlignedInscribedRect(…) | 多边形的轴对齐近似内接矩形 |
| static Buffer(…) | 开放折线 buffer → 封闭边界折线（两侧 `OffsetSimp` + 端帽）。 不依赖 CGAL Offset。封闭折线请用 depute 的 BufferClosed / BufferPolygon。 |
| static Compactness(…) | 多边形分析指标6：紧密度 = 4π × 面积 / 周长²。 |
| static Convexity(…) | 多边形分析指标1：凹凸比 = 周长 / 凸包周长。 |
| static Eccentricity(…) | 多边形分析指标8：偏心率 = 主轴短轴 / 长轴。 |
| static Elongation(…) | 多边形分析指标4：延伸率 = 包围盒短边 / 长边。 |
| static ExtendEndsToPolyline(…) | 将开放折线两端沿端点切向（背离链内部）延长，落到 *boundary* 上。 若某端射线与边界无正向交点，则保留原端点。 |
| static FitQuasiStraightChain(…) | 在已有开放链上生成类直链：按修剪半径 *trimRadius* 处理两端， 再将两端沿走向延长到 *boundary* 上。 |
| static OffsetSimp(…) | 简单平行偏移（角平分法，左侧为正）。 |
| static OrientedInscribedRect(…) | 给定角度，求最大内接矩形, 输出矩形的方向与输入角度XDirAngle一致 |
| static OrientedInscribedRects(…) |  |
| static Rectangularity(…) | 多边形分析指标3：矩形度 = 面积 / 最小有向包围盒面积。 |
| static ShapeEvaluationSimp(…) | 多边形八项分析指标，返回长度 8 的数列： [0] 凹凸比 Convexity； [1] 实心率 Solidity； [2] 矩形度 Rectangularity； [3] 延伸率 Elongation； [4] 球状性 Sphericity； [5] 紧密度 Compactness； [6] 本为圆形度 Circularity，用0占位； [7] 偏心率 Eccentricity。 |
| static SimplifyMinEdge(…) | 在保证任意边长 ≥ *minEdgeLength* 的前提下简化折线。 |
| static SmoothSharpCorners(…) | 去除折线中内角 &lt; *alphaDeg* 的尖角，并保持相邻点距离 ≥ *theta*。 |
| static Solidity(…) | 多边形分析指标2：实心率 = 面积 / 凸包面积。 |
| static Sphericity(…) | 多边形分析指标5：球状性 = 4π × 面积 / 凸包周长²。 |
| static SplitByLine(…) | 用无限直线切割封闭多边形，返回所有碎块（不区分左右）。 交点不足 2 个时返回原多边形；支持多于 2 个交点。 |
| static SplitByLineToSides(…) | 用无限直线切割封闭多边形，按半平面分组返回。 支持凹多边形上多次贯通（多于 2 个交点）：左侧所有块、`ax+by+c>0`； 右侧所有块、`ax+by+c<0`。无交或不相交时整块归入对应一侧。 |
| static SplitByPolyline(…) | 用开放折线切割封闭多边形。取折线参数方向上最长的一段「内部跨距」作为割缝； 该跨距两端须落在边界上。成功返回 2 块；无法形成有效跨距时返回原多边形。 |
| static SubdivideBsp(…) | 按三进制编码与角度场对流线 BSP 剖分封闭场地。 |
| static SubdivideBspAdaptive(…) | 自适应 BSP：无预定义编码；以 `MaxDepth` / `MinLeafArea` 停止，并在 u/v 两向中择优（切长边、抑瘦长）。 |
| static TrimEnds(…) | 开放折线两端沿走向各回退 *trimDistance*。 若单侧回退超过折线长度的一半，退化为单点并 Console 打印 warning（不抛错）。 |

### PolylineExtension.AxisAlignedInscribedRect method

多边形的轴对齐近似内接矩形

```csharp
public static Rect AxisAlignedInscribedRect(this Polyline poly, int gridDensity = 100)
```

| parameter | description |
| --- | --- |
| poly |  |
| gridDensity | 网格密度，默认值为100 |

### PolylineExtension.Buffer method

开放折线 buffer → 封闭边界折线（两侧 `OffsetSimp` + 端帽）。 不依赖 CGAL Offset。封闭折线请用 depute 的 BufferClosed / BufferPolygon。

```csharp
public static Polyline Buffer(this Polyline poly, double bufferDistance, bool edgeBuffer = true, 
    bool softEdge = false)
```

### PolylineExtension.Compactness method

多边形分析指标6：紧密度 = 4π × 面积 / 周长²。

```csharp
public static double Compactness(this Polyline poly)
```

### PolylineExtension.Convexity method

多边形分析指标1：凹凸比 = 周长 / 凸包周长。

```csharp
public static double Convexity(this Polyline poly)
```

### PolylineExtension.Eccentricity method

多边形分析指标8：偏心率 = 主轴短轴 / 长轴。

```csharp
public static double Eccentricity(this Polyline poly)
```

### PolylineExtension.Elongation method

多边形分析指标4：延伸率 = 包围盒短边 / 长边。

```csharp
public static double Elongation(this Polyline poly)
```

### PolylineExtension.ExtendEndsToPolyline method

将开放折线两端沿端点切向（背离链内部）延长，落到 *boundary* 上。 若某端射线与边界无正向交点，则保留原端点。

```csharp
public static Polyline ExtendEndsToPolyline(this Polyline open, Polyline boundary, 
    double tolerance = 1E-09m)
```

### PolylineExtension.FitQuasiStraightChain method

在已有开放链上生成类直链：按修剪半径 *trimRadius* 处理两端， 再将两端沿走向延长到 *boundary* 上。

* 端段长度 &lt; t：从该端按弧长 t 修剪。
* 端段长度 ≥ t：整段删除该端线段（不在长边上截一段）。

```csharp
public static Polyline FitQuasiStraightChain(this Polyline openChain, Polyline boundary, 
    double trimRadius, double tolerance = 1E-09m)
```

| parameter | description |
| --- | --- |
| openChain | 开放折线（通常为最长链）。 |
| boundary | 目标边界折线（通常为原始封闭轮廓）。 |
| trimRadius | 修剪半径 t。 |
| tolerance | 浮点容差。 |

### PolylineExtension.OffsetSimp method

简单平行偏移（角平分法，左侧为正）。

```csharp
public static Polyline OffsetSimp(this Polyline poly, double distance)
```

| parameter | description |
| --- | --- |
| poly | 源折线。 |
| distance | 偏移距离（左正右负）。 |

#### Return Value

偏移后的折线；点数不足时返回空折线。

### PolylineExtension.OrientedInscribedRect method

给定角度，求最大内接矩形, 输出矩形的方向与输入角度XDirAngle一致

```csharp
public static Rect OrientedInscribedRect(this Polyline poly, Angle XDirAngle, int gridDensity = 100)
```

| parameter | description |
| --- | --- |
| poly |  |
| XDirAngle |  |
| gridDensity |  |

### PolylineExtension.OrientedInscribedRects method

```csharp
public static Rect[] OrientedInscribedRects(this Polyline poly, int outputAngleNum = 3, 
    double degreeStep = 5m, int SelectionGridDensity = 50, int gridDensity = 100, 
    bool addEdgeAngles = false)
```

| parameter | description |
| --- | --- |
| poly |  |
| outputAngleNum |  |
| degreeStep |  |
| SelectionGridDensity |  |
| gridDensity |  |
| addEdgeAngles |  |

### PolylineExtension.Rectangularity method

多边形分析指标3：矩形度 = 面积 / 最小有向包围盒面积。

```csharp
public static double Rectangularity(this Polyline poly)
```

### PolylineExtension.ShapeEvaluationSimp method

多边形八项分析指标，返回长度 8 的数列： [0] 凹凸比 Convexity； [1] 实心率 Solidity； [2] 矩形度 Rectangularity； [3] 延伸率 Elongation； [4] 球状性 Sphericity； [5] 紧密度 Compactness； [6] 本为圆形度 Circularity，用0占位； [7] 偏心率 Eccentricity。

```csharp
public static double[] ShapeEvaluationSimp(this Polyline poly)
```

### PolylineExtension.SimplifyMinEdge method

在保证任意边长 ≥ *minEdgeLength* 的前提下简化折线。

* 若输入所有边已 ≥ t，则逐点原样返回（不引入任何偏差）。
* 阶段一：仅在合并后新边 ≥ t 时合并短边（禁止产生新短边）。
* 阶段二：在阶段一结果上做受限 DP；分裂须同时满足偏离 &gt; ε 且两侧新边 ≥ t。

开放折线锁定端点；闭合折线锁定起点并保持环闭合。直边保持为单段，不定长采样。

```csharp
public static Polyline SimplifyMinEdge(this Polyline poly, double minEdgeLength, 
    double epsilon = 0m, double tolerance = 1E-09m)
```

| parameter | description |
| --- | --- |
| poly | 输入折线（开放或闭合）。 |
| minEdgeLength | 最小边长 t。 |
| epsilon | Douglas-Peucker 偏离阈值 ε；≤0 时仅折叠数值上共线的顶点。 |
| tolerance | 浮点比较容差。 |

### PolylineExtension.SmoothSharpCorners method

去除折线中内角 &lt; *alphaDeg* 的尖角，并保持相邻点距离 ≥ *theta*。

* 内角取顶点处两侧边的夹角（由边向向量 A、B 的补角关系得到）。
* 优先沿两侧边各回退 d 做等距切角，以 Q–R 替换尖点。
* 若无法得到合法 d，且弦长 ≥ θ，则删除该顶点。

输入约定：任意相邻边长已 ≥ θ。开放折线不改动端点；闭合折线处理全部顶点。

```csharp
public static Polyline SmoothSharpCorners(this Polyline poly, double alphaDeg, double theta, 
    double tolerance = 1E-09m)
```

| parameter | description |
| --- | --- |
| poly | 输入二维折线（开放或闭合）。 |
| alphaDeg | 允许的最小内角（度），例如 45。 |
| theta | 最小边长约束。 |
| tolerance | 浮点比较容差。 |

### PolylineExtension.Solidity method

多边形分析指标2：实心率 = 面积 / 凸包面积。

```csharp
public static double Solidity(this Polyline poly)
```

### PolylineExtension.Sphericity method

多边形分析指标5：球状性 = 4π × 面积 / 凸包周长²。

```csharp
public static double Sphericity(this Polyline poly)
```

### PolylineExtension.SplitByLine method

用无限直线切割封闭多边形，返回所有碎块（不区分左右）。 交点不足 2 个时返回原多边形；支持多于 2 个交点。

```csharp
public static Polyline[] SplitByLine(this Polyline poly, ILineExpr cut, double tol = 1E-09m)
```

### PolylineExtension.SplitByLineToSides method

用无限直线切割封闭多边形，按半平面分组返回。 支持凹多边形上多次贯通（多于 2 个交点）：左侧所有块、`ax+by+c>0`； 右侧所有块、`ax+by+c<0`。无交或不相交时整块归入对应一侧。

```csharp
public static LineSideSplit SplitByLineToSides(this Polyline poly, ILineExpr cut, 
    double tol = 1E-09m)
```

### PolylineExtension.SplitByPolyline method

用开放折线切割封闭多边形。取折线参数方向上最长的一段「内部跨距」作为割缝； 该跨距两端须落在边界上。成功返回 2 块；无法形成有效跨距时返回原多边形。

```csharp
public static Polyline[] SplitByPolyline(this Polyline poly, Polyline cut, double tol = 1E-09m)
```

### PolylineExtension.SubdivideBsp method

按三进制编码与角度场对流线 BSP 剖分封闭场地。

```csharp
public static BspNode SubdivideBsp(this Polyline site, BspEncoding encoding, AngleGrid field, 
    BspSubdivideOptions options = null)
```

### PolylineExtension.SubdivideBspAdaptive method

自适应 BSP：无预定义编码；以 `MaxDepth` / `MinLeafArea` 停止，并在 u/v 两向中择优（切长边、抑瘦长）。

```csharp
public static BspNode SubdivideBspAdaptive(this Polyline site, AngleGrid field, 
    BspAdaptiveOptions options = null)
```

### PolylineExtension.TrimEnds method

开放折线两端沿走向各回退 *trimDistance*。 若单侧回退超过折线长度的一半，退化为单点并 Console 打印 warning（不抛错）。

```csharp
public static Polyline TrimEnds(this Polyline poly, double trimDistance)
```
