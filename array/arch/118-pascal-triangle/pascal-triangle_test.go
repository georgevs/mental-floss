package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func generate(k int) [][]int {
	xs := make([][]int, k)
	if k == 0 {
		return xs
	}
	xs[0] = []int{1}
	if k == 1 {
		return xs
	}
	xs[1] = []int{1, 1}
	if k == 2 {
		return xs
	}
	for j := 2; j < k; j++ {
		ys := make([]int, j+1)
		ys[0] = 1
		for i := 1; i < j; i++ {
			ys[i] = xs[j-1][i-1] + xs[j-1][i]
		}
		ys[j] = 1
		xs[j] = ys
	}
	return xs
}

func TestGenerate(t *testing.T) {
	assert.Equal(t, [][]int{{1}, {1, 1}, {1, 2, 1}, {1, 3, 3, 1}, {1, 4, 6, 4, 1}}, generate(5))
	assert.Equal(t, [][]int{{1}}, generate(1))
}
