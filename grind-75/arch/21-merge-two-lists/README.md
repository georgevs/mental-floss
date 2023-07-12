# 21. Merge Two Sorted Lists

https://leetcode.com/problems/merge-two-sorted-lists/description/
AR: E62
KEYS: linked list, recursion

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Approach 1: Recursion
```
merge: x y -> z =
  z = min x y
  if !z ret ; if z==x x=x.n ; if z==y y=y.n
  z.n = merge x y
```

Approach 2: Iteration
```
merge: x y -> z
  l=f={}
  for x,y  if x<=y l=l.next=x x=x.next ; l=l.next=y y=y.next
  l.next= x;y 
  z=f.next 
```