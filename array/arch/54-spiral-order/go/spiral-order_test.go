package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func spiralOrder(xs [][]int) []int {
	h := len(xs)
	w := len(xs[0])
	ys, k := make([]int, w*h), 0
	top := func(x, y, w, h int) {
		for i := x; i < x+w; i++ {
			ys[k] = xs[y][i]
			k++
		}
	}
	right := func(x, y, w, h int) {
		for i := y; i < y+h; i++ {
			ys[k] = xs[i][x+w-1]
			k++
		}
	}
	bottom := func(x, y, w, h int) {
		for i := x + w - 1; x <= i; i-- {
			ys[k] = xs[y+h-1][i]
			k++
		}
	}
	left := func(x, y, w, h int) {
		for i := y + h - 1; y <= i; i-- {
			ys[k] = xs[i][x]
			k++
		}
	}
	var spiral func(x, y, w, h int)
	spiral = func(x, y, w, h int) {
		top(x, y, w, h)
		if h > 1 {
			right(x, y+1, w, h-1)
			if w > 1 {
				bottom(x, y+1, w-1, h-1)
				if h > 2 {
					left(x, y+1, w-1, h-2)
					if w > 2 && h > 2 {
						spiral(x+1, y+1, w-2, h-2)
					}
				}
			}
		}
	}
	spiral(0, 0, w, h)
	return ys
}

func TestSpiralOrder(t *testing.T) {
	assert.Equal(t, []int{0}, spiralOrder([][]int{{0}}))
	assert.Equal(t, []int{0, 1}, spiralOrder([][]int{{0, 1}}))
	assert.Equal(t, []int{0, 1, 2}, spiralOrder([][]int{{0, 1, 2}}))
	assert.Equal(t, []int{0, 1, 2, 3}, spiralOrder([][]int{{0, 1, 2, 3}}))
	assert.Equal(t, []int{0, 1}, spiralOrder([][]int{{0}, {1}}))
	assert.Equal(t, []int{0, 1, 2}, spiralOrder([][]int{{0}, {1}, {2}}))
	assert.Equal(t, []int{0, 1, 2, 3}, spiralOrder([][]int{{0}, {1}, {2}, {3}}))
	assert.Equal(t, []int{1, 2, 3, 6, 9, 8, 7, 4, 5}, spiralOrder([][]int{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}))
	assert.Equal(t, []int{1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7}, spiralOrder([][]int{{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}}))
}
