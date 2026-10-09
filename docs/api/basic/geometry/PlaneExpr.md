---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# PlaneExpr structure

三维平面隐式方程 Ax + By + Cz + D = 0（无原点定义，不能 Absorb 点）。

```csharp
public struct PlaneExpr : IPlaneExpr
```

## Public Members

| name | description |
| --- | --- |
| PlaneExpr(…) | 由系数构造平面方程。 (4 constructors) |
| A { get; } | 系数 A。 |
| B { get; } | 系数 B。 |
| C { get; } | 系数 C。 |
| D { get; } | 系数 D。 |
| Expr { get; } |  |
| ZDir { get; } | 单位法向。 |
| Contain(…) | 判断点是否在平面上（容差内）。 |
| operator % | 投影运算符：将点投影到平面上。 (2 operators) |

### PlaneExpr.A property

系数 A。

```csharp
public double A { get; }
```

### PlaneExpr.B property

系数 B。

```csharp
public double B { get; }
```

### PlaneExpr.C property

系数 C。

```csharp
public double C { get; }
```

### PlaneExpr.Contain method

判断点是否在平面上（容差内）。

```csharp
public bool Contain(Point pt, double tolerance = 1E-06m)
```

| parameter | description |
| --- | --- |
| pt | 待测点（须为 3D）。 |
| tolerance | 容差。 |

#### Return Value

在平面上则为 `true`。

### PlaneExpr.D property

系数 D。

```csharp
public double D { get; }
```

### PlaneExpr.Expr property

```csharp
public PlaneExpr Expr { get; }
```

### PlaneExpr Modulus operator (1 of 2)

投影运算符：将点投影到平面上。

```csharp
public static Point operator %(Point pt, PlaneExpr plane)
```

### PlaneExpr Modulus operator (2 of 2)

投影运算符：将向量投影到平面（去掉法向分量）。

```csharp
public static Vector operator %(Vector vec, PlaneExpr planeExpr)
```

### PlaneExpr constructor (1 of 4)

由 XY 平面上的二维直线与三维点构造竖直面/倾斜面。

```csharp
public PlaneExpr(LineExpr le, Point pt)
```

| parameter | description |
| --- | --- |
| le | 基于 XoY 的二维直线方程。 |
| pt | 三维点。 |

### PlaneExpr constructor (2 of 4)

由平面上一点与法向构造。

```csharp
public PlaneExpr(Point basePt, Vector zDir)
```

| parameter | description |
| --- | --- |
| basePt | 平面上一点。 |
| zDir | 法向。 |

### PlaneExpr constructor (3 of 4)

由三点确定平面。

```csharp
public PlaneExpr(Point pt1, Point pt2, Point pt3)
```

| parameter | description |
| --- | --- |
| pt1 | 点 1。 |
| pt2 | 点 2。 |
| pt3 | 点 3。 |

### PlaneExpr constructor (4 of 4)

由系数构造平面方程。

```csharp
public PlaneExpr(double a, double b, double c, double d)
```

| parameter | description |
| --- | --- |
| a | A。 |
| b | B。 |
| c | C。 |
| d | D。 |

### PlaneExpr.ZDir property

单位法向。

```csharp
public Vector ZDir { get; }
```
