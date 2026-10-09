---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# IRect interface

有向矩形的最小接口（宽、深、方向与角点）。

```csharp
public interface IRect
```

## Members

| name | description |
| --- | --- |
| Center { get; } | 中心点。 |
| Corners { get; } | 四个角点（顺序见 `Corners`）。 |
| D { get; } | 深度（沿 D 方向）。 |
| DDir { get; } | 深度方向单位向量。 |
| KeyCorner { get; } | 基准角点（与 `BasePt` 一致）。 |
| W { get; } | 宽度（沿 W 方向）。 |
| WDir { get; } | 宽度方向单位向量。 |

### IRect.Center property

中心点。

```csharp
public Point Center { get; }
```

### IRect.Corners property

四个角点（顺序见 `Corners`）。

```csharp
public Point[] Corners { get; }
```

### IRect.D property

深度（沿 D 方向）。

```csharp
public double D { get; }
```

### IRect.DDir property

深度方向单位向量。

```csharp
public Vector DDir { get; }
```

### IRect.KeyCorner property

基准角点（与 `BasePt` 一致）。

```csharp
public Point KeyCorner { get; }
```

### IRect.W property

宽度（沿 W 方向）。

```csharp
public double W { get; }
```

### IRect.WDir property

宽度方向单位向量。

```csharp
public Vector WDir { get; }
```
