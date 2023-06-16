package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func removeElement(xs []int, val int) int {
	k := 0
	for i := 0; i < len(xs); i++ {
		if xs[i] != val {
			if k < i {
				xs[k] = xs[i]
			}
			k++
		}
	}
	return k
}

func TestREmoveElement(t *testing.T) {
	removeElement_ := func(xs []int, val int) []int { return xs[0:removeElement(xs, val)] }
	assert.Equal(t, []int{2, 2}, removeElement_([]int{3, 2, 2, 3}, 3))
	assert.Equal(t, []int{0, 1, 3, 0, 4}, removeElement_([]int{0, 1, 2, 2, 3, 0, 4, 2}, 2))
}
