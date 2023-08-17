class Solution:
  def numIslands(self, xs):
    k = 0
    m, n = len(xs), len(xs[0])

    def dfs(r, c):
      xs[r][c] = '0'
      for r, c in [[r, c-1], [r-1, c], [r, c+1], [r+1, c]]:
        if 0 <= r < m and 0 <= c < n and xs[r][c] == '1':
          dfs(r, c)

    for r in range(m):
      for c in range(n):
        if xs[r][c] == '1':
          k += 1
          dfs(r, c)

    return k


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testMinIslands(self):
      self.assertEqual(1, Solution().numIslands(
          [
              ["1", "1", "1", "1", "0"],
              ["1", "1", "0", "1", "0"],
              ["1", "1", "0", "0", "0"],
              ["0", "0", "0", "0", "0"]
          ]
      ))
      self.assertEqual(3, Solution().numIslands(
          [
              ["1", "1", "0", "0", "0"],
              ["1", "1", "0", "0", "0"],
              ["0", "0", "1", "0", "0"],
              ["0", "0", "0", "1", "1"]
          ]
      ))

  unittest.main()
