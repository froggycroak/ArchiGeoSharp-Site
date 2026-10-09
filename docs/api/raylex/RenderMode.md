---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Raylex</code></p>

# RenderMode class

3D 渲染模式的 RAII 作用域：构造时进入 `BeginMode3D`，释放时 `EndMode3D`。

```csharp
public class RenderMode : IDisposable
```

## Public Members

| name | description |
| --- | --- |
| RenderMode() | 使用静态默认相机进入 3D 模式。 |
| RenderMode(…) | 使用指定窗口当前的 `RWindow` 3D 相机进入 3D 模式。 |
| Dispose() | 退出 3D 模式。 |

## Remarks

在 `Frame` 内、调用 `RWindow` 的 Build/Render 前使用：`using var rm = new RenderMode(rw);`。

### RenderMode.Dispose method

退出 3D 模式。

```csharp
public void Dispose()
```

### RenderMode constructor (1 of 2)

使用静态默认相机进入 3D 模式。

```csharp
public RenderMode()
```

### RenderMode constructor (2 of 2)

使用指定窗口当前的 `RWindow` 3D 相机进入 3D 模式。

```csharp
public RenderMode(RWindow rw)
```

| parameter | description |
| --- | --- |
| rw | 目标窗口。 |
