class Node:
  def __init__(self, val=0, neighbors=None):
    self.val = val
    self.neighbors = neighbors if neighbors is not None else []


class Solution:
  def cloneGraph(self, u):
    if not u:
      return None

    ds = dict()

    def copy(u):
      y = ds.get(u)
      if not y:
        y = ds[u] = Node(u.val)
      return y

    def bfs(u):
      vs = set()
      qs = [u]
      vs.add(u)
      while qs:
        nqs = []
        for u in qs:
          y = copy(u)
          for v in u.neighbors:
            y.neighbors.append(copy(v))
            if v not in vs:
              nqs.append(v)
              vs.add(v)
        qs = nqs

    bfs(u)
    return copy(u)
