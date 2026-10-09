# 快速上手

ArchiGeoSharp.Basic 是面向建筑几何与计算设计的 C# 几何内核，当前以 **NuGet 专有包** 形式发布（二进制经 Release 混淆，公共 API 保留）。

## 环境

- .NET SDK 7.0+（包同时提供 `net7.0` 与 `net48`）
- Windows / 跨平台均可消费 `net7.0` 目标

## 安装

```bash
dotnet add package ArchiGeoSharp.Basic
```

NuGet：[ArchiGeoSharp.Basic](https://www.nuget.org/packages/ArchiGeoSharp.Basic)

## 最小示例

创建平面并做几何变换：

```csharp
using ArchiGeo.Basic.Geometry;
using ArchiGeo.Basic.Transform;

Point basePt = new(0, 0, 0);
Vector xDir = new(1, 0, 0);
Vector yDir = new(0, 1, 0);

Plane plane = new(basePt, xDir, yDir);

Point local = new(2, 3, 0);
Point world = plane.AbsoluteDescribe(local);   // 局部点 -> 世界坐标

Space3d move = Space3d.Translation(new Vector(10, 0, 0));
Plane moved = plane * move;                    // 位姿复合
```

## 下一步

- [坐标系与变换](/guide/transforms)
- [相对关系](/guide/relations)
- [Basic API（Geometry / Transform / Numeric / Topology）](/api/basic-geometry)
- [扩展模块指南](/guide/modules)（Depute / OpenNurbs / Raylex / Solver）
- [许可说明](/license)
