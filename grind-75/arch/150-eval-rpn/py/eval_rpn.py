class Solution:
  def evalRPN(self, xs: list[str]) -> int:
    s = []
    ops = {
        '+': lambda a, b: a+b,
        '-': lambda a, b: a-b,
        '*': lambda a, b: a*b,
        '/': lambda a, b: int(a/b)
    }

    for x in xs:
      if x in ops:
        a, b = s[-2:]
        s[-2:] = []
        y = ops[x](a, b)
        s.append(y)
      else:
        s.append(int(x))

    return s[0]


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testEvalRPN(self):
      self.assertEqual(9, Solution().evalRPN(["2", "1", "+", "3", "*"]))
      self.assertEqual(6, Solution().evalRPN(["4", "13", "5", "/", "+"]))
      self.assertEqual(22, Solution().evalRPN(
          ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))

  unittest.main()
