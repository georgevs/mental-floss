class Solution:
  def sortColors(self, xs) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    n = len(xs)
    i, j, k = 0, 0, n
    while i < k:
      if xs[i] == 0:
        xs[i], xs[j] = xs[j], xs[i]
        j += 1
        i += 1
      elif xs[i] == 2:
        k -= 1
        xs[i], xs[k] = xs[k], xs[i]
      else:
        i += 1
    return xs


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBasic(self):
      self.assertEqual([0, 0, 1, 1, 2, 2], Solution().sortColors([2, 0, 2, 1, 1, 0]))
      self.assertEqual([0, 1, 2], Solution().sortColors([2, 0, 1]))
      self.assertEqual([0, 1, 2], Solution().sortColors([1, 2, 0]))

  unittest.main()

