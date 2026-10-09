---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ArchiJsonObjectBase class

ArchiGeoJson 对象基类：含类型名、扩展属性与 UUID。

```csharp
public abstract class ArchiJsonObjectBase
```

## Public Members

| name | description |
| --- | --- |
| properties { get; set; } | 扩展属性（可空）。 |
| abstract type { get; } | 几何类型名（如 Vertices、Mesh）。 |
| uuid { get; set; } | 唯一标识。 |

### ArchiJsonObjectBase.properties property

扩展属性（可空）。

```csharp
public object properties { get; set; }
```

### ArchiJsonObjectBase.type property

几何类型名（如 Vertices、Mesh）。

```csharp
public abstract string type { get; }
```

### ArchiJsonObjectBase.uuid property

唯一标识。

```csharp
public string uuid { get; set; }
```
