from typing import Optional


class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right


class Solution:
  def invertTree(self, x: Optional[TreeNode]) -> Optional[TreeNode]:
    def swap(x):
      if x:
        x.left, x.right = x.right, x.left
        swap(x.left)
        swap(x.right)

    swap(x)
    return x


def to_tree(xs: list[int]) -> Optional[TreeNode]:
  n = len(xs)

  def node(i): return None if n <= i else TreeNode(
      val=xs[i], left=node(2*i+1), right=node(2*i+2))

  return node(0)


def to_list(x: Optional[TreeNode]) -> list[int]:
  xs = []

  def iter(q):
    qn = []
    for x in q:
      if x:
        xs.append(x.val)
        qn.append(x.left)
        qn.append(x.right)
    return qn

  q = [x]
  while len(q) > 0:
    q = iter(q)

  return xs


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testUtils(self):
      self.assertIsNone(to_tree([]))
      self.assertEqual([], to_list(None))
      self.assertEqual([], to_list(to_tree([])))
      self.assertEqual([4, 2, 7, 1, 3, 6, 9], to_list(
          to_tree([4, 2, 7, 1, 3, 6, 9])))

    def testInvertTree(self):
      def invertTree_(xs): return to_list(Solution().invertTree(to_tree(xs)))
      self.assertEqual([4, 7, 2, 9, 6, 3, 1],
                       invertTree_([4, 2, 7, 1, 3, 6, 9]))
      self.assertEqual([2, 3, 1], invertTree_([2, 1, 3]))
      self.assertEqual([], invertTree_([]))

  unittest.main()
