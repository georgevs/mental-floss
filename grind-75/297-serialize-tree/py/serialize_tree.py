class Solution:
  def serialize(self, r):
    if not r:
      return []
    qs, ys, t = [r], [], r
    for x in qs:
      if x == None:
        ys.append(None)
      else:
        ys.append(x.val)
        qs.append(x.left)
        qs.append(x.right)
        t = x.right or x.left or t
        if t == x:
          break
    return ys

  def deserialize(self, ys):
    if not ys:
      return None
    v = ys.pop(0)
    r = TreeNode(v)
    qs = [r]
    while ys:
      x = qs.pop(0)
      if (v := ys.pop(0)) != None:
        x.left = TreeNode(v)
        qs.append(x.left)
      if ys and (v := ys.pop(0)) != None:
        x.right = TreeNode(v)
        qs.append(x.right)
    return r


class Codec(Solution):
  def serialize(self, r):
    return to_string(super().serialize(r))

  def deserialize(self, ys):
    return super().deserialize(from_string(ys))


class StringSolution:
  def serialize(self, r):
    if not r:
      return ''
    qs, ys, t = [r], '', r
    for x in qs:
      if x == None:
        if ys:
          ys += ','
        # ys += 'None'
      else:
        if ys:
          ys += ','
        ys += str(x.val)
        qs.append(x.left)
        qs.append(x.right)
        t = x.right or x.left or t
        if t == x:
          break
    return ys

  def deserialize(self, ys):
    if not ys:
      return None

    def pop(ys):
      v, ys = (ys[:i], ys[i+1:]) if (i := ys.find(',')) != -1 else (ys, '')  # str.partition(',')
      v = None if v == '' else int(v)
      return v, ys

    v, ys = pop(ys)
    r = TreeNode(v)
    qs = [r]
    while ys:
      x = qs.pop(0)
      v, ys = pop(ys)
      if v != None:
        x.left = TreeNode(v)
        qs.append(x.left)
      v, ys = pop(ys)
      if v != None:
        x.right = TreeNode(v)
        qs.append(x.right)
    return r


class StringSolution2:
  def serialize(self, r):
    if not r:
      return ''
    qs, ys, t = [r], '', r
    for x in qs:
      if x == None:
        if ys:
          ys += ','
        # ys += 'None'
      else:
        if ys:
          ys += ','
        ys += str(x.val)
        qs.append(x.left)
        qs.append(x.right)
        t = x.right or x.left or t
        if t == x:
          break
    return ys

  def deserialize(self, ys):
    if not ys:
      return None

    i, n = 0, len(ys)
    
    def popi(i):
      v, i = (ys[i:e], e+1) if (e := ys.find(',', i)) != -1 else (ys[i:], n)
      v = None if v == '' else int(v)
      return v, i

    v, i = popi(i)
    r = TreeNode(v)
    qs = [r]
    while i < n:
      x = qs.pop(0)
      v, i = popi(i)
      if v != None:
        x.left = TreeNode(v)
        qs.append(x.left)
      v, i = popi(i)
      if v != None:
        x.right = TreeNode(v)
        qs.append(x.right)
    return r


def to_string(ys):
  return ','.join(['' if y == None else str(y) for y in ys])


def from_string(ys):
  return [(None if y == '' else int(y)) for y in ([] if not ys else ys.split(','))]


class TreeNode:
  def __init__(self, x, l=None, r=None):
    self.val = x
    self.left = l
    self.right = r

  def __repr__(self):
    return f"({self.val}{'l' if self.left else ''}{'r' if self.right else ''})"


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testSolution(self):
      def assertSerialize(ys, x):
        # print(ys, Solution().serialize(x))
        self.assertEqual(ys, Solution().serialize(x))
        self.assertEqual(ys, Solution().serialize(Solution().deserialize(ys.copy())))
        self.assertEqual(to_string(ys), Codec().serialize(x))
        self.assertEqual(to_string(ys), Codec().serialize(Codec().deserialize(to_string(ys))))
        self.assertEqual(to_string(ys), StringSolution().serialize(x))
        self.assertEqual(to_string(ys), StringSolution().serialize(StringSolution().deserialize(to_string(ys))))
        self.assertEqual(to_string(ys), StringSolution2().serialize(x))
        self.assertEqual(to_string(ys), StringSolution2().serialize(StringSolution2().deserialize(to_string(ys))))

      assertSerialize(
          [1, 2, 3, None, None, 4, 5],
          TreeNode(1, TreeNode(2), TreeNode(3, TreeNode(4), TreeNode(5))))
      assertSerialize(
          [1, 3, 2, 4, 5],
          TreeNode(1, TreeNode(3, TreeNode(4), TreeNode(5)), TreeNode(2)))
      assertSerialize(
          [1, 2, 5, 3, None, 6, None, 4, None, 7],
          TreeNode(1, TreeNode(2, TreeNode(3, TreeNode(4))), TreeNode(5, TreeNode(6, TreeNode(7)))))
      assertSerialize(
          [1, 2, 5, 3, None, None, 6, 4, None, None, 7],
          TreeNode(1, TreeNode(2, TreeNode(3, TreeNode(4))), TreeNode(5, None, TreeNode(6, None, TreeNode(7)))))
      assertSerialize(
          [1, 2, 5, None, 3, 6, None, None, 4, 7],
          TreeNode(1, TreeNode(2, None, TreeNode(3, None, TreeNode(4))), TreeNode(5, TreeNode(6, TreeNode(7)))))

  unittest.main()
