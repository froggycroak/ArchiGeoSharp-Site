# ArchiGeoSharp.OpenNurbs API 文档

> 模块：`src/opennurbs/ArchiGeoSharp.OpenNurbs.csproj`  
> 命名空间：`ArchiGeo.OpenNurbs`  
> 依赖：ArchiGeoSharp.Basic、RhinoCommon（Rhino 8）、Newtonsoft.Json

---

## 目录

- [1. 概述](#1-概述)
- [2. Coerce 几何互转（CoerceGeometryRhino）](#2-coerce-几何互转coercegeometryrhino)
  - [ArchiGeo → Rhino](#archigeo--rhino)
  - [Rhino → ArchiGeo](#rhino--archigeo)
- [3. JSON 互操作（ArchiGeoJsonAtRhino）](#3-json-互操作archigeojsonatrhino)
  - [Rhino → AgJson](#rhino--agjson)
  - [AgJson → Rhino 几何](#agjson--rhino-几何)
  - [统一入口 ToRgJson / ToCommonObject](#统一入口-torgjson--tocommonobject)
- [4. 典型用法](#4-典型用法)
- [5. 与 Basic 模块的关系](#5-与-basic-模块的关系)
- [6. 已知限制](#6-已知限制)

---

## 1. 概述

OpenNurbs 模块负责 **ArchiGeo 内核几何** 与 **RhinoCommon** 之间的互操作，采用 **Coerce 扩展方法** 模式，不引入 wrapper 类型，保持两侧原生 API 可用。

**两条数据通道：**

| 通道 | 用途 |
|------|------|
| **内存 Coerce** | 算法在 Basic 中计算，结果直接转 Rhino 显示/布尔 |
| **AgJson / RgJson** | 跨进程、持久化、与 Basic 共享 schema |

> **设计说明**：与 Basic 的 `ToAgJson()` 输出 schema 相同（共用 `ArchiJson*` DTO），OpenNurbs 侧负责 Rhino 类型的序列化/反序列化。

---

## 2. Coerce 几何互转（CoerceGeometryRhino）

`public static partial class CoerceGeometryRhino` — 全部为扩展方法。

### ArchiGeo → Rhino

| 扩展目标 | 方法 | 返回类型 | 说明 |
|----------|------|----------|------|
| `Point` | `ToRhinoGeometry()` | `Point3d` | 升维至 3D，6 位小数 |
| `Point` | `ToRhinoGeometryFloat()` | `Point3f` | float 精度 |
| `LineSeg` | `ToRhinoGeometry()` | `Line` | |
| `Polyline` | `ToRhinoGeometry()` | `Polyline` | 闭合时自动重复首点 |
| `IList<Point>` | `ToRhinoGeometry()` | `List<Point3d>` | |
| `PlaneExpr` / `Plane` / `Space3d` | `ToRhinoGeometry()` | `Plane` | Space3d 仅右手系 |
| `Box` / `BoxFlex` | `ToRhinoBrep()` | `Brep` | |
| `Prism` | `ToRhinoBrep()` | `Brep` | sweep + cap |
| `IMeshTriangle` | `ToRhinoBrep(division=10)` | `Brep` | |
| `MeshTriangle` | `ToRhinoMesh()` / `ToRhinoBrep(...)` | `Mesh` / `Brep` | |
| `MeshTriangle[]` | `ToRhinoMeshes()` / `ToRhinoMesh()` | 数组 / 合并 Mesh | |
| `ICurveUnit` | `ToRhinoCurve(sampleCount=64, trans=default)` | `Curve` | 分派入口 |
| `Arc` / `Circle` | `ToRhinoCurve(trans=default)` | `ArcCurve` | |
| `Polyline` | `ToRhinoCurve(trans=default)` | `PolylineCurve` | 可选 `Space3d` 变换 |
| `IPolyCurve` | `ToRhinoCurve(...)` | `PolyCurve` | 逐段 Append |
| `ICurveUnit` | `ToRhinoCurveGeneral(...)` | `Curve` | 采样 + 三次插值（兜底） |

```csharp
using ArchiGeo.OpenNurbs;
using ArchiGeo.Basic.Geometry;

Box box = new(Plane.PlaneXY, 10, 8, 3);
Rhino.Geometry.Brep brep = box.ToRhinoBrep();

Arc arc = new(p0, p1, Angle.FromDegree(0));
Rhino.Geometry.Curve curve = arc.ToRhinoCurve(trans: localSpace);
```

### Rhino → ArchiGeo

| 扩展目标 | 方法 | 返回类型 |
|----------|------|----------|
| `Point3d` / `Point3f` | `ToArchiGeometry()` | `Point` |
| `Line` | `ToArchiGeometry()` | `LineSeg` |
| `Polyline` | `ToArchiGeometry()` | `Polyline` |
| `Plane` | `ToArchiGeometry()` | `Plane` |
| `Mesh` | `ToArchiGeometry()` | `MeshTriangle` |

```csharp
Point agPt = rhinoPt.ToArchiGeometry();
Polyline agPoly = rhinoPoly.ToArchiGeometry();
```

**Polyline 闭合处理**：首尾 `TildeEqual` 时自动去尾点并设 `IsClosed=true`。

---

## 3. JSON 互操作（ArchiGeoJsonAtRhino）

`public static partial class ArchiGeoJsonAtRhino`

### 类型常量

```csharp
AgJsonTypes         // Vertices, Segments, Mesh, Plane, Cuboid, Prism, Sphere, Cylinder
AgJsonBrepableTypes // Mesh, Plane, Cuboid, Prism, Sphere, Cylinder
RgJsonTypes         // CommonObject, CommonCurve, CommonBrep, CommonMesh, CommonPoint
```

### Rhino → AgJson

| 扩展目标 | 方法 | JSON type |
|----------|------|-----------|
| `IList<Point3d>` | `ToAgJson()` | `Vertices` |
| `Polyline` | `ToAgJson()` | `Segments` |
| `Mesh` | `ToAgJson(triangleOnly=false)` | `Mesh` |
| `Plane` | `ToAgJson(length, width)` | `Plane` |
| `Box` | `ToAgJson()` | `Cuboid` |
| `Sphere` / `Cylinder` | `ToAgJson()` | `Sphere` / `Cylinder` |
| `Polyline` + `height` | `ToAgJson(profile, height)` | `Prism` |

### AgJson → Rhino 几何

| 方法 | 返回 | 支持 type |
|------|------|-----------|
| `ToRhinoPoint3dList(string)` | `List<Point3d>` | Vertices |
| `ToRhinoPolyline(string)` | `Polyline` | Segments |
| `ToRhinoMesh(string)` | `Mesh` | Mesh |
| `ToRhinoPlane(string)` | `Plane` | Plane |
| `ToRhinoBox(string)` | `Box` | Cuboid |
| `ToRhinoSphere(string)` | `Sphere` | Sphere |
| `ToRhinoCylinder(string)` | `Cylinder` | Cylinder |
| `ToRhinoBrep(string)` | `Brep` | Cuboid/Prism/Plane/Cylinder/Sphere |
| `ToRhinoPointList(string)` | `List<Rhino.Geometry.Point>` | Vertices（物件级） |

### 统一入口 ToRgJson / ToCommonObject

```csharp
// Rhino 原生 JSON 包装
string rgJson = rhinoBrep.ToRgJson();
// 格式：{ "type":"CommonObject", "main":"<Rhino ToJSON>" }

// 统一反序列化（AgJson 或 RgJson）
CommonObject obj = anyJson.ToCommonObject();
```

`ToCommonObject` 按 `type` 字段分派：AgJson 类型走语义解析，RgJson 类型走 `CommonObject.FromJSON`。

---

## 4. 典型用法

### 模式 A：内存互转（无 JSON）

```csharp
// 内核计算 → Rhino 显示
Rhino.Geometry.Brep brep = myPrism.ToRhinoBrep();

// Rhino 拾取 → 内核算法
Point pt = rhinoPt.ToArchiGeometry();
```

### 模式 B：与 Basic 流水线组合

```
ArchiGeo 几何 ──Basic.ToAgJson()──► JSON ──OpenNurbs.ToRhino*()──► Rhino
Rhino 几何 ──OpenNurbs.ToAgJson()──► JSON ──Basic.FromAgJson()──► ArchiGeo
```

### 模式 C：插件边界统一 JSON

```csharp
string json = rhinoMesh.ToAgJson(triangleOnly: true);
Rhino.Geometry.Mesh restored = json.ToRhinoMesh();
```

---

## 5. 与 Basic 模块的关系

| 层 | 模块 | 职责 |
|----|------|------|
| 内核 | Basic | ArchiGeo 类型 ↔ AgJson |
| 互操作 | OpenNurbs | Rhino 类型 ↔ ArchiGeo；Rhino ↔ AgJson/RgJson |

DTO（`ArchiJsonVertices` 等）定义在 Basic，详见 [basic.md](basic.md#14-序列化dto--archigeojson)。

---

## 6. 已知限制

| 项 | 状态 |
|----|------|
| `ToRhinoBrep` 对 `type=="Mesh"` | 分支未实现，返回空 Brep |
| `ToRhinoBrep` 对 Vertices/Segments | 抛出 `NotImplementedException` |
| BoxFlex/Pyramid/Cone/Frustum | `ToRhinoBrep` 占位，未实现 |
| `Polyline.ToAgJson(profile, height)` | 源码标注有问题，matrix 固定 WorldXY |
| `Space3d.ToRhinoGeometry` | 仅右手系 |
| `ToCommonObject` 对 Vertices | 未实现 |

---

## 参考

- [Basic API](basic.md)
- [Depute API](depute.md) — OSM 解析使用 Basic 侧 `ToAgJson()`
