class SolutionRecursive:
  def coinChange(self, xs: list[int], m: int) -> int:
    # print(xs,m)
    def iter(m):
      if m == 0:
        return 0

      r = None
      for x in xs:
        if m-x >= 0:
          ri = dp(m-x)
          if r == None:
            r = ri
          elif ri != None:
            r = min(r, ri)

      if r != None:
        r += 1
      return r

    ds = dict()

    def dp(m):
      if m not in ds:
        ds[m] = iter(m)
        # print(m, ds[m])
      return ds[m]

    r = dp(m)
    return r if r != None else -1


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testCoinChangeRecursive(self):
      return self.__testCoinChange(SolutionRecursive)

    def __testCoinChange(self, Solution):
      self.assertEqual(3, Solution().coinChange([1, 2, 5], 11))
      self.assertEqual(-1, Solution().coinChange([2], 3))
      self.assertEqual(0, Solution().coinChange([1], 0))
      self.assertEqual(3, Solution().coinChange([50, 20], 60))
      self.assertEqual(20, Solution().coinChange([186, 419, 83, 408], 6249))

  unittest.main()
