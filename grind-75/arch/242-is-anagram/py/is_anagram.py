class SolutionSort:
  def isAnagram(self, xs: str, ys: str) -> bool:
    return sorted(xs) == sorted(ys)


class SolutionFrequency:
  def isAnagram(self, xs: str, ys: str) -> bool:
    d = {}
    for x in xs:
      d[x] = 1 if x not in d else d[x]+1
    for y in ys:
      if y not in d:
        return False
      d[y] -= 1
      if d[y] == 0:
        del d[y]
    return not d


if __name__ == '__main__':
  import unittest

  class TestIsAnagram(unittest.TestCase):
    def testBasic(self):
      def isAnagram_(X): return X().isAnagram
      for isAnagram_ in [isAnagram_(SolutionSort), isAnagram_(SolutionFrequency)]:
        with self.subTest(isAnagram_=isAnagram_):
          self.assertTrue(isAnagram_("anagram", "nagaram"))
          self.assertFalse(isAnagram_("rat", "car"))

  unittest.main()
