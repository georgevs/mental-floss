class SolutionSlidingWindow:
  def lengthOfLongestSubstring(self, xs: str) -> int:
    n = len(xs)
    i, j, k = 0, 0, 0
    vs = set()
    while j < n:
      while xs[j] in vs:
        vs.remove(xs[i])
        i += 1
      vs.add(xs[j])
      j += 1
      k = max(k, len(vs))

    return k


class SolutionSlidingWindowOptimized:
  def lengthOfLongestSubstring(self, xs: str) -> int:
    # print(xs)
    n = len(xs)
    i, j, k = 0, 0, 0
    ds = dict()
    while j < n:
      # print(i, j, list([k for k, v in ds.items() if i <= v]))
      if i <= ds.get(xs[j], -1):
        i = ds[xs[j]]+1

      ds[xs[j]] = j
      j += 1

      k = max(k, j-i)

    return k


Solution = SolutionSlidingWindowOptimized


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBasic(self):
      self.assertEqual(3, Solution().lengthOfLongestSubstring('abcabcbb'))
      self.assertEqual(1, Solution().lengthOfLongestSubstring('bbbbb'))
      self.assertEqual(3, Solution().lengthOfLongestSubstring('pwwkew'))
      self.assertEqual(2, Solution().lengthOfLongestSubstring('abba'))

  unittest.main()
