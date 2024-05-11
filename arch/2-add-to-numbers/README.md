# 2. Add two numbers

https://leetcode.com/problems/add-two-numbers/  
M42  

### Solution
```
add x y -> z => add x y 0 
add x y c -> z =>
  if c;x;y:
    s => c+xv+yv
    z => Z (s%10) (add xn yn s/10)
```
