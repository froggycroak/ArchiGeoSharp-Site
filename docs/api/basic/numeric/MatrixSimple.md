---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Numeric</code></p>

# MatrixSimple class

简单矩阵运算（线性方程组等）。

```csharp
public static class MatrixSimple
```

## Public Members

| name | description |
| --- | --- |
| static FlattenAsArray(…) |  |
| static SolveLinearEquation(…) | Solve a linear equation group &#x7C; 线性方程组求解 Example: AA = [[1, 2, 3], [-1, -1, 3], [-1, 2, 5]] B = [14, 6, 18] SolveLinearEquation(AA, B) (2 methods) |

### MatrixSimple.FlattenAsArray method

```csharp
public static double[] FlattenAsArray(this double[] matrix, int rows, int cols)
```

### MatrixSimple.SolveLinearEquation method (1 of 2)

```csharp
public static double[] SolveLinearEquation(double[] matrix, double[] vector)
```

### MatrixSimple.SolveLinearEquation method (2 of 2)

Solve a linear equation group &#x7C; 线性方程组求解 Example: AA = [[1, 2, 3], [-1, -1, 3], [-1, 2, 5]] B = [14, 6, 18] SolveLinearEquation(AA, B)

```csharp
public static double[] SolveLinearEquation(double[][] matrix, double[] vector)
```

| parameter | description |
| --- | --- |
| matrix | 所有系数 [ 方程编号 ][ 系数编号 ] |
| vector | 所有常数项 [ 方程编号 ] |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException |  |
