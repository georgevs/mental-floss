package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func maxProfit(xs []int) (k int) {
	l := 10001
	for _, x := range xs {
		l = min(l, x)
		k = max(k, x-l)
	}
	return
}
func min(a, b int) int {
	if a <= b {
		return a
	} else {
		return b
	}
}
func max(a, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
}

func TestMaxProfit(t *testing.T) {
	assert.Equal(t, 5, maxProfit([]int{7, 1, 5, 3, 6, 4}))
	assert.Equal(t, 0, maxProfit([]int{7, 6, 4, 3, 1}))
}
