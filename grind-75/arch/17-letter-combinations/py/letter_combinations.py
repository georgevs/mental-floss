class IterativeSolution:
  def letterCombinations(self, xs):
    if not xs:
      return []

    zs = {'2': 'abc', '3': 'def', '4': 'ghi',
          '5': 'jkl', '6': 'mno', '7': 'pqrs',
          '8': 'tuv', '9': 'wxyz'}

    ys = ['']
    for x in xs:
      ys2 = []
      for z in zs[x]:
        for y in ys:
          ys2.append(y+z)
      ys = ys2

    return ys


class BacktrackSolution:
  def letterCombinations(self, xs):
    if not xs:
      return []

    xzs = {'2': 'abc', '3': 'def', '4': 'ghi',
           '5': 'jkl', '6': 'mno', '7': 'pqrs',
           '8': 'tuv', '9': 'wxyz'}

    ys = []

    def iter(y, xs):
      if not xs:
        ys.append(y)
      else:
        x, xs = xs[0], xs[1:]
        for z in xzs.get(x):
          iter(y+z, xs)

    iter('', xs)
    return ys


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBacktrackSolution(self):
      self.__testSolution(BacktrackSolution)

    def testIterativeSolution(self):
      self.__testSolution(IterativeSolution)

    def __testSolution(self, Solution):
      self.assertEqual([], Solution().letterCombinations(""))
      self.assertEqual(["a", "b", "c"], sorted(Solution().letterCombinations("2")))
      self.assertEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
                       sorted(Solution().letterCombinations("23")))

  unittest.main()
