package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func plusOne(xs []int) []int {
	n := len(xs)
	c := 1
	for i := n - 1; c > 0 && i >= 0; i-- {
		x := xs[i] + c
		xs[i] = x % 10
		c = x / 10
	}
	if c != 0 {
		xs = append(append(make([]int, 0, len(xs)+1), c), xs...)
	}
	return xs
}

func TestPlusOne(t *testing.T) {
	assert.Equal(t, []int{4, 3, 2, 2}, plusOne([]int{4, 3, 2, 1}))
	assert.Equal(t, []int{1, 0}, plusOne([]int{9}))
}
