from typing import List


class SolutionDFS:
  def canFinish(self, n: int, xs: List[List[int]]) -> bool:
    g = Graph(n, xs)
    c = dict()

    def visit(u):
      if c.get(u) == 'G':
        return False
      if c.get(u) == 'W':
        return True
      c[u] = 'G'
      for v in g.vs[u]:
        if not visit(v):
          return False
      c[u] = 'W'
      return True

    for u in range(n):
      if not visit(u):
        return False

    return True


class SolutionKahn:
  def canFinish(self, n: int, xs: List[List[int]]) -> bool:
    g = InGraph(n, xs)
    d = {v: len(g.vs[v]) for v in range(n)}
    # print('xs', xs, 'g', g)
    q = [v for v, k in d.items() if k == 0]
    # print('d', d, 'q', q)
    while q:
      for v in q:
        del d[v]
        for u in g.us[v]:
          d[u] -= 1
      q = [v for v, k in d.items() if k == 0]
      # print('d', d, 'q', q)

    return not d


class Graph:
  def __init__(self, n, xs):
    self.vs = [[] for _ in range(n)]
    for v, u in xs:
      self.vs[u].append(v)

  def __repr__(self) -> str:
    return str(dict([u, vs] for u, vs in enumerate(self.vs)))


class InGraph(Graph):
  def __init__(self, n, xs):
    super().__init__(n, xs)
    self.us = [[] for _ in range(n)]
    for v, u in xs:
      self.us[v].append(u)

  def __repr__(self) -> str:
    return str(dict([x, [self.vs[x], self.us[x]]] for x in range(len(self.vs))))


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testCanFinishDFS(self):
      self.__testCanFinish(SolutionDFS)

    def testCanFinishKahn(self):
      self.__testCanFinish(SolutionKahn)

    def __testCanFinish(self, Solution):
      self.assertTrue(Solution().canFinish(2, [[1, 0]]))
      self.assertFalse(Solution().canFinish(2, [[1, 0], [0, 1]]))

  unittest.main()
