"""
lca: r p q -> r   r,p,q,l: {x l r}
  if q.x<p.x q~p
  for r.x<p.x||q.x<r.x
    r = r.x<p.x ? r.l : r.r

---
lca: r p q -> q   r,p,q,u,v: {x l r}
  D = parents r p q
  S <- p
  for p=Dp S<-p
  for !Sq  q=Dq

parents: r p q -> D
  Q<-r
  for n<2,Q
    for n<2,u<-Q
      Q'<-ul ur
      Dul=u, Dur=u
      if u==p|q ++n
    Q~Q'
"""


class Node:
  def __init__(self, val, left, right):
    self.val = val
    self.left = left
    self.right = right

  def __repr__(self):
    return str(self.val)


class RegularTreeSolution:
  def lowestCommonAncestor(self, r, p, q):
    if q.val < p.val:
      q, p = p, q
    while r.val < p.val or q.val < r.val:
      r = r.left if q.val < r.val else r.right
    return r


class IrregularTreeSolution:
  def lowestCommonAncestor(self, r, p, q):
    ps = self.parents(r, p, q)
    ss = set([p])
    while p := ps.get(p):
      ss.add(p)
    while q not in ss:
      q = ps.get(q)
    return q

  def parents(self, r, p, q):
    qs = [r]
    ps = dict()
    n = 0
    while n < 2 and qs:
      nqs = list()
      for u in qs:
        if u.left:
          ps[u.left] = u
          nqs.append(u.left)
        if u.right:
          ps[u.right] = u
          nqs.append(u.right)
        if u == p or u == q:
          n += 1
          if n == 2:
            break
      qs = nqs
    return ps


if __name__ == '__main__':
  import unittest

  def find(r, val):
    return r if not r or r.val == val else find(r.left, val) or find(r.right, val)

  class TestSolution(unittest.TestCase):
    def testAll(self):
      self.__testRegularTree(RegularTreeSolution().lowestCommonAncestor)
      self.__testIrregularTree(IrregularTreeSolution().lowestCommonAncestor)

    def __testIrregularTree(self, lca):
      self.__testRegularTree(lca)
      r = Node(3,
               Node(5,
                    Node(6, None, None),
                    Node(2,
                         Node(7, None, None),
                         Node(4, None, None))),
               Node(1,
                    Node(0, None, None),
                    Node(8, None, None)))

      self.assertEqual(find(r, 5), lca(r, find(r, 5), find(r, 4)))
      self.assertEqual(find(r, 3), lca(r, find(r, 5), find(r, 1)))

      r = Node(1,
               Node(2, None, None),
               Node(3, None, None))
      self.assertEqual(find(r, 1), lca(r, find(r, 2), find(r, 3)))

    def __testRegularTree(self, lca):
      r = Node(3,
               Node(1,
                    Node(0, None, None),
                    Node(8, None, None)),
               Node(5,
                    Node(4,
                         Node(2, None, None),
                         Node(7, None, None)),
                    Node(6, None, None)))
      self.assertEqual(find(r, 5), lca(r, find(r, 5), find(r, 4)))
      self.assertEqual(find(r, 3), lca(r, find(r, 5), find(r, 1)))

      r = Node(1, None, Node(2, None, None))
      self.assertEqual(find(r, 1), lca(r, find(r, 1), find(r, 2)))

      r = Node(2, Node(1, None, None), None)
      self.assertEqual(find(r, 2), lca(r, find(r, 1), find(r, 2)))

      r = Node(1,
               None,
               Node(2,
                    None,
                    Node(3, None, None)))
      self.assertEqual(find(r, 2), lca(r, find(r, 2), find(r, 3)))

  unittest.main()
