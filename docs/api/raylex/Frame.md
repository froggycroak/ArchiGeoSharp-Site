---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Raylex</code></p>

# Frame class

单帧绘制的 RAII 作用域：构造时调用 `BeginDrawing`，释放时调用 `EndDrawing`。

```csharp
public class Frame : IDisposable
```

## Public Members

| name | description |
| --- | --- |
| Frame() | 开始当前帧的 2D 绘制。 |
| Dispose() | 结束当前帧的 2D 绘制。 |

## Remarks

在 `Running` 循环内每帧创建一次：`using var f = new Frame();`，再调用 Draw/Fill/Build/Render。

### Frame.Dispose method

结束当前帧的 2D 绘制。

```csharp
public void Dispose()
```

### Frame constructor

开始当前帧的 2D 绘制。

```csharp
public Frame()
```
