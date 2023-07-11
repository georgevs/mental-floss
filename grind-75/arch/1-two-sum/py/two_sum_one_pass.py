class Solution:
  def twoSum(self, xs: list[int], k: int) -> list[int]:
    d = dict()
    for i, x in enumerate(xs):
      j = d.get(k-x)
      if j is not None and i != j:
        return [i, j]
      d[x] = i


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBasic(self):
      self.assertEqual([0, 1], sorted(Solution().twoSum([2, 7, 11, 15], 9)))
      self.assertEqual([1, 2], sorted(Solution().twoSum([3, 2, 4], 6)))
      self.assertEqual([0, 1], sorted(Solution().twoSum([3, 3], 6)))

  unittest.main()
