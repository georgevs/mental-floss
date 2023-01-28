# CLRS 15.2 Matrix Chain Multiplication

Given a chain of matrices `[X(a b) Y(b c) Z(c d) W(d e)...]` 
return the minimum operations to calculate the matrix multiplication.

The result depends on the order in which matrices are multiplied.

For example:
```
  R1 = ((X.Y).Z).W
  R2 = X.(Y.Z).W
  R3 = (X.Y).(Z.W)
  R4 = X.(Y.(Z.W))
```

Let's define:
```
X.Y : X(a b) Z(b c) -> R(a c)    ; matrix multiplication
  R = [ Rij = SUM { Xik.Ykj, k=[0,b) }, i=[0,a), j=[0,c) ]
    
X|Y : X(a b) Z(b c) -> n         ; matrix multiplication cost
  n = b.a.c                      ; b multiplications for each cell in R(a c)

X.Y|Z = (X.Y)|Z                  ; multiplication has priority 
```

If the dimensions for a sample input `[X Y Z W]`
are given with a sequence `P = [a b c d e]` 
then the MINIMUM matrix chain multiplication cost can be calculated as:
```
MIN-MCM: X Y Z W -> n
  n = MIN { 
    X | Y.Z.W, 
    X.Y | Z.W, 
    X.Y.Z | W
  }
```
Or recursively:
```
MIN-MCM: X Y Z W -> n = F(0,3)

F : i i -> 0        ; min MCM for matrix by itself is defined as 0 cost
F : 0 3 -> n        ; min MCM for matrices 0 to 3 in the input [X Y Z W] 
  n = MIN { 
    F(0,0) + P(0|1,3) + F(1,4),
    F(0,1) + P(0|2,3) + F(2,4),
    F(0,2) + P(0|3,3) + F(3,4)
  }
P : X|Y,Z -> n
  n = a.b.d         ; X rows * Y rows * Z columns
```
Finally:
```
MIN-MCM: P -> n
  n = F(0,|P| - 1)

F: i j -> n
  | n = 0, i == j
  | n = MIN { F(i,k) + P(i|k+1,j) + F(k+1,j),  k=[i,j) }
```
