# ArchiGeoSharp.Raylex API 文档

> 模块：`src/raylex/ArchiGeoSharp.Raylex.csproj`  
> 命名空间：`ArchiGeo.Raylex`  
> 依赖：ArchiGeoSharp.Basic、Raylib-cs 7.0.1

---

## 目录

- [1. 概述](#1-概述)
- [2. 核心类型](#2-核心类型)
  - [RWindow](#rwindow)
  - [RColor / ViewType / Frame / RenderMode](#rcolor--viewtype--frame--rendermode)
- [3. 绘制 API](#3-绘制-api)
  - [Draw — 2D 线框](#draw--2d-线框)
  - [Fill — 2D 填充](#fill--2d-填充)
  - [Build — 3D 线框](#build--3d-线框)
  - [Render — 3D 实体](#render--3d-实体)
- [4. 交互拾取（Get*Process）](#4-交互拾取getprocess)
- [5. 视图与相机](#5-视图与相机)
- [6. 典型用法](#6-典型用法)
- [7. 使用约定](#7-使用约定)

---

## 1. 概述

Raylex 是基于 Raylib 的几何可视化与交互调试工具，直接接受 Basic 模块的几何类型，无需转 Rhino。

**两套渲染管线：**

| 管线 | 相机 | 用途 |
|------|------|------|
| **Draw / Fill** | `MiniCam`（2D 投影） | 平面几何、TOP 视图交互 |
| **Build / Render** | `RayCam`（3D 透视/正交） | 体、网格、3D 线框 |

> **设计说明**：每帧必须用 `Frame` 包裹；3D 绘制必须嵌套 `RenderMode`。`BuildRate` 控制 3D 坐标缩放，避免大坐标精度问题。

---

## 2. 核心类型

### RWindow

主窗口类（partial，分散在多个文件）。

**构造与生命周期：**

```csharp
RWindow rw = new(800, 800, "demo");
rw.SetTargetFPS(60);
rw.SetBackgroundColor(RColor.White);
// 循环结束后 rw.Dispose()
```

| 成员 | 说明 |
|------|------|
| `Running` | 窗口是否仍在运行 |
| `Lastest` | 静态，最近创建的实例 |
| `MiniCam` | 2D 投影用 `Space3d` |
| `BuildRate` / `SetBuildRate(rate)` | 3D 坐标缩放比 |
| `GetSuggestedBuildRate(points)` | 静态，按点集范围建议 buildRate |

**坐标转换：**

| 方法 | 说明 |
|------|------|
| `Point2Pixel(pt)` | 世界 → 屏幕像素 |
| `Pixel2Point(pixel, z=0)` | 屏幕 → 世界点 |

**鼠标：**

| 成员 | 说明 |
|------|------|
| `MouseLeft/Right/Middle` + `Pressed/Released/Down/Up` | 按钮状态 |
| `MouseWheelMove` | 滚轮增量 |
| `UpdateZoomByMouseWheel(zoomStep=0.1f)` | 滚轮缩放 |
| `UpdatePanByMiddleDrag(panSensitivity=1f)` | 中键拖拽平移 |

**文本：**

```csharp
RWindow.SetGeneralFontPath("C:/Windows/Fonts/msyh.ttc");  // CJK 支持
rw.InsertText("标签", screenX, screenY, fontSize: 16, RColor.Black);
```

### RColor / ViewType / Frame / RenderMode

**RColor：** RGBA 封装，含 `Red`、`Blue`、`White` 等预设，隐式转 `Raylib_cs.Color`。

**ViewType：** 标准视图 `TOP`、`FRONT`、`TBR`（等轴测）等 14 种。

```csharp
rw.SetViewByType(ViewType.TOP, new Point(400, 400, 0), scale: 1);
// 或
Space3d view = ViewTypes.View(ViewType.TBR, pos, scale);
```

**Frame / RenderMode：** 实现 `IDisposable`，用 `using` 包裹每帧绘制。

```csharp
using var f = new Frame();           // BeginDrawing / EndDrawing
using var rm = new RenderMode(rw);   // BeginMode3D / EndMode3D
```

---

## 3. 绘制 API

### Draw — 2D 线框

使用 `MiniCam`，适合平面几何。**圆/弧仅 TOP 视图正确显示。**

| 方法 | 支持类型 |
|------|----------|
| `Draw(Point, radius, color)` | 点（radius=0 为像素） |
| `Draw(LineSeg, color)` | 线段 |
| `Draw(IPoly, color)` | 多边形/折线 |
| `Draw(ICircleExpr, color)` | 圆 |
| `Draw(Arc, color)` | 弧 |
| `Draw(SmoothArcSeries, color)` | G1 圆弧序列 |
| `DrawICurve(ICurveUnit, color, divisions=10)` | 通用曲线 |
| `DrawAxis(length)` | RGB 坐标轴 |

均提供 `IEnumerable<T>` 重载。

### Fill — 2D 填充

| 方法 | 说明 |
|------|------|
| `Fill(ICircleExpr, color)` | 实心圆 |
| `Fill(pt1, pt2, pt3, color)` | 三角形 |
| `Fill(Rect, color)` | 矩形 |

### Build — 3D 线框

在 `RenderMode` 内调用，受 `BuildRate` 缩放。

| 方法 | 支持类型 |
|------|----------|
| `Build(Point, color)` | 3D 点 |
| `Build(LineSeg, color)` | 线段 |
| `Build(Arc, Plane/color, color)` | 弧（可指定平面） |
| `Build(SmoothArcSeries, Plane/color, color)` | 圆弧序列 |
| `Build(IPoly, color)` | 多边形线框 |
| `BuildAxis(length)` | 3D 坐标轴 |

### Render — 3D 实体

| 方法 | 说明 |
|------|------|
| `RenderBox(Box, renderColor, buildColor)` | 立方体 + 线框 |
| `Render(IMeshTriangle, renderColor, buildColor, divisions=10)` | 三角网格 |
| `Render(IList<IMeshTriangle>, ...)` | 多网格 |

`buildColor = default` 时不画边线。

---

## 4. 交互拾取（Get*Process）

基于 `ref bool start/end` 状态机，左键拾取、右键结束。

| 方法 | 说明 |
|------|------|
| `GetPoint()` | MiniCam 平面交点 |
| `GetPointRay(PlaneExpr? targetPlane)` | RayCam 射线与平面交点 |
| `GetPointProcess(ref start, ref end, ref pt)` | 单点（MiniCam） |
| `GetPointListProcess(...)` | 多点 |
| `GetPolylineProcess(..., close, shift2d)` | 折线 |
| `GetPointProcessRay(...)` | RayCam 单点 |
| `GetPolylineProcessRay(...)` | RayCam 折线 |
| `GetText(title, message, defaultText, maxLength)` | 文本输入对话框 |

**拾取圆（两步）：**

```csharp
// RWindowGetCircle 扩展
rw.GetCircleProcess(ref start, ref end, ref circle);
// 第一步选中心，第二步选半径
```

---

## 5. 视图与相机

**2D 交互视图：**

```csharp
rw.SetViewByType(ViewType.TOP, centerPt, scale: 1);
```

**3D 正交视图：**

```csharp
float buildRate = RWindow.GetSuggestedBuildRate(focusPoints);
rw.SetOrthoRenderView(center, cameraDir, visibleSize, buildRate);
```

**3D 透视视图：**

```csharp
rw.SetPersRenderView(cameraPos, targetPos, fov: 45);
rw.UpdateCamera(cameraModeIndex: 2);  // 0=Custom, 2=Orbital
```

---

## 6. 典型用法

### 2D 交互绘制

```csharp
using ArchiGeo.Raylex;
using ArchiGeo.Basic.Geometry;

RWindow rw = new(800, 800, "demo");
rw.SetViewByType(ViewType.TOP, new Point(400, 400, 0), 1);

bool start = true, end = false;
Polyline poly = new();

while (rw.Running)
{
    using var f = new Frame();
    rw.SetBackgroundColor(RColor.White);
    rw.DrawAxis(100);
    rw.GetPolylineProcess(ref start, ref end, ref poly);
    if (end) rw.Draw(poly, RColor.Red);
}
```

### 3D 体渲染

```csharp
RWindow rw = new(1200, 800, "3d");
rw.SetOrthoRenderView(center, new Vector(-1,-1,-1), visibleSize, buildRate);

while (rw.Running)
{
    using var f = new Frame();
    rw.UpdatePanByMiddleDrag();
    rw.UpdateZoomByMouseWheel();
    rw.SetBackgroundColor(RColor.White);

    using var rm = new RenderMode();
    {
        rw.Render(prism, RColor.LightGray, RColor.DarkGray);
        rw.Build(roads, RColor.Red);
        rw.BuildAxis(120);
    }
}
```

### 与 GRBSolver 联用

```csharp
AngleGrid field = poly.PolySmoothGrid();
LineSeg[] crossRep = field.GenerateCrossRep(30, 6);
rw.Draw(crossRep, RColor.Red);
```

---

## 7. 使用约定

1. **每帧** `using var f = new Frame()` 包裹所有绘制
2. **3D 绘制** 必须嵌套 `using var rm = new RenderMode()`
3. `Draw*` 用 `MiniCam`；`Build*` / `Render*` 用 `RayCam`
4. 圆/弧的 `Draw` 仅在 **TOP 视图** 下正确
5. 交互流程依赖 `ref bool start/end` 状态机；中键可重置流程
6. `EnableExternalCommands()` 后，`ReceiveExternal.DrawAtRWindow(pt)` 可在外部触发绘制

---

## 参考

- [Basic API](basic.md)
- [GRBSolver API](grbsolver.md)
- [Depute API](depute.md) — OSM 结果可视化
