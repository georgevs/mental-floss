class Solution:
  def wordBreak(self, s: str, xs: list[str]) -> bool:
    n = len(s)

    def iter(i: int) -> bool:
      if i == n:
        return True
      for x in xs:
        if s.startswith(x, i) and dp(i+len(x)):
          return True
      return False

    m = dict()

    def dp(i):
      r = m.get(i)
      if r is None:
        r = iter(i)
        m[i] = r
      return r

    return dp(0)


if __name__ == '__main__':
  import unittest
  import test

  class TestSolution(unittest.TestCase):
    def testRecursiveSolution(self):
      test.testSolution(self, Solution)

  unittest.main()
