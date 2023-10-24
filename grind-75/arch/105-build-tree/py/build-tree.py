from typing import Optional


class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

  def __iter__(self):
    yield self
    qs = [self.left, self.right]
    rs = []
    while qs:
      p = qs.pop(0)
      rs.append(p)
      if p:
        while rs:
          yield (rs.pop(0))
      if p:
        qs.extend([p.left, p.right])


class Solution1:
  def buildTree(self, xs: list[int], ys: list[int]) -> Optional[TreeNode]:
    x = xs.pop(0)
    p = TreeNode(x)
    i = ys.index(x)
    ysl, ysr = ys[0:i], ys[i+1:]
    if ysl:
      p.left = self.buildTree(xs, ysl)
    if ysr:
      p.right = self.buildTree(xs, ysr)
    return p


class Solution:
  def buildTree(self, xs: list[int], ys: list[int]) -> Optional[TreeNode]:
    def iter(s, i, j):
      x = xs[s[0]]
      s[0] += 1
      p = TreeNode(x)
      l = ys.index(x, i, j)
      if i < l:
        p.left = iter(s, i, l)
      if l+1 < j:
        p.right = iter(s, l+1, j)
      return p

    return iter([0], 0, len(ys))


if __name__ == '__main__':
  import unittest

  def to_list(p): return list(map(lambda p: p.val if p else None, p))

  class TestSolution(unittest.TestCase):
    def testSolution(self):
      self.assertEqual(
          [3, 9, 20, None, None, 15, 7],
          to_list(Solution().buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])))
      self.assertEqual(
          [-1],
          to_list(Solution().buildTree([-1], [-1])))

  unittest.main()
