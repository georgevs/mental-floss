package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func orangesRotting(xs [][]int) (k int) {
	m, n := len(xs), len(xs[0])
	var qs [][]int
	var l int

	for r := 0; r < m; r += 1 {
		for c := 0; c < n; c += 1 {
			if xs[r][c] == 2 {
				qs = append(qs, []int{r, c})
			} else if xs[r][c] == 1 {
				l += 1
			}
		}
	}

	for len(qs) > 0 && l > 0 {
		var qsn [][]int
		for _, xi := range qs {
			r, c := xi[0], xi[1]
			ns := [][]int{{r, c - 1}, {r - 1, c}, {r, c + 1}, {r + 1, c}}
			for _, xj := range ns {
				r, c = xj[0], xj[1]
				if 0 <= r && r < m && 0 <= c && c < n && xs[r][c] == 1 {
					xs[r][c] = 2
					qsn = append(qsn, []int{r, c})
					l -= 1
				}
			}
		}
		qs = qsn
		k += 1
	}
	if l != 0 {
		k = -1
	}
	return
}

func TestOrangesRotting(t *testing.T) {
	assert.Equal(t, 4, orangesRotting([][]int{{2, 1, 1}, {1, 1, 0}, {0, 1, 1}}))
	assert.Equal(t, -1, orangesRotting([][]int{{2, 1, 1}, {0, 1, 1}, {1, 0, 0}}))
	assert.Equal(t, 0, orangesRotting([][]int{{0, 2}}))
}
