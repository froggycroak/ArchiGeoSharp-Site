---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# BoxFlex class

由八个角点定义的任意六面体（flex box），可三角化或提取棱边。

```csharp
public class BoxFlex : ISolid
```

## Public Members

| name | description |
| --- | --- |
| BoxFlex(…) | 用八个角点构造六面体。 |
| Corners { get; } | 八个角点。 |
| Frames() | 返回六面体 12 条棱的线段数组（与内置边索引表一致）。 |
| ToMeshTriangle(…) | 转为三角网格：divisions≤1 时用 12 三角形拼六面；否则六面各用 Coons patch 细分后合并。 |

### BoxFlex constructor

用八个角点构造六面体。

```csharp
public BoxFlex(Point[] corners)
```

| parameter | description |
| --- | --- |
| corners | 长度为 8 的角点数组。 |

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 角点数量不为 8 时抛出。 |

### BoxFlex.Corners property

八个角点。

```csharp
public Point[] Corners { get; }
```

### BoxFlex.Frames method

返回六面体 12 条棱的线段数组（与内置边索引表一致）。

```csharp
public LineSeg[] Frames()
```

#### Return Value

棱边线段。

### BoxFlex.ToMeshTriangle method

转为三角网格：divisions≤1 时用 12 三角形拼六面；否则六面各用 Coons patch 细分后合并。

```csharp
public MeshTriangle ToMeshTriangle(int divisions = 10)
```

| parameter | description |
| --- | --- |
| divisions | 每面 u/v 分段数。 |

#### Return Value

三角网格。
