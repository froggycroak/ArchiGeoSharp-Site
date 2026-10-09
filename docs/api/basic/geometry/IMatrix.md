---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# IMatrix interface

可提供齐次变换矩阵的对象。

```csharp
public interface IMatrix
```

## Members

| name | description |
| --- | --- |
| Matrix { get; } | 内部存储矩阵（可能为转置形式）。 |
| StandardMatrix { get; } | 标准齐次变换矩阵。 |
| ToArray { get; } | 矩阵展平为一维数组。 |

### IMatrix.Matrix property

内部存储矩阵（可能为转置形式）。

```csharp
public double[] Matrix { get; }
```

### IMatrix.StandardMatrix property

标准齐次变换矩阵。

```csharp
public double[] StandardMatrix { get; }
```

### IMatrix.ToArray property

矩阵展平为一维数组。

```csharp
public double[] ToArray { get; }
```
