class Graph:
  def __init__(self, xs):
    self.vertices = []
    self.index = {}
    emails = set()
    for ys in xs:
      name = ys[0]
      for email in ys[1:]:
        if email not in emails:
          emails.add(email)
          self.index[email] = len(self.vertices)
          self.vertices.append((email, name))
    emails = None  # cleanup unused

    self.neighbors = [set() for _ in self.vertices]
    edge = (lambda u, v: (u, v) if u < v else (v, u))
    for ys in xs:
      u = self.index[ys[1]]
      for email in ys[2:]:
        v = self.index[email]
        e = edge(u, v)
        self.neighbors[u].add(e)
        self.neighbors[v].add(e)

  def __str__(self):
    return str((self.vertices, self.index, self.neighbors))


class Accounts:
  def __init__(self, g):
    other = (lambda e, u: e[1] if u == e[0] else e[0])
    visited = set()

    def visit(u, ys):
      visited.add(u)
      ys.append(g.vertices[u][0])
      for e in list(g.neighbors[u]):
        v = other(e, u)
        if v not in visited:
          visit(v, ys)

    self.accounts = []
    for email, name in g.vertices:
      u = g.index[email]
      if u not in visited:
        ys = []
        visit(u, ys)
        self.accounts.append([name, *sorted(ys)])


class ConnectedComponentsSolution:
  def accountsMerge(self, xs):
    g = Graph(xs)
    return Accounts(g).accounts


# -----------------------------------------------------------------------------------------
class UnionFind:
  def __init__(self, n):
    self.roots = [i for i in range(n)]
    self.ranks = [0]*n

  def find(self, v):
    while (r := self.roots[v]) != v:
      v = r
    return r

  def connect(self, v1, v2):
    r1, r2 = self.find(v1), self.find(v2)
    if r1 != r2:
      h1, h2 = self.ranks[r1], self.ranks[r2]
      if h1 < h2:
        self.roots[r1] = r2
      elif h2 < h1:
        self.roots[r2] = r1
      else:
        self.roots[r1] = r2
        self.ranks[r2] += 1

  def __str__(self):
    return str(self.roots)


class UnionFindSolution:
  def accountsMerge(self, xs):
    vertices = list()
    index = dict()
    for ys in xs:
      name = ys[0]
      for email in ys[1:]:
        if email not in index:
          index[email] = len(vertices)
          vertices.append((email, name))

    ds = UnionFind(len(vertices))
    for ys in xs:
      u = index[ys[1]]
      for email in ys[2:]:
        ds.connect(u, index[email])

    yss = dict()
    for v, (email, name) in enumerate(vertices):
      r = ds.find(v)
      ys = yss.setdefault(r, [name])
      ys.append(email)

    rss = list()
    for ys in yss.values():
      rss.append([ys[0], *sorted(ys[1:])])

    return rss


# -----------------------------------------------------------------------------------------
if __name__ == '__main__':
  import unittest

  class TestUnionFind(unittest.TestCase):
    def testBasic(self):
      u = UnionFind(6)
      u.connect(0, 1)
      u.connect(1, 2)
      u.connect(3, 4)
      self.assertEqual(u.find(0), u.find(1))
      self.assertEqual(u.find(1), u.find(2))
      self.assertEqual(u.find(0), u.find(2))
      self.assertEqual(u.find(3), u.find(4))
      self.assertEqual(u.find(5), u.find(5))
      self.assertNotEqual(u.find(0), u.find(3))
      self.assertNotEqual(u.find(0), u.find(5))
      self.assertNotEqual(u.find(3), u.find(5))

  class TestSolution(unittest.TestCase):
    def testConnectedComponents(self):
      self.__testSolution(ConnectedComponentsSolution)
      self.__testSolution(UnionFindSolution)

      UnionFindSolution().accountsMerge([
          ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
          ["John", "johnsmith@mail.com", "john00@mail.com"],
          ["Mary", "mary@mail.com"],
          ["John", "johnnybravo@mail.com"]])

    def __testSolution(self, Solution):
      def accountsMerge(xs):
        return sorted(Solution().accountsMerge(xs), key=lambda x: x[0:2])

      self.assertEqual(
          [["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"],
           ["John", "johnnybravo@mail.com"],
           ["Mary", "mary@mail.com"]],
          accountsMerge([
              ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
              ["John", "johnsmith@mail.com", "john00@mail.com"],
              ["Mary", "mary@mail.com"],
              ["John", "johnnybravo@mail.com"]]))

      self.assertEqual(
          [["Ethan", "Ethan0@m.co", "Ethan4@m.co", "Ethan5@m.co"],
           ["Fern", "Fern0@m.co", "Fern1@m.co", "Fern5@m.co"],
           ["Gabe", "Gabe0@m.co", "Gabe1@m.co", "Gabe3@m.co"],
           ["Hanzo", "Hanzo0@m.co", "Hanzo1@m.co", "Hanzo3@m.co"],
           ["Kevin", "Kevin0@m.co", "Kevin3@m.co", "Kevin5@m.co"]],
          accountsMerge([
              ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe1@m.co"],
              ["Kevin", "Kevin3@m.co", "Kevin5@m.co", "Kevin0@m.co"],
              ["Ethan", "Ethan5@m.co", "Ethan4@m.co", "Ethan0@m.co"],
              ["Hanzo", "Hanzo3@m.co", "Hanzo1@m.co", "Hanzo0@m.co"],
              ["Fern", "Fern5@m.co", "Fern1@m.co", "Fern0@m.co"]]))

      self.assertEqual(
          [["David", "David0@m.co", "David1@m.co",
            "David3@m.co", "David4@m.co", "David5@m.co"]],
          accountsMerge(
              [["David", "David0@m.co", "David4@m.co", "David3@m.co"],
               ["David", "David5@m.co", "David5@m.co", "David0@m.co"],
               ["David", "David1@m.co", "David4@m.co", "David0@m.co"],
               ["David", "David0@m.co", "David1@m.co", "David3@m.co"],
               ["David", "David4@m.co", "David1@m.co", "David3@m.co"]]))

  unittest.main()
