class Solution1:
  def maxSubArray(self, xs: list[int]) -> int:
    n = len(xs)
    ys = (n+1)*[-10001]
    for i in range(1, n+1):
      ys[i] = max(xs[n-i], xs[n-i]+ys[i-1])
    return max(ys)


class Solution2:
  def maxSubArray(self, xs: list[int]) -> int:
    n = len(xs)
    ys = n*[xs[0]]
    for i in range(1, n):
      ys[i] = max(xs[i], xs[i]+ys[i-1])
    return max(ys)


class Solution:
  def maxSubArray(self, xs: list[int]) -> int:
    n = len(xs)
    r = c = xs[0]
    for i in range(1, n):
      c = max(xs[i], xs[i]+c)
      r = max(r, c)
    return r


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBasic(self):
      self.assertEqual(6, Solution().maxSubArray(
          [-2, 1, -3, 4, -1, 2, 1, -5, 4]))
      self.assertEqual(-1, Solution().maxSubArray([-1]))
      self.assertEqual(6, Solution().maxSubArray([4,-1,2,1]))
      self.assertEqual(23, Solution().maxSubArray([5,4,-1,7,8]))

  unittest.main()
