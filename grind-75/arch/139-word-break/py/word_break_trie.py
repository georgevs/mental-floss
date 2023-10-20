from functools import cache
from trie import Trie

class Solution:
  def wordBreak(self, s: str, xs: list[str]) -> bool:
    r = Trie(xs)
    n = len(s)

    @cache
    def dp(i: int) -> bool:
      if i == n:
        return True
      for x in r.prefixes(s[i:]):
        if dp(i+len(x)):
          return True
      return False

    return dp(0)



if __name__ == '__main__':
  import unittest
  import test

  class TestSolution(unittest.TestCase):
    def testRecursiveSolution(self):
      test.testSolution(self, Solution)

  unittest.main()
