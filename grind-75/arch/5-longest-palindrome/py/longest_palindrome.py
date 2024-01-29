class Solution:
  def longestPalindrome(self, xs: str) -> str:
    n = len(xs)
    if n == 0:
      return xs
    for k in range(n, 0, -1):
      for i in range(0, n-k+1):
        x = xs[i:i+k]
        if x == x[::-1]:
          return x


if __name__ == '__main__':
  import os
  import unittest
  import json

  def load_json(file_path):
    file_path = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        file_path)
    with open(file_path, 'r') as f:
      return json.load(f)

  class TestSolution(unittest.TestCase):
    def testSolution(self):
      self.__testSolution(Solution)

    def __testSolution(self, Solution):
      self.assertEqual("bab", Solution().longestPalindrome("babad"))
      self.assertEqual("bb", Solution().longestPalindrome("cbbd"))

      self.assertEqual("1", Solution().longestPalindrome("123456789"))

      self.assertEqual("", Solution().longestPalindrome(""))
      self.assertEqual("a", Solution().longestPalindrome("a"))
      self.assertEqual("aa", Solution().longestPalindrome("aa"))
      self.assertEqual("aaa", Solution().longestPalindrome("aaa"))

      self.assertEqual("a", Solution().longestPalindrome("abcd"))
      self.assertEqual("121121", Solution().longestPalindrome("ab121121cd"))
      self.assertEqual("121c121", Solution().longestPalindrome("ab121c121de"))
      self.assertEqual("121", Solution().longestPalindrome("ab121cd121ef"))
      self.assertEqual("12321", Solution().longestPalindrome("ab121cd12321ef"))

      self.assertEqual('qjkjq',
                       Solution().longestPalindrome(load_json('./test-700.json')))

  unittest.main()
