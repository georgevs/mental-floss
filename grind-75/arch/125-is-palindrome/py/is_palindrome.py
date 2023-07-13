class Solution:
  def isPalindrome(self, xs: str) -> bool:
    xs = xs.lower()
    n = len(xs)
    i, j = 0, n-1

    while i < j:
      if not xs[i].isalnum():
        i += 1
      elif not xs[j].isalnum():
        j -= 1
      elif xs[i] != xs[j]:
        return False
      else:
        i += 1
        j -= 1

    return True


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBasic(self):
      self.assertTrue(Solution().isPalindrome(
          "A man, a plan, a canal: Panama"))
      self.assertFalse(Solution().isPalindrome("race a car"))
      self.assertTrue(Solution().isPalindrome(" "))

  unittest.main()
