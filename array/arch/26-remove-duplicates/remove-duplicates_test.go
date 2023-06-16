package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func removeDuplicates(xs []int) int {
	if len(xs) == 0 {
		return 0
	}
	k := 0
	for i := 1; i < len(xs); i++ {
		if xs[k] != xs[i] {
			k++
			xs[k] = xs[i]
		}
	}
	return k + 1
}

func TestRemoveDuplicates(t *testing.T) {
	removeDuplicates_ := func(xs []int) []int { return xs[0:removeDuplicates(xs)] }
	assert.Equal(t, []int{}, removeDuplicates_([]int{}))
	assert.Equal(t, []int{1}, removeDuplicates_([]int{1}))
	assert.Equal(t, []int{1}, removeDuplicates_([]int{1, 1}))
	assert.Equal(t, []int{1, 2, 3}, removeDuplicates_([]int{1, 2, 3}))
	assert.Equal(t, []int{1, 2}, removeDuplicates_([]int{1, 1, 2}))
	assert.Equal(t, []int{0, 1, 2, 3, 4}, removeDuplicates_([]int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}))
}
