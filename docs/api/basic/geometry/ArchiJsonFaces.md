---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ArchiJsonFaces class

网格面索引 DTO：扁平索引 + 每面顶点数。

```csharp
public class ArchiJsonFaces
```

## Public Members

| name | description |
| --- | --- |
| ArchiJsonFaces() | The default constructor. |
| count { get; set; } | 面数量相关计数。 |
| index { get; set; } | 顶点索引扁平数组。 |
| properties { get; set; } | 扩展属性（可空）。 |
| size { get; set; } | 每个面的顶点数。 |
| type { get; set; } | 类型标识，固定为 `Faces`。 |

### ArchiJsonFaces constructor

The default constructor.

```csharp
public ArchiJsonFaces()
```

### ArchiJsonFaces.count property

面数量相关计数。

```csharp
public int[] count { get; set; }
```

### ArchiJsonFaces.index property

顶点索引扁平数组。

```csharp
public int[] index { get; set; }
```

### ArchiJsonFaces.properties property

扩展属性（可空）。

```csharp
public object properties { get; set; }
```

### ArchiJsonFaces.size property

每个面的顶点数。

```csharp
public int[] size { get; set; }
```

### ArchiJsonFaces.type property

类型标识，固定为 `Faces`。

```csharp
public string type { get; set; }
```
