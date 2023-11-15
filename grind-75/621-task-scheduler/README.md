# 621. Task Scheduler
https://leetcode.com/problems/task-scheduler/  
AR: 57M  
KEYS: array, hash, greedy, sorting, heap, counting  

Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks.

Constraints:

- 1 <= task.length <= 10^4
- tasks[i] is upper-case English letter.
- The integer n is in the range [0, 100].


### Solution
```
least-interval X k -> r =  Y=freq X,  for d=take Y k  r+=d
freq X -> Y =  for x Yx++
take Y k -> d =
  n=min |Y| k+1, sort Y
  for i<n & Yi>1  Yi--,i++
  ~Y[i:n],  d=|Y|?k+1:n
```
