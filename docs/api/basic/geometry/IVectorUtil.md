---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# IVectorUtil class

IVector 维度校验。静态方法不能放在接口中（net48 / .NET Framework 不支持）。

```csharp
public static class IVectorUtil
```

## Public Members

| name | description |
| --- | --- |
| static CheckDimension(…) | 校验对象维度等于指定值。 |
| static CheckDimensionMatch(…) | 校验两对象维度相同。 |

### IVectorUtil.CheckDimension method

校验对象维度等于指定值。

```csharp
public static void CheckDimension(IVector a, int dimension)
```

| parameter | description |
| --- | --- |
| a | 对象。 |
| dimension | 期望维度。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 维度不匹配时抛出。 |

### IVectorUtil.CheckDimensionMatch method

校验两对象维度相同。

```csharp
public static void CheckDimensionMatch(IVector a, IVector b)
```

| parameter | description |
| --- | --- |
| a | 对象 a。 |
| b | 对象 b。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 维度不一致时抛出。 |
