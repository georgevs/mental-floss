package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func twoSum(xs []int, k int) []int {
	for i, j := 0, len(xs)-1; i < j; {
		t := xs[i] + xs[j]
		switch {
		case t < k:
			i++
		case t > k:
			j--
		default:
			return []int{i + 1, j + 1}
		}
	}
	return []int{}
}

func TestTwoSum(t *testing.T) {
	assert.Equal(t, []int{1, 2}, twoSum([]int{2, 7, 11, 15}, 9))
	assert.Equal(t, []int{1, 3}, twoSum([]int{2, 3, 4}, 6))
	assert.Equal(t, []int{1, 2}, twoSum([]int{-1, 0}, -1))
}
