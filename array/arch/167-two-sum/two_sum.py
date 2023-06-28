"""
167. Two Sum II - Input Array Is Sorted
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
AR: M60%
"""


class Solution:
  def twoSum(self, xs: list[int], k: int) -> list[int]:
    n = len(xs)
    for i in range(0, n-1):
      for j in range(i+1, n):
        if k == xs[i]+xs[j]:
          return [i+1, j+1]

    return []


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBasic(self):
      self.assertEqual([1, 2], Solution().twoSum([2, 7, 11, 15], 9))
      self.assertEqual([1, 3], Solution().twoSum([2, 3, 4], 6))
      self.assertEqual([1, 2], Solution().twoSum([-1, 0], -1))

  unittest.main()
