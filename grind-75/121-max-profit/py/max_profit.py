class Solution:
  def maxProfit(self, xs: list[int]) -> int:
    l = 10001
    k = 0
    for x in xs:
      l = min(l, x)
      k = max(k, x-l)
    return k


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBasic(self):
      self.assertEqual(5, Solution().maxProfit([7, 1, 5, 3, 6, 4]))
      self.assertEqual(0, Solution().maxProfit([7, 6, 4, 3, 1]))

  unittest.main()
