---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Numeric</code></p>

# DoubleMath class

实数数值工具。

```csharp
public static class DoubleMath
```

## Public Members

| name | description |
| --- | --- |
| static Contains(…) | Check if the array contains the target value with the given tolerance &#x7C; 检查数组是否包含目标值，给定容差 |
| static CreateArithmeticSequence(…) | Create an arithmetic sequence with the given start, stop, and step &#x7C; 生成等差数列, 边界stop可以取到？ |
| static FindMaxMinWithIndices(…) | Find the maximum and minimum values in the array, and return their indices &#x7C; 找到数组中的最大值和最小值，返回它们的索引 |
| static GetRemainder(…) | 求相对于下界 *x0*、周期 *cycle* 的余数，结果落在 x0, x0+cycle)。 |
| static [Mod(…) | 取模到区间 0, unit)。 |
| static [TildeEqual(…) | Check if two double values are approximately equal within a given tolerance &#x7C; 检查两个double值是否近似相等，给定容差 (2 methods) |

### DoubleMath.Contains method

Check if the array contains the target value with the given tolerance &#x7C; 检查数组是否包含目标值，给定容差

```csharp
public static bool Contains(double[] array, double target, double tolerance)
```

### DoubleMath.CreateArithmeticSequence method

Create an arithmetic sequence with the given start, stop, and step &#x7C; 生成等差数列, 边界stop可以取到？

```csharp
public static double[] CreateArithmeticSequence(double start, double stop, double step)
```

### DoubleMath.FindMaxMinWithIndices method

Find the maximum and minimum values in the array, and return their indices &#x7C; 找到数组中的最大值和最小值，返回它们的索引

```csharp
public static void FindMaxMinWithIndices(double[] array, out double max, out int maxIndex, 
    out double min, out int minIndex)
```

### DoubleMath.GetRemainder method

求相对于下界 *x0*、周期 *cycle* 的余数，结果落在 x0, x0+cycle)。

```csharp
public static double GetRemainder(double x, double cycle, double x0 = 0m)
```

| parameter | description |
| --- | --- |
| x | 原值。 |
| cycle | 周期长度。 |
| x0 | 区间下界，默认 0。 |

#### Return Value

规范化后的值。

### DoubleMath.Mod method

取模到区间 0, unit)。

```csharp
public static double Mod(double x, double unit)
```

| parameter | description |
| --- | --- |
| x | 被除数。 |
| unit | 模数。 |

#### Return Value

非负余数。

### DoubleMath.TildeEqual method (1 of 2)

Check if two double values are approximately equal within a given tolerance &#x7C; 检查两个double值是否近似相等，给定容差

```csharp
public static bool TildeEqual(double a, double b, double tolerance)
```

### DoubleMath.TildeEqual method (2 of 2)

Check if two arrays are approximately equal within a given tolerance &#x7C; 检查两个数组是否近似相等，给定容差

```csharp
public static bool TildeEqual(double[] arr1, double[] arr2, double tolerance)
```
