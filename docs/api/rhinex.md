# ArchiGeoSharp.Rhinex API 文档

> 模块：`src/rhinex/ArchiGeoSharp.Rhinex.csproj`  
> 命名空间：`ArchiGeo.Nurbs`  
> 依赖：ArchiGeoSharp.Basic、RhinoCommon（Rhino 8）

---

## 目录

- [1. 概述](#1-概述)
- [2. 当前 API](#2-当前-api)
- [3. 与 OpenNurbs 的区别](#3-与-opennurbs-的区别)
- [4. 后续规划](#4-后续规划)

---

## 1. 概述

Rhinex 模块面向 **Rhino 文档上下文** 的几何绑定，与 OpenNurbs（纯几何 Coerce）形成互补：

| 模块 | 职责 |
|------|------|
| **OpenNurbs** | ArchiGeo ↔ Rhino 几何类型互转、JSON 序列化 |
| **Rhinex** | Rhino 文档（`RhinoDoc`）与 ArchiGeo 参考系的绑定（**开发中**） |

> **状态说明**：当前版本 API 极少，仅有两个占位类，代码库内尚无业务引用。文档标注为 **WIP（开发中）**，后续可能扩展文档空间变换、物件同步等能力。

---

## 2. 当前 API

### RefSpace

绑定 Rhino 文档与 ArchiGeo 参考坐标系。

```csharp
using ArchiGeo.Nurbs;
using Rhino;

RefSpace space = new();                    // 绑定 RhinoDoc.ActiveDoc，参考系 WorldXY
RefSpace space2 = new(customDoc);          // 指定文档
```

**内部状态（私有）：**
- `_doc` — `RhinoDoc`
- `_ref` — `Space3d.WorldXY`（默认参考系）

当前无公开 accessor 或方法。

### DocSpace

绑定 Rhino 文档，不含参考系。

```csharp
DocSpace docSpace = new();                 // RhinoDoc.ActiveDoc
DocSpace docSpace2 = new(customDoc);
```

**内部状态（私有）：** `_doc` — `RhinoDoc`

当前无公开 accessor 或方法。

---

## 3. 与 OpenNurbs 的区别

```
┌─────────────────────────────────────────────────────────┐
│  OpenNurbs（已实现）                                      │
│  Point.ToRhinoGeometry() / Point3d.ToArchiGeometry()    │
│  无 Rhino 文档依赖，可在 Console / 任意环境使用              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Rhinex（WIP）                                           │
│  RefSpace / DocSpace — 需 Rhino 运行时 + ActiveDoc       │
│  目标：文档级坐标系、物件与 ArchiGeo 算法联动               │
└─────────────────────────────────────────────────────────┘
```

如需在 Console 或非 Rhino 环境做几何互转，请使用 [OpenNurbs API](opennurbs.md)。

---

## 4. 后续规划

预期扩展方向（尚未实现）：

- `RefSpace` 公开 `BaseSpace` / `Doc` 属性
- 文档坐标系 ↔ ArchiGeo `Plane` / `Space3d` 同步
- Rhino 物件与 ArchiGeo 几何的双向绑定
- 与 Grasshopper / Rhino 插件工作流集成

---

## 参考

- [OpenNurbs API](opennurbs.md)
- [Basic API](basic.md)
