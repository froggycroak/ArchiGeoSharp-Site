---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Numeric</code></p>

# RandomDistribution class

```csharp
public class RandomDistribution
```

## Public Members

| name | description |
| --- | --- |
| RandomDistribution() | The default constructor. |
| static Bernoulli(…) | Bernoulli Distribution 伯努利分布 返回true的概率为p，返回false的概率为1-p |
| static Beta(…) | Beta分布 (使用两个Gamma分布生成) |
| static Binomial(…) | 二项分布 (Binomial Distribution) |
| static ChiSquare(…) | 卡方分布 (Chi-Square Distribution) 由k个独立标准正态随机变量的平方和构成 |
| static doubleWave(…) | 生成一个随机双精度浮点数数组，长度为 n，平均值等于 averageValue，且所有元素位于 [minValue, maxValue] 区间内。 |
| static Exponential(…) | 指数分布 (Exponential Distribution) 使用逆变换法 |
| static Gamma(…) | Gamma分布 使用Marsaglia和Tsang的方法（简单版本） |
| static Geometric(…) | 几何分布 (Geometric Distribution) 第一次成功所需的试验次数 |
| static intWave(…) | 生成长度为 n 的随机整数数组，使样本均值尽可能接近 *averageValue*； 每个元素为满足 `minValue ≤ x ≤ maxValue` 的整数（按双精度边界取整得到整数可行域）。 算法与 `doubleWave` 类似：先取目标和为可行区间内最接近 `n * averageValue` 的整数和，再在前 n-1 个位置的可行区间内均匀随机，最后一项由和固定。 |
| static Normal(…) | 正态分布 (Normal/Gaussian Distribution) 使用Box-Muller变换算法 |
| static Poisson(…) | 泊松分布 (Poisson Distribution) 使用Knuth算法 |
| static Uniform(…) | 实数均匀分布min, max) |
| static [UniformInt(…) | 整数均匀分布 [min, max)] |
| static unitWave(…) |  |

### RandomDistribution.Bernoulli method

Bernoulli Distribution 伯努利分布 返回true的概率为p，返回false的概率为1-p

```csharp
public static bool Bernoulli(double p)
```

| parameter | description |
| --- | --- |
| p | 成功概率 (0 ≤ p ≤ 1) |

#### Return Value

成功返回true，失败返回false

### RandomDistribution.Beta method

Beta分布 (使用两个Gamma分布生成)

```csharp
public static double Beta(double alpha, double beta)
```

### RandomDistribution.Binomial method

二项分布 (Binomial Distribution)

```csharp
public static int Binomial(int n, double p)
```

| parameter | description |
| --- | --- |
| n | 试验次数 |
| p | 成功概率 |

#### Return Value

成功次数

### RandomDistribution.ChiSquare method

卡方分布 (Chi-Square Distribution) 由k个独立标准正态随机变量的平方和构成

```csharp
public static double ChiSquare(int degreesOfFreedom)
```

| parameter | description |
| --- | --- |
| degreesOfFreedom | 自由度 (k &gt; 0) |

#### Return Value

服从卡方分布的随机数

### RandomDistribution.doubleWave method

生成一个随机双精度浮点数数组，长度为 n，平均值等于 averageValue，且所有元素位于 [minValue, maxValue] 区间内。

```csharp
public static double[] doubleWave(int n, double averageValue, double minValue, double maxValue)
```

| parameter | description |
| --- | --- |
| n | 数组长度 |
| averageValue | 目标平均值 |
| minValue | 最小值 |
| maxValue | 最大值 |

#### Return Value

满足条件的随机数组

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 当参数无效时抛出 |

### RandomDistribution.Exponential method

指数分布 (Exponential Distribution) 使用逆变换法

```csharp
public static double Exponential(double lambda)
```

| parameter | description |
| --- | --- |
| lambda | 率参数 (λ &gt; 0) |

#### Return Value

服从指数分布的随机数

### RandomDistribution.Gamma method

Gamma分布 使用Marsaglia和Tsang的方法（简单版本）

```csharp
public static double Gamma(double shape, double scale)
```

### RandomDistribution.Geometric method

几何分布 (Geometric Distribution) 第一次成功所需的试验次数

```csharp
public static int Geometric(double p)
```

| parameter | description |
| --- | --- |
| p | 成功概率 |

#### Return Value

第一次成功所需的试验次数

### RandomDistribution.intWave method

生成长度为 n 的随机整数数组，使样本均值尽可能接近 *averageValue*； 每个元素为满足 `minValue ≤ x ≤ maxValue` 的整数（按双精度边界取整得到整数可行域）。 算法与 `doubleWave` 类似：先取目标和为可行区间内最接近 `n * averageValue` 的整数和，再在前 n-1 个位置的可行区间内均匀随机，最后一项由和固定。

```csharp
public static int[] intWave(int n, double averageValue, double minValue, double maxValue)
```

| parameter | description |
| --- | --- |
| n | 数组长度 |
| averageValue | 目标平均值（实数，样本均值将与之最接近） |
| minValue | 元素下界（包含，整数须 ≥ ⌈minValue⌉） |
| maxValue | 元素上界（包含，整数须 ≤ ⌊maxValue⌋） |

#### Return Value

满足条件的随机整数数组

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 参数非法或无法得到整数可行区间时抛出 |
| InvalidOperationException | 在给定约束下不存在整数解时抛出 |

### RandomDistribution.Normal method

正态分布 (Normal/Gaussian Distribution) 使用Box-Muller变换算法

```csharp
public static double Normal(double mean = 0m, double stdDev = 1m)
```

| parameter | description |
| --- | --- |
| mean | 均值 |
| stdDev | 标准差 |

#### Return Value

服从N(mean, stdDev^2)的随机数

### RandomDistribution.Poisson method

泊松分布 (Poisson Distribution) 使用Knuth算法

```csharp
public static int Poisson(double lambda)
```

| parameter | description |
| --- | --- |
| lambda | 平均发生率 (λ &gt; 0) |

#### Return Value

服从泊松分布的随机整数

### RandomDistribution constructor

The default constructor.

```csharp
public RandomDistribution()
```

### RandomDistribution.Uniform method

实数均匀分布min, max)

```csharp
public static double Uniform(double min = 0m, double max = 1m)
```

| parameter | description |
| --- | --- |
| min | 最小值 |
| max | 最大值 |

#### Return Value

在[min, max)范围内的随机数

### RandomDistribution.UniformInt method

整数均匀分布 [min, max)]

```csharp
public static int UniformInt(int min, int max)
```

| parameter | description |
| --- | --- |
| min | 最小值 (包含) |
| max | 最大值 (不包含) |

#### Return Value

在min, max)范围内的随机整数

### RandomDistribution.unitWave method

```csharp
public static double[] unitWave(int n, double averageValue, double minValue, double maxValue, 
    double unit)
```
