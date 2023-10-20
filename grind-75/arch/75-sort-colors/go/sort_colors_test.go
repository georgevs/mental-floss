package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func sortColors(xs []int) []int {
	i, j, k := 0, 0, len(xs)
	for i < k {
		if xs[i] == 0 {
			xs[i], xs[j] = xs[j], xs[i]
			i++
			j++
		} else if xs[i] == 1 {
			i++
		} else {
			k--
			xs[i], xs[k] = xs[k], xs[i]
		}
	}
	return xs
}

func sortColorsTest(t *testing.T) {
	assert.Equal(t, 12, 12)
}
