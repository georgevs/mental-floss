class SolutionSlow:
  def minSubArrayLen(self, t: int, xs: list[int]) -> int:
    # print(t, xs)
    n = len(xs)
    k = None
    for i in range(0, n):
      r = 0
      for j in range(i, n):
        # print(k, i, j+1, i+k if k != None else None, r+xs[j])
        if k != None and j >= i+k:
          break
        if r+xs[j] >= t:
          k = j-i+1
          if k > 1:
            break
          else:
            return 1
        r += xs[j]

    return k if k != None else 0


class Solution:
  def minSubArrayLen(self, t: int, xs: list[int]) -> int:
    # print(t, xs)
    i, j, n, k, tij = 0, 0, len(xs), None, 0
    while j < n and (k == None or k > 1):
      tij += xs[j]
      # print(k, i, j+1, j-i+1, tij)
      if tij >= t:
        k = min(k, j-i+1) if k != None else j-i+1
        tij -= xs[i]+xs[j]
        i += 1
        j = max(i, j)
      else:
        j += 1

    return k if k != None else 0


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBasic(self):
      self.assertEqual(2, Solution().minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
      self.assertEqual(1, Solution().minSubArrayLen(4, [1, 4, 4]))
      self.assertEqual(0, Solution().minSubArrayLen(
          11, [1, 1, 1, 1, 1, 1, 1, 1]))
      self.assertEqual(3, Solution().minSubArrayLen(11, [1, 2, 3, 4, 5]))

unittest.main()
