---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# BspEncoding structure

三进制 BSP 编码。字符 `0`=u 向剖分，`1`=v 向剖分，`2`=叶（不剖）。 堆序下标：根=0，节点 i 的左右子为 2i+1、2i+2。

```csharp
public struct BspEncoding
```

## Public Members

| name | description |
| --- | --- |
| BspEncoding(…) | 由三进制串与可选剖分比构造。 |
| Length { get; } | 编码长度。 |
| Ratios { get; } | 各节点剖分比；可空。 |
| Ternary { get; } | 三进制编码串。 |
| CodeAt(…) | 取指定下标的编码字符。 |
| RatioAt(…) | 取指定下标的剖分比（缺省或非法时为 0.5）。 |

### BspEncoding constructor

由三进制串与可选剖分比构造。

```csharp
public BspEncoding(string ternary, double[] ratios = null)
```

| parameter | description |
| --- | --- |
| ternary | 三进制编码串（仅含 0/1/2）。 |
| ratios | 各节点剖分比；可空，默认 0.5。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 编码非法或 ratios 长度不匹配时抛出。 |

### BspEncoding.CodeAt method

取指定下标的编码字符。

```csharp
public char CodeAt(int index)
```

| parameter | description |
| --- | --- |
| index | 下标。 |

#### Return Value

字符 0/1/2。

### BspEncoding.Length property

编码长度。

```csharp
public int Length { get; }
```

### BspEncoding.RatioAt method

取指定下标的剖分比（缺省或非法时为 0.5）。

```csharp
public double RatioAt(int index)
```

| parameter | description |
| --- | --- |
| index | 下标。 |

#### Return Value

剖分比 (0,1)。

### BspEncoding.Ratios property

各节点剖分比；可空。

```csharp
public double[] Ratios { get; }
```

### BspEncoding.Ternary property

三进制编码串。

```csharp
public string Ternary { get; }
```
