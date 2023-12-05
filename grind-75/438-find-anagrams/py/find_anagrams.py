class Solution:
  def findAnagrams(self, xs, ys):
    if len(xs) < len(ys):
      return []

    dy = {}
    for y in ys:
      dy[y] = dy[y]+1 if y in dy else 1

    dx = {}
    for x in xs[0:len(ys)]:
      dx[x] = dx[x]+1 if x in dx else 1

    k = len(ys)
    rs = []
    for i in range(0, len(xs)-k+1):
      if dx == dy:
        rs.append(i)
      if i+k < len(xs):
        if dx[xs[i]] > 1:
          dx[xs[i]] -= 1
        else:
          del dx[xs[i]]
        dx[xs[i+k]] = dx[xs[i+k]]+1 if xs[i+k] in dx else 1

    return rs


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testSolution(self):
      self.assertEqual([0, 6], Solution().findAnagrams("cbaebabacd", "abc"))
      self.assertEqual([0, 1, 2], Solution().findAnagrams("abab", "ab"))

  unittest.main()
