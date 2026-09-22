# ArchiGeoSharp.Basic API 文档

> 模块：`src/basic/ArchiGeoSharp.Basic.csproj`  
> 命名空间：`ArchiGeo.Basic.Geometry` · `ArchiGeo.Basic.Transform` · `ArchiGeo.Basic.Numeric` · `ArchiGeo.Basic.Topology`

---

## 目录

- [1. 概述与设计哲学](#1-概述与设计哲学)
- [2. 命名空间与依赖](#2-命名空间与依赖)
- [3. 接口体系](#3-接口体系)
- [4. 数值工具（Numeric）](#4-数值工具numeric)
  - [DoubleMath](#doublemath)
  - [IntMath](#intmath)
  - [MatrixSimple](#matrixsimple)
  - [Combinatorics](#combinatorics)
  - [RandomDistribution / WeightedRandomSelector](#randomdistribution--weightedrandomselectort)
- [5. 点与向量（ivector）](#5-点与向量ivector)
  - [Point](#point)
  - [Vector](#vector)
  - [PointExtension / VectorExtension](#pointextension--vectorextension)
  - [PointDual](#pointdual)
  - [BoundingBox](#boundingbox)
- [6. 角度类型（general）](#6-角度类型general)
  - [Angle](#angle)
  - [AngleDual](#angledual)
  - [AngleTripple](#angletripple)
  - [AngleGrid / AngleGridExtension](#anglegrid--anglegridextension)
- [7. 线性与曲线（curve2d / ivector）](#7-线性与曲线curve2d--ivector)
  - [LineExpr / ILineExpr](#lineexpr--ilineexpr)
  - [Line](#line)
  - [LineSeg](#lineseg)
  - [Arc](#arc)
  - [Circle / ICircleExpr](#circle--icircleexpr)
  - [SmoothArcSeries](#smootharcseries)
  - [BezierCurve](#beziercurve)
  - [Brachistochrone / HorizontalEndCurve](#brachistochrone--horizontalendcurve)
- [8. 多段线与多边形（ivector）](#8-多段线与多边形ivector)
  - [Polyline / Polyline2](#polyline--polyline2)
  - [Rect / IRect](#rect--irect)
  - [PolygonWithHoles](#polygonwithholes)
  - [Polyline 扩展方法](#polyline-扩展方法)
- [9. 平面与坐标系（general）](#9-平面与坐标系general)
  - [PlaneExpr / IPlaneExpr](#planeexpr--iplaneexpr)
  - [Plane](#plane)
  - [PlaneSeg](#planeseg)
- [10. 空间变换（Transform）](#10-空间变换transform)
  - [Space2d](#space2d)
  - [Space3d](#space3d)
  - [Distance](#distance)
  - [Intersection](#intersection)
  - [Projection](#projection)
  - [RelationType / Relation1/2/3](#relationtype--relation123)
- [11. 曲面与网格（mesh）](#11-曲面与网格mesh)
  - [MeshTriangle](#meshtriangle)
  - [BilinearCoonsPatch](#bilinearcoonspatch)
  - [IGeoExtension / MeshTrianglesExtension](#igeoextension--meshtrianglesextension)
- [12. 体几何（solid）](#12-体几何solid)
  - [Box / BoxFlex](#box--boxflex)
  - [Prism / IPrism](#prism--iprism)
  - [Cylinder / Cone / Frustum](#cylinder--cone--frustum)
  - [Sphere](#sphere)
  - [Pyramid](#pyramid)
- [13. 拓扑（Topology）](#13-拓扑topology)
  - [HEMesh / HEVertex / HalfEdge / HEFace](#hemesh--hevertex--halfedge--heface)
- [14. 序列化（dto / ArchiGeoJson）](#14-序列化dto--archigeojson)
- [15. 运算符速查表](#15-运算符速查表)

---

## 1. 概述

ArchiGeoSharp.Basic 是 ArchiGeoSharp 的几何内核，面向建筑与计算设计场景。与常见几何库相比，本模块有以下不同的设计：

| 设计点                                  | 说明                                                                                         |
| ------------------------------------ | ------------------------------------------------------------------------------------------ |
| **N 维点/向量**                          | `Point` / `Vector` 支持任意维度（不限于 2D/3D），通过 `Dimension` 属性与 `IVector.CheckDimensionMatch` 约束运算 |
| **对象即坐标系**                           | `Plane`、`Space2d`、`Space3d` 同时承担**坐标系描述**与**几何变换**两种语义，而非分离的 `Transform` 类                 |
| **运算符语义**                            | `*` / `/` 表示局部↔世界坐标映射；`%` 表示投影；`^` 表示维度升降；`!` 表示逆变换                                        |
| **Plane 无缩放**                        | `Plane` 是 `Scale=1` 的右手正交系，等价于刚体位姿；含缩放请用 `Space3d`                                         |
| **曲线参数域**                            | `ICurveUnit.PointAt(t)` 中 `t ∈ [0,1]`，与 `LineSeg` 一致                                       |
| **Self-Dimension vs Base-Dimension** | 接口注释中的 Self-Dimension 指对象自身参数维度（如曲线 1D），Base-Dimension 指点/向量所在空间维度                         |

**核心几何数据结构：**

- **点与向量**：`Point`、`Vector`
- **曲线与线性对象**：`LineSeg`、`Line`、`LineExpr`、`Polyline`、`Arc`、`Circle`
- **坐标系与平面**：`Space2d`、`Space3d`、`Plane`、`PlaneExpr`
- **面与体**：`MeshTriangle`、`Rect`、`Box`、`Cylinder`、`Cone`、`Prism`、`Pyramid` 等

**最小示例：**

```csharp
using ArchiGeo.Basic.Geometry;
using ArchiGeo.Basic.Transform;

// 创建局部坐标系（Plane = 无缩放刚体位姿）
Plane plane = new(new Point(0, 0, 0), new Vector(1, 0, 0), new Vector(0, 1, 0));

// 局部点 → 世界点
Point world = plane.AbsoluteDescribe(new Point(2, 3, 0));
// 等价写法
Point world2 = new Point(2, 3, 0) * plane;

// 复合变换
Space3d move = Space3d.Translation(new Vector(10, 0, 0));
Plane moved = plane * move;
```

---

## 2. 命名空间与依赖


| 命名空间                       | 路径           | 职责                   |
| -------------------------- | ------------ | -------------------- |
| `ArchiGeo.Basic.Geometry`  | `geometry/`  | 点、向量、曲线、面、体、JSON DTO |
| `ArchiGeo.Basic.Transform` | `transform/` | 空间变换、距离、求交、投影、关系判定   |
| `ArchiGeo.Basic.Numeric`   | `numeric/`   | 浮点容差、矩阵、组合数学、随机      |
| `ArchiGeo.Basic.Topology`  | `topology/`  | 半边网格拓扑               |


外部依赖：Newtonsoft.Json（仅 JSON 序列化部分使用）。

---

## 3. 接口体系

定义于 `geometry/general/IGeometry.cs`。


| 接口                                         | Self-Dimension   | 核心成员                                              |
| ------------------------------------------ | ---------------- | ------------------------------------------------- |
| `IVector`                                  | 无（Base 通常 2D/3D） | `Dimension`                                       |
| `ICurve`                                   | —                | 曲线基类                                              |
| `ICurveUnit`                               | 1D               | `PointAt(double t)`，`t∈[0,1]`                     |
| `ICurveSmooth`                             | 1D               | 光滑曲线（预留导数接口）                                      |
| `IBezierCurve`                             | 1D               | `ControlPoints`、`Degree`、`StartPt`、`EndPt`        |
| `IPolyCurve`                               | 1D（分段）           | `SegmentCount`、`SegmentAt`、`PointOn(t)`，`t∈[0,n)` |
| `ISurfaceUnit`                             | 2D               | `PointAt(u,v)`，继承 `IMeshTriangle`                 |
| `ISurfaceSmooth`                           | 2D               | `NormalAt(u,v)`                                   |
| `ISolid`                                   | 3D               | 体，可三角化                                            |
| `IMeshTriangle`                            | —                | `ToMeshTriangle(int divisions)`                   |
| `ITransformable`                           | —                | `Transform(ISpace3d)`                             |
| `TransCopable<T>`                          | —                | `TransformCopy(Space3d)`                          |
| `ITransform`                               | —                | `AbsoluteDescribe` / `RelativeDescribe`           |
| `IOrtho`                                   | —                | `Scale`、`BasePt`、`XDir`、`YDir`                    |
| `ISpace2d`                                 | 2D               | 继承 `ITransform`、`IMatrix`、`IOrtho`、`ILineExpr`    |
| `ISpace3d`                                 | 3D               | 继承 `ITransform`、`IMatrix`、`IOrtho`、`IPlaneExpr`   |
| `IPointSet` / `IPoly`                      | —                | 点集与多边形抽象（`Count`、`Pts` 等）                         |
| `ILineExpr` / `IPlaneExpr` / `ICircleExpr` | —                | 解析表达式接口                                           |


---

## 4. 数值工具（Numeric）

### DoubleMath

静态浮点工具类，几何运算的容差基准。


| 方法                                            | 用途                       |
| --------------------------------------------- | ------------------------ |
| `TildeEqual(a, b, tol)`                       | 近似相等                     |
| `CreateArithmeticSequence(start, stop, step)` | 等差数列                     |
| `GetRemainder(value, period, offset)`         | 取模（供 `Angle.Mod360` 等使用） |
| `FindMaxMinWithIndices`                       | 数组极值及索引                  |


```csharp
Point a = new(1.0, 2.0);
Point b = new(1.0000001, 2.0);
bool eq = a.TildeEqual(b, 1e-5);  // true
```

### IntMath

整数取模等工具，供 `SmoothArcSeries.PointOn` 等使用。

### MatrixSimple

简单矩阵运算辅助。

### Combinatorics

组合数学（排列、组合等）。

### RandomDistribution / WeightedRandomSelectorT

加权随机采样，用于参数化设计中的随机选取。

---

## 5. 点与向量（ivector）

### Point

N 维点，`struct`，实现 `IVector`、`IEquatable<Point>`。

**构造：**

```csharp
Point p2 = new(1, 2);              // 2D
Point p3 = new(1, 2, 3);           // 3D
Point pN = new(1, 2, 3, 4);        // N-D
Point fromVec = new Vector(1, 0);  // 从向量
Point spherical = new(5, Angle.FromDegree(45), Angle.FromDegree(60)); // 球坐标
```

**常用属性/方法：**


| 成员                                  | 说明      |
| ----------------------------------- | ------- |
| `Dimension` / `Coords` / `[index]`  | 维度与坐标访问 |
| `ToVector`                          | 转为同坐标向量 |
| `TildeEqual(other, tol)`            | 容差比较    |
| `DimensionalShift(n, defaultCoord)` | 升/降维    |
| `Origin(dimensions)`                | N 维原点   |
| `DistanceToOrigin`                  | 到原点距离   |


**运算符：**


| 运算符                     | 含义                       |
| ----------------------- | ------------------------ |
| `+` / `-`               | 点加减（自动对齐维度）              |
| `pt - pt`               | 得 `Vector`               |
| `pt + vec` / `pt - vec` | 平移                       |
| `pt * scalar`           | 缩放坐标                     |
| `pt ^ n`                | 维度升降（`DimensionalShift`） |


> **设计说明**：点与向量分离，但 `Point` 也实现 `IVector`，便于统一维度检查。低维与高维运算时，`^` 会自动补齐维度。

### Vector

N 维向量，`struct`，实现 `IVector`。

**构造：**

```csharp
Vector v = new(1, 0, 0);
Vector dir = new(startPt, endPt);  // end - start
Vector unit = Vector.XUnit(3);     // (1,0,0)
```

**常用成员：**


| 成员                               | 说明        |
| -------------------------------- | --------- |
| `Magnitude` / `Normalize`        | 模长与单位化    |
| `Dot(a, b)`                      | 点积        |
| `Cross(a, b)`                    | 3D 叉积     |
| `Cross2d(a, b)`                  | 2D 叉积（标量） |
| `XUnit` / `YUnit` / `ZUnit(dim)` | 标准基       |
| `RandUnit(dim)`                  | 随机单位向量    |


**运算符：**


| 运算符        | 含义            |
| ---------- | ------------- |
| `*`（向量间）   | 点积            |
| `*`（向量×标量） | 数乘            |
| `%`        | 向量在另一向量方向上的投影 |
| `^`        | 维度升降          |


### PointExtension / VectorExtension

扩展方法，核心为投影：

```csharp
Point foot = pt.ProjectTo(lineExpr);   // 点到 2D 直线垂足
Point onPlane = pt.ProjectTo(planeExpr); // 点到 3D 平面垂足
Point onLine = pt.ProjectTo(line);     // 通过 LineExpr 实现
```

也可使用运算符 `%`：`Point projected = pt % lineExpr;`

### PointDual

同时实现 `IVector` 与 `ICurveUnit`，用于特殊参数化场景（点-曲线对偶表达）。

### BoundingBox

包围盒（当前为空占位，待实现）。

---

## 6. 角度类型（general）

### Angle

平面角，内部以**度**存储，提供弧度换算。

```csharp
Angle a = Angle.FromDegree(90);
Angle fromVec = new Vector(1, 1);       // Atan2
Angle fromPts = new Angle(p1, p2);

double rad = a.Radian;
Vector dir = a.UnitVec;                  // 单位方向向量
Angle norm = a.Mod360;                   // [0,360)
```

支持 `+`、`-`、`*`（数乘）、比较等运算符。

### AngleDual

三维方向的双角表达：方位角 `AngleXY` + 极角 `AngleZ`（相对 +Z）。

```csharp
AngleDual ad = AngleDual.FromVector(new Vector(1, 1, 1));
Vector dir = ad.UnitVec;
// 可与 Plane 做 * / 变换
AngleDual world = ad * plane;
```

### AngleTripple

三维纯旋转（SO(3)），内部用**单位四元数**存储，可等价表示为互相垂直的 `XDir`/`YDir`/`ZDir`。

```csharp
// 欧拉角（ZYX / Tait-Bryan）
AngleTripple rot = new(Angle.FromDegree(10), Angle.FromDegree(20), Angle.FromDegree(30));

// 由 X/Y 方向构造
AngleTripple rot2 = new(new Vector(1,0,0), new Vector(0,1,0));

// 作为纯旋转使用
Point rotated = pt * rot;
```

> **设计说明**：`Plane` 内部用 `AngleTripple` 存储旋转；`AngleTripple` 本身也实现 `ISpace3d`（Scale=1），可独立用于纯旋转。

### AngleGrid / AngleGridExtension

角度网格工具，用于离散角度采样与批量运算。

---

## 7. 线性与曲线（curve2d / ivector）

### LineExpr / ILineExpr

二维直线一般式 `Ax + By + C = 0`。

```csharp
LineExpr le = new(basePt, direction);  // 过点+方向
LineExpr le2 = new(pt1, pt2);          // 两点（见下方侧向注意）

Vector xDir = le.XDir;
double dist = le.Substitute(pt);       // 代入求符号距离（非欧氏距离）
Point proj = pt % le;                  // 投影
```

**侧向约定（正 / 负侧）：**

沿直线前进方向看，**左侧为正侧，右侧为负侧**。过点 + 方向（或 `Angle`）构造时，法向取方向向量的逆时针 90° 旋转：

\[
(a,\,b)=(-\mathrm{dir}_y,\,\mathrm{dir}_x),\quad
t=\texttt{Substitute}(p)=ax+by+c
\]

| `Substitute(p)` | 几何位置 | 与 `Relation` 的对应（见 [RelationType](#relationtype--relation123)） |
| --------------- | -------- | -------------------------------------------------------------------- |
| \(\|t\|\le\mathrm{tol}\) | 线上 | `ONEDGE` |
| \(t>0\) | 左侧（正侧） | `INSIDE` |
| \(t<0\) | 右侧（负侧） | `OUTSIDE` |

该约定与逆时针封闭 `Polyline` 的内侧一致：多边形各边的左正侧朝向区域内部。

> **注意：** `new LineExpr(pt1, pt2)`（两点构造）当前系数符号与「过点+方向」相反，左右侧会颠倒。需要与 `Line` / `Relation` 一致的侧向时，优先用 `new LineExpr(basePt, direction)` 或 `line.Expr`。

### Line

参数化直线（非线段），实现 `ICurveUnit`、`ILineExpr`。  
`Expr` 由 `BasePt` + `XUnitVec` 生成，侧向与上表一致：**沿 `XUnitVec` 前进时左侧为正（`INSIDE`）**。

```csharp
Line line = new(basePt, endPt);
Line line2 = new(basePt, dirAngle);

Point p = line.PointAt(0.5);           // 参数 t 无 [0,1] 限制
double t = line.Absorb(pt);            // 点 → 参数
bool on = line.Contain(pt, tol);
LineSeg seg = line.SegAt(0, 1);        // 截取 [0,1] 段
RelationType side = pt.Relate(line);   // 左 INSIDE / 右 OUTSIDE / 线上 ONEDGE
```

### LineSeg

有限线段，`t ∈ [0,1]`。

```csharp
LineSeg seg = new(start, end);
// 元组隐式转换
LineSeg seg2 = (start, end);

double len = seg.Length;
Point mid = seg.MidPt;
bool inside = seg.Contain(pt);
Vector normal = LineSeg.ComputeEdgeNormal(a, b); // 2D 左法向
```

### Arc

二维圆弧，`struct`，多种构造方式。

```csharp
// 起终点 + 起点切线角
Arc arc = new(startPt, endPt, Angle.FromDegree(0));

// 三点定弧
Arc arc2 = new(p1, pOnArc, p2);

// 圆心 + 半径 + 起止角
Arc arc3 = new(center, radius, startAngle, endAngle, isClockwise: false);

Point p = arc.PointAt(0.5);
Angle endTangent = arc.EndTangentAngle;
```

> **注意**：切线角使用 `[0,360)` 约定；`^ 2` 运算符将点强制升为 2D。

### Circle / ICircleExpr

圆，实现 `ICurveUnit`、`ICircleExpr`。

```csharp
Circle c = new(center, radius);
Circle c3 = new(p1, p2, p3);           // 三点定圆

Point onCircle = c.PointAt(0.25);      // t∈[0,1] → 整圆
Point atAngle = c.PointOn(Angle.FromDegree(90));

Space3d plane = c.AttachedPlane;       // 默认 WorldXY
```

### SmoothArcSeries

G1 连续圆弧序列，实现 `IPolyCurve`。

```csharp
var pts = new List<Point> { p0, p1, p2, p3 };
SmoothArcSeries series = new(pts, Angle.FromDegree(0)); // 指定首段切线
SmoothArcSeries series2 = new(pts);                      // 首段为直线方向

Point p = series.PointOn(1.5);         // 第 1 段弧 t=0.5
ICurveUnit seg = series.SegmentAt(0);
```

### BezierCurve

任意阶 Bézier 曲线。

```csharp
BezierCurve bez = new(p0, p1, p2, p3);  // 三次
Point p = bez.PointAt(0.5);
int deg = bez.Degree;                   // 3
```

### Brachistochrone / HorizontalEndCurve

特殊曲线：`Brachistochrone`（最速降线）；`HorizontalEndCurve`（水平端点 Bézier，实现 `IBezierCurve`）。

---

## 8. 多段线与多边形（ivector）

### Polyline / Polyline2

折线/多边形，实现 `IPointSet`、`IPoly`、`IPolyCurve`。

```csharp
Polyline poly = new(new[] { p0, p1, p2, p3 }, isClosed: true);
Polyline poly2 = new(p0, p1, p2);       // 自动检测首尾重合 → 闭合

double area = poly.Area;                // 闭合 2D 多边形面积
LineSeg[] segs = poly.Segments;
bool convex = poly.IsConvex;
```

**与 Plane 配合：**

```csharp
Polyline local = new(...);               // 平面局部坐标
Polyline world = local * plane;          // 映射到世界
Polyline back = world / plane;
```

### Rect / IRect

二维矩形（中心+宽高+旋转角）。

```csharp
Rect rect = new(center, width, depth, Angle.FromDegree(30));
Rect fromCorner = Rect.FromCorner(corner, w, d, angle);

Vector wDir = rect.WDir;
Point[] corners = rect.Corners;
Polyline outline = rect.ToPoly;
```

> **设计说明**：`Rect` 是 2D 对象；3D 矩形请用 `PlaneSeg`。

### PolygonWithHoles

带孔多边形，实现 `IVector`、`IPointSet`、`IPoly`。

### Polyline 扩展方法

位于 `PolylineExtension.cs`、`PolylineExtension3.cs`、`PointListExtension.cs` 等，提供：

- 点列变换、简化、偏移
- 与 NTS 等模块的衔接准备
- 凸凹性、方向等判定

---

## 9. 平面与坐标系（general）

### PlaneExpr / IPlaneExpr

三维平面一般式 `Ax + By + Cz + D = 0`。

```csharp
PlaneExpr pe = new(pt1, pt2, pt3);       // 三点定面
PlaneExpr pe2 = new(basePt, zDir);      // 点+法向

Vector normal = pe.ZDir;
bool on = pe.Contain(pt, tol);
Point proj = pt % pe;
```

### Plane

**无缩放**的三维正交右手坐标系（刚体位姿）。

```csharp
Plane plane = new(basePt, xDir, yDir);
Plane plane2 = new(basePt, angleTripple);
Plane worldXY = Plane.PlaneXY;

// 坐标映射
Point world = plane.AbsoluteDescribe(localPt);
Point local = plane.RelativeDescribe(worldPt);

// 运算符
Point w = localPt * plane;
Point l = worldPt / plane;
Plane combined = planeA * planeB;       // 位姿复合
Plane inv = !plane;                     // 逆
Plane moved = plane * Space3d.Translation(vec);

// 变换
plane.Transform(space3d);               // 就地修改（struct 需重新赋值）
```

**静态常量：** `PlaneXY`、`PlaneYZ`、`PlaneZX`

### PlaneSeg

三维矩形面片（`Scale=1` 的 `Plane` + 宽高），实现 `ISurfaceUnit`、`IRect`、`IPoly`。

```csharp
PlaneSeg face = new(basePt, xDir, yDir, width, depth);
Point p = face.PointAt(0.5, 0.5);      // u,v ∈ [0,1] 映射到面内
MeshTriangle mesh = face.ToMeshTriangle(4);
Vector normal = face.Normal;
```

---

## 10. 空间变换（Transform）

### Space2d

二维仿射变换，同时是坐标系描述与变换算子。

**工厂方法：**


| 方法                        | 含义     |
| ------------------------- | ------ |
| `Rotation(angle)`         | 绕原点旋转  |
| `Rotation(angle, basePt)` | 绕任意点旋转 |
| `Scaling(scale)`          | 均匀缩放   |
| `Scaling(scale, basePt)`  | 定点缩放   |
| `Mirror(axisDir)`         | 镜像     |
| `Mirror(lineExpr)`        | 过任意线镜像 |
| `Translation(vec)`        | 平移     |


```csharp
Space2d rot = Space2d.Rotation(Angle.FromDegree(45));
Point p2 = p * rot;                      // 正变换
Point p1 = p2 / rot;                   // 逆变换
Space2d combined = rotA * rotB;
```

### Space3d

三维仿射变换（可含缩放、镜像）。

**工厂方法：**


| 方法                                                      | 含义                                        |
| ------------------------------------------------------- | ----------------------------------------- |
| `Scaling(scale)` / `Scaling(scale, basePt)`             | 缩放                                        |
| `Rotation(axis, angleRad)` / `Rotation(line, angleRad)` | 旋转（Rodrigues）                             |
| `Mirror(planeNormal)` / `Mirror(planeExpr)`             | 镜像                                        |
| `Translation(vec)`                                      | 平移                                        |
| `FromArray(double[16])`                                 | 从 `[XAxis,0,YAxis,0,ZAxis,0,BasePt,1]` 构造 |
| `WorldXY`                                               | 世界 XY 平面                                  |


```csharp
Space3d move = Space3d.Translation(new Vector(5, 0, 0));
Space3d scale = Space3d.Scaling(2, centerPt);
Space3d rot = Space3d.Rotation(Vector.ZUnit(3), Math.PI / 4);

Box box = new(...);
box.Transform(scale);                    // ITransformable
Box copy = box.TransformCopy(scale);     // TransCopable<T>
```

> **设计说明**：内部矩阵以**转置形式**存储（行向量为轴），与标准列向量约定不同，取用 `Matrix` / `ToArray` 时注意。

### Distance


| 方法                   | 说明         |
| -------------------- | ---------- |
| `Dist(a, b)`         | 两点距离       |
| `Dist(pt, lineExpr)` | 点到 2D 直线距离 |
| `Dist(pt, lineSeg)`  | 点到线段距离     |
| `DistLine(...)`      | 返回垂线段      |


### Intersection


| 方法                              | 说明         |
| ------------------------------- | ---------- |
| `Intersect(lineExpr, lineExpr)` | 两直线交点（2D）  |
| `Intersect(lineSeg, lineSeg)`   | 两线段交点      |
| `Intersect(poly, lineSeg)`      | 多边形与线段     |
| 全局 `Tolerance`                  | 默认 `1e-10` |


```csharp
Point? hit = Intersection.Intersect(seg1, seg2);
if (hit is Point p) { /* 有交点 */ }
```

### Projection


| 方法                              | 说明       |
| ------------------------------- | -------- |
| `PerpendicularBisector(p1, p2)` | 中垂线（2D）  |
| 其他                              | 曲线/点投影辅助 |


### RelationType / Relation1/2/3

点/线与线/多边形的拓扑关系枚举，用于 `Arc` 三点构造、`Intersection` 等。

常用：`RelationType.ONEDGE`、`INSIDE`、`OUTSIDE`、`CROSS`；另有 `ONINSIDEEDGE`、`ONOUTSIDEEDGE`、`AROUND` 等组合态。

**相对直线（`ILineExpr`）时，`INSIDE` / `OUTSIDE` 表示左右侧，而非封闭区域内外**（直线本身无拓扑内侧）。判定依赖 `LineExpr.Substitute` 的符号，侧向约定见 [LineExpr](#lineexpr--ilineexpr)：

| `pt.Relate(lineExpr)` | 含义 | `Index`（便于端点乘积判交） |
| --------------------- | ---- | -------------------------- |
| `ONEDGE` | 点在直线上 | `0` |
| `INSIDE` | 点在直线**左侧**（正侧） | `1` |
| `OUTSIDE` | 点在直线**右侧**（负侧） | `-1` |

线段相对直线时同理：`INSIDE` / `OUTSIDE` = 整段落在左 / 右侧；两端点 `Index` 异号 → `CROSS`；一端在线上另一端在左 / 右 → `ONINSIDEEDGE` / `ONOUTSIDEEDGE`。

**相对封闭多边形时，`INSIDE` / `OUTSIDE` 才是真正内外**：`Point.Relate(IPoly)` 使用 2D 射线法（向右打射线，奇数次穿越为内）。

```csharp
RelationType rt = pt.Relate(lineExpr);   // 左 INSIDE / 右 OUTSIDE / 线上 ONEDGE
if (rt == RelationType.INSIDE) { ... }

RelationType inPoly = pt.Relate(closedPoly); // 射线法：区域内 / 外 / 边上
```

---

## 11. 曲面与网格（mesh）

### MeshTriangle

三角网格，顶点列表 + 面索引。

```csharp
var mesh = new MeshTriangle(vertices, faceIndices);
mesh.AddVertex(pt);
mesh.AddFace(0, 1, 2);
mesh.AddFace(0, 1, 2, 3);               // 四边形 → 拆成两个三角
mesh.ReverseAllFaces();                 // 翻转法向
```

所有 `ISolid` / `ISurfaceUnit` 通过 `ToMeshTriangle(divisions)` 三角化。

### BilinearCoonsPatch

双线性 Coons 曲面，由四条边界曲线围合。

```csharp
// 四曲线
var patch = new BilinearCoonsPatch(u0, u1, v0, v1);

// 四角点（自动用 LineSeg 连接）
var patch2 = new BilinearCoonsPatch(pt00, pt10, pt11, pt01);

Point p = patch.PointAt(0.5, 0.5);
MeshTriangle mesh = patch.ToMeshTriangle(8);
```

### IGeoExtension / MeshTrianglesExtension

```csharp
// 曲线 → 折线采样
Polyline sampled = bezierCurve.ToPolyline(divisions: 20);

// 曲面 → 三角网格
MeshTriangle mesh = surface.ToMeshTriangle(uDiv: 10, vDiv: 10);
```

---

## 12. 体几何（solid）

所有体实现 `ISolid`，提供 `ToMeshTriangle(divisions)` 与体积/表面积属性。

### Box / BoxFlex

轴对齐或任意平面上的长方体。

```csharp
// 任意位姿
Box box = new(plane, width, depth, height);

// 底面平行 XY，绕 Z 旋转
Box box2 = new(bottomLeft, new Vector(w, d, h), Angle.FromDegree(30));

// 从 2D Rect 拉伸
Box box3 = new(rect, height: 3.0, z0: 0);

Point[] corners = box.Corners;
Point center = box.VolumeCenter;
box.Transform(space3d);
```

`BoxFlex` 提供更灵活的盒体参数化。

### Prism / IPrism

任意底面多边形沿 `Plane` 的 Z 方向拉伸。

```csharp
Polyline basePoly = new(pts, isClosed: true);
Prism prism = new(basePlane, basePoly, height: 5);

Polyline bottom = prism.BottomPoly;      // 世界坐标底面
Polyline top = prism.TopPoly;
Point[] allCorners = prism.Corners;
MeshTriangle mesh = prism.ToMeshTriangle();
```

### Cylinder / Cone / Frustum

旋转体，由底面中心、轴向、尺寸定义。

```csharp
Cylinder cyl = new(height, center, axisDir, radius);
Cone cone = new(height, baseCenter, axisDir, radius);
Frustum frustum = new(...);              // 截头圆锥

MeshTriangle mesh = cyl.ToMeshTriangle(24);
double vol = cyl.Volume;
```

### Sphere

球体，同时是 `ISurfaceUnit`。

```csharp
Sphere sphere = new(center, radius);
Point p = sphere.PointAt(0.5, 0.5);      // 参数域 u,v ∈ [0,1]
MeshTriangle mesh = sphere.ToMeshTriangle(12);
```

### Pyramid

棱锥，实现 `ISolid`、`IPrism`（四边形底面时）。

---

## 13. 拓扑（Topology）

### HEMesh / HEVertex / HalfEdge / HEFace

半边网格数据结构，支持局部拓扑操作。

```csharp
var mesh = new HEMesh();
var v0 = new HEVertex(new Point(0,0,0));
// ... 构建半边、面

mesh.FlipEdge(halfEdge);                 // 边翻转（三角网）
mesh.FlipFaceVertex(face, newVertex);     // 面-点互换
int[,] adj = mesh.ToAdjacencyMatrix();
```

> 当前为轻量实现，适合算法原型与网格编辑；大规模网格请结合 `depute/nts` 模块。

---

## 14. 序列化（dto / ArchiGeoJson）

`ArchiGeoJson` 静态分部类，提供 ArchiGeo 自有 JSON 格式互转。

`ArchiGeoJson` 的设计总体上兼容`ArchiJson` (by Yichen Mo)。

**支持类型：** `Vertices`、`Segments`、`Mesh`、`Plane`、`Cuboid`、`Prism`、`Sphere`、`Cylinder`

**导出：**

```csharp
string json = points.ToAgJson();
string json = polyline.ToAgJson();
string json = box.ToAgJson();
string json = mesh.ToMeshTriangle().ToAgJson();
```

**导入：**

```csharp
List<Point> pts = agJson.ToPointList();
Polyline poly = agJson.ToPolyline();
MeshTriangle mesh = agJson.ToMeshTriangle();
Plane plane = agJson.ToPlane();
Box box = agJson.ToCuboid();
```

DTO 类型定义于 `ArchiGeoJson0-SharedDataStructure.cs`（`ArchiJsonVertices`、`ArchiJsonMesh` 等）。

---

## 15. 运算符速查表


| 运算符 | 左操作数                      | 右操作数                                     | 含义           |
| --- | ------------------------- | ---------------------------------------- | ------------ |
| `*` | Point / Vector            | Plane / Space2d / Space3d / AngleTripple | 局部 → 世界（正变换） |
| `/` | Point / Vector            | Plane / Space2d / Space3d / AngleTripple | 世界 → 局部（逆变换） |
| `*` | Plane                     | Plane / Space3d                          | 位姿复合         |
| `/` | Plane                     | Plane                                    | 相对位姿         |
| `!` | Plane / Space2d / Space3d | —                                        | 逆变换          |
| `%` | Point                     | LineExpr / PlaneExpr / Line              | 投影           |
| `%` | Vector                    | LineExpr / Line / Vector                 | 方向投影         |
| `^` | Point / Vector / LineSeg  | int                                      | 维度升降         |
| `*` | Vector                    | double                                   | 数乘           |
| `*` | Vector                    | Vector                                   | 点积           |


---

## 参考

- 项目总览：[快速上手](/guide/getting-started)
- [OpenNurbs API](opennurbs.md) — Rhino 互操作
- [Depute API](depute.md) — OSM / AMap / NTS / CGAL
- [Raylex API](raylex.md) — 可视化调试
- [GRBSolver API](grbsolver.md) — 角度场优化
- [Rhinex API](rhinex.md) — Rhino 文档绑定（开发中）

