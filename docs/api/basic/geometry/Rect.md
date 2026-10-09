---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# Rect class

平面内有向矩形；`PlaneSeg` 可视为嵌入三维的矩形面片。

```csharp
public class Rect : IPoly, IRect
```

## Public Members

| name | description |
| --- | --- |
| Rect(…) | 由中心、宽高、朝向角与手系构造矩形。 |
| static FromCorner(…) | 由某一角点、尺寸与朝向推算中心并构造矩形。 |
| Angle { get; set; } | W 方向角（与 `WDirAngle` 相同，历史命名）。 |
| AntiClockwise { get; } | 与 `RightHanded` 同义。 |
| Area { get; } | 面积 W×D。 |
| BasePt { get; } | 局部坐标系下「左下/左上」基准角（取决于手系）。 |
| Center { get; set; } |  |
| Corners { get; } | 四角点：右手系 [LB,RB,RT,LT]；左手系顺序反转。 |
| D { get; } |  |
| DDir { get; } |  |
| DDirAngle { get; } | D 边方向角（由手系决定 ±90°）。 |
| IsConvex { get; } | 矩形恒为凸。 |
| KeyCorner { get; } |  |
| Pts { get; } | 角点列表（与 `Corners` 相同）。 |
| RightHanded { get; } | 是否为右手系（W×D 与法向一致）。 |
| ToPoly { get; } | 转为闭合折线。 |
| W { get; } |  |
| WDir { get; } |  |
| WDirAngle { get; set; } | W 边方向角。 |
| GetCousin(…) | 同一个矩形的8种不同的有向表示方法 |
| GetPoint(…) | 按循环索引取角点（模 4）。 |
| override ToString() |  |

### Rect.Angle property

W 方向角（与 `WDirAngle` 相同，历史命名）。

```csharp
public Angle Angle { get; set; }
```

### Rect.AntiClockwise property

与 `RightHanded` 同义。

```csharp
public bool AntiClockwise { get; }
```

### Rect.Area property

面积 W×D。

```csharp
public double Area { get; }
```

### Rect.BasePt property

局部坐标系下「左下/左上」基准角（取决于手系）。

```csharp
public Point BasePt { get; }
```

### Rect.Center property

```csharp
public Point Center { get; set; }
```

### Rect.Corners property

四角点：右手系 [LB,RB,RT,LT]；左手系顺序反转。

```csharp
public Point[] Corners { get; }
```

### Rect.D property

```csharp
public double D { get; }
```

### Rect.DDir property

```csharp
public Vector DDir { get; }
```

### Rect.DDirAngle property

D 边方向角（由手系决定 ±90°）。

```csharp
public Angle DDirAngle { get; }
```

### Rect.FromCorner method

由某一角点、尺寸与朝向推算中心并构造矩形。

```csharp
public static Rect FromCorner(Point corner, double width, double height, Angle angle, 
    bool rightHanded = true)
```

| parameter | description |
| --- | --- |
| corner | 基准角点。 |
| width | 宽度 W。 |
| height | 深度 D（参数名 height 与 D 同义）。 |
| angle | W 方向角。 |
| rightHanded | 手系。 |

#### Return Value

对应矩形。

### Rect.GetCousin method

同一个矩形的8种不同的有向表示方法

```csharp
public Rect GetCousin(int t)
```

| parameter | description |
| --- | --- |
| t | 变体编号 0–7（每 90° 旋转/镜像/换轴的一种等价表示）。 |

#### Return Value

几何等价、参数化不同的矩形。

### Rect.GetPoint method

按循环索引取角点（模 4）。

```csharp
public Point GetPoint(int index)
```

| parameter | description |
| --- | --- |
| index | 角点索引。 |

#### Return Value

角点坐标。

### Rect.IsConvex property

矩形恒为凸。

```csharp
public bool IsConvex { get; }
```

### Rect.KeyCorner property

```csharp
public Point KeyCorner { get; }
```

### Rect.Pts property

角点列表（与 `Corners` 相同）。

```csharp
public List<Point> Pts { get; }
```

### Rect constructor

由中心、宽高、朝向角与手系构造矩形。

```csharp
public Rect(Point center, double width, double depth, Angle angle, bool rightHanded = true)
```

| parameter | description |
| --- | --- |
| center | 中心点（投影到二维）。 |
| width | 宽度 W。 |
| depth | 深度 D。 |
| angle | W 方向相对 X 轴的角。 |
| rightHanded | true 为右手系（逆时针为正）。 |

### Rect.RightHanded property

是否为右手系（W×D 与法向一致）。

```csharp
public bool RightHanded { get; }
```

### Rect.ToPoly property

转为闭合折线。

```csharp
public Polyline ToPoly { get; }
```

### Rect.ToString method

```csharp
public override string ToString()
```

### Rect.W property

```csharp
public double W { get; }
```

### Rect.WDir property

```csharp
public Vector WDir { get; }
```

### Rect.WDirAngle property

W 边方向角。

```csharp
public Angle WDirAngle { get; set; }
```
