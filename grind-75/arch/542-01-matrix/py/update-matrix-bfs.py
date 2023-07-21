class Solution:
  def updateMatrix(self, us: list[list[int]]) -> list[list[int]]:
    m, n = len(us), len(us[0])
    vs = set()
    qs = []
    for y in range(0, m):
      for x in range(0, n):
        if us[y][x] == 0:
          qs.append((y, x))
          vs.add(y*n+x)

    zs = m*[None]
    for i in range(0, m):
      zs[i] = n*[None]
    k = 0
    while qs:
      nqs = []
      for y, x in qs:
        zs[y][x] = k
        for y, x in [(y, x-1), (y-1, x), (y, x+1), (y+1, x)]:
          if 0 <= y < m and 0 <= x < n and ((y*n+x) not in vs):
            nqs.append((y, x))
            vs.add(y*n+x)
      qs = nqs
      k += 1

    return zs


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBasic(self):
      self.assertEqual([[0, 0, 0], [0, 1, 0], [0, 0, 0]],
                       Solution().updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
      self.assertEqual([[0, 0, 0], [0, 1, 0], [1, 2, 1]],
                       Solution().updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]))

  unittest.main()
