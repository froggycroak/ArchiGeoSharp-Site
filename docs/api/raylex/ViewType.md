---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Raylex</code></p>

# ViewType enumeration

预设观察方向，用于快速设置 `MiniCam`（2D 迷你相机 / 平面视图）。

```csharp
public enum ViewType
```

## Values

| name | value | description |
| --- | --- | --- |
| TOP | `1` | 俯视（+Z 看向 XY）。 |
| BOTTOM | `2` | 仰视（-Z 看向 XY）。 |
| LEFT | `3` | 左视。 |
| RIGHT | `4` | 右视。 |
| FRONT | `5` | 正视（+Y 看向 XZ）。 |
| BACK | `6` | 后视。 |
| TBR | `7` | 顶-后-右 等轴测方向。 |
| TBL | `8` | 顶-后-左。 |
| TFR | `9` | 顶-前-右。 |
| TFL | `10` | 顶-前-左。 |
| BBR | `11` | 底-后-右。 |
| BBL | `12` | 底-后-左。 |
| BFR | `13` | 底-前-右。 |
| BFL | `14` | 底-前-左。 |
