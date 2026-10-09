---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# ITransform interface

局部 ↔ 世界坐标描述接口。

```csharp
public interface ITransform
```

## Members

| name | description |
| --- | --- |
| AbsoluteDescribe(…) | 局部点 → 世界点。 (2 methods) |
| RelativeDescribe(…) | 世界点 → 局部点。 (2 methods) |

### ITransform.AbsoluteDescribe method (1 of 2)

局部点 → 世界点。

```csharp
public Point AbsoluteDescribe(Point ptRelative)
```

### ITransform.AbsoluteDescribe method (2 of 2)

局部向量 → 世界向量。

```csharp
public Vector AbsoluteDescribe(Vector vecRelative)
```

### ITransform.RelativeDescribe method (1 of 2)

世界点 → 局部点。

```csharp
public Point RelativeDescribe(Point ptAbsolute)
```

### ITransform.RelativeDescribe method (2 of 2)

世界向量 → 局部向量。

```csharp
public Vector RelativeDescribe(Vector vecAbsolute)
```
