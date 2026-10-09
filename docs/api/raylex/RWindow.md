---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Raylex</code></p>

# RWindow class

基于 Raylib 的 ArchiGeo 可视化窗口：2D 绘制走 `MiniCam`（`Draw`/`Fill`）， 3D 线框与实体走 Raylib 相机与 `RenderMode`（`Build`/`Render`）。

`RWindow` 的键盘输入相关成员（预留 partial 分文件）。

```csharp
public class RWindow : IDisposable
```

## Public Members

| name | description |
| --- | --- |
| RWindow(…) | 创建并初始化 Raylib 窗口；将 `MiniCam` 设为世界 XY，`Lastest` 指向本实例。 |
| static Lastest | 最近构造的 `RWindow` 实例（供全局/外部桥接使用）。 |
| BuildRate { get; } | 3D Build/Render 使用的坐标缩放（与 `SetOrthoRenderView` 的 buildRate 一致）。 |
| MiniCam { get; set; } | 2D 迷你相机：将模型坐标变换到屏幕像素空间（`Draw` / `Fill` 使用）。 |
| MouseLeftDown { get; } | 左键是否处于按下状态。 |
| MouseLeftPressed { get; } | 本帧左键是否按下（边沿）。 |
| MouseLeftReleased { get; } | 本帧左键是否释放。 |
| MouseLeftUp { get; } | 左键是否未按下。 |
| MouseMiddleDown { get; } | 中键是否处于按下状态。 |
| MouseMiddlePressed { get; } | 本帧中键是否按下（边沿）。 |
| MouseMiddleReleased { get; } | 本帧中键是否释放。 |
| MouseMiddleUp { get; } | 中键是否未按下。 |
| MouseRightDown { get; } | 右键是否处于按下状态。 |
| MouseRightPressed { get; } | 本帧右键是否按下（边沿）。 |
| MouseRightReleased { get; } | 本帧右键是否释放。 |
| MouseRightUp { get; } | 右键是否未按下。 |
| MouseWheelMove { get; } | 滚轮增量（向上为正，向下为负）。 |
| Running { get; } | 窗口是否仍在运行（用户未请求关闭）。 |
| Build(…) | 在 3D 空间绘制点（需处于 `RenderMode`）。 (13 methods) |
| BuildAxis(…) | 在原点绘制 RGB 世界坐标轴（3D，长度为世界单位）。 |
| DisableExternalCommands() | 禁用外部绘制转发。 |
| Dispose() | 卸载字体并关闭窗口。 |
| Draw(…) | 在 2D 屏幕空间绘制点（经 `MiniCam` 投影）。 (12 methods) |
| DrawAxis(…) | 在原点绘制 RGB 世界坐标轴（2D 投影，长度为世界单位）。 |
| DrawICurve(…) | 绘制通用平面曲线：已知类型直接绘制，否则按参数均匀采样为折线。 |
| EnableExternalCommands() | 启用 `ReceiveExternal`，将外部 `DrawAtRWindow` 绘制转发到本窗口。 |
| Fill(…) | 填充圆盘（实心）。适合 TOP 等 XY 对齐视图。 (3 methods) |
| GetPixel() | 当前鼠标位置的屏幕像素坐标 `[x, y]`。 |
| GetPoint() | 通过 `MiniCam`：鼠标像素 → 与迷你相机 XY 平面交点 → 模型空间点。 |
| GetPointListProcess(…) | 交互取点列：左键加点，右键结束；实时 2D 绘制已选点。 |
| GetPointListProcessRay(…) | 3D 视图下交互取点列。 |
| GetPointProcess(…) | 交互取单点（迷你相机）：左键拾取，写入 *pt* 并置 *end*。 |
| GetPointProcessRay(…) | 3D 视图下交互取单点。 |
| GetPointRay(…) | 通过 3D 相机射线与平面求交，得到模型空间点（用于 Render 视图拾取）。 |
| GetPolylineProcess(…) | 交互取折线：左键加点，右键结束；可选闭合与降为 2D。 |
| GetPolylineProcessRay(…) | 在 3D 视图下交互取折线（`GetPointRay`）；可选绘制 `BuildAxis`。 |
| GetText(…) | 模态单行文本输入：Enter 确认，Esc 取消并返回默认值。 |
| GetTextMulti(…) | 模态三行文本输入：Up/Down 切换行，Enter 在末行确认，Esc 取消。 |
| InsertText(…) | 使用可扩展字体绘制文本；加载失败时回退到 `InsertTextOld`。 |
| InsertTextOld(…) | 使用 Raylib 内置位图字体在屏幕上绘制文本（不支持扩展字符集）。 |
| Pixel2Point(…) | 屏幕像素转迷你相机平面上的点（指定 *z*）。 |
| Point2Pixel(…) | 迷你相机下的逻辑点转屏幕像素 `[x, y]`（Y 轴翻转）。 |
| Render(…) | 三角网格面片渲染（可选棱线）。网格由 Int32) 离散化。 (2 methods) |
| RenderBox(…) | 绘制带线框的轴对齐盒子（按 Box 底平面定向）。 |
| SetBackgroundColor(…) | 清屏背景色（在 `Frame` 内每帧调用）。 |
| SetBuildRate(…) | 设置 Build/Render 坐标缩放。 |
| SetGeneralFontPath(…) | 设置 `InsertText` 优先加载的字体文件路径（如 Noto Sans SC）。 |
| SetOrthoRenderView(…) | 设置 3D 正交相机，并同步 `BuildRate`。 |
| SetPersRenderView(…) | 设置 3D 透视相机（影响 `RenderMode` 下的 Build/Render）。 |
| SetTargetFPS(…) | 设置目标帧率。 |
| UpdateCamera(…) | 使用 Raylib 内置模式更新 3D 相机（交互 orbit / FPS 等）。 |
| UpdatePanByMiddleDrag(…) | 按住中键拖动平移 3D 相机（目标与位置同步移动）。 |
| UpdateZoomByMouseWheel(…) | 滚轮缩放：向上放大、向下缩小。透视模式沿视线移动相机，正交模式调整 FovY。每帧调用一次。 |
| static DefaultRayCam | 3D 渲染默认相机（透视，Z 轴向上）。 |
| static GetSuggestedBuildRate(…) | 根据点集在 XY 上的跨度，建议正交视图下的 `BuildRate`（大场景用较小 rate）。 |

## Remarks

概念区分：`Draw` / `Fill` 在 `Frame` 内、按迷你相机投影到屏幕； `Build` / `Render` 在 3D 模式下按世界坐标绘制。

典型循环：`using var rw = new RWindow(800, 800, "demo"); rw.SetViewByType(ViewType.TOP, new Point(400, 400, 0), 1); while (rw.Running) { using var f = new Frame(); rw.SetBackgroundColor(RColor.White); rw.DrawAxis(100); }`

### RWindow.Build method (1 of 13)

在 world XY 平面绘制圆弧。

```csharp
public void Build(Arc arc, RColor PenColor = default)
```

### RWindow.Build method (2 of 13)

在 world XY 平面批量绘制圆弧。

```csharp
public void Build(IEnumerable<Arc> arcs, RColor PenColor = default)
```

### RWindow.Build method (3 of 13)

在 world XY 批量绘制平滑圆弧序列。

```csharp
public void Build(IEnumerable<SmoothArcSeries> arcSerieses, RColor PenColor = default)
```

### RWindow.Build method (4 of 13)

批量 3D 线段。

```csharp
public void Build(IList<LineSeg> l, RColor PenColor = default)
```

### RWindow.Build method (5 of 13)

3D 折线/多边形棱线。

```csharp
public void Build(IPoly ipoly, RColor PenColor = default)
```

### RWindow.Build method (6 of 13)

在 3D 空间绘制线段。

```csharp
public void Build(LineSeg l, RColor PenColor = default)
```

### RWindow.Build method (7 of 13)

批量 3D 折线。

```csharp
public void Build(List<Polyline> ipolyList, RColor PenColor = default)
```

### RWindow.Build method (8 of 13)

在 3D 空间绘制点（需处于 `RenderMode`）。

```csharp
public void Build(Point pt, RColor PenColor = default)
```

### RWindow.Build method (9 of 13)

在 world XY 绘制平滑圆弧序列。

```csharp
public void Build(SmoothArcSeries arcSeries, RColor PenColor = default)
```

### RWindow.Build method (10 of 13)

在指定平面局部坐标系内绘制圆弧（3D）。

```csharp
public void Build(Arc arc, Plane basePlane, RColor PenColor = default)
```

| parameter | description |
| --- | --- |
| arc | 圆弧。 |
| basePlane | 圆弧所在平面。 |
| PenColor | 颜色。 |

### RWindow.Build method (11 of 13)

在指定平面内批量绘制圆弧。

```csharp
public void Build(IEnumerable<Arc> arcs, Plane basePlane, RColor PenColor = default)
```

### RWindow.Build method (12 of 13)

批量绘制多条平滑圆弧序列。

```csharp
public void Build(IEnumerable<SmoothArcSeries> arcSerieses, Plane plane, RColor PenColor = default)
```

### RWindow.Build method (13 of 13)

在指定平面绘制平滑圆弧序列。

```csharp
public void Build(SmoothArcSeries arcSeries, Plane plane, RColor PenColor = default)
```

### RWindow.BuildAxis method

在原点绘制 RGB 世界坐标轴（3D，长度为世界单位）。

```csharp
public void BuildAxis(int length)
```

| parameter | description |
| --- | --- |
| length | 各轴长度。 |

### RWindow.BuildRate property

3D Build/Render 使用的坐标缩放（与 `SetOrthoRenderView` 的 buildRate 一致）。

```csharp
public double BuildRate { get; }
```

### RWindow.DefaultRayCam field

3D 渲染默认相机（透视，Z 轴向上）。

```csharp
public static Camera3D DefaultRayCam;
```

### RWindow.DisableExternalCommands method

禁用外部绘制转发。

```csharp
public void DisableExternalCommands()
```

### RWindow.Dispose method

卸载字体并关闭窗口。

```csharp
public void Dispose()
```

### RWindow.Draw method (1 of 12)

绘制圆弧（或退化为直线）。适合 TOP 等 XY 对齐视图。

```csharp
public void Draw(Arc arc, RColor PenColor = default)
```

### RWindow.Draw method (2 of 12)

绘制圆（线框）。适合 TOP 等 XY 对齐的迷你视图。

```csharp
public void Draw(ICircleExpr c, RColor PenColor = default)
```

### RWindow.Draw method (3 of 12)

批量绘制圆弧。

```csharp
public void Draw(IEnumerable<Arc> arcs, RColor PenColor = default)
```

### RWindow.Draw method (4 of 12)

批量绘制圆。

```csharp
public void Draw(IEnumerable<ICircleExpr> cs, RColor PenColor = default)
```

### RWindow.Draw method (5 of 12)

批量绘制 IPoly。

```csharp
public void Draw(IEnumerable<IPoly> polys, RColor PenColor = default)
```

### RWindow.Draw method (6 of 12)

批量绘制线段。

```csharp
public void Draw(IEnumerable<LineSeg> ls, RColor PenColor = default)
```

### RWindow.Draw method (7 of 12)

批量绘制平滑圆弧序列。

```csharp
public void Draw(IEnumerable<SmoothArcSeries> arcse, RColor PenColor = default)
```

### RWindow.Draw method (8 of 12)

绘制多边形/折线边界（开放或闭合）。

```csharp
public void Draw(IPoly ipoly, RColor PenColor = default)
```

### RWindow.Draw method (9 of 12)

绘制线段（2D 投影）。

```csharp
public void Draw(LineSeg l, RColor PenColor = default)
```

### RWindow.Draw method (10 of 12)

绘制平滑圆弧序列。

```csharp
public void Draw(SmoothArcSeries arcSeries, RColor PenColor = default)
```

### RWindow.Draw method (11 of 12)

批量绘制点。

```csharp
public void Draw(IEnumerable<Point> pts, int radius = 0, RColor PenColor = default)
```

### RWindow.Draw method (12 of 12)

在 2D 屏幕空间绘制点（经 `MiniCam` 投影）。

```csharp
public void Draw(Point pt, int radius = 0, RColor PenColor = default)
```

| parameter | description |
| --- | --- |
| pt | 模型空间点。 |
| radius | 半径（像素）；0 表示单像素点。 |
| PenColor | 颜色；默认 `Default`。 |

### RWindow.DrawAxis method

在原点绘制 RGB 世界坐标轴（2D 投影，长度为世界单位）。

```csharp
public void DrawAxis(int length)
```

| parameter | description |
| --- | --- |
| length | 各轴长度。 |

### RWindow.DrawICurve method

绘制通用平面曲线：已知类型直接绘制，否则按参数均匀采样为折线。

```csharp
public void DrawICurve(ICurveUnit curve, RColor PenColor = default, int divisions = 10)
```

| parameter | description |
| --- | --- |
| curve | 曲线单元。 |
| PenColor | 颜色。 |
| divisions | 采样段数（仅用于一般曲线）。 |

### RWindow.EnableExternalCommands method

启用 `ReceiveExternal`，将外部 `DrawAtRWindow` 绘制转发到本窗口。

```csharp
public void EnableExternalCommands()
```

### RWindow.Fill method (1 of 3)

填充圆盘（实心）。适合 TOP 等 XY 对齐视图。

```csharp
public void Fill(ICircleExpr c, RColor PenColor = default)
```

### RWindow.Fill method (2 of 3)

填充轴对齐矩形（拆为两个三角形）。

```csharp
public void Fill(Rect r, RColor PenColor = default)
```

### RWindow.Fill method (3 of 3)

填充三角形（三个模型空间顶点，经迷你相机投影）。

```csharp
public void Fill(Point pt1, Point pt2, Point pt3, RColor PenColor = default)
```

### RWindow.GetPixel method

当前鼠标位置的屏幕像素坐标 `[x, y]`。

```csharp
public int[] GetPixel()
```

### RWindow.GetPoint method

通过 `MiniCam`：鼠标像素 → 与迷你相机 XY 平面交点 → 模型空间点。

```csharp
public Point GetPoint()
```

### RWindow.GetPointListProcess method

交互取点列：左键加点，右键结束；实时 2D 绘制已选点。

```csharp
public void GetPointListProcess(ref bool start, ref bool end, ref List<Point> pts)
```

### RWindow.GetPointListProcessRay method

3D 视图下交互取点列。

```csharp
public void GetPointListProcessRay(ref bool start, ref bool end, ref List<Point> pts, 
    PlaneExpr? targetPlane = default, bool drawAxis = true, int axisLength = 120)
```

### RWindow.GetPointProcess method

交互取单点（迷你相机）：左键拾取，写入 *pt* 并置 *end*。

```csharp
public void GetPointProcess(ref bool start, ref bool end, ref Point pt)
```

| parameter | description |
| --- | --- |
| start | 为 true 且 *end* 为 false 时进入拾取。 |
| end | 拾取完成后由方法设为 true。 |
| pt | 输出点。 |

### RWindow.GetPointProcessRay method

3D 视图下交互取单点。

```csharp
public void GetPointProcessRay(ref bool start, ref bool end, ref Point pt, 
    PlaneExpr? targetPlane = default, bool drawAxis = true, int axisLength = 120)
```

### RWindow.GetPointRay method

通过 3D 相机射线与平面求交，得到模型空间点（用于 Render 视图拾取）。

```csharp
public Point GetPointRay(PlaneExpr? targetPlane = default)
```

| parameter | description |
| --- | --- |
| targetPlane | 目标平面；默认 world XY（z=0）。 |

#### Return Value

交点；无交点时返回射线起点（已反缩放）。

### RWindow.GetPolylineProcess method

交互取折线：左键加点，右键结束；可选闭合与降为 2D。

```csharp
public void GetPolylineProcess(ref bool start, ref bool end, ref Polyline poly, bool close = true, 
    bool shift2d = true)
```

| parameter | description |
| --- | --- |
| close | 结束时是否 Close。 |
| shift2d | 结束时是否 Int32) 到 2D。 |

### RWindow.GetPolylineProcessRay method

在 3D 视图下交互取折线（`GetPointRay`）；可选绘制 `BuildAxis`。

```csharp
public void GetPolylineProcessRay(ref bool start, ref bool end, ref Polyline poly, 
    PlaneExpr? targetPlane = default, bool close = true, bool shift2d = true, bool drawAxis = true, 
    int axisLength = 120)
```

### RWindow.GetSuggestedBuildRate method

根据点集在 XY 上的跨度，建议正交视图下的 `BuildRate`（大场景用较小 rate）。

```csharp
public static float GetSuggestedBuildRate(IEnumerable<Point> points)
```

| parameter | description |
| --- | --- |
| points | 非空点集。 |

#### Return Value

建议的 build rate（约 0.35–0.7）。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentNullException | *points* 为 null。 |
| ArgumentException | 点集为空。 |

### RWindow.GetText method

模态单行文本输入：Enter 确认，Esc 取消并返回默认值。

```csharp
public string GetText(string title, string message, string defaultText = "", int maxLength = 128)
```

| parameter | description |
| --- | --- |
| title | 保留参数（当前 UI 未单独显示标题）。 |
| message | 提示标签。 |
| defaultText | 取消或 Esc 时的返回值。 |
| maxLength | 最大字符（按 Unicode 码位计）。 |

#### Return Value

确认后的文本，或 *defaultText*。

### RWindow.GetTextMulti method

模态三行文本输入：Up/Down 切换行，Enter 在末行确认，Esc 取消。

```csharp
public string[] GetTextMulti(string title, string message1, string message2, string message3, 
    string defaultText1 = "", string defaultText2 = "", string defaultText3 = "", 
    int maxLength = 128)
```

| parameter | description |
| --- | --- |
| title | 保留参数。 |
| message1 | 第一行标签。 |
| message2 | 第二行标签。 |
| message3 | 第三行标签。 |
| defaultText1 | 第一行默认值。 |
| defaultText2 | 第二行默认值。 |
| defaultText3 | 第三行默认值。 |
| maxLength | 每行最大码位数。 |

#### Return Value

确认后的三元素数组，或默认值数组。

### RWindow.InsertText method

使用可扩展字体绘制文本；加载失败时回退到 `InsertTextOld`。

```csharp
public void InsertText(string s, int screenX = 0, int screenY = 0, int fontSize = 20, 
    RColor PenColor = default)
```

| parameter | description |
| --- | --- |
| s | 文本（按需动态扩展字形集）。 |
| screenX | 左上角 X（像素）。 |
| screenY | 左上角 Y（像素）。 |
| fontSize | 字号。 |
| PenColor | 颜色；默认 `Default`。 |

### RWindow.InsertTextOld method

使用 Raylib 内置位图字体在屏幕上绘制文本（不支持扩展字符集）。

```csharp
public void InsertTextOld(string s, int screenX = 0, int screenY = 0, int fontSize = 20, 
    RColor PenColor = default)
```

| parameter | description |
| --- | --- |
| s | 文本。 |
| screenX | 左上角 X（像素）。 |
| screenY | 左上角 Y（像素）。 |
| fontSize | 字号。 |
| PenColor | 颜色；默认 `Default`。 |

### RWindow.Lastest field

最近构造的 `RWindow` 实例（供全局/外部桥接使用）。

```csharp
public static RWindow Lastest;
```

### RWindow.MiniCam property

2D 迷你相机：将模型坐标变换到屏幕像素空间（`Draw` / `Fill` 使用）。

```csharp
public Space3d MiniCam { get; set; }
```

### RWindow.MouseLeftDown property

左键是否处于按下状态。

```csharp
public bool MouseLeftDown { get; }
```

### RWindow.MouseLeftPressed property

本帧左键是否按下（边沿）。

```csharp
public bool MouseLeftPressed { get; }
```

### RWindow.MouseLeftReleased property

本帧左键是否释放。

```csharp
public bool MouseLeftReleased { get; }
```

### RWindow.MouseLeftUp property

左键是否未按下。

```csharp
public bool MouseLeftUp { get; }
```

### RWindow.MouseMiddleDown property

中键是否处于按下状态。

```csharp
public bool MouseMiddleDown { get; }
```

### RWindow.MouseMiddlePressed property

本帧中键是否按下（边沿）。

```csharp
public bool MouseMiddlePressed { get; }
```

### RWindow.MouseMiddleReleased property

本帧中键是否释放。

```csharp
public bool MouseMiddleReleased { get; }
```

### RWindow.MouseMiddleUp property

中键是否未按下。

```csharp
public bool MouseMiddleUp { get; }
```

### RWindow.MouseRightDown property

右键是否处于按下状态。

```csharp
public bool MouseRightDown { get; }
```

### RWindow.MouseRightPressed property

本帧右键是否按下（边沿）。

```csharp
public bool MouseRightPressed { get; }
```

### RWindow.MouseRightReleased property

本帧右键是否释放。

```csharp
public bool MouseRightReleased { get; }
```

### RWindow.MouseRightUp property

右键是否未按下。

```csharp
public bool MouseRightUp { get; }
```

### RWindow.MouseWheelMove property

滚轮增量（向上为正，向下为负）。

```csharp
public float MouseWheelMove { get; }
```

### RWindow.Pixel2Point method

屏幕像素转迷你相机平面上的点（指定 *z*）。

```csharp
public Point Pixel2Point(int[] pixel, double z = 0m)
```

| parameter | description |
| --- | --- |
| pixel | 像素坐标 `[x, y]`。 |
| z | 返回点的 z 分量，默认 0。 |

### RWindow.Point2Pixel method

迷你相机下的逻辑点转屏幕像素 `[x, y]`（Y 轴翻转）。

```csharp
public int[] Point2Pixel(Point pt)
```

| parameter | description |
| --- | --- |
| pt | 已通过 `MiniCam` 变换后的二维/三维点（常用 z 忽略）。 |

### RWindow.Render method (1 of 2)

批量渲染三角网格。

```csharp
public void Render(IList<IMeshTriangle> imeshes, RColor renderColor = default, 
    RColor buildColor = default)
```

### RWindow.Render method (2 of 2)

三角网格面片渲染（可选棱线）。网格由 Int32) 离散化。

```csharp
public void Render(IMeshTriangle imesh, RColor renderColor = default, RColor buildColor = default, 
    int divisions = 10)
```

| parameter | description |
| --- | --- |
| imesh | 网格接口。 |
| renderColor | 面颜色，默认深灰。 |
| buildColor | 棱线颜色；为 default 时不画棱线。 |
| divisions | 曲面离散段数。 |

### RWindow.RenderBox method

绘制带线框的轴对齐盒子（按 Box 底平面定向）。

```csharp
public void RenderBox(Box box, RColor renderColor = default, RColor buildColor = default)
```

| parameter | description |
| --- | --- |
| box | 盒子。 |
| renderColor | 面填充色，默认深灰。 |
| buildColor | 棱线色，默认白。 |

### RWindow.Running property

窗口是否仍在运行（用户未请求关闭）。

```csharp
public bool Running { get; }
```

### RWindow constructor

创建并初始化 Raylib 窗口；将 `MiniCam` 设为世界 XY，`Lastest` 指向本实例。

```csharp
public RWindow(int width, int height, string title)
```

| parameter | description |
| --- | --- |
| width | 窗口宽度（像素）。 |
| height | 窗口高度（像素）。 |
| title | 窗口标题。 |

### RWindow.SetBackgroundColor method

清屏背景色（在 `Frame` 内每帧调用）。

```csharp
public void SetBackgroundColor(RColor color)
```

| parameter | description |
| --- | --- |
| color | 背景颜色。 |

### RWindow.SetBuildRate method

设置 Build/Render 坐标缩放。

```csharp
public void SetBuildRate(double rate)
```

| parameter | description |
| --- | --- |
| rate | 缩放系数。 |

### RWindow.SetGeneralFontPath method

设置 `InsertText` 优先加载的字体文件路径（如 Noto Sans SC）。

```csharp
public void SetGeneralFontPath(string fontPath)
```

| parameter | description |
| --- | --- |
| fontPath | 本地 .ttf 路径。 |

### RWindow.SetOrthoRenderView method

设置 3D 正交相机，并同步 `BuildRate`。

```csharp
public void SetOrthoRenderView(Point targetPos, Vector cameraDir, float visibleSize, 
    float buildRate = 1)
```

| parameter | description |
| --- | --- |
| targetPos | 观察目标（世界坐标）。 |
| cameraDir | 从目标指向相机的方向（会归一化）。 |
| visibleSize | 可见区域尺度（与正交 FovY 相关）。 |
| buildRate | Build/Render 坐标缩放，默认 1。 |

### RWindow.SetPersRenderView method

设置 3D 透视相机（影响 `RenderMode` 下的 Build/Render）。

```csharp
public void SetPersRenderView(Point cameraPos, Point targetPos, float fov)
```

| parameter | description |
| --- | --- |
| cameraPos | 相机位置。 |
| targetPos | 观察目标。 |
| fov | 垂直视场角（度）。 |

### RWindow.SetTargetFPS method

设置目标帧率。

```csharp
public void SetTargetFPS(int fps)
```

| parameter | description |
| --- | --- |
| fps | 每秒帧数。 |

### RWindow.UpdateCamera method

使用 Raylib 内置模式更新 3D 相机（交互 orbit / FPS 等）。

```csharp
public void UpdateCamera(int cameraModeIndex)
```

| parameter | description |
| --- | --- |
| cameraModeIndex | 0=Custom；1=Free；2=Orbital；3=FirstPerson；4=ThirdPerson。 |

### RWindow.UpdatePanByMiddleDrag method

按住中键拖动平移 3D 相机（目标与位置同步移动）。

```csharp
public void UpdatePanByMiddleDrag(float panSensitivity = 1)
```

| parameter | description |
| --- | --- |
| panSensitivity | 平移灵敏度。 |

### RWindow.UpdateZoomByMouseWheel method

滚轮缩放：向上放大、向下缩小。透视模式沿视线移动相机，正交模式调整 FovY。每帧调用一次。

```csharp
public void UpdateZoomByMouseWheel(float zoomStep = 0.1)
```

| parameter | description |
| --- | --- |
| zoomStep | 缩放灵敏度。 |
