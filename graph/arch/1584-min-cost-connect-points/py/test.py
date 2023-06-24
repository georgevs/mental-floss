import unittest

from min_cost_connect_points import distance, edges
from min_cost_connect_points_kruskal import kruskal, SolutionKruskal
from min_cost_connect_points_prim import prim_lazy, SolutionPrim
from union_find import UnionFind
from graph import Graph


class TestDistance(unittest.TestCase):
  def test(self):
    self.assertEqual(10, distance([0, 0], [0, 10]))
    self.assertEqual(10, distance([0, 10], [0, 0]))
    self.assertEqual(10, distance([0, 0], [10, 0]))
    self.assertEqual(10, distance([10, 0], [0, 0]))
    self.assertEqual(11, distance([10, 1], [20, 2]))


class TestEdges(unittest.TestCase):
  def test(self):
    self.assertEqual([[0, 1, 10], [0, 2, 10], [1, 2, 20]],
                     edges([[0, 0], [0, 10], [10, 0]]))


class TestUnionFind(unittest.TestCase):
  def test(self):
    u = UnionFind(7)

    self.assertTrue(u.connect(0, 1))
    self.assertTrue(u.connect(1, 2))
    self.assertFalse(u.connect(0, 2))
    self.assertEqual(u.find(0), u.find(2))

    self.assertTrue(u.connect(3, 4))
    self.assertTrue(u.connect(4, 5))
    self.assertFalse(u.connect(5, 3))
    self.assertEqual(u.find(5), u.find(3))

    self.assertNotEqual(u.find(0), u.find(3))
    self.assertNotEqual(u.find(0), u.find(6))
    self.assertNotEqual(u.find(3), u.find(6))


class TestMinSpanningTree(unittest.TestCase):
  def test(self):
    def prim_lazy_(n, xs): return prim_lazy(Graph(n, xs))
    for mst in [kruskal, prim_lazy_]:
      with self.subTest(mst=mst):
        self.assertEqual(
            [[0, 1, 1], [0, 2, 1], [1, 3, 10]],
            sorted(mst(4, [[0, 1, 1], [0, 2, 1], [1, 3, 10], [2, 3, 20]])))


class TestMinCostConnectPoints(unittest.TestCase):
  def test(self):
    for Solution in [SolutionKruskal, SolutionPrim]:
      with self.subTest(Solution=Solution):
        self.assertEqual(4, Solution().minCostConnectPoints(
            [[0, 0], [1, 1], [1, 0], [-1, 1]]))
        self.assertEqual(20, Solution().minCostConnectPoints(
            [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]))
        self.assertEqual(18, Solution().minCostConnectPoints(
            [[3, 12], [-2, 5], [-4, 1]]))
        self.assertEqual(53, Solution().minCostConnectPoints(
            [[2, -3], [-17, -8], [13, 8], [-17, -15]]))
        self.assertEqual(139, Solution().minCostConnectPoints(
            [[-8, 14], [16, -18], [-19, -13], [-18, 19], [20, 20], [13, -20], [-15, 9], [-4, -8]]))


class TestGraph(unittest.TestCase):
  def test(self):
    g = Graph(4, [[0, 1, 1], [0, 2, 1], [1, 3, 10], [2, 3, 20]])
    self.assertEqual([0, 1, 2, 3], list(g.vertices()))
    self.assertEqual([[0, 1, 1], [0, 2, 1]], g.neigbours(0))
    self.assertEqual([[0, 1, 1], [1, 3, 10]], g.neigbours(1))
    self.assertEqual([[0, 2, 1], [2, 3, 20]], g.neigbours(2))
    self.assertEqual([[1, 3, 10], [2, 3, 20]], g.neigbours(3))


if __name__ == '__main__':
  unittest.main()
