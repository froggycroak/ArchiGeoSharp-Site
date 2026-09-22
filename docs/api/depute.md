# ArchiGeoSharp.Depute API 文档

> 模块：`src/depute/ArchiGeoSharp.Depute.csproj`  
> 依赖：ArchiGeoSharp.Basic、NetTopologySuite、OsmSharp、CGALDotNet

---

## 目录

- [1. 概述](#1-概述)
- [2. 配置与环境](#2-配置与环境)
- [3. Map（坐标与配置）](#3-map坐标与配置)
- [4. AMap（高德 Web Service）](#4-amap高德-web-service)
- [5. OSM（OpenStreetMap）](#5-osmopenstreetmap)
- [6. NTS（道路路网处理）](#6-nts道路路网处理)
- [7. CGAL（精确 2D 几何）](#7-cgal精确-2d-几何)
- [8. 端到端示例](#8-端到端示例)
- [9. 已知限制](#9-已知限制)

---

## 1. 概述

Depute 模块托管外部库能力，扩展 Basic 内核，分为四个子域：

| 命名空间 | 职责 |
|----------|------|
| `ArchiGeo.Depute.Map` | 坐标转换、配置文件读取 |
| `ArchiGeo.Depute.AMap` | 高德 Web Service（GCJ-02） |
| `ArchiGeo.Depute.OSM` | Nominatim 地名、Overpass/PBF 解析 |
| `ArchiGeo.Depute.NTS` | 道路缓冲、边界提取、弧段平滑 |
| `ArchiGeo.Depute.CGAL` | ArchiGeo ↔ CGAL 转换、布尔/偏移/骨架 |

> **坐标系约定**：AMap 返回 **GCJ-02**；OSM/Overpass 使用 **WGS84**。串联调用时必须经 `CoordinateTransform` 转换。

---

## 2. 配置与环境

### 公共配置（`PublicConfigProvider`）

路径：`%APPDATA%\ArchiFrog\Public\config\`

| 文件 | 字段 | 用途 |
|------|------|------|
| `amap_api.json` | `webservicekey` | 高德 Web Service Key |
| `osm_api.json` | `pbfDirectory` | 本地 Geofabrik PBF 目录 |

```csharp
PublicConfigProvider.TryGetString("amap_api.json", "webservicekey", "webServiceKey");
PublicConfigProvider.TryGetString("osm_api.json", "pbfDirectory");
```

仓库示例：`config/amap_api.json.example`、`config/osm_api.json.example`

### 应用设置（`SettingsProvider`）

路径：`%APPDATA%\ArchiFrog\ArchiGeoSharp\config\settings.json`  
Depute 模块内未直接使用，供其他模块（如 LLM）使用。

### OSM 环境变量

| 变量 | 作用 |
|------|------|
| `ARCHIGEO_OSM_NOMINATIM_URLS` | 自定义 Nominatim 端点（`;` 或 `,` 分隔） |
| `ARCHIGEO_OSM_INSECURE_SSL` | 调试时跳过 TLS 校验 |
| `ARCHIGEO_OSM_MAPSCO_API_KEY` | geocode.maps.co 镜像 Key |

---

## 3. Map（坐标与配置）

### CoordinateTransform

| 方法 | 说明 |
|------|------|
| `IsInChina(lat, lon)` | 是否在中国境内（GCJ 偏移适用区） |
| `Wgs84ToGcj02(lat, lon)` | WGS84 → GCJ-02 |
| `Gcj02ToWgs84(lat, lon)` | GCJ-02 → WGS84（近似） |
| `Gcj02ToWgs84Precise(lat, lon, maxIter=30, threshold=1e-7)` | 二分迭代高精度反解 |

```csharp
using ArchiGeo.Depute.Map;

(double wgsLat, double wgsLon) = CoordinateTransform.Gcj02ToWgs84Precise(gcjLat, gcjLon);
```

### PublicConfigProvider / SettingsProvider

| 成员 | 说明 |
|------|------|
| `ConfigDirectory` | 公共配置目录绝对路径 |
| `AmapApiPath` / `OsmApiPath` | 完整文件路径 |
| `TryGetString(configFileName, params keyPaths)` | 读取 JSON 字符串（支持点分路径） |

---

## 4. AMap（高德 Web Service）

### AMapQuery

| 方法 | 说明 |
|------|------|
| `GeocodeByName(AMapPlaceQuery, apiKey=null)` | 地名地理编码，返回 GCJ-02 |
| `GeocodeByNameWgs84(...)` | 编码后自动转 WGS84 |
| `QueryFeaturesAround(AMapRangeQuery, apiKey=null)` | 周边 POI + 逆地理道路 |

**查询 DTO：**

```csharp
// 地名编码
var geo = AMapQuery.GeocodeByName(new AMapPlaceQuery
{
    PlaceName = "东南大学四牌楼校区",
    City = "南京"
});

// 周边查询
var around = AMapQuery.QueryFeaturesAround(new AMapRangeQuery
{
    Latitude = geo.Latitude,
    Longitude = geo.Longitude,
    RadiusMeters = 800,
    Keywords = null,
    Types = "商务住宅|道路"  // 可选
});
// around.Pois, around.Roads
```

**结果类型：** `AMapGeocodeResult`、`AMapPoiResult`、`AMapRoadResult`、`AMapRangeResult`

---

## 5. OSM（OpenStreetMap）

### OSMQuery — Nominatim 地名

```csharp
using ArchiGeo.Depute.OSM;

var results = OSMQuery.SearchPlaceCoordinates(new OSMPlaceQuery
{
    QueryText = "北京市天安门",
    Limit = 5,
    Language = "zh-CN",
    GeometryPreference = OSMGeometryPreference.PointFirst
});
// results[i].Latitude, Longitude, DisplayName, CoordinateSource
```

**`OSMGeometryPreference`：** `PointFirst`（默认）、`PolygonFirst`、`PointOnly`、`PolygonOnly`

### OSMParser — Overpass / 本地 PBF

| 方法 | 说明 |
|------|------|
| `GetOverpassJson(lat, lon, radiusM, useLocal=false)` | 获取 Overpass JSON |
| `GetOverpassJsonLocal(...)` | 仅从本地 PBF |
| `GetArchiJsonAndGeometryFromOverpass(json, centerLat, centerLon)` | 解析为 ArchiJSON + 几何 |

**查询内容：** 半径内 `building` + `highway` way，`out geom`。

**几何转换规则：**
- 经纬度 → 以中心点为原点的局部米制 XY
- **建筑：** 闭合 Polyline → `Prism`（默认高 12m；或 `height` 标签 / `building:levels × 4`）
- **道路：** 开放 Polyline
- 输出 `archiJson` 含 `geometryElements` + `properties`

```csharp
// 在线
string json = OSMParser.GetOverpassJson(32.058, 118.789, 200);
var (archiJson, prisms, roads) =
    OSMParser.GetArchiJsonAndGeometryFromOverpass(json, 32.058, 118.789);

// 本地 PBF（需 osm_api.json 中 pbfDirectory）
string localJson = OSMParser.GetOverpassJson(32.058, 118.789, 200, useLocal: true);
```

### PlaceSample

测试样本点集合，便于快速验证 OSM 解析。

| 成员 | 说明 |
|------|------|
| `HighCoveragePlaces` | 新加坡、东京、柏林等 OSM 数据密集区 |
| `LegacyPlaces` | 东南大学四牌楼等历史测试点 |
| `SoutheastUniversitySipailou` | 快捷访问 Legacy[0] |
| `FindByName(name)` | 不区分大小写查找 |

---

## 6. NTS（道路路网处理）

基于 NetTopologySuite，坐标与 OSM 局部米制一致（SRID 0）。

### NtsRoadBufferOptions

| 属性 | 默认 | 说明 |
|------|------|------|
| `HalfWidth` | 4.0 | 半宽（中心线到一侧） |
| `EndCap` | Flat | 端头样式 |
| `Join` | Bevel | 拐角样式 |
| `QuadrantSegments` | 8 | 圆角分段数 |
| `Mode` | `MergedNetwork` | 路面策略：整网一次 Buffer（快）/ `EachThenUnion`（旧路径） |
| `SimplifyToleranceMeters` | 0.3 | 缓冲前 Douglas-Peucker 容差（米）；≤0 关闭 |

**`ParcelBufferMode`：** `MergedNetwork`（默认，合并中心线后一次 Buffer）、`EachThenUnion`（逐线 Buffer 再 Union，几何对比用）。

### PolylineNtsExtensions

| 方法 | 说明 |
|------|------|
| `Polyline.ToLineString(factory?)` | → NTS LineString |
| `LineString.ToPolyline()` | 反向 |
| `IEnumerable<Polyline>.ToMultiLineString(...)` | 批量，跳过 <2 点 |
| `Point.ToCoordinate()` / `Coordinate.ToArchiPoint()` | 点互转 |

### RoadNetworkNtsProcessor

| 方法 | 说明 |
|------|------|
| `BuildMultiLineString(centerlines)` | 中心线集合 |
| `BuildRoadSurface(network, options)` | **推荐入口**：按 `Mode` 构建路面（默认合并+简化+整网 Buffer） |
| `MergeTouchingLines(network)` | 端点相接合并 |
| `BufferNetwork(centerlines, options)` | 整网一次缓冲 |
| `BufferEachThenUnion(centerlines, options)` | 逐线缓冲再 Union（旧路径） |
| `ExtractBoundaryPolygonsWithHoles(surface)` | → `PolygonWithHoles[]` |
| `ExtractBoundaryPolylines(surface)` | 外环+孔洞打平 |

### NtsToSmoothArcSeries

| 方法 | 说明 |
|------|------|
| `TryFromLineString(line, closed, densifyMaxSegmentLength=0)` | → `SmoothArcSeries?` |
| `FromRoadSurface(surface, densifyMaxSegmentLength=0)` | 道路面所有边界环 |

**典型流水线：**

```csharp
using ArchiGeo.Depute.NTS;

var network = RoadNetworkNtsProcessor.BuildMultiLineString(roads);
var surface = RoadNetworkNtsProcessor.BuildRoadSurface(network, new NtsRoadBufferOptions
{
    HalfWidth = 4.0,
    Join = JoinStyle.Bevel
    // Mode = ParcelBufferMode.MergedNetwork（默认）
    // SimplifyToleranceMeters = 0.3（默认）
});
var boundaries = RoadNetworkNtsProcessor.ExtractBoundaryPolygonsWithHoles(surface);
var arcs = NtsToSmoothArcSeries.FromRoadSurface(surface, densifyMaxSegmentLength: 2.0);
```

---

## 7. CGAL（精确 2D 几何）

内核主要使用 `CGALDotNet.EIK`（Exact Predicates Inexact Constructions）。需 `lib/cgal/` 下原生 DLL。

### CoerceGeometryCGAL

**ArchiGeo → CGAL：**

| 方法 | 输入 → 输出 |
|------|-------------|
| `ToCGAL2D` | `Point` → `Point2d` |
| `ToCGAL2D` | `LineSeg` → `Segment2d` |
| `ToCGAL2D` | `ILineExpr` → `Line2<EIK>` |
| `ToCGAL2D_EIK` | `Polyline` → `Polygon2<EIK>` |
| `ToCGAL2D_EIK` | `PolygonWithHoles` → `PolygonWithHoles2<EIK>` |

**CGAL → ArchiGeo：** `ToArchiGeometry` 反向转换。

### PolylineExtension2

| 方法 | 说明 |
|------|------|
| `IsSimple(poly)` | 简单多边形检测（无自交） |
| `Offset(poly, distance)` | 内/外偏移 → `Polyline[]` |
| `BufferClosed(poly, d)` | 封闭折线描边环带 → 剖缝 `Polyline` |
| `BufferPolygon(poly, d)` | 封闭折线描边 → 带孔 `PolygonWithHoles` |
| `Skeleton(poly)` | 内骨架 → `LineSeg[]` |
| `SkeletonGraph(poly, snapTol?)` | 骨架 → 普适 `GeomGraph`（`basic/topology/graph`） |
| `SkeletonLongestChain(poly, snapTol?)` | 完整直骨架上的最长链 → `Polyline` |
| `SkeletonTree(poly, snapTol?)` | 有根骨架树视图（根 = 最大边界距离节点） |
| `SkeletonSpine(poly, pruneRatio?, widthFactor?, snapTol?)` | 剪枝后主走向直链 + 简洁分叉主干 |
| `MaximumInscribedCircle(poly)` | 最大内切圆 |
| `BooleanJoin(poly1, poly2)` | **占位，当前返回空数组** |

相关类型：`GeomGraph`（basic）；`SkeletonTree` / `SkeletonSpine`（depute，薄领域结果）。
分叉主干剪枝：去掉较短的轮廓角刺，并删掉长度 `< max(pruneRatio×直径, widthFactor×最大内宽)` 的叶枝（默认 `0.15` / `1.25`）。

### PolygonExtension2 + BooleanType

```csharp
using ArchiGeo.Depute.CGAL;

PolygonWithHoles[] result = polyWH1.Boolean(BooleanType.INTERSECTION, polyWH2);
// JOIN | INTERSECTION | DIFFERENCE | SYMMETRIC_DIFFERENCE
```

---

## 8. 端到端示例

### AMap 定位 → OSM 建筑/道路

```csharp
using ArchiGeo.Depute.AMap;
using ArchiGeo.Depute.Map;
using ArchiGeo.Depute.OSM;

var geo = AMapQuery.GeocodeByName(new() { PlaceName = "徐汇滨江", City = "上海" });
(double lat, double lon) = CoordinateTransform.Gcj02ToWgs84Precise(geo.Latitude, geo.Longitude);

string overpass = OSMParser.GetOverpassJson(lat, lon, 500);
var (archiJson, prisms, roads) = OSMParser.GetArchiJsonAndGeometryFromOverpass(overpass, lat, lon);
```

### 纯 OSM（无需 AMap Key）

```csharp
var sample = PlaceSample.FindByName("Singapore Downtown Core")
    ?? PlaceSample.HighCoveragePlaces[0];
string json = OSMParser.GetOverpassJson(sample.Latitude, sample.Longitude, 400);
```

---

## 9. 已知限制

| 项 | 说明 |
|----|------|
| 同步 HTTP | 网络调用为阻塞式 |
| `BooleanJoin` | 未实现，返回 `[]` |
| 本地 PBF | 仅中国省级 Geofabrik；省界附近可能读多个文件 |
| 建筑高度 | 无标签时默认 12m |
| 网络 | AMap/Overpass/Nominatim 需外网（本地 PBF 除外） |

---

## 参考

- [Basic API](basic.md)
- [Raylex API](raylex.md) — 可视化 OSM 解析结果
- 测试参考：`TestPool2`（Test045/049）、`TestPool4`（Test003/004）
