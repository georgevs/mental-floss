package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func search(xs []int, k int) (i int) {
	n := len(xs)
	l, r := 0, n
	for l < r {
		i = (l + r) / 2
		if xs[i] == k {
			return
		}
		if k < xs[i] {
			r = i
		} else {
			l = i + 1
		}
	}
	return -1
}

func TestSearch(t *testing.T) {
	assert.Equal(t, 4, search([]int{-1, 0, 3, 5, 9, 12}, 9))
	assert.Equal(t, -1, search([]int{-1, 0, 3, 5, 9, 12}, 2))
}
