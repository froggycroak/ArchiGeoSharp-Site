---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Raylex</code></p>

# RWindowGetCircle class

两步交互取圆（圆心 + 半径），使用 `GetPoint` 与静态状态机。

```csharp
public static class RWindowGetCircle
```

## Public Members

| name | description |
| --- | --- |
| static Center | 最近一次取圆流程中的圆心（模型空间）。 |
| static GetCircleProcessGetCenter | 当前是否处于“取圆心”步骤。 |
| static GetCircleProcessGetRadius | 当前是否处于“取半径”步骤。 |
| static Radius | 最近一次预览/确认的半径。 |
| static GetCircleProcess(…) | 交互取圆：先左键圆心，再左键圆周点定半径；完成后重置内部步骤标志。 |

### RWindowGetCircle.Center field

最近一次取圆流程中的圆心（模型空间）。

```csharp
public static Point Center;
```

### RWindowGetCircle.GetCircleProcess method

交互取圆：先左键圆心，再左键圆周点定半径；完成后重置内部步骤标志。

```csharp
public static void GetCircleProcess(this RWindow rw, ref bool start, ref bool end, ref Circle c)
```

| parameter | description |
| --- | --- |
| rw | 窗口。 |
| start | 是否开始流程。 |
| end | 完成后设为 true。 |
| c | 输出圆（二维表达）。 |

### RWindowGetCircle.GetCircleProcessGetCenter field

当前是否处于“取圆心”步骤。

```csharp
public static bool GetCircleProcessGetCenter;
```

### RWindowGetCircle.GetCircleProcessGetRadius field

当前是否处于“取半径”步骤。

```csharp
public static bool GetCircleProcessGetRadius;
```

### RWindowGetCircle.Radius field

最近一次预览/确认的半径。

```csharp
public static double Radius;
```
