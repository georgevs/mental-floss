from typing import List
from graph import Graph, other, Edge
from min_cost_connect_points import edges, Point
from queue import PriorityQueue

class SolutionPrim:
  def minCostConnectPoints(self, pts: List[Point]) -> int:
    n = len(pts)
    xs = edges(pts)
    txs = prim_lazy(Graph(n, xs))
    r = sum(e[2] for e in txs)
    return r


def prim_lazy(g: Graph) -> List[Edge]:
  s = set()
  pq = PriorityQueue()
  n = g.numVertices()
  txs = []

  def prim(u):
    while u != None and len(txs) < n-1:
      s.add(u)
      for e in g.neigbours(u):
        if other(e, u) not in s:
          pq.put((e[2], [u, other(e, u), e[2]]))
      u = None
      while u == None and not pq.empty():
        _, e = pq.get()
        if e[1] not in s:
          u = e[1]
          txs.append(e)

  for u in g.vertices():
    if u not in s:
      prim(u)

  return txs
