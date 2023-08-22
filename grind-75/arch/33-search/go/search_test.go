package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func search(xs []int, x int) int {
	l, r := 0, len(xs)
	for l < r {
		i := (l + r) / 2
		if xs[i] == x {
			return i
		}
		if xs[l] < xs[i] {
			if xs[l] <= x && x < xs[i] {
				r = i
			} else {
				l = i + 1
			}
		} else {
			if xs[i] < x && x <= xs[r-1] {
				l = i + 1
			} else {
				r = i
			}
		}
	}
	return -1
}

func TestSearch(t *testing.T) {
	assert.Equal(t, 4, search([]int{4, 5, 6, 7, 0, 1, 2}, 0))
	assert.Equal(t, -1, search([]int{4, 5, 6, 7, 0, 1, 2}, 3))
	assert.Equal(t, -1, search([]int{1}, 0))
	assert.Equal(t, 0, search([]int{1, 3}, 1))
	assert.Equal(t, 1, search([]int{3, 1}, 1))
	assert.Equal(t, 1, search([]int{1, 3}, 3))
	assert.Equal(t, 0, search([]int{3, 1}, 3))
}
