class Trie:
  def __init__(self, xs: list[str] = None):
    self.root = [[None]*26, False]
    for x in xs:
      self.add(x)

  def __str__(self):
    return str([x for x in self])

  def __iter__(self):
    def dfs(u, x):
      if u[1]:
        yield x
      for i, u in enumerate(u[0]):
        if u:
          yield from dfs(u, x+chr(i+ord('a')))

    return dfs(self.root, '')

  def add(self, x: str):
    r = self.root
    for ch in x:
      i = ord(ch)-ord('a')
      u = r[0][i]
      if u is None:
        u = [[None]*26, False]
        r[0][i] = u
      r = u
    r[1] = True

  def has(self, x: str):
    r = self.root
    for ch in x:
      i = ord(ch)-ord('a')
      r = r[0][i]
      if r is None:
        return False
    return r[1]

  def prefixes(self, s: str) -> list[str]:
    xs = []
    x = ''
    r = self.root
    for ch in s:
      i = ord(ch)-ord('a')
      r = r[0][i]
      if r is None:
        break
      x += ch
      if r[1]:
        xs.append(x)
    return xs


if __name__ == '__main__':
  import unittest

  class TestTrie(unittest.TestCase):
    def testTrie(self):
      xs = ['code', 'leet', 'leetcode']
      r = Trie(xs)

      self.assertEqual(xs, sorted(x for x in r))

      self.assertTrue(r.has('leet'))
      self.assertFalse(r.has('le'))
      self.assertFalse(r.has('leets'))
      self.assertTrue(r.has('code'))
      self.assertTrue(r.has('leetcode'))

      self.assertEqual(['leet', 'leetcode'], sorted(r.prefixes('leetcode')))
      self.assertEqual(['leet'], sorted(r.prefixes('leetco')))
      self.assertEqual(['leet', 'leetcode'], sorted(r.prefixes('leetcoder')))

  unittest.main()
