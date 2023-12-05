class Solution:
  def exist(self, xs, w):
    m, n = len(xs), len(xs[0])

    s = set()

    def backtrack(i, k):
      y, x = i//n, i % n
      if xs[y][x] != w[k]:
        return False
      if k+1 == len(w):
        return True
      s.add(i)
      for y, x in [(y, x-1), (y-1, x), (y, x+1), (y+1, x)]:
        if 0 <= y < m and 0 <= x < n:
          j = y*n+x
          if j not in s:
            if backtrack(j, k+1):
              return True
      s.remove(i)
      return False

    for i in range(m*n):
      if backtrack(i, 0):
        return True
    return False


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testSolution(self):
      self.assertTrue(Solution().exist(
          [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))
      self.assertTrue(Solution().exist(
          [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"))
      self.assertFalse(Solution().exist(
          [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB"))

  unittest.main()
