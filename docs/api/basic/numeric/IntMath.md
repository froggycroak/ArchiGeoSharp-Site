---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Numeric</code></p>

# IntMath class

整数相关数值工具。

```csharp
public static class IntMath
```

## Public Members

| name | description |
| --- | --- |
| static Mod(…) | 取模到区间 0, unit)。 |
| static [Round(…) | 四舍五入到最近整数（0.5 向上）。 |

### IntMath.Mod method

取模到区间 0, unit)。

```csharp
public static int Mod(this int x, int unit)
```

| parameter | description |
| --- | --- |
| x | 被除数。 |
| unit | 模数（周期）。 |

#### Return Value

非负余数。

### IntMath.Round method

四舍五入到最近整数（0.5 向上）。

```csharp
public static int Round(this double x)
```

| parameter | description |
| --- | --- |
| x | 实数。 |

#### Return Value

取整结果。
