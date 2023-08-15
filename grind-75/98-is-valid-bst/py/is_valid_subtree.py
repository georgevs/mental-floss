class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right


class Solution:
  def isValidBST(self, t):
    def bstRange(t):
      if t.left and t.right:
        lr = bstRange(t.left)
        if lr is None:
          return None
        rr = bstRange(t.right)
        if rr is None:
          return None
        return [lr[0], rr[1]] if lr[1] < t.val < rr[0] else None

      if t.left:
        lr = bstRange(t.left)
        if lr is None:
          return None
        return [lr[0], t.val] if lr[1] < t.val else None

      if t.right:
        rr = bstRange(t.right)
        if rr is None:
          return None
        return [t.val, rr[1]] if t.val < rr[0] else None

      return [t.val, t.val]

    return t and bstRange(t) is not None


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testIsValidBST(self):
      self.assertTrue(Solution().isValidBST(
          TreeNode(
              2,
              TreeNode(1),
              TreeNode(3)
          )
      ))

      self.assertFalse(Solution().isValidBST(
          TreeNode(
              5,
              TreeNode(1),
              TreeNode(
                  4,
                  TreeNode(3),
                  TreeNode(6))
          )
      ))

      self.assertFalse(Solution().isValidBST(
          TreeNode(
              2,
              TreeNode(2),
              TreeNode(2)
          )
      ))

      self.assertFalse(Solution().isValidBST(
          TreeNode(
              1,
              TreeNode(1)
          )
      ))

      self.assertFalse(Solution().isValidBST(
          TreeNode(
              5,
              TreeNode(4),
              TreeNode(
                  6,
                  TreeNode(3),
                  TreeNode(7))
          )
      ))

unittest.main()
