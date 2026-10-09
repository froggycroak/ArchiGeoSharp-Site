---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Basic.Geometry</code></p>

# PrincipalAxes2d structure

平面多边形的质心二阶矩与等效椭圆主轴。 主轴长度取与面积二阶矩等价的椭圆全轴长（2a / 2b）。

```csharp
public struct PrincipalAxes2d
```

## Public Members

| name | description |
| --- | --- |
| PrincipalAxes2d(…) | 构造主轴分析结果。 |
| Area { get; } | 面积。 |
| Centroid { get; } | 质心。 |
| Eccentricity { get; } | 偏心率 = 短轴 / 长轴 |
| IMax { get; } | 最大主惯性矩。 |
| IMin { get; } | 最小主惯性矩。 |
| Ixx { get; } | 质心处 ∫ y² dA |
| Ixy { get; } | 质心处 ∫ xy dA |
| Iyy { get; } | 质心处 ∫ x² dA |
| MajorAxisAngle { get; } | 长轴方向角 |
| MajorAxisLength { get; } | 长轴全长 2a |
| MinorAxisLength { get; } | 短轴全长 2b |

### PrincipalAxes2d.Area property

面积。

```csharp
public double Area { get; }
```

### PrincipalAxes2d.Centroid property

质心。

```csharp
public Point Centroid { get; }
```

### PrincipalAxes2d.Eccentricity property

偏心率 = 短轴 / 长轴

```csharp
public double Eccentricity { get; }
```

### PrincipalAxes2d.IMax property

最大主惯性矩。

```csharp
public double IMax { get; }
```

### PrincipalAxes2d.IMin property

最小主惯性矩。

```csharp
public double IMin { get; }
```

### PrincipalAxes2d.Ixx property

质心处 ∫ y² dA

```csharp
public double Ixx { get; }
```

### PrincipalAxes2d.Ixy property

质心处 ∫ xy dA

```csharp
public double Ixy { get; }
```

### PrincipalAxes2d.Iyy property

质心处 ∫ x² dA

```csharp
public double Iyy { get; }
```

### PrincipalAxes2d.MajorAxisAngle property

长轴方向角

```csharp
public Angle MajorAxisAngle { get; }
```

### PrincipalAxes2d.MajorAxisLength property

长轴全长 2a

```csharp
public double MajorAxisLength { get; }
```

### PrincipalAxes2d.MinorAxisLength property

短轴全长 2b

```csharp
public double MinorAxisLength { get; }
```

### PrincipalAxes2d constructor

构造主轴分析结果。

```csharp
public PrincipalAxes2d(Point centroid, double area, double ixx, double iyy, double ixy, 
    double iMax, double iMin, double majorAxisLength, double minorAxisLength, Angle majorAxisAngle)
```

| parameter | description |
| --- | --- |
| centroid | 质心。 |
| area | 面积。 |
| ixx | Ixx。 |
| iyy | Iyy。 |
| ixy | Ixy。 |
| iMax | 最大主惯性矩。 |
| iMin | 最小主惯性矩。 |
| majorAxisLength | 长轴全长。 |
| minorAxisLength | 短轴全长。 |
| majorAxisAngle | 长轴方向角。 |
