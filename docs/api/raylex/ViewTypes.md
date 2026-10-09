---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Raylex</code></p>

# ViewTypes class

`ViewType` 与 Space3d 视图矩阵的工厂与扩展。

```csharp
public static class ViewTypes
```

## Public Members

| name | description |
| --- | --- |
| static BACK(…) | 后视。 |
| static BBL(…) | 底-后-左。 |
| static BBR(…) | 底-后-右。 |
| static BFL(…) | 底-前-左。 |
| static BFR(…) | 底-前-右。 |
| static BOTTOM(…) | 仰视 XY 平面。 |
| static FRONT(…) | 正视 XZ 平面。 |
| static LEFT(…) | 左视。 |
| static RIGHT(…) | 右视。 |
| static SetViewByType(…) | 按预设方向设置窗口的 `MiniCam`。 |
| static TBL(…) | 顶-后-左。 |
| static TBR(…) | 顶-后-右 等轴测。 |
| static TFL(…) | 顶-前-左。 |
| static TFR(…) | 顶-前-右。 |
| static TOP(…) | 俯视 XY 平面。 |
| static View(…) | 由预设方向构造对应的 Space3d 迷你相机变换。 |

### ViewTypes.BACK method

后视。

```csharp
public static Space3d BACK(Point pos, double scale)
```

### ViewTypes.BBL method

底-后-左。

```csharp
public static Space3d BBL(Point pos, double scale)
```

### ViewTypes.BBR method

底-后-右。

```csharp
public static Space3d BBR(Point pos, double scale)
```

### ViewTypes.BFL method

底-前-左。

```csharp
public static Space3d BFL(Point pos, double scale)
```

### ViewTypes.BFR method

底-前-右。

```csharp
public static Space3d BFR(Point pos, double scale)
```

### ViewTypes.BOTTOM method

仰视 XY 平面。

```csharp
public static Space3d BOTTOM(Point pos, double scale)
```

### ViewTypes.FRONT method

正视 XZ 平面。

```csharp
public static Space3d FRONT(Point pos, double scale)
```

### ViewTypes.LEFT method

左视。

```csharp
public static Space3d LEFT(Point pos, double scale)
```

### ViewTypes.RIGHT method

右视。

```csharp
public static Space3d RIGHT(Point pos, double scale)
```

### ViewTypes.SetViewByType method

按预设方向设置窗口的 `MiniCam`。

```csharp
public static void SetViewByType(this RWindow rw, ViewType vt, Point pos, double scale)
```

| parameter | description |
| --- | --- |
| rw | 目标窗口。 |
| vt | 观察类型。 |
| pos | 视图中心（三维点，通常 z=0）。 |
| scale | 屏幕像素与世界单位的比例。 |

### ViewTypes.TBL method

顶-后-左。

```csharp
public static Space3d TBL(Point pos, double scale)
```

### ViewTypes.TBR method

顶-后-右 等轴测。

```csharp
public static Space3d TBR(Point pos, double scale)
```

### ViewTypes.TFL method

顶-前-左。

```csharp
public static Space3d TFL(Point pos, double scale)
```

### ViewTypes.TFR method

顶-前-右。

```csharp
public static Space3d TFR(Point pos, double scale)
```

### ViewTypes.TOP method

俯视 XY 平面。

```csharp
public static Space3d TOP(Point pos, double scale)
```

### ViewTypes.View method

由预设方向构造对应的 Space3d 迷你相机变换。

```csharp
public static Space3d View(ViewType vt, Point pos, double scale)
```

| parameter | description |
| --- | --- |
| vt | 观察类型。 |
| pos | 视图中心。 |
| scale | 缩放比例。 |

#### Return Value

可用于 `MiniCam` 的变换。
