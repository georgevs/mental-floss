from typing import List

class Solution:
  def generate(self, k: int) -> List[List[int]]:
    xs = []
    if k == 0: return xs
    xs.append([1])
    if k == 1: return xs
    xs.append([1,1])
    if k == 2: return xs

    for j in range(2,k):
      ys = [1]
      for i in range(1,j):
        ys.append(xs[j-1][i-1] + xs[j-1][i])
      ys.append(1)
      xs.append(ys)
    
    return xs

if __name__ == '__main__':
  assert [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]] == Solution().generate(5)
  assert [[1]] == Solution().generate(1)
