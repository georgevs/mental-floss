def testSolution(self, Solution):
  self.assertTrue(Solution().wordBreak("leetcode", ["leet", "code"]))
  self.assertTrue(Solution().wordBreak(
      "applepenapple", ["apple", "pen"]))
  self.assertFalse(Solution().wordBreak(
      "catsandog", ["cats", "dog", "sand", "and", "cat"]))
