---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Numeric</code></p>

# WeightedRandomSelector&lt;T&gt; class

按非负权重进行加权随机抽样的选择器。

```csharp
public class WeightedRandomSelector<T>
```

| parameter | description |
| --- | --- |
| T | 选项类型。 |

## Public Members

| name | description |
| --- | --- |
| WeightedRandomSelector() | The default constructor. |
| AddOption(…) | 添加一个选项及其权重。 |
| GetRandomItem() | 按权重随机返回一个已添加的选项。 |

### WeightedRandomSelector&lt;T&gt;.AddOption method

添加一个选项及其权重。

```csharp
public void AddOption(T item, double weight)
```

| parameter | description |
| --- | --- |
| item | 选项。 |
| weight | 权重，须 ≥ 0。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 权重为负时抛出。 |

### WeightedRandomSelector&lt;T&gt;.GetRandomItem method

按权重随机返回一个已添加的选项。

```csharp
public T GetRandomItem()
```

#### Return Value

抽中的选项。

#### Exceptions

| exception | condition |
| --- | --- |
| InvalidOperationException | 尚未添加任何选项时抛出。 |

### WeightedRandomSelector&lt;T&gt; constructor

The default constructor.

```csharp
public WeightedRandomSelector()
```
