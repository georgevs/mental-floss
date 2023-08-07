# 322. Coin Change 

https://leetcode.com/problems/coin-change/  
AR: M42  
KEYS: dynamic programming  

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Constraints:

- 1 <= coins.length <= 12
- 1 <= coins[i] <= 2^31 - 1
- 0 <= amount <= 104

### Approach 1 (Brute force) [Time Limit Exceeded]

### Approach 2 (Dynamic programming - Top down) [Accepted]
```
coin-change X m -> k = iter m
iter m -> k = if m=0 0; min { if m-xi>=0 iter (m - xi) } + 1
```