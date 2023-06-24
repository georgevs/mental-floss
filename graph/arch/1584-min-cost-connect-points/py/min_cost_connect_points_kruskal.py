from typing import List
from union_find import UnionFind
from min_cost_connect_points import edges, Point, Edge


class SolutionKruskal:
  def minCostConnectPoints(self, pts: List[Point]) -> int:
    n = len(pts)
    xs = edges(pts)
    txs = kruskal(n, xs)
    r = sum(e[2] for e in txs)
    return r


def kruskal(n: int, xs: List[Edge]) -> List[Edge]:
  xs = sorted(xs, key=lambda e: e[2])
  txs = []
  u = UnionFind(n)
  for e in xs:
    if u.connect(e[0], e[1]):
      txs.append(e)
      if len(txs) == n-1:
        break
  return txs
