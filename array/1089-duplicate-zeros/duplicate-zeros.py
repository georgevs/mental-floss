"""
python3 duplicate-zeros.py
"""

class Solution(object):
  def duplicateZeros(self, xs):
    """
    :type arr: List[int]
    :rtype: None Do not return anything, modify arr in-place instead.
    """

    n = len(xs)
    i = 0
    j = 0
    while j < n:
      if xs[i] == 0:
        j = j+1
      i = i+1
      j = j+1

    while i > 0:
      i = i-1
      j = j-1
      if j < n:
        xs[j] = xs[i]
      if xs[i] == 0:
        j = j-1
        xs[j] = 0


if __name__ == '__main__':
  xs = [1, 0, 2, 3, 0, 4, 5, 0]
  Solution().duplicateZeros(xs)
  assert [1, 0, 0, 2, 3, 0, 0, 4] == xs
