class SolutionRecursive:
  def kthSmallest(self, p, k):
    def iter(i, p):
      if p.left:
        (i, r) = iter(i, p.left)
        if i == k:
          return (i, r)
      i += 1
      if i == k:
        return (i, p.val)
      if p.right:
        (i, r) = iter(i, p.right)
        if i == k:
          return (i, r)
      return (i, None)

    (i, r) = iter(0, p)
    return r


class SolutionRecursiveBst:
  def kthSmallest(self, p, k):
    def bst(fn, p):
      if p.left and (r := bst(fn, p.left)) != None:
        return r
      if fn(p.val) != None:
        return p.val
      if p.right and (r := bst(fn, p.right)) != None:
        return r

    class Fn:
      def __init__(self):
        self.i = 0

      def __call__(self, val):
        self.i += 1
        if self.i == k:
          return val

    return bst(Fn(), p)


class SolutionRecursiveGenerator:
  def kthSmallest(self, p, k):
    def bst(p):
      if p.left:
        yield from bst(p.left)
      yield p.val
      if p.right:
        yield from bst(p.right)

    i = 0
    for x in bst(p):
      i += 1
      if i == k:
        return x


class SolutionIterative:
  def kthSmallest(self, p, k):
    i = 0
    qs = [(p, None)]
    while qs:
      (p, v) = qs.pop(0)
      if v != None:
        i += 1
        if i == k:
          return v
      elif p != None:
        qs[:0] = [(p.left, None), (None, p.val), (p.right, None)]


class SolutionIterativeGenerator:
  def kthSmallest(self, p, k):
    def bst(p):
      qs = [(p, None)]
      while qs:
        (p, v) = qs.pop(0)
        if v != None:
          yield v
        elif p != None:
          qs[:0] = [(p.left, None), (None, p.val), (p.right, None)]

    i = 0
    for x in bst(p):
      i += 1
      if i == k:
        return x


class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testSolution(self):
      self.__testSolution(SolutionRecursive)
      self.__testSolution(SolutionRecursiveBst)
      self.__testSolution(SolutionRecursiveGenerator)
      self.__testSolution(SolutionIterative)
      self.__testSolution(SolutionIterativeGenerator)

    def __testSolution(self, Solution):
      p = TreeNode(3,
                   TreeNode(1,
                            None,
                            TreeNode(2)),
                   TreeNode(4))
      self.assertEqual(1, Solution().kthSmallest(p, 1))

      p = TreeNode(5,
                   TreeNode(3,
                            TreeNode(2,
                                     TreeNode(1)),
                            TreeNode(4)),
                   TreeNode(6))
      self.assertEqual(3, Solution().kthSmallest(p, 3))

  unittest.main()
