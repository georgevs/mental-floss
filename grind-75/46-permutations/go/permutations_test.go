package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func permute(xs []int) [][]int {
	if len(xs) == 0 {
		return [][]int{{}}
	}
	return insert(xs[0], permute(xs[1:]))
}

func insert(x int, yss [][]int) (zss [][]int) {
	for _, ys := range yss {
		for i := 0; i < len(ys); i++ {
			zs := append([]int{}, ys[0:i]...)
			zs = append(zs, x)
			zs = append(zs, ys[i:]...)
			zss = append(zss, zs)
		}
		zss = append(zss, append(ys, x))
	}
	return
}

func TestPermute(t *testing.T) {
	assert.Equal(t, [][]int{{1}}, permute([]int{1}))
	assert.Equal(t, [][]int{{0, 1}, {1, 0}}, permute([]int{0, 1}))
	assert.Equal(t,
		[][]int{{1, 2, 3}, {2, 1, 3}, {2, 3, 1}, {1, 3, 2}, {3, 1, 2}, {3, 2, 1}},
		permute([]int{1, 2, 3}))
}
