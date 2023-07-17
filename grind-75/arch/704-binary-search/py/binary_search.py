class Solution:
  def search(self, xs: list[int], k: int) -> int:
    # print(k,xs)
    n = len(xs)
    l, r = 0, n
    while l < r:
      i = (l+r)//2
      # print(l,r,i,xs[i])
      if xs[i] == k:
        return i
      if k < xs[i]:
        r = i
      else:
        l = i+1
    return -1


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBasic(self):
      self.assertEqual(4, Solution().search([-1, 0, 3, 5, 9, 12], 9))
      self.assertEqual(-1, Solution().search([-1, 0, 3, 5, 9, 12], 2))

  unittest.main()
