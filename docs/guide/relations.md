# 相对关系

`Relation` 回答的是「主体相对参照在哪里」，不计算交点坐标。交点仍用 [Intersection](/api/basic/transform/Intersection)。所有判定都是 `ArchiGeo.Basic.Transform` 里的扩展方法，返回同一种 `RelationType`。

```csharp
using ArchiGeo.Basic.Geometry;
using ArchiGeo.Basic.Transform;

Line xAxis = new(new Point(0, 0), new Vector(1, 0));
RelationType side = new Point(0, 1).Relate(xAxis); // INSIDE：沿 +X 看在左侧
```

第一个参数是主体。`a.Relate(b)` 为 `INSIDE` 表示 **a 在 b 内**（或在有向直线的左侧），不是反过来。容差是 `Relation.Tolerance`，默认 `1e-10`。

实现拆在四个文件里，对外仍是一个 `partial class Relation` 加一个 `RelationType`：

| 文件 | 内容 |
|------|------|
| `RelationType.cs` | 八种标准关系，以及组合谓词 |
| `Relation1.cs` | `On`：点是否落在直线、线段或多边形边界上 |
| `Relation2.cs` | 点 / 线段 / 多边形，以及点、线相对圆 |
| `Relation3.cs` | 圆相对多边形、圆相对圆 |

## 两种「内」

同一个 `INSIDE` 在两种参照上含义不同。

**有向直线没有封闭内部。** 沿前进方向看，左侧是 `INSIDE`（`Substitute > 0`），右侧是 `OUTSIDE`。这与逆时针闭合多边形的内侧一致：每条边的左正侧朝向区域内部。侧向公式见 [LineExpr](/api/basic/geometry/LineExpr)。

**闭合多边形和圆才有拓扑内外。** 这时 `INSIDE` / `OUTSIDE` 表示在区域里还是区域外，`ONEDGE` 表示在边界上。

`new LineExpr(pt1, pt2)` 的系数符号与「过点 + 方向」相反，左右会颠倒。需要和 `Relation` 一致时，用 `Line`、`new LineExpr(basePt, direction)`，或已有曲线的 `Expr`。

## RelationType

标准关系不是松散枚举，而是四位布尔：

| 位 | 字段 | 为真时 |
|----|------|--------|
| `0b1000` | `inside` | 内侧 / 左侧 |
| `0b0100` | `outside` | 外侧 / 右侧 |
| `0b0010` | `around` | 主体包住参照 |
| `0b0001` | `cross` | 严格分离或真正相交；为假则表示贴边 |

`inside`、`outside`、`around` 在标准态里至多一个为真。三者全假时没有侧向：`cross` 为假是重合（`ONEDGE`），为真是相交（`CROSS`）。四位全真是 `INVALID`，用来兜住分支持不下去的组合。

因此八种标准态两两成对，差的只是「贴边」还是「严格」：

| 名称 | 二进制 | `Index` | 严格？ | 含义 |
|------|--------|---------|--------|------|
| `ONEDGE` | `0000` | `0` | 贴边 | 共线、重合，或落在边界上 |
| `CROSS` | `0001` | `2` | 严格 | 相交、跨界 |
| `ONAROUNDEDGE` | `0010` | `-4` | 贴边 | 环绕并贴住对方 |
| `AROUND` | `0011` | `-2` | 严格 | 主体包住参照，边界不接触 |
| `ONOUTSIDEEDGE` | `0100` | `-3` | 贴边 | 在外侧并贴边 |
| `OUTSIDE` | `0101` | `-1` | 严格 | 在外侧 / 右侧，且不接触 |
| `ONINSIDEEDGE` | `1000` | `3` | 贴边 | 在内侧并贴边 |
| `INSIDE` | `1001` | `1` | 严格 | 在内侧 / 左侧，且不接触 |

`Index` 是为端点侧向的乘积准备的，不是二进制本身。点相对直线只会出现三个值：

| 点的位置 | `Index` |
|----------|---------|
| 线上 | `0` |
| 左侧 | `1` |
| 右侧 | `-1` |

线段两端点的 `Index` 记为 `i1`、`i2` 后：

| 条件 | 线段相对直线 |
|------|----------------|
| `i1 * i2 < 0` | `CROSS`，两端异侧 |
| `i1 * i2 > 0` 且和为正 | `INSIDE`，整段在左侧 |
| `i1 * i2 > 0` 且和为负 | `OUTSIDE`，整段在右侧 |
| 两端都是 `0` | `ONEDGE`，与直线共线 |
| 乘积为 `0` 且和为正 | `ONINSIDEEDGE`，一端在线上，另一端在左 |
| 乘积为 `0` 且和为负 | `ONOUTSIDEEDGE`，一端在线上，另一端在右 |

```csharp
Line axis = new(new Point(0, 0), new Vector(1, 0));
LineSeg rising = new(new Point(-1, -1), new Point(1, 1));

int i1 = rising.StartPt.Relate(axis).Index; // -1，右侧
int i2 = rising.EndPt.Relate(axis).Index;   //  1，左侧
RelationType rel = rising.Relate(axis);     // CROSS
```

`FromIndex` 只接受 `-4` 到 `3`。`IsRegistered` 用来认出这八个码。`ToString()` 会带上名称和二进制，例如 `RelationType[Name: INSIDE, Binary: 1001]`。二进制字符串不补前导零，`ONEDGE` 打印出来是 `0`。

组合谓词把成对的态收成一组，后面的线段 / 多边形判定会用到：

| 谓词 | 为真的标准态 |
|------|----------------|
| `IsAnywayInside` | `INSIDE`、`ONINSIDEEDGE` |
| `IsAnywayOutside` | `OUTSIDE`、`ONOUTSIDEEDGE` |
| `IsAnywayAround` | `AROUND`、`ONAROUNDEDGE` |
| `IsAnywayOnEdge` | 四个 `cross = 0` 的贴边态 |
| `IsAnySide` | 严格的 `INSIDE`、`OUTSIDE`、`AROUND` |
| `IsIntersect` | `CROSS`，以及任意贴边态 |
| `IsOverlap` | `CROSS`、`INSIDE`、`AROUND` |

`IsAnywayOverlap` 的注释写了「再算上贴边」，当前实现与 `IsOverlap` 是同一个表达式，贴边不算进去。

## On 与 Relate

`On` 只回答边界成员关系，不区分内外：

| 调用 | 为真当 |
|------|--------|
| `pt.On(lineExpr)` | 点到直线的代入值绝对值 ≤ 容差 |
| `pt.On(lineSeg)` | 在承载直线上，且参数 `t ∈ [0, 1]` |
| `pt.On(poly)` | 落在任意一条边上 |

`Relate` 才返回 `RelationType`。能用 `On` 收束的问题不必走完整关系。

## 点

```csharp
Line axis = new(new Point(0, 0), new Vector(1, 0));
new Point(0, 1).Relate(axis);   // INSIDE
new Point(0, -1).Relate(axis);  // OUTSIDE
new Point(3, 0).Relate(axis);   // ONEDGE

LineSeg seg = new(new Point(0, 0), new Point(2, 0));
new Point(1, 0).Relate(seg);    // ONEDGE
new Point(3, 0).Relate(seg);    // OUTSIDE，线段没有「内部」
```

点对闭合多边形用射线法：先把几何收到二维，向右发出水平射线，穿越边界奇数次为 `INSIDE`。点落在某条边上则直接 `ONEDGE`。折线必须闭合且至少 3 个顶点，否则抛 `ArgumentException`。

`Polyline(params Point[])` 默认**不闭合**，只有首尾点相同才会自动闭合并去掉重复尾点。点在多边形内的判定要显式闭合：

```csharp
Polyline square = new(
    new Point[]
    {
        new(0, 0), new(2, 0), new(2, 2), new(0, 2)
    },
    isClosed: true);

new Point(1, 1).Relate(square); // INSIDE
new Point(0, 1).Relate(square); // ONEDGE
new Point(3, 1).Relate(square); // OUTSIDE
```

相邻重合顶点会被跳过。开放折线没有这一套内外判定。

## 线段与直线

`lineSeg.Relate(lineExpr)` 就是上一节的端点 `Index` 乘积，六种返回值都可能出现。

多边形对直线不看边是否穿过直线，只统计顶点落在左、右、线上的个数：

| 顶点分布 | 返回 |
|----------|------|
| 左右都有 | `CROSS` |
| 全在左 | `INSIDE` |
| 全在右 | `OUTSIDE` |
| 在左或在线上 | `ONINSIDEEDGE` |
| 在右或在线上 | `ONAROUNDEDGE` |
| 全在线上 | `ONEDGE` |

「全在右或在线上」的源码注释写成了 `ONOUTSIDEEDGE`，实际返回 `ONAROUNDEDGE`。

## 线段与线段

先看每条线段相对另一条的承载直线，再处理共线。判定顺序会把很多「看起来只是碰上」的情况提前收成 `CROSS` 或 `OUTSIDE`。

| 返回 | 条件 |
|------|------|
| `OUTSIDE` | 至少一条线段严格落在另一条直线的某一侧；或共线但区间不相交；或只是顶在直线的延长线上、并未落在线段内 |
| `CROSS` | 至少一条线段的两端点严格分居另一条直线两侧。真交叉是这种；端点落在对方线段**内部**的 T 形也是这种，因为被顶住的那条线段跨在主体直线两侧 |
| `ONEDGE` | 共线并且区间有交集 |
| `ONOUTSIDEEDGE` | 双方都只是贴住对方直线（通常是共用一个顶点），且该顶点落在对方线段上 |

`ONAROUNDEDGE` 在源码里有一支，注释写的是「对方顶在主体上，且不是共用顶点」。它排在 `CROSS` 和主体贴边之后：只要 `Relate(直线)` 的结果都是那六种标准态，这一支到不了。共用顶点走 `ONOUTSIDEEDGE`，T 形走 `CROSS`。

`RelateSimp` 把贴边细分收掉，只留 `OUTSIDE`、`CROSS`、`ONEDGE`。没有严格分侧、也没有 `CROSS` 时，只要有端点落在对方线段上，简化结果就是 `ONEDGE`。共用顶点在完整接口里是 `ONOUTSIDEEDGE`，在简化接口里变成 `ONEDGE`。

## 线段与多边形、多边形与多边形

`lineSeg.RelateSimp(poly)` 只保留三种结果，外加一种兜底：

- 与每条边都外离，且两端点都在多边形内 → `INSIDE`
- 与每条边都外离，且两端点都在外 → `OUTSIDE`
- 与任意边相交、共线重叠或贴边 → `CROSS`
- 与每条边都外离，但两端点并不是同在内部或同在外部 → `INVALID`

`lineSeg.Relate(poly)` 在此之上保留贴边。两端都在边界上且与某边共线重叠可以是 `ONEDGE`；只是从外侧或内侧抵住边界、没有穿入，则是 `ONOUTSIDEEDGE` / `ONINSIDEEDGE`。穿边或穿过顶点归 `CROSS`。内部一致性对不上时返回 `INVALID`，个别组合会抛异常。

`poly1.RelateSimp(poly2)` 先看主体每条边相对对方的简化关系：

| 返回 | 条件 |
|------|------|
| `INSIDE` | 主体每条边都在对方内部 |
| `AROUND` | 主体每条边都在对方外部，且对方每个顶点都在主体内部 |
| `OUTSIDE` | 主体每条边都在对方外部，但对方并不被主体包住 |
| `CROSS` | 其余情况，包括边界相交 |

边与边相切、共线重叠都会落到 `CROSS`，简化接口不再区分贴边。`IPoly.Relate(IPoly)` 的完整版本仍在源码里注释为 ON CONSTRUCTION，尚未公开。

## 圆

点到圆心的距离与半径比较：小于为 `INSIDE`，在容差内为 `ONEDGE`，大于为 `OUTSIDE`。

直线相对圆只有三种结果，因为直线自己没有「圆内」：

| 返回 | 条件 |
|------|------|
| `CROSS` | 圆心到直线的距离 < 半径 |
| `ONEDGE` | 距离与半径之差在容差内（相切） |
| `OUTSIDE` | 相离 |

线段再看两个端点：整段都在圆内才是 `INSIDE`；圆心到线段的距离小于半径但端点不全在圆内，则是 `CROSS`（穿过或一端在外）。相切为 `ONEDGE`，整段在外为 `OUTSIDE`。

`circle.Relate(poly)` 先看圆心是否在多边形上（是则 `CROSS`），再统计各边相对圆是在内、在外还是相切：

| 返回 | 大致情形 |
|------|----------|
| `AROUND` | 各边都在圆内，多边形被圆包住 |
| `INSIDE` | 各边都在圆外，且圆心在多边形内 |
| `OUTSIDE` | 各边都在圆外，且圆心在多边形外 |
| `ONINSIDEEDGE` | 内切：圆心在内，或各边在圆内并有相切 |
| `ONOUTSIDEEDGE` | 外切：圆心在外且有边相切 |
| `ONAROUNDEDGE` | 各边都与圆相切 |
| `CROSS` | 圆心在边界上，某边穿过圆，或边同时落在圆内和圆外并有相切 |

边同时落在圆内和圆外、但又没有任何一条被判成 `CROSS` 或相切时，返回 `INVALID`（源码注释认为这本应是相交，但相交分支已经在前面返回过了）。

两圆以**调用方**为主体，半径更大的一方在内含时取环绕态：

| 返回 | 情形 |
|------|------|
| `OUTSIDE` | 外离 |
| `ONOUTSIDEEDGE` | 外切 |
| `CROSS` | 两圆相交 |
| `ONINSIDEEDGE` | 内切，主体半径更小 |
| `INSIDE` | 内含，主体在对方内部 |
| `ONAROUNDEDGE` | 内切，主体半径更大 |
| `AROUND` | 内含，主体包住对方 |

相交分支的下界目前写成 `Math.Abs(c1.Radius - c1.Radius)`，结果恒为 `0`。因此只要 `0 < d < r1 + r2` 就会先返回 `CROSS`，圆心分开的内含、内切走不到后面的分支。同心（`d ≈ 0`）以及外离、外切不受影响。

```csharp
Circle big = new(new Point(0, 0), 3);
Circle far = new(new Point(10, 0), 1);
big.Relate(far); // OUTSIDE

Circle inner = new(new Point(0, 0), 1);
big.Relate(inner); // AROUND，两圆心重合
inner.Relate(big); // INSIDE
```

## 怎么选

| 问题 | 调用 |
|------|------|
| 点在不在边界上 | `On` |
| 点在直线左、右或线上 | `pt.Relate(line)` |
| 点在闭合多边形内、外或边上 | `pt.Relate(poly)` |
| 线段是否穿过直线，要不要区分贴住哪一侧 | `lineSeg.Relate(line)` |
| 两线段只关心离、交、共线重叠 | `RelateSimp` |
| 两线段还要区分共用顶点和真交叉 | `Relate` |
| 线段或多边形是否完全落在另一个多边形内 | `RelateSimp` |
| 两圆的外离、相交、包含 | `circle.Relate(other)`，注意上一节的内含分支 |

侧向约定的速查见 [RelationType](/api/basic/transform/RelationType)。
