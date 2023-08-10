package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func productExceptSelf(xs []int) (ys []int) {
	n := len(xs)
	ys = make([]int, n)
	ys[0] = 1
	for i := 1; i < n; i++ {
		ys[i] = ys[i-1] * xs[i-1]
	}
	r := 1
	for i := n - 1; i >= 0; i-- {
		ys[i] *= r
		r *= xs[i]
	}
	return
}

func TestProductExceptSelf(t *testing.T) {
	assert.Equal(t, []int{24, 12, 8, 6}, productExceptSelf([]int{1, 2, 3, 4}))
	assert.Equal(t, []int{0, 0, 9, 0, 0}, productExceptSelf([]int{-1, 1, 0, -3, 3}))
}
