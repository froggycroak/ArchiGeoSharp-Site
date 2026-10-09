---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Raylex</code></p>

# ReceiveExternal class

外部命令桥接：在启用后，扩展方法可将几何绘制转发到当前接收窗口。

```csharp
public static class ReceiveExternal
```

## Public Members

| name | description |
| --- | --- |
| static DrawAtRWindow(…) | 若已通过 `EnableExternalCommands` 启用，则在接收窗口上以 2D 方式绘制该点。 |

### ReceiveExternal.DrawAtRWindow method

若已通过 `EnableExternalCommands` 启用，则在接收窗口上以 2D 方式绘制该点。

```csharp
public static void DrawAtRWindow(this Point pt)
```

| parameter | description |
| --- | --- |
| pt | 世界/模型空间中的点。 |
