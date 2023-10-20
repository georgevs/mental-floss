class Solution:
  def wordBreak(self, s: str, xs: list[str]) -> bool:
    if len(s) == 0:
      return True
    for x in xs:
      if s.startswith(x) and self.wordBreak(s[len(x):], xs):
        return True
    return False


if __name__ == '__main__':
  import unittest
  import test

  class TestSolution(unittest.TestCase):
    def testRecursiveSolution(self):
      test.testSolution(self, Solution)

  unittest.main()
