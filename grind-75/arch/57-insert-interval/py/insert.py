class Solution:
  def insert(self, xs: list[list[int]], y: list[int]) -> list[list[int]]:
    n = len(xs)
    i = 0
    while i < n and xs[i][1] < y[0]:
      i += 1
    j = i
    while j < n and xs[j][0] <= y[1]:
      j += 1
    y0 = min(y[0], xs[i][0]) if i < n else y[0]
    y1 = max(y[1], xs[j-1][1]) if 1 <= j and j <= n else y[1]
    xs[i:j] = [[y0, y1]]
    return xs


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBasic(self):
      self.assertEqual([[0, 1], [2, 3], [4, 5]],
                       Solution().insert([[2, 3], [4, 5]], [0, 1]))
      self.assertEqual([[0, 1], [2, 3], [4, 5]],
                       Solution().insert([[0, 1], [4, 5]], [2, 3]))
      self.assertEqual([[0, 1], [2, 3], [4, 5]],
                       Solution().insert([[0, 1], [2, 3]], [4, 5]))
      self.assertEqual([[0, 5]],
                       Solution().insert([[0, 2], [3, 5]], [1, 4]))

      self.assertEqual([[0, 3], [4, 5]],
                       Solution().insert([[2, 3], [4, 5]], [0, 2]))
      self.assertEqual([[0, 3], [4, 5]],
                       Solution().insert([[2, 3], [4, 5]], [0, 3]))

      self.assertEqual([[0, 1], [2, 5]],
                       Solution().insert([[0, 1], [2, 3]], [3, 5]))
      self.assertEqual([[0, 1], [2, 5]],
                       Solution().insert([[0, 1], [2, 3]], [2, 5]))

      self.assertEqual([[1, 5], [6, 9]], Solution().insert(
          [[1, 3], [6, 9]], [2, 5]))
      self.assertEqual([[1, 2], [3, 10], [12, 16]], Solution().insert(
          [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))

  unittest.main()
