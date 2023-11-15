package main

import (
	"sort"
	"testing"

	"github.com/stretchr/testify/assert"
)

func leastInterval(xs []byte, k int) (r int) {
	// fmt.Println(k, string(xs))
	ys := make([]int, 26)
	for _, x := range xs {
		ys[x-'A']++
	}
	n := k + 1
	if len(ys) < n {
		n = len(ys)
	}
	for {
		sort.Slice(ys, func(l, r int) bool { return ys[r] < ys[l] })
		// fmt.Println(ys[:n])
		m, l := 0, 0
		for i := 0; i < n && ys[i] != 0; i++ {
			if ys[i] > 1 {
				m++
			} else {
				l++
			}
			ys[i]--
		}
		if m == 0 && l <= k {
			return r + l
		}
		r += k + 1
	}
}

func TestLeastInterval(t *testing.T) {
	assert.Equal(t, 8, leastInterval([]byte{'A', 'A', 'A', 'B', 'B', 'B'}, 2))
	assert.Equal(t, 6, leastInterval([]byte{'A', 'A', 'A', 'B', 'B', 'B'}, 0))
	assert.Equal(t, 16, leastInterval([]byte{'A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'}, 2))
	assert.Equal(t, 31, leastInterval([]byte{'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
		'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'}, 29))
	assert.Equal(t, 12, leastInterval(
		[]byte{'A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E'}, 2))
}
