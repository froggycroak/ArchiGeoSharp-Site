---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# IOrtho interface

正交坐标系：全维统一缩放、至少二维、[转置]==[逆]。

```csharp
public interface IOrtho
```

## Members

| name | description |
| --- | --- |
| BasePt { get; } | 原点。 |
| Scale { get; } | 统一缩放因子。 |
| XDir { get; } | X 轴方向。 |
| YDir { get; } | Y 轴方向。 |

### IOrtho.BasePt property

原点。

```csharp
public Point BasePt { get; }
```

### IOrtho.Scale property

统一缩放因子。

```csharp
public double Scale { get; }
```

### IOrtho.XDir property

X 轴方向。

```csharp
public Vector XDir { get; }
```

### IOrtho.YDir property

Y 轴方向。

```csharp
public Vector YDir { get; }
```
