class Solution:
  def isValid(self, xs: str) -> bool:
    d = {'(': ')', '[': ']', '{': '}'}
    s = []
    for x in xs:
      if x in d:
        s.append(d[x])
      else:
        y = None if not s else s.pop()
        if x != y:
          return False
    return not s


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBasic(self):
      self.assertEqual(True, Solution().isValid('()'))
      self.assertEqual(True, Solution().isValid('()[]{}'))
      self.assertEqual(False, Solution().isValid('(]'))
      self.assertEqual(True, Solution().isValid('({}[()])'))
      self.assertEqual(False, Solution().isValid('({}[()]'))
      self.assertEqual(False, Solution().isValid('['))
      self.assertEqual(False, Solution().isValid(']'))

  unittest.main()
