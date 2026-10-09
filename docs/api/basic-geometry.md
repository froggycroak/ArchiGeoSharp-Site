---
outline: false
---

# ArchiGeo.Basic.Geometry

## ArchiGeo.Basic.Geometry namespace

| public type | description |
| --- | --- |
| struct [Angle](/api/basic/geometry/Angle) | 平面角，内部以度为单位存储。支持隐式从 `double`/`int` 转换。 |
| struct [AngleDual](/api/basic/geometry/AngleDual) | 用两个角度表示的三维方向：XY 平面方位角 `AngleXY` 与相对 +Z 的极角 `AngleZ`。 |
| class [AngleGrid](/api/basic/geometry/AngleGrid) | 二维角度场网格：在规则格点上存储 `Angle`，支持双线性插值与沿场追踪路径。 |
| static class [AngleGridExtension](/api/basic/geometry/AngleGridExtension) | `AngleGrid` 的约束施加与标记矩阵辅助扩展。 |
| struct [AngleTripple](/api/basic/geometry/AngleTripple) | 三维纯旋转（SO(3)）的角度表达： - 内部唯一状态为单位四元数 (w,x,y,z) - 可等价表示一组互相垂直的单位向量 XDir / YDir（ZDir = X×Y） - 可在 ZYX(Tait-Bryan) 约定下转换为 (Roll, Pitch, Yaw) |
| struct [Arc](/api/basic/geometry/Arc) | 平面圆弧（或退化为弦的直线段）：由起点、终点与起点切向角唯一确定，实现 `ICurveUnit` / `ICurveSmooth`。 |
| static class [ArchiGeoJson](/api/basic/geometry/ArchiGeoJson) | [ArchiGeoJson](/api/basic/geometry/ArchiGeoJson)：数据结构与辅助方法。 |
| class [ArchiJsonCuboid](/api/basic/geometry/ArchiJsonCuboid) | 长方体 DTO。 |
| class [ArchiJsonCylinder](/api/basic/geometry/ArchiJsonCylinder) | 圆柱 DTO。 |
| static class [ArchiJsonDtoHelper](/api/basic/geometry/ArchiJsonDtoHelper) | ArchiGeoJson DTO 辅助方法。 |
| class [ArchiJsonFaces](/api/basic/geometry/ArchiJsonFaces) | 网格面索引 DTO：扁平索引 + 每面顶点数。 |
| class [ArchiJsonMesh](/api/basic/geometry/ArchiJsonMesh) | 三角网格 DTO：顶点 + 面索引。 |
| abstract class [ArchiJsonObjectBase](/api/basic/geometry/ArchiJsonObjectBase) | ArchiGeoJson 对象基类：含类型名、扩展属性与 UUID。 |
| class [ArchiJsonPlane](/api/basic/geometry/ArchiJsonPlane) | 平面矩形片段 DTO（长 × 宽 + 位姿）。 |
| class [ArchiJsonPosition](/api/basic/geometry/ArchiJsonPosition) | 三维位置 DTO（ArchiGeoJson）。 |
| class [ArchiJsonPrism](/api/basic/geometry/ArchiJsonPrism) | 棱柱 DTO：底面折线 + 高度。 |
| class [ArchiJsonSegments](/api/basic/geometry/ArchiJsonSegments) | 折线/线段集 DTO。 |
| class [ArchiJsonSphere](/api/basic/geometry/ArchiJsonSphere) | 球体 DTO。 |
| class [ArchiJsonVertices](/api/basic/geometry/ArchiJsonVertices) | 顶点集 DTO：扁平坐标 + 可选变换矩阵。 |
| class [BezierCurve](/api/basic/geometry/BezierCurve) | 通用 Bézier 曲线，支持任意阶；控制点至少 2 个且维数一致。 |
| class [BilinearCoonsPatch](/api/basic/geometry/BilinearCoonsPatch) | 双线性 Coons 嵌面 / 四边界曲线嵌面（非纯拓扑定义）。 四条边界 u=0、u=1、v=0、v=1 上精确匹配给定曲线。 |
| class [Box](/api/basic/geometry/Box) | 长方体 / 盒子。底面左下角由 `Plane` 原点定义，尺寸为宽深高。 |
| class [BoxFlex](/api/basic/geometry/BoxFlex) | 由八个角点定义的任意六面体（flex box），可三角化或提取棱边。 |
| class [Brachistochrone](/api/basic/geometry/Brachistochrone) | 最速降线（[Brachistochrone](/api/basic/geometry/Brachistochrone)）：用旋轮线参数方程表示二维曲线。 |
| class [BspAdaptiveOptions](/api/basic/geometry/BspAdaptiveOptions) | 自适应 BSP：不预定义编码，按最大深度与叶面积停止； 每节点试 u/v 两向，优先切长边且避免过瘦子块。 |
| struct [BspEncoding](/api/basic/geometry/BspEncoding) | 三进制 BSP 编码。字符 `0`=u 向剖分，`1`=v 向剖分，`2`=叶（不剖）。 堆序下标：根=0，节点 i 的左右子为 2i+1、2i+2。 |
| class [BspNode](/api/basic/geometry/BspNode) | BSP 树节点（区域 + 割缝 + 左右子），不绑定某一具体宿主类型。 |
| class [BspSubdivideOptions](/api/basic/geometry/BspSubdivideOptions) | BSP 剖分选项（流线 / 容差等几何参数）。 |
| class [Circle](/api/basic/geometry/Circle) | 圆（曲线参数 t ∈ [0,1] 对应一周；可附带三维附着平面）。 |
| struct [CircleExpr](/api/basic/geometry/CircleExpr) | 二维圆的轻量表达式（圆心坐标 + 半径）。 |
| class [Cone](/api/basic/geometry/Cone) | 圆锥体：底面圆心、轴向、高度与底面半径（3D）。 |
| class [Cylinder](/api/basic/geometry/Cylinder) | 圆柱体：底面圆心、轴向、高度与半径（3D）。 |
| class [Frustum](/api/basic/geometry/Frustum) | 棱台：由棱锥在指定高度截断得到。 |
| class [HorizontalEndCurve](/api/basic/geometry/HorizontalEndCurve) | 连接 A 到 B 的二维曲线，并保证终点切线为水平。 使用二次贝塞尔： P(t)=(1-t)^2*P0 + 2(1-t)t*P1 + t^2*P2 其中 P0=A, P2=B, 且 P1.y=B.y，因此在 t=1 时 dY/dt=0。 |
| interface [IBezierCurve](/api/basic/geometry/IBezierCurve) | 贝塞尔曲线。 |
| interface [IBilinearCoonsPatch](/api/basic/geometry/IBilinearCoonsPatch) | 可转为 `BilinearCoonsPatch` 的曲面标记接口。 |
| interface [ICircleExpr](/api/basic/geometry/ICircleExpr) | 圆的基础表达：圆心 + 半径。 |
| interface [ICurve](/api/basic/geometry/ICurve) | 曲线标记接口。 |
| interface [ICurveSmooth](/api/basic/geometry/ICurveSmooth) | 光滑曲线单元（可扩展导数等）。 |
| interface [ICurveUnit](/api/basic/geometry/ICurveUnit) | 单参数曲线单元。自身维数 1D；Base 维数为 `PointAt` 返回点的维度。 |
| interface [IExtrusion](/api/basic/geometry/IExtrusion) | 沿曲线拉伸的实体。 |
| static class [IGeoExtension](/api/basic/geometry/IGeoExtension) | 几何接口（`ICurveUnit`、`ISurfaceUnit` 等）到折线/三角网格的转换扩展。 |
| interface [ILineExpr](/api/basic/geometry/ILineExpr) | ??????????? `LineExpr` ???? |
| interface [IMatrix](/api/basic/geometry/IMatrix) | 可提供齐次变换矩阵的对象。 |
| interface [IMeshTriangle](/api/basic/geometry/IMeshTriangle) | 可转换为三角网格的对象。 |
| interface [IOrtho](/api/basic/geometry/IOrtho) | 正交坐标系：全维统一缩放、至少二维、[转置]==[逆]。 |
| interface [IPointSet](/api/basic/geometry/IPointSet) | 点集：任意包含 List 的类型均可视为点集。 |
| interface [IPoly](/api/basic/geometry/IPoly) | 可转为 `Polyline` 的多边形接口。 |
| interface [IPolyCurve](/api/basic/geometry/IPolyCurve) | 由多段曲线单元组成的折线型曲线。 |
| interface [IPrism](/api/basic/geometry/IPrism) | 棱柱接口：二维底面多边形 + 高度。 |
| interface [IRect](/api/basic/geometry/IRect) | 有向矩形的最小接口（宽、深、方向与角点）。 |
| interface [ISolid](/api/basic/geometry/ISolid) | 实体几何标记接口（可网格化）。 |
| interface [ISpace2d](/api/basic/geometry/ISpace2d) | 二维正交坐标系 / 变换。 |
| interface [ISpace3d](/api/basic/geometry/ISpace3d) | 三维正交坐标系 / 变换。 |
| interface [ISurfaceSeg](/api/basic/geometry/ISurfaceSeg) | 曲面片段标记接口。 |
| interface [ISurfaceSegGroup](/api/basic/geometry/ISurfaceSegGroup) | 曲面片段组标记接口。 |
| interface [ISurfaceSmooth](/api/basic/geometry/ISurfaceSmooth) | 光滑曲面（可查询法向）。 |
| interface [ISurfaceUnit](/api/basic/geometry/ISurfaceUnit) | 曲面单元。自身维数 2D；Base 维数通常为 3D。 |
| interface [ITransform](/api/basic/geometry/ITransform) | 局部 ↔ 世界坐标描述接口。 |
| interface [ITransformable](/api/basic/geometry/ITransformable) | 由任意 `ISpace3d` 描述的三维变换更新自身位姿。 |
| interface [IVector](/api/basic/geometry/IVector) | 可度量维度的几何对象标记接口。自身无固定维数，Base 维数通常为 2D/3D。 |
| static class [IVectorUtil](/api/basic/geometry/IVectorUtil) | IVector 维度校验。静态方法不能放在接口中（net48 / .NET Framework 不支持）。 |
| interface [IVolumeObject](/api/basic/geometry/IVolumeObject) | 体积对象标记接口。 |
| class [Line](/api/basic/geometry/Line) | 无限直线（参数方程：BasePt + t·XUnitVec）。维度与基点/方向一致。 |
| struct [LineExpr](/api/basic/geometry/LineExpr) | ???????? ax + by + c = 0? |
| class [LineSeg](/api/basic/geometry/LineSeg) | ??????? t ? [0,1] ????????? |
| struct [LineSideSplit](/api/basic/geometry/LineSideSplit) | 直线左右半平面剖分结果。 `Left`：`ax+by+c > 0`；`Right`：`ax+by+c < 0`。 |
| class [MeshTriangle](/api/basic/geometry/MeshTriangle) | 纯三角面片网格：顶点列表与三角面索引（partial 定义，见 `[MeshTriangle](/api/basic/geometry/MeshTriangle)3` 等分部）。 |
| static class [MeshTrianglesExtension](/api/basic/geometry/MeshTrianglesExtension) | 三角网格接口与 `MeshTriangle` 列表的转换、合并扩展。 |
| struct [Plane](/api/basic/geometry/Plane) | 无缩放的三维正交右手系（刚体位姿）： 由平移 BasePt 与纯旋转 AngleTripple 组成。 |
| class [PlaneSeg](/api/basic/geometry/PlaneSeg) | 平面上的矩形面片：scale 恒为 1 的局部 `Plane` 上 u∈[0,W]、v∈[0,D] 的参数域。 |
| struct [Point](/api/basic/geometry/Point) | N 维点。通过 `Dimension` 描述所处空间维数，支持任意维度坐标运算。 |
| class [PointDual](/api/basic/geometry/PointDual) | 将固定 `Point` 同时视为 `IVector` 与退化的 `ICurveUnit`（参数 t 无关）。 |
| static class [PointExtension](/api/basic/geometry/PointExtension) | `Point` 到直线/平面的正交投影扩展（保持原坐标描述系，语义同 `%` project）。 |
| static class [PointListExtension](/api/basic/geometry/PointListExtension) | 点列表扩展方法（部分类）。 |
| static class [PointSetExtension](/api/basic/geometry/PointSetExtension) | `IPointSet` 的包围与统计扩展，逻辑委托给点列扩展方法。 |
| class [PolygonWithHoles](/api/basic/geometry/PolygonWithHoles) | 带孔洞的多边形：外环逆时针、孔洞顺时针；面积为外环减去孔洞。 |
| class [Polyline](/api/basic/geometry/Polyline) | 多段线 / 多边形。可开可闭；闭合时支持面积、质心与主轴等分析。 |
| static class [PolylineExtension](/api/basic/geometry/PolylineExtension) | BSP 街网剖分：对封闭 `Polyline` 应用 `BspEncoding` / 自适应策略与 AngleGrid 流线割缝。 类型定义见 `BspNode` 等；本文件仅提供 Polyline 扩展入口。 |
| struct [PrincipalAxes2d](/api/basic/geometry/PrincipalAxes2d) | 平面多边形的质心二阶矩与等效椭圆主轴。 主轴长度取与面积二阶矩等价的椭圆全轴长（2a / 2b）。 |
| class [Prism](/api/basic/geometry/Prism) | 棱柱：底面坐标系下的二维多边形沿 Z 拉伸。 |
| class [Pyramid](/api/basic/geometry/Pyramid) | 棱锥：底面多边形 + 顶点。 |
| class [Rect](/api/basic/geometry/Rect) | 平面内有向矩形；`PlaneSeg` 可视为嵌入三维的矩形面片。 |
| class [SmoothArcSeries](/api/basic/geometry/SmoothArcSeries) | 由一系列相切连接的 `Arc` 组成的平滑折线曲线（`IPolyCurve`）。 |
| class [Sphere](/api/basic/geometry/Sphere) | 球体：圆心 + 半径。参数 (u,v) 对应经度/纬度。 |
[TransCopable](/api/basic/geometry/TransCopable-1)|[TransCopable](/api/basic/geometry/TransCopable-1) [TransCopable](/api/basic/geometry/TransCopable-1)i[TransCopable](/api/basic/geometry/TransCopable-1)n[TransCopable](/api/basic/geometry/TransCopable-1)t[TransCopable](/api/basic/geometry/TransCopable-1)e[TransCopable](/api/basic/geometry/TransCopable-1)r[TransCopable](/api/basic/geometry/TransCopable-1)f[TransCopable](/api/basic/geometry/TransCopable-1)a[TransCopable](/api/basic/geometry/TransCopable-1)c[TransCopable](/api/basic/geometry/TransCopable-1)e[TransCopable](/api/basic/geometry/TransCopable-1) [TransCopable](/api/basic/geometry/TransCopable-1)T[TransCopable](/api/basic/geometry/TransCopable-1)r[TransCopable](/api/basic/geometry/TransCopable-1)a[TransCopable](/api/basic/geometry/TransCopable-1)n[TransCopable](/api/basic/geometry/TransCopable-1)s[TransCopable](/api/basic/geometry/TransCopable-1)C[TransCopable](/api/basic/geometry/TransCopable-1)o[TransCopable](/api/basic/geometry/TransCopable-1)p[TransCopable](/api/basic/geometry/TransCopable-1)a[TransCopable](/api/basic/geometry/TransCopable-1)b[TransCopable](/api/basic/geometry/TransCopable-1)l[TransCopable](/api/basic/geometry/TransCopable-1)e[TransCopable](/api/basic/geometry/TransCopable-1)&[TransCopable](/api/basic/geometry/TransCopable-1)l[TransCopable](/api/basic/geometry/TransCopable-1)t[TransCopable](/api/basic/geometry/TransCopable-1);[TransCopable](/api/basic/geometry/TransCopable-1)T[TransCopable](/api/basic/geometry/TransCopable-1)&[TransCopable](/api/basic/geometry/TransCopable-1)g[TransCopable](/api/basic/geometry/TransCopable-1)t[TransCopable](/api/basic/geometry/TransCopable-1);[TransCopable](/api/basic/geometry/TransCopable-1) [TransCopable](/api/basic/geometry/TransCopable-1)|[TransCopable](/api/basic/geometry/TransCopable-1) [TransCopable](/api/basic/geometry/TransCopable-1)返[TransCopable](/api/basic/geometry/TransCopable-1)回[TransCopable](/api/basic/geometry/TransCopable-1)变[TransCopable](/api/basic/geometry/TransCopable-1)换[TransCopable](/api/basic/geometry/TransCopable-1)副[TransCopable](/api/basic/geometry/TransCopable-1)本[TransCopable](/api/basic/geometry/TransCopable-1)而[TransCopable](/api/basic/geometry/TransCopable-1)不[TransCopable](/api/basic/geometry/TransCopable-1)修[TransCopable](/api/basic/geometry/TransCopable-1)改[TransCopable](/api/basic/geometry/TransCopable-1)自[TransCopable](/api/basic/geometry/TransCopable-1)身[TransCopable](/api/basic/geometry/TransCopable-1)。[TransCopable](/api/basic/geometry/TransCopable-1) [TransCopable](/api/basic/geometry/TransCopable-1)|[TransCopable](/api/basic/geometry/TransCopable-1)
| struct [Vector](/api/basic/geometry/Vector) | N 维向量。支持点积、叉积、投影（`%`）与升降维（`^`）。 |
| class [VectorExtension](/api/basic/geometry/VectorExtension) | 向量扩展方法占位类。 |
