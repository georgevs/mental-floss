class Solution:
  def productExceptSelf(self, xs: list[int]) -> list[int]:
    n = len(xs)
    ls = [1]*n
    rs = [1]*n
    ys = [1]*n
    for i in range(1, n):
      ls[i] = ls[i-1]*xs[i-1]
    for i in range(n-2, -1, -1):
      rs[i] = rs[i+1]*xs[i+1]
    for i in range(0, n):
      ys[i] = ls[i]*rs[i]
    return ys


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testProductExceptSelf(self):
      self.assertEqual(
          [24, 12, 8, 6], Solution().productExceptSelf([1, 2, 3, 4]))
      self.assertEqual(
          [0, 0, 9, 0, 0], Solution().productExceptSelf([-1, 1, 0, -3, 3]))

  unittest.main()
