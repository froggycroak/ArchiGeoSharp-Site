---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ArchiJsonMesh class

三角网格 DTO：顶点 + 面索引。

```csharp
public class ArchiJsonMesh : ArchiJsonObjectBase
```

## Public Members

| name | description |
| --- | --- |
| ArchiJsonMesh() | The default constructor. |
| faces { get; set; } | 面索引数据。 |
| matrix { get; set; } | 4×4 齐次变换矩阵（默认单位阵）。 |
| position { get; set; } | 位置偏移。 |
| override type { get; } |  |
| vertices { get; set; } | 顶点数据。 |

### ArchiJsonMesh constructor

The default constructor.

```csharp
public ArchiJsonMesh()
```

### ArchiJsonMesh.faces property

面索引数据。

```csharp
public ArchiJsonFaces faces { get; set; }
```

### ArchiJsonMesh.matrix property

4×4 齐次变换矩阵（默认单位阵）。

```csharp
public double[] matrix { get; set; }
```

### ArchiJsonMesh.position property

位置偏移。

```csharp
public ArchiJsonPosition position { get; set; }
```

### ArchiJsonMesh.type property

```csharp
public override string type { get; }
```

### ArchiJsonMesh.vertices property

顶点数据。

```csharp
public ArchiJsonVertices vertices { get; set; }
```
