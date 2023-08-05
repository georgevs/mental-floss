class Node:
  def __init__(self):
    self.val = False
    self.ns = [None]*26  # a..z

  def __repr__(self) -> str:
    val = (self.val, {indToChr(i): r for i, r in enumerate(self.ns) if r})
    return str(val)


def chrToInd(c): return ord(c)-ord('a')
def indToChr(i): return chr(ord('a')+i)


class Trie:
  def __init__(self):
    self.r = Node()

  def __repr__(self) -> str:
    return str(self.r)


class TrieIterative(Trie):
  def insert(self, s: str):
    if s:
      r = self.r
      while True:
        if not s:
          r.val = True
          break
        else:
          i = chrToInd(s[0])
          r.ns[i] = r.ns[i] if r.ns[i] else Node()
          s, r = s[1:], r.ns[i]

  def search(self, s: str) -> bool:
    return self.__search(s)

  def startsWith(self, s: str) -> bool:
    return self.__search(s, True)

  def __search(self, s, val=None):
    r = self.r
    while True:
      if not s:
        return val if val != None else r.val
      i = chrToInd(s[0])
      nr = r.ns[i]
      if not nr:
        return False
      s, r = s[1:], nr


class TrieRecursive(Trie):
  def insert(self, s: str):
    def iter(s, r):
      if not s:
        r.val = True
      else:
        i = chrToInd(s[0])
        r.ns[i] = r.ns[i] if r.ns[i] else Node()
        iter(s[1:], r.ns[i])

    if s:
      iter(s, self.r)

  def search(self, s: str) -> bool:
    return self.__search(s)

  def startsWith(self, s: str) -> bool:
    return self.__search(s, True)

  def __search(self, s, val=None):
    def iter(s, r):
      if not s:
        return val if val != None else r.val
      i = chrToInd(s[0])
      nr = r.ns[i]
      return False if not nr else iter(s[1:], nr)

    return iter(s, self.r)


if __name__ == '__main__':
  import unittest

  class TestTrie(unittest.TestCase):
    def testTrieRecursive(self):
      self.__testTrie(TrieRecursive)

    def testTrieIterative(self):
      self.__testTrie(TrieIterative)

    def __testTrie(self, Trie):
      x = Trie()
      x.insert('apple')
      self.assertTrue(x.search('apple'))
      self.assertFalse(x.search('app'))
      self.assertTrue(x.startsWith('app'))
      x.insert('app')
      self.assertTrue(x.search('app'))
      x.insert('zoo')

  unittest.main()
