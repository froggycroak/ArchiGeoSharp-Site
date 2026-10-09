---
outline: [2, 3]
---

<p class="api-breadcrumb"><code>ArchiGeo.Raylex</code></p>

# RColor structure

RGBA 颜色，与 Raylib Color 互操作；包含 Raylib 常用预设色。

```csharp
public struct RColor
```

## Public Members

| name | description |
| --- | --- |
| RColor(…) | 构造带透明度的颜色。 (6 constructors) |
| static Default { get; set; } | 默认描边/文本颜色（Draw/Build 等方法未传入颜色时使用）。 |
| static readonly Beige | 米色。 |
| static readonly Black | 黑。 |
| static readonly Blank | 全透明。 |
| static readonly Blue | 蓝。 |
| static readonly Brown | 棕。 |
| static readonly DarkBlue | 深蓝。 |
| static readonly DarkBrown | 深棕。 |
| static readonly DarkGray | 深灰。 |
| static readonly DarkGreen | 深绿。 |
| static readonly DarkPurple | 深紫。 |
| static readonly Gold | 金。 |
| static readonly Gray | 灰。 |
| static readonly Green | 绿。 |
| static readonly LightGray | 浅灰。 |
| static readonly Lime | 青绿。 |
| static readonly Magenta | 品红。 |
| static readonly Maroon | 栗红。 |
| static readonly Orange | 橙。 |
| static readonly Pink | 粉。 |
| static readonly Purple | 紫。 |
| static readonly RayWhite | Raylib 默认浅背景色。 |
| static readonly Red | 红。 |
| static readonly SkyBlue | 天蓝。 |
| static readonly Violet | 紫罗兰。 |
| static readonly White | 白。 |
| static readonly Yellow | 黄。 |
| A | 透明度（0 完全透明，255 不透明）。 |
| B | 蓝色分量（0–255）。 |
| G | 绿色分量（0–255）。 |
| R | 红色分量（0–255）。 |
| override Equals(…) |  |
| override GetHashCode() |  |
| override ToString() |  |
| operator == | 分量相等比较。 |
| implicit operator | 隐式转换为 Raylib Color。 |
| operator != | 分量不等比较。 |

### RColor.A field

透明度（0 完全透明，255 不透明）。

```csharp
public byte A;
```

### RColor.B field

蓝色分量（0–255）。

```csharp
public byte B;
```

### RColor.Beige field

米色。

```csharp
public static readonly RColor Beige;
```

### RColor.Black field

黑。

```csharp
public static readonly RColor Black;
```

### RColor.Blank field

全透明。

```csharp
public static readonly RColor Blank;
```

### RColor.Blue field

蓝。

```csharp
public static readonly RColor Blue;
```

### RColor.Brown field

棕。

```csharp
public static readonly RColor Brown;
```

### RColor.DarkBlue field

深蓝。

```csharp
public static readonly RColor DarkBlue;
```

### RColor.DarkBrown field

深棕。

```csharp
public static readonly RColor DarkBrown;
```

### RColor.DarkGray field

深灰。

```csharp
public static readonly RColor DarkGray;
```

### RColor.DarkGreen field

深绿。

```csharp
public static readonly RColor DarkGreen;
```

### RColor.DarkPurple field

深紫。

```csharp
public static readonly RColor DarkPurple;
```

### RColor.Default property

默认描边/文本颜色（Draw/Build 等方法未传入颜色时使用）。

```csharp
public static RColor Default { get; set; }
```

### RColor.Equals method

```csharp
public override bool Equals(object? obj)
```

### RColor.G field

绿色分量（0–255）。

```csharp
public byte G;
```

### RColor.GetHashCode method

```csharp
public override int GetHashCode()
```

### RColor.Gold field

金。

```csharp
public static readonly RColor Gold;
```

### RColor.Gray field

灰。

```csharp
public static readonly RColor Gray;
```

### RColor.Green field

绿。

```csharp
public static readonly RColor Green;
```

### RColor.LightGray field

浅灰。

```csharp
public static readonly RColor LightGray;
```

### RColor.Lime field

青绿。

```csharp
public static readonly RColor Lime;
```

### RColor.Magenta field

品红。

```csharp
public static readonly RColor Magenta;
```

### RColor.Maroon field

栗红。

```csharp
public static readonly RColor Maroon;
```

### RColor Equality operator

分量相等比较。

```csharp
public static bool operator ==(RColor c1, RColor c2)
```

### RColor Implicit operator

隐式转换为 Raylib Color。

```csharp
public static implicit operator Color(RColor c)
```

### RColor Inequality operator

分量不等比较。

```csharp
public static bool operator !=(RColor c1, RColor c2)
```

### RColor.Orange field

橙。

```csharp
public static readonly RColor Orange;
```

### RColor.Pink field

粉。

```csharp
public static readonly RColor Pink;
```

### RColor.Purple field

紫。

```csharp
public static readonly RColor Purple;
```

### RColor.R field

红色分量（0–255）。

```csharp
public byte R;
```

### RColor.RayWhite field

Raylib 默认浅背景色。

```csharp
public static readonly RColor RayWhite;
```

### RColor constructor (1 of 6)

构造不透明颜色（`A` 设为 255）。

```csharp
public RColor(byte r, byte g, byte b)
```

### RColor constructor (2 of 6)

；分量按 0–1 归一化输入。

```csharp
public RColor(float r, float g, float b)
```

### RColor constructor (3 of 6)

；分量经 Int32) 转换。

```csharp
public RColor(int r, int g, int b)
```

### RColor constructor (4 of 6)

构造带透明度的颜色。

```csharp
public RColor(byte r, byte g, byte b, byte a)
```

### RColor constructor (5 of 6)

；分量按 0–1 归一化输入，映射到 0–255 并四舍五入。

```csharp
public RColor(float r, float g, float b, float a)
```

### RColor constructor (6 of 6)

；分量经 Int32) 转换。

```csharp
public RColor(int r, int g, int b, int a)
```

### RColor.Red field

红。

```csharp
public static readonly RColor Red;
```

### RColor.SkyBlue field

天蓝。

```csharp
public static readonly RColor SkyBlue;
```

### RColor.ToString method

```csharp
public override string ToString()
```

### RColor.Violet field

紫罗兰。

```csharp
public static readonly RColor Violet;
```

### RColor.White field

白。

```csharp
public static readonly RColor White;
```

### RColor.Yellow field

黄。

```csharp
public static readonly RColor Yellow;
```
