from typing import List 

class Solution:
  def spiralOrder(self, xs: List[List[int]]) -> List[int]:
          
    def spiral(x,y,w,h):
      top(x,y,w,h)
      if h>1:
        right(x,y+1,w,h-1)
        if w>1:
          bottom(x,y+1,w-1,h-1)
          if h>2:
            left(x,y+1,w-1,h-2)
            if w>2 and h>2:
              spiral(x+1,y+1,w-2,h-2)

    ys = []

    def top(x,y,w,h):
      for i in range(x,x+w): ys.append(xs[y][i])
    def right(x,y,w,h):
      for i in range(y,y+h): ys.append(xs[i][x+w-1])
    def bottom(x,y,w,h):
      for i in range(x+w-1,x-1,-1): ys.append(xs[y+h-1][i])
    def left(x,y,w,h):
      for i in range(y+h-1,y-1,-1): ys.append(xs[i][x])
    
    spiral(0,0,len(xs[0]),len(xs))

    return ys

if __name__ == '__main__':
  assert [0] == Solution().spiralOrder([[0]])

  assert [0, 1] == Solution().spiralOrder([[0, 1]])
  assert [0, 1, 2] == Solution().spiralOrder([[0, 1, 2]])
  assert [0, 1, 2, 3] == Solution().spiralOrder([[0, 1, 2, 3]])

  assert [0, 1] == Solution().spiralOrder([[0], [1]])
  assert [0, 1, 2] == Solution().spiralOrder([[0], [1], [2]])
  assert [0, 1, 2, 3] == Solution().spiralOrder([[0], [1], [2], [3]])

  assert [1,2,3,6,9,8,7,4,5] == Solution().spiralOrder([[1,2,3],[4,5,6],[7,8,9]])
  assert [1,2,3,4,8,12,11,10,9,5,6,7] == Solution().spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])
