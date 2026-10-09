---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Numeric</code></p>

# Combinatorics class

整数分拆、有序/无序排列及组合筛选等组合数学工具。

```csharp
public static class Combinatorics
```

## Public Members

| name | description |
| --- | --- |
| static Arg&lt;T&gt;(…) | 从 m 个元素中带重复地选取 n 个位置的有序排列（mⁿ 种）。 |
| static ArgCombination(…) | 对两组有序排列做笛卡尔积，并按元素和落在 *sumRange* 内筛选。 |
| static Arrange(…) | 求非负整数解 x₁+…+xₜ=sum 的全部解（stars and bars）。 返回形如 [x₁,…,xₜ] 的列表集合。 |
| static Cbn&lt;T&gt;(…) | 从 m 个元素中带重复地选取 n 个位置的无序多重集（与 `Arrange` 分布对应）。 |
| static CbnCombination(…) | 对两组无序多重集做笛卡尔积，并按元素和落在 *sumRange* 内筛选。 |

### Combinatorics.Arg&lt;T&gt; method

从 m 个元素中带重复地选取 n 个位置的有序排列（mⁿ 种）。

```csharp
public static List<List<T>> Arg<T>(List<T> elements, int n)
```

| parameter | description |
| --- | --- |
| T | 元素类型。 |
| elements | 元素池。 |
| n | 位置数。 |

#### Return Value

全部有序序列。

### Combinatorics.ArgCombination method

对两组有序排列做笛卡尔积，并按元素和落在 *sumRange* 内筛选。

```csharp
public static List<List<List<int>>> ArgCombination(List<int> set1, List<int> set2, int[] sumRange, 
    int[] counts)
```

| parameter | description |
| --- | --- |
| set1 | 第一组整数池。 |
| set2 | 第二组整数池。 |
| sumRange | 允许的和的下界与上界 [min,max]。 |
| counts | 两组各自选取的长度 [n1,n2]。 |

#### Return Value

满足和条件的 (排列1, 排列2) 对列表。

### Combinatorics.Arrange method

求非负整数解 x₁+…+xₜ=sum 的全部解（stars and bars）。 返回形如 [x₁,…,xₜ] 的列表集合。

```csharp
public static List<List<int>> Arrange(int t, int sum)
```

| parameter | description |
| --- | --- |
| t | 未知数个数。 |
| sum | 目标和。 |

#### Return Value

全部解；sum&lt;0 时返回空列表。

### Combinatorics.Cbn&lt;T&gt; method

从 m 个元素中带重复地选取 n 个位置的无序多重集（与 `Arrange` 分布对应）。

```csharp
public static List<List<T>> Cbn<T>(List<T> elements, int n)
```

| parameter | description |
| --- | --- |
| T | 元素类型。 |
| elements | 元素池。 |
| n | 总选取个数。 |

#### Return Value

全部无序多重集（展开为长度 n 的列表）。

### Combinatorics.CbnCombination method

对两组无序多重集做笛卡尔积，并按元素和落在 *sumRange* 内筛选。

```csharp
public static List<List<List<int>>> CbnCombination(List<int> set1, List<int> set2, int[] sumRange, 
    int[] counts)
```

| parameter | description |
| --- | --- |
| set1 | 第一组整数池。 |
| set2 | 第二组整数池。 |
| sumRange | 允许的和的下界与上界。 |
| counts | 两组各自选取的总个数。 |

#### Return Value

满足和条件的 (组合1, 组合2) 对列表。
