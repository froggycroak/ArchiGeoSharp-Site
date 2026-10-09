---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ArchiJsonDtoHelper class

ArchiGeoJson DTO 辅助方法。

```csharp
public static class ArchiJsonDtoHelper
```

## Public Members

| name | description |
| --- | --- |
| static GetAjoType(…) | 从 JSON 字符串读取 `type` 字段。 |

### ArchiJsonDtoHelper.GetAjoType method

从 JSON 字符串读取 `type` 字段。

```csharp
public static string GetAjoType(string anyJson)
```

| parameter | description |
| --- | --- |
| anyJson | JSON 文本。 |

#### Return Value

类型名字符串。

#### Exceptions

| exception | condition |
| --- | --- |
| FormatException | 输入为空、非法 JSON 或缺少 type 时抛出。 |
