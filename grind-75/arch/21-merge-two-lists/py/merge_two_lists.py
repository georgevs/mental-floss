import sys
from typing import Optional


class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next


class SolutionRecursive:
  def mergeTwoLists(self, x: Optional[ListNode], y: Optional[ListNode]) -> Optional[ListNode]:
    if x and y:
      z = x if x.val < y.val else y
    else:
      z = x if x else y

    if z:
      if z == x:
        x = x.next
      if z == y:
        y = y.next
      z.next = self.mergeTwoLists(x, y)

    return z


def log(*xs):
  print(*xs)
  sys.stdin.read(1)


def to_list(x: Optional[ListNode]) -> list[int]:
  if x is None:
    return []
  xs = to_list(x.next)
  xs.insert(0, x.val)
  return xs


def from_list(xs: list[int]) -> Optional[ListNode]:
  return None if not xs else ListNode(xs[0], from_list(xs[1:]))


class SolutionIterative:
  def mergeTwoLists(self, x: Optional[ListNode], y: Optional[ListNode]) -> Optional[ListNode]:
    if x and y:
      z = x if x.val <= y.val else y
    else:
      z = x if x else y
    if z:
      l = z
      if z == x:
        x = x.next
      if z == y:
        y = y.next
      while x or y:
        while x and (not y or x.val <= y.val):
          l.next = x
          l = x
          if x:
            x = x.next
        while y and (not x or y.val < x.val):
          l.next = y
          l = y
          if y:
            y = y.next
    return z


if __name__ == '__main__':
  import unittest

  def mergeTwoListsWithSolution(Solution): return lambda xs, ys: to_list(
      Solution().mergeTwoLists(from_list(xs), from_list(ys))
  )

  class TestSolution(unittest.TestCase):
    def testUtils(self):
      self.assertEqual([1, 2, 3], to_list(from_list([1, 2, 3])))
      self.assertEqual([], to_list(from_list([])))
      self.assertEqual([], to_list(None))
      self.assertEqual(None, from_list([]))

    def testBasic(self):
      for mergeTwoLists in [mergeTwoListsWithSolution(SolutionRecursive), mergeTwoListsWithSolution(SolutionIterative)]:
        with self.subTest(mergeTwoLists=mergeTwoLists):
          self.assertEqual([1, 1, 2, 3, 4, 4],
                           mergeTwoLists([1, 2, 4], [1, 3, 4]))
          self.assertEqual([], mergeTwoLists([], []))
          self.assertEqual([0], mergeTwoLists([], [0]))

  unittest.main()
