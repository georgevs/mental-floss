class ListSolution:
  def calculate(self, s):
    xs = StreamTokens(lex(s))
    val, xs = self.expression(xs)
    assert xs.eos()
    return val

  def expression(self, xs):
    # print('e',''.join(map(str,xs))) # dbg
    val, xs = self.term(xs)
    if not xs.eos():
      x = xs.head()
      while x == '+' or x == '-':
        rval, xs = self.term(xs.next())
        if x == '+': val += rval
        elif x == '-': val -= rval
        if xs.eos(): break
        x = xs.head()
    return (val, xs)

  def term(self, xs):
    # print('t', ''.join(map(str,xs))) # dbg
    val, xs = self.factor(xs)
    if not xs.eos():
      x = xs.head()
      while x == '*' or x == '/':
        rval, xs = self.factor(xs.next())
        if x == '*': val *= rval
        elif x == '/': val /= rval
        if xs.eos(): break
        x = xs.head()
    return (val, xs)

  def factor(self, xs):
    # print('f', ''.join(map(str,xs))) # dbg
    x = xs.head()
    s = 1
    if x == '+' or x == '-':
      if x == '-': s = -1
      x, xs = self.factor(xs.next())

    elif x == '(':
      x, xs = self.expression(xs.next())
      assert xs.head() == ')'
      xs = xs.next()

    else:
      xs = xs.next()

    return (x*s, xs) 
  

class ListTokens:
  def __init__(self, xs):
    self.xs = list(xs)

  def head(self):
    return self.xs[0]

  def next(self):
    self.xs = self.xs[1:]
    return self
  
  def eos(self):
    return len(self.xs) == 0
  

class StreamSolution:
  def calculate(self, s):
    # print(s)
    xs = StreamTokens(lex(s))
    val, xs = self.expression(xs)
    if not xs.eos():
      raise Exception('unexpected', str(xs))
    return val

  def expression(self, xs):

    val, xs = self.number_or_expression(xs)
    x = xs.head()

    while True:
      while x == '+' or x == '-':
        rval, xs = self.number_or_expression(xs.next())
        if x == '+': val += rval
        if x == '-': val -= rval
        x = xs.head()
      if xs.eos() or x == ')':
        return (val, xs)
      if not (x == '*' or x == '-'):
        raise Exception('unexpected', str(xs))
      while x == '*' or x == '-':
        rval, xs = self.number_or_expression(xs.next())
        if x == '*': val *= rval
        if x == '/': val /= rval
        x = xs.head()
      if xs.eos() or x == ')':
        return (val, xs)
      if not (x == '*' or x == '-'):
        raise Exception('unexpected', str(xs))  


  def number_or_expression(self, xs):
    x = xs.head()
    s = 1
    if x == '+' or x == '-':
      if x == '-': s = -1
      xs = xs.next()
      x = xs.head()

    if x == '(':
      val, xs = self.expression(xs.next())    
      if not (xs.head() == ')'):
        raise Exception('unexpected', str(xs))
      # xs = xs.next()
      x = val
    
    if not isinstance(x, int):
      raise Exception('unexpected', str(xs))
    
    return (x*s, xs.next())


class StreamTokens:
  def __init__(self, xs):
    self.xs = xs
    self.next()

  def head(self):
    return self.x
  
  def __str__(self):
    return self.x + ''.join(map(str, self.xs)) if self.x else ''

  def next(self):
    self.x = next(self.xs, None)
    return self
  
  def eos(self):
    return self.x == None


def lex(xs):
    i, n = 0, len(xs)
    while i<n:
      x = xs[i]
      if x.isspace():
        i += 1
        continue
      elif x in '-+*/()':
        i += 1
        yield x
      elif x.isdigit():
        k = 0
        while i < n and xs[i].isdigit():
          x = xs[i]
          k = k*10 + (ord(x)-ord('0'))
          i += 1
        yield k
      else:
        raise Exception('unexpected', x)
      

class LexSolution:
  def calculate(self, s):
    # print(s)
    xs = Lex(s)
    val, xs = self.expr(xs)
    assert xs.head == None
    return val

  def expr(self, xs):
    val = 0
    while not (xs.head == None or xs.head == ')'):
      op, xs = (x, xs.next()) if isinstance(x := xs.head, str) and x in '+-*/' else ('+', xs) 
      rval, xs = (x, xs.next()) if isinstance(x := xs.head, int) else self.subexpr(xs)
      if op == '+': val += rval
      elif op == '-': val -= rval
      elif op == '*': val *= rval
      else: val /= rval
    return (val, xs)

  def subexpr(self, xs):
    assert xs.head == '('
    val, xs = self.expr(xs.next())
    assert xs.head == ')'
    return (val, xs.next())


class Solution:
  def calculate(self, s):
    # print(s)
    val, _ = self.expr(Lex(s))
    return val

  def expr(self, xs):
    val = 0
    while not (xs.head == None or xs.head == ')'):
      op = xs.head
      if op == '+' or op == '-' or op == '*' or op == '/':
        xs.next()
      else:
        op = '+'

      if xs.head == '(':
        rval, xs = self.expr(xs.next())
        xs.next()

      else:
        rval = xs.head
        xs.next()

      if op == '+': val += rval
      elif op == '-': val -= rval
      elif op == '*': val *= rval
      else: val /= rval
      
    return (val, xs)


class Lex:
  def __init__(self, xs):
    self.i = 0
    self.xs = xs
    self.next()  

  def next(self):
    while self.i < len(self.xs) and self.xs[self.i].isspace():
      self.i += 1
    if len(self.xs) <= self.i:
      self.head = None
      return self
    if self.xs[self.i] in '+-*/()':
      self.head = self.xs[self.i]
      self.i += 1
      return self
    val, z = 0, ord('0')  
    while self.i < len(self.xs) and self.xs[self.i].isdigit():
      val = val*10 + ord(self.xs[self.i]) - z
      self.i += 1
    self.head = val
    return self


if __name__ == '__main__':
  import unittest
  import json

  def load_json(file_path):
    with open(file_path, 'rt') as file:
      return json.load(file)
  
  class TestSolution(unittest.TestCase):
    def testSolution(self):
      # self.__testSolution(ListSolution)   # stack overflow with test-big.json
      self.__testSolution(StreamSolution)
      self.__testSolution(LexSolution)
      self.__testSolution(Solution)

    def __testSolution(self, Solution):
      self.assertEqual(123, Solution().calculate('123'))
      self.assertEqual(-123, Solution().calculate('-123'))
      
      self.assertEqual(123, Solution().calculate('(123)'))
      self.assertEqual(-123, Solution().calculate('-(123)'))
      self.assertEqual(-123, Solution().calculate('(-123)'))
      self.assertEqual(123, Solution().calculate('-(-123)'))

      self.assertEqual(123, Solution().calculate('((123))'))
      self.assertEqual(-123, Solution().calculate('-((123))'))
      self.assertEqual(-123, Solution().calculate('(-(123))'))
      self.assertEqual(-123, Solution().calculate('((-123))'))
      self.assertEqual(123, Solution().calculate('-(-(123))'))
      self.assertEqual(123, Solution().calculate('-((-123))'))
      self.assertEqual(123, Solution().calculate('(-(-123))'))
      self.assertEqual(-123, Solution().calculate('-(-(-123))'))
      
      self.assertEqual(2, Solution().calculate('1 + 1'))
      self.assertEqual(3, Solution().calculate('2-1 + 2 '))
      self.assertEqual(23, Solution().calculate('(1+(4+5+2)-3)+(6+8)'))
      self.assertEqual(3, Solution().calculate('1-(     -2)'))
      self.assertEqual(-12, Solution().calculate('- (3 + (4 + 5))'))
      
      self.assertEqual(-1946, Solution().calculate(load_json('./data/test-big.json')))
      

  unittest.main()
