package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func coinChange(xs []int, m int) (r int) {
	// fmt.Println(xs, m)
	var iter func(int) int
	var dp func(int) int
	maxVal := m + 1 // largest invalid value
	iter = func(m int) (r int) {
		if m == 0 {
			return 0
		}
		r = maxVal
		for _, x := range xs {
			if m-x >= 0 {
				rx := dp(m - x)
				if rx < r {
					r = rx
				}
			}
		}
		if r < maxVal {
			r += 1
		}
		return r
	}
	ds := map[int]int{}
	dp = func(m int) (r int) {
		r, ok := ds[m]
		if !ok {
			r = iter(m)
			ds[m] = r
			// fmt.Println(m, r)
		}
		return
	}

	r = dp(m)
	if r == maxVal {
		return -1
	}
	return r
}

func TestCoinChnage(t *testing.T) {
	assert.Equal(t, 3, coinChange([]int{1, 2, 5}, 11))
	assert.Equal(t, -1, coinChange([]int{2}, 3))
	assert.Equal(t, 0, coinChange([]int{1}, 0))
	assert.Equal(t, 3, coinChange([]int{50, 20}, 60))
	assert.Equal(t, 20, coinChange([]int{186, 419, 83, 408}, 6249))
}
