---
outline: false
---

# ArchiGeo.Basic.Topology

## ArchiGeo.Basic.Topology namespace

| public type | description |
| --- | --- |
| class [GeomGraph](/api/basic/topology/GeomGraph) | 普适几何图：节点带 `Point`，边为无向连接。 可与 `LineSeg` / `Polyline` 互转，供骨架、路网等复用。 |
| class [GeomGraphEdge](/api/basic/topology/GeomGraphEdge) | 无向图边（端点为节点 id）。 |
| class [GeomGraphNode](/api/basic/topology/GeomGraphNode) | 带点位的无向图节点。 |
| class [HalfEdge](/api/basic/topology/HalfEdge) | 半边：从起点出发、指向对偶起点的有向边。 |
| class [HEFace](/api/basic/topology/HEFace) | 半边网格面：由半边环界定。 |
| class [HEMesh](/api/basic/topology/HEMesh) | 半边网格：顶点 / 半边 / 面列表及拓扑操作。 |
| class [HEVertex](/api/basic/topology/HEVertex) | 半边网格顶点。 |
