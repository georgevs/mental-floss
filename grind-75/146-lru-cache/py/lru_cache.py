class LRUCache:
  def __init__(self, capacity):
    if capacity <= 0:
      raise ValueError
    self.capacity = capacity
    self.nodes = {}
    self.root = Node()

  def items(self):
    x = self.root
    while (x := x.next) != self.root:
      yield (x.key, x.val)

  def get(self, key):
    # dbg = ('get', key, [i.key for i in self.root])
    x = self.nodes.get(key)
    if not x:
      # print(*dbg)
      return -1
    x.remove()
    self.root.append(x)
    # print(*dbg, '->', [i.key for i in self.root])
    return x.val

  def put(self, key, val):
    # dbg = ('put', self.capacity, key, [i.key for i in self.root])
    x = self.nodes.get(key)
    if x:
      x.val = val
      x.remove()
    else:
      x = Node(val, key)
      self.nodes[key] = x
      if self.capacity > 0:
        self.capacity -= 1
      else:
        lru = self.root.prev
        lru.remove()
        del self.nodes[lru.key]
    self.root.append(x)
    # print(*dbg, '->', self.capacity, [i.key for i in self.root])


class Node:
  def __init__(self, val=None, key=None):
    self.val = val
    self.key = key
    self.prev = self
    self.next = self

  def __iter__(self):
    x = self
    yield x
    while (x := x.next) != self:
      yield x

  def append(self, x):
    if self == x:
      raise ValueError
    if self.next == self:
      self.next = x
      self.prev = x
      x.next = self
      x.prev = self
    else:
      n = self.next
      self.next = x
      x.prev = self
      x.next = n
      n.prev = x

  def remove(self):
    if self.next == self:
      return
    p, n = self.prev, self.next
    p.next = n
    n.prev = p
    self.prev = self
    self.next = self


if __name__ == '__main__':
  import unittest

  class TestLRUCache(unittest.TestCase):
    def testLRUCache(self):
      xs = LRUCache(2)

      xs.put(1, 10)
      self.assertEqual(-1, xs.get(2))
      self.assertEqual([(1, 10)], [(k, v) for k, v in xs.items()])

      xs.put(2, 20)
      self.assertEqual(-1, xs.get(3))
      self.assertEqual([(2, 20), (1, 10)], [(k, v) for k, v in xs.items()])

      xs.put(3, 30)
      self.assertEqual(-1, xs.get(1))
      self.assertEqual([(3, 30), (2, 20)], [(k, v) for k, v in xs.items()])

      xs.put(2, 200)
      self.assertEqual(-1, xs.get(1))
      self.assertEqual([(2, 200), (3, 30)], [(k, v) for k, v in xs.items()])

      xs.put(1, 10)
      self.assertEqual(-1, xs.get(3))
      self.assertEqual([(1, 10), (2, 200)], [(k, v) for k, v in xs.items()])

    def testNode(self):
      x1 = Node(1)
      self.assertEqual([1], [i.val for i in x1])

      x2 = Node(2)
      x1.append(x2)
      self.assertEqual([1, 2], [i.val for i in x1])
      self.assertEqual([2, 1], [i.val for i in x2])

      x3 = Node(3)
      x1.append(x3)
      self.assertEqual([1, 3, 2], [i.val for i in x1])
      self.assertEqual([2, 1, 3], [i.val for i in x2])
      self.assertEqual([3, 2, 1], [i.val for i in x3])

      x3.remove()
      self.assertEqual([1, 2], [i.val for i in x1])
      self.assertEqual([2, 1], [i.val for i in x2])
      self.assertEqual([3], [i.val for i in x3])

      x2.remove()
      self.assertEqual([1], [i.val for i in x1])
      self.assertEqual([2], [i.val for i in x2])

  unittest.main()
