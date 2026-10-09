---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ArchiGeoJson class

ArchiGeoJson：数据结构与辅助方法。

ArchiGeo JSON 序列化（ToAgJson）：几何对象 → Archijson 字符串。

ArchiGeo JSON 反序列化（FromAgJson）：Archijson 字符串 → 几何对象。

```csharp
public static class ArchiGeoJson
```

## Public Members

| name | description |
| --- | --- |
| static AgJsonTypes | 支持的 ArchiGeoJson 类型名列表。 |
| static ExtractPointList(…) | 从外层 JSON 的 `pointlist` 字段提取并解析点列表。 |
| static ExtractPolyline(…) | 从外层 JSON 的 `polyline` 字段提取并解析折线。 |
| static PackAgJson(…) | 将多个几何 JSON 片段合并为一个顶层 JObject 字符串。 |
| static ToAgJson(…) | 将点列表转换为 Archijson vertices 格式。 (8 methods) |
| static ToMeshTriangle(…) | 从Archijson格式解析为MeshTriangle |
| static ToPointList(…) | 解析 vertices JSON 为点列表。 |
| static ToPolyline(…) | 解析 segments JSON 为折线。 |

### ArchiGeoJson.AgJsonTypes field

支持的 ArchiGeoJson 类型名列表。

```csharp
public static string[] AgJsonTypes;
```

### ArchiGeoJson.ExtractPointList method

从外层 JSON 的 `pointlist` 字段提取并解析点列表。

```csharp
public static List<Point> ExtractPointList(this string agJson)
```

| parameter | description |
| --- | --- |
| agJson | 完整 Archijson 包装字符串。 |

#### Return Value

点列表。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | JSON 为空。 |
| FormatException | 缺少 pointlist 字段。 |

### ArchiGeoJson.ExtractPolyline method

从外层 JSON 的 `polyline` 字段提取并解析折线。

```csharp
public static Polyline ExtractPolyline(string agJson)
```

| parameter | description |
| --- | --- |
| agJson | 完整 Archijson 包装字符串。 |

#### Return Value

折线。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | JSON 为空。 |
| FormatException | 缺少 polyline 字段。 |

### ArchiGeoJson.PackAgJson method

将多个几何 JSON 片段合并为一个顶层 JObject 字符串。

```csharp
public static string PackAgJson(Dictionary<string, string> geometryDict)
```

| parameter | description |
| --- | --- |
| geometryDict | 键为字段名、值为已序列化的 JSON 子串。 |

#### Return Value

合并后的 JSON。

### ArchiGeoJson.ToAgJson method (1 of 8)

将Box转换为Archijson格式

```csharp
public static string ToAgJson(this Box box)
```

| parameter | description |
| --- | --- |
| box | 长方体。 |

#### Return Value

JSON 字符串。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentNullException | box 为 null。 |

### ArchiGeoJson.ToAgJson method (2 of 8)

将点列表转换为 Archijson vertices 格式。

```csharp
public static string ToAgJson(this IList<Point> pts)
```

| parameter | description |
| --- | --- |
| pts | 三维点列表（展平为坐标数组）。 |

#### Return Value

JSON 字符串。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 列表为 null 或空时抛出。 |

### ArchiGeoJson.ToAgJson method (3 of 8)

将已知 `ISolid` 实现分派到对应 ToAgJson 重载。

```csharp
public static string ToAgJson(this ISolid solid)
```

| parameter | description |
| --- | --- |
| solid | 实体（Box、Prism、Sphere、MeshTriangle 等）。 |

#### Return Value

JSON 字符串。

#### Exceptions

| exception | condition |
| --- | --- |
| NotImplementedException | 不支持的实体类型。 |

### ArchiGeoJson.ToAgJson method (4 of 8)

将MeshTriangle转换为Archijson格式

```csharp
public static string ToAgJson(this MeshTriangle mesh)
```

| parameter | description |
| --- | --- |
| mesh | 网格三角形对象 |

#### Return Value

JSON字符串

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentNullException | mesh 为 null。 |
| ArgumentException | 顶点或面数据为空时抛出。 |

### ArchiGeoJson.ToAgJson method (5 of 8)

将 `PlaneSeg` 转为 Archijson plane（含矩阵与 position）。

```csharp
public static string ToAgJson(this PlaneSeg planeSeg)
```

| parameter | description |
| --- | --- |
| planeSeg | 平面矩形片。 |

#### Return Value

JSON 字符串。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentNullException | planeSeg 为 null。 |

### ArchiGeoJson.ToAgJson method (6 of 8)

将折线转换为 Archijson segments 格式。

```csharp
public static string ToAgJson(this Polyline poly)
```

| parameter | description |
| --- | --- |
| poly | 折线。 |

#### Return Value

JSON 字符串。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentException | 折线为 null 或空时抛出。 |

### ArchiGeoJson.ToAgJson method (7 of 8)

将Prism转换为Archijson格式

```csharp
public static string ToAgJson(this Prism prism)
```

| parameter | description |
| --- | --- |
| prism | 棱柱。 |

#### Return Value

JSON 字符串。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentNullException | prism 为 null。 |

### ArchiGeoJson.ToAgJson method (8 of 8)

将Sphere转换为Archijson格式

```csharp
public static string ToAgJson(this Sphere sphere)
```

| parameter | description |
| --- | --- |
| sphere | 球体。 |

#### Return Value

JSON 字符串。

#### Exceptions

| exception | condition |
| --- | --- |
| ArgumentNullException | sphere 为 null。 |

### ArchiGeoJson.ToMeshTriangle method

从Archijson格式解析为MeshTriangle

```csharp
public static MeshTriangle ToMeshTriangle(this string agMeshJson)
```

| parameter | description |
| --- | --- |
| agMeshJson | 网格JSON字符串 |

#### Return Value

MeshTriangle对象

#### Exceptions

| exception | condition |
| --- | --- |
| FormatException | 顶点、面或索引数据不完整/非法时抛出。 |

### ArchiGeoJson.ToPointList method

解析 vertices JSON 为点列表。

```csharp
public static List<Point> ToPointList(this string agPtsJson)
```

| parameter | description |
| --- | --- |
| agPtsJson | Archijson vertices 字符串。 |

#### Return Value

三维点列表。

#### Exceptions

| exception | condition |
| --- | --- |
| FormatException | 坐标缺失或无效时抛出。 |

### ArchiGeoJson.ToPolyline method

解析 segments JSON 为折线。

```csharp
public static Polyline ToPolyline(this string agPolyJson)
```

| parameter | description |
| --- | --- |
| agPolyJson | Archijson segments 字符串。 |

#### Return Value

折线。

#### Exceptions

| exception | condition |
| --- | --- |
| FormatException | 坐标或结构无效时抛出。 |
