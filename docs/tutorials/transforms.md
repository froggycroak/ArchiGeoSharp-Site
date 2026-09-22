# 坐标系与变换

ArchiGeoSharp 将 **几何对象** 与 **坐标系/变换** 统一在同一套类型上，而不是拆成独立的 `Transform` 工具类。

## 核心心智模型

1. **`Plane`**：无缩放的三维正交右手系（刚体位姿），由基点 `BasePt` 与旋转 `AngleTripple` 组成。
2. **`Space3d`**：可含缩放的空间描述，同样可作为变换参与组合。
3. **绝对 / 相对描述**：
   - `AbsoluteDescribe`：局部 → 世界
   - `RelativeDescribe`：世界 → 局部
4. **运算符**（常见约定）：
   - `*` / `/`：局部 ↔ 世界映射或位姿复合
   - `%`：投影
   - `!`：逆变换

## 示例：局部点到世界点

```csharp
using ArchiGeo.Basic.Geometry;
using ArchiGeo.Basic.Transform;

Plane plane = new(new Point(0, 0, 0), new Vector(1, 0, 0), new Vector(0, 1, 0));
Point local = new(2, 3, 0);
Point world = plane.AbsoluteDescribe(local);
```

## 示例：位姿复合

```csharp
Space3d move = Space3d.Translation(new Vector(10, 0, 0));
Plane moved = plane * move;
// moved.BasePt ≈ (10, 0, 0)
```

更完整的类型说明见 [Basic API](/api/basic)。
