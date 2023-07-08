package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func rotate(xs []int, k int) []int {
	n := len(xs)
	if k > 0 {
		return ror(xs, k%n)
	} else if k < 0 {
		return rol(xs, -k%n)
	} else {
		return xs
	}
}

func rol(xs []int, k int) []int {
	return ror(xs, len(xs)-k)
}

func ror(xs []int, k int) []int {
	n := len(xs)
	reverse(xs, 0, n-1)
	reverse(xs, 0, k-1)
	reverse(xs, k, n-1)
	return xs
}

func reverse(xs []int, i, j int) {
	for ; i < j; i, j = i+1, j-1 {
		xs[i], xs[j] = xs[j], xs[i]
	}
}

func TestRotate(t *testing.T) {
	assert.Equal(t, []int{5, 6, 7, 1, 2, 3, 4}, rotate([]int{1, 2, 3, 4, 5, 6, 7}, 3))
	assert.Equal(t, []int{3, 99, -1, -100}, rotate([]int{-1, -100, 3, 99}, 2))
	assert.Equal(t, []int{2, 3, 4, 5, 6, 1}, rotate([]int{1, 2, 3, 4, 5, 6}, 11))
}
