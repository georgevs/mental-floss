class Solution:
  def orangesRotting(self, xs):
    m,n = len(xs), len(xs[0])
    qs = []
    vs = set()
    for r in range(m):
      for c in range(n):
        if xs[r][c] == 2:
          qs.append((r,c))
        elif xs[r][c] == 1:
          vs.add(r*n+c)

    k = 0
    while qs and vs:
      qsn = []
      for r,c in qs:
        for r,c in [(r,c-1),(r-1,c),(r,c+1),(r+1,c)]:
          if 0<=r<m and 0<=c<n and xs[r][c] == 1:
            xs[r][c] = 2
            vs.remove(r*n+c)
            qsn.append((r,c))
      qs = qsn
      k += 1
          
    return k if not vs else -1


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testOrangesRotting(self):
      self.assertEqual(4, Solution().orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))
      self.assertEqual(-1, Solution().orangesRotting([[2,1,1],[0,1,1],[1,0,1]]))      
      self.assertEqual(0, Solution().orangesRotting([[0,2]]))

  unittest.main()

