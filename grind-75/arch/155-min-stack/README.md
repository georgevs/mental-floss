# 155. Min Stack

https://leetcode.com/problems/min-stack/  
AR: M52  
KEYS: stack, design

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

- MinStack() initializes the stack object.
- void push(int val) pushes the element val onto the stack.
- void pop() removes the element on the top of the stack.
- int top() gets the top element of the stack.
- int getMin() retrieves the minimum element in the stack.
- You must implement a solution with O(1) time complexity for each function.

## Approach 1: Stack of Value/ Minimum Pairs
```
MinStack -> push,pop,top,getMin
s.push x = s.r = { x, m=min(x,s.r.m), n=s.r }
s.pop -> x = s.r.x, s.r = s.r.n
s.top -> x = s.r.x
s.getMin -> m = s.r.m
```
Approach 3: Improved Two Stacks
```
MinStack -> push,pop,top,getMin
s.push x      | s.X<-x, if x!=s.M0.x s.M<-{x,n=0}, s.M0.n++ 
s.pop -> x    | x<-s.X, if x=s.M0.x s.M0.n--, if s.M0.n=0 ~s.M0
s.top -> x    | x=s.X0
s.getMin -> m | m=s.M0.x
```
