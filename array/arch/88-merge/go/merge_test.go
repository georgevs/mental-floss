package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func merge(xs []int, m int, ys []int, n int) {
	for w, i, j := m+n-1, m-1, n-1; w >= 0; w-- {
		if i >= 0 && j >= 0 {
			if xs[i] < ys[j] {
				xs[w] = ys[j]
				j--
			} else {
				xs[w] = xs[i]
				i--
			}
		} else if j >= 0 {
			xs[w] = ys[j]
			j--
		} else {
			return // rest of xs is sorted
		}
	}
}

func TestMerge(t *testing.T) {
	merge_ := func(xs []int, m int, ys []int, n int) []int {
		merge(xs, m, ys, n)
		return xs
	}

	assert.Equal(t, []int{1, 2, 2, 3, 5, 6}, merge_([]int{1, 2, 3, 0, 0, 0}, 3, []int{2, 5, 6}, 3))
	assert.Equal(t, []int{1}, merge_([]int{1}, 1, []int{}, 0))
	assert.Equal(t, []int{1}, merge_([]int{0}, 0, []int{1}, 1))
}
