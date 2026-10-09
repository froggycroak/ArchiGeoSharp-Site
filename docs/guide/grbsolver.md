# Solver 模块指南

> 模块：`src/grbsolver/ArchiGeoSharp.GRBSolver.csproj`  
> 命名空间：`ArchiGeo.GRBSolver`  
> 依赖：ArchiGeoSharp.Basic、Gurobi.Optimizer 10.0.3

---

## 1. 概述

Solver 模块基于 **Gurobi** 对 `AngleGrid`（角度场）做平滑优化：在标记约束下，最小化相邻格点方向差的平方和。

适用场景：
- 参数化设计中的方向场平滑
- 折线约束下的角度场生成
- 与 Raylex 联用可视化方向场与路径

> **设计说明**：优化变量为每个格点的 `(cos θ, sin θ)`，标记格点固定为输入值，目标函数为 x/y 方向相邻差分的方差和。

---

## 2. 前置条件

1. 安装 **Gurobi Optimizer** 并配置有效许可证
2. 项目引用 `Gurobi.Optimizer` NuGet 包（10.0.3）
3. 理解 Basic 模块中 `AngleGrid` 的约束 API（见 [AngleGrid](/api/basic/geometry/AngleGrid)）

---

## 3. AngleGridExtension2

`public static class AngleGridExtension2` — 全部为 `AngleGrid` / `Polyline` 扩展方法。

| 方法 | 签名 | 说明 |
|------|------|------|
| `SmoothGrid` | `(AngleGrid input, double timeLim=10) → AngleGrid` | 核心优化：标记格点固定，最小化邻域方差 |
| `PolySmoothGrid` | `(Polyline poly) → AngleGrid` | 按 poly AABB 自动建格（unit ≈ W/20），加 poly 约束后平滑 |
| `PolyAxisSmoothGrid` | `(Polyline poly, LineSeg[] axes, double[] buffers) → AngleGrid` | 同上 + 线段轴约束 |
| `PolyAxisSmoothGrid` | `(Polyline poly, ILineExpr[] axes, double[] buffers) → AngleGrid` | 同上 + 无限直线轴 |

### SmoothGrid 工作流程

```csharp
using ArchiGeo.GRBSolver;
using ArchiGeo.Basic.Geometry;

// 1. 创建角度场
AngleGrid input = new(20, 20, unitSize: 30);
input.InitMarkMatrix();

// 2. 添加约束（Basic 模块 API）
input.AddPolyConstraint(poly, bufferDist: 2.0);
input.AddRadialConstraint(center, radius, angle);
input.AddLineSegConstraint(lineSeg, bufferDist);

// 3. 优化
AngleGrid output = input.SmoothGrid(timeLim: 10);
```

**参数 `timeLim`：** Gurobi 求解时间上限（秒），默认 10。

---

## 4. 与 AngleGrid 约束 API 的配合

`SmoothGrid` 读取 `AngleGrid.ReadMark(i,j)` 为 `true` 的格点，将其 cos/sin 固定为输入值；未标记格点由优化器自由调整。

常用约束（定义于 Basic `AngleGrid` / `AngleGridExtension`）：

| 方法 | 说明 |
|------|------|
| `InitMarkMatrix()` | 初始化标记矩阵 |
| `AddPolyConstraint(poly, buffer)` | 多边形内部/边界约束 |
| `AddRadialConstraint(center, radius, angle)` | 径向约束 |
| `AddLineSegConstraint(seg, buffer)` | 线段附近约束 |

优化完成后，可用 Basic 的 `GenerateCrossRep`、`GenerateSinglePath` 等从角度场生成路径，再用 Raylex 绘制。

---

## 5. 典型用法

### 低级：手动建格 + 约束

```csharp
AngleGrid input = new(20, 20, 30);
input.InitMarkMatrix();
input.AddPolyConstraint(siteBoundary, bufferDist: 3);
AngleGrid output = input.SmoothGrid(timeLim: 15);
```

### 高级：一行从折线生成

```csharp
AngleGrid field = sitePoly.PolySmoothGrid();
```

### 带轴线约束

```csharp
LineSeg[] axes = { axis1, axis2 };
double[] buffers = { 5.0, 5.0 };
AngleGrid field = sitePoly.PolyAxisSmoothGrid(axes, buffers);
```

### 与 Raylex 可视化

```csharp
using ArchiGeo.Raylex;

AngleGrid field = poly.PolySmoothGrid();
LineSeg[] crossRep = field.GenerateCrossRep(30, 6);
Polyline path = field.GenerateSinglePath(startPt, step: 1, startAngle, maxLen: 100);

while (rw.Running)
{
    using var f = new Frame();
    rw.Draw(crossRep, RColor.Red);
    rw.Draw(path, RColor.Blue);
}
```

---

## 6. IGRBSolver 接口

```csharp
public interface IGRBSolver { }
```

当前为**占位接口**，无公开成员，预留后续扩展其他 Gurobi 求解场景。

---

## 参考

- [Basic — AngleGrid](/api/basic/geometry/AngleGrid)
- [Raylex 模块指南](/guide/raylex)
- 测试参考：`TestPool5`
