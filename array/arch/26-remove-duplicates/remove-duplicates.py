from typing import List

class Solution:
  def removeDuplicates(self, xs: List[int]) -> int:
    if len(xs) == 0: return 0
    
    k = 0
    i = 1
    while i < len(xs):
      if xs[k] != xs[i]:
        k = k + 1
        xs[k] = xs[i]
      i = i + 1
      
    return k + 1

if __name__ == '__main__':
  removeDuplicates_ = lambda xs: xs[0 : Solution().removeDuplicates(xs)]
  assert [] == removeDuplicates_([])
  assert [1] == removeDuplicates_([1])
  assert [1] == removeDuplicates_([1,1])
  assert [1, 2, 3] == removeDuplicates_([1, 2, 3])
  assert [1, 2] == removeDuplicates_([1, 1, 2])
  assert [0, 1, 2, 3, 4] == removeDuplicates_([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
