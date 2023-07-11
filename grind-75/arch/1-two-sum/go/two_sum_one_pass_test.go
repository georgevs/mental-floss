package main

import (
	"sort"
	"testing"

	"github.com/stretchr/testify/assert"
)

func twoSum(xs []int, k int) []int {
	d := make(map[int]int)
	for i, x := range xs {
		if j, ok := d[k-x]; ok && i != j {
			return []int{i, j}
		}
		d[x] = i
	}
	return nil
}

func TestTwoSum(t *testing.T) {
	sort_ := func(xs []int) []int { sort.Ints(xs); return xs }
	assert.Equal(t, []int{0, 1}, sort_(twoSum([]int{2, 7, 11, 15}, 9)))
	assert.Equal(t, []int{1, 2}, sort_(twoSum([]int{3, 2, 4}, 6)))
	assert.Equal(t, []int{0, 1}, sort_(twoSum([]int{3, 3}, 6)))
}
