from typing import List, Tuple

Vertex = int
Edge = Tuple[Vertex, Vertex, int]


def other(e: Edge, u: Vertex) -> Vertex:
  return e[0] if u == e[1] else e[1]


class Graph:
  def __init__(self, n: int, xs: List[Edge]):
    self.g = [[] for i in range(n)]
    for e in xs:
      self.g[e[0]].append(e)
      self.g[e[1]].append(e)

  def numVertices(self): return len(self.g)
  def vertices(self): return range(len(self.g))
  def neigbours(self, u: Vertex) -> List[Edge]: return self.g[u]
