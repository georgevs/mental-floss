from collections import Counter


class VerySlowSolution:
  def minWindow(self, xs, ys):
    m, n = len(xs), len(ys)
    if m < n:
      return ''
    yd, zd = Counter(ys), Counter()
    i, j, r = 0, 0, None
    minr = (lambda r, s: s if r == None or len(s) < len(r) else r)
    while j < m:
      x, j = xs[j], j+1
      if x in yd:
        zd[x] += 1
        if yd <= zd:
          r = minr(r, xs[i:j])
      while yd <= zd:
        x, i = xs[i], i+1
        if x in yd:
          zd[x] -= 1
        if yd <= zd:
          r = minr(r, xs[i:j])

    return r or ''


class SlowSolution:
  def minWindow(self, xs, ys):
    m, n = len(xs), len(ys)
    if m < n:
      return ''
    yd, zd = Counter(ys), Counter()
    i, j, r, f = 0, 0, None, False
    minr = (lambda r, s: s if r == None or len(s) < len(r) else r)
    while j < m:
      while j < m:
        x, j = xs[j], j+1
        if x in yd:
          zd[x] += 1
          f = yd <= zd
          if f:
            r = minr(r, xs[i:j])
            break
      while i+n < j:
        x, i = xs[i], i+1
        if x in yd:
          zd[x] -= 1
          f = yd <= zd
        if f:
          r = minr(r, xs[i:j])
        else:
          break

    return r or ''


class FastSolution:
  def minWindow(self, xs, ys):
    m, n = len(xs), len(ys)
    if m < n:
      return ''
    yd, zd = Counter(ys), Counter()
    n, k = len(yd), 0
    i, j, r = 0, 0, None
    minr = (lambda r, s: s if r == None or len(s) < len(r) else r)
    while j < m:
      x, j = xs[j], j+1
      if x in yd:
        zd[x] += 1
        if zd[x] == yd[x]:
          k += 1
        if k == n:
          r = minr(r, xs[i:j])
      while k == n:
        x, i = xs[i], i+1
        if x in yd:
          if zd[x] == yd[x]:
            k -= 1
          zd[x] -= 1
        if k == n:
          r = minr(r, xs[i:j])

    return r or ''


class VeryFastSolution:
  def minWindow(self, xs: str, ys: str) -> str:
    m = len(xs)
    if m < len(ys):
      return ''

    yd = {}
    for y in ys:
      yd[y] = yd.get(y, 0)+1

    i, j, zd = 0, 0, {}
    r, b, e, = 100000, 0, 0
    k, n = 0, len(yd)

    while j < m:
      x, j = xs[j], j+1
      y = yd.get(x)
      if y != None:
        z = zd.get(x, 0)+1
        zd[x] = z
        if z == y:
          k += 1
        if k == n:
          if (ri := j-i) < r:
            r, b, e = ri, i, j

      while k == n:
        x, i = xs[i], i+1
        y = yd.get(x)
        if y != None:
          z = zd[x]
          if z == y:
            k -= 1
          zd[x] = z-1
        if k == n:
          if (ri := j-i) < r:
            r, b, e = ri, i, j

    return xs[b:e]


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testSolution(self):
      self.__testSolution(VerySlowSolution)
      self.__testSolution(SlowSolution)
      self.__testSolution(FastSolution)
      self.__testSolution(VeryFastSolution)

    def __testSolution(self, Solution):
      self.assertEqual('BANC', Solution().minWindow('ADOBECODEBANC', 'ABC'))
      self.assertEqual('a', Solution().minWindow('a', 'a'))
      self.assertEqual('', Solution().minWindow('a', 'aa'))
      self.assertEqual('', Solution().minWindow('a', 'b'))
      self.assertEqual('a', Solution().minWindow('ab', 'a'))
      self.assertEqual('', Solution().minWindow('ab', 'c'))
      self.assertEqual('dbaa', Solution().minWindow('acbdbaab', 'aabd'))
      self.assertEqual('adobecodeba', Solution().minWindow('adobecodebanc', 'abcda'))
      self.assertEqual('baAabbB', Solution().minWindow('baAabbBBB', 'Bbbb'))
      self.assertEqual('Bbbaa', Solution().minWindow('BbabBbbaab', 'Baa'))

  unittest.main()
