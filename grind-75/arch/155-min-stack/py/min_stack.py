class MinStack:
  def __init__(self):
    self.r = None

  def push(self, x):
    m = x if self.r is None else min(x, self.r[1])
    self.r = [x, m, self.r]

  def pop(self):
    x = self.r[0]
    self.r = self.r[2]
    return x

  def top(self):
    return self.r[0]

  def getMin(self):
    return self.r[1]


if __name__ == '__main__':
  import unittest

  class TestMinStack(unittest.TestCase):
    def testMinStack(self):
      t = MinStack()
      t.push(-2)
      t.push(0)
      t.push(-3)
      self.assertEqual(-3, t.getMin())
      t.pop()
      self.assertEqual(0, t.top())
      self.assertEqual(-2, t.getMin())

  unittest.main()  
  