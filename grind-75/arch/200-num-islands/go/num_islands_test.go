package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func numIslands(xs [][]byte) (k int) {
	m, n := len(xs), len(xs[0])

	var dfs func(int, int)
	dfs = func(r, c int) {
		xs[r][c] = '0'
		ns := [][]int{
			{r, c - 1}, {r - 1, c}, {r, c + 1}, {r + 1, c},
		}
		for _, e := range ns {
			r, c = e[0], e[1]
			if 0 <= r && r < m && 0 <= c && c < n && xs[r][c] == '1' {
				dfs(r, c)
			}
		}
	}

	for r := 0; r < m; r += 1 {
		for c := 0; c < n; c += 1 {
			if xs[r][c] == '1' {
				k += 1
				dfs(r, c)
			}
		}
	}
	return
}

func TestNumIslands(t *testing.T) {
	assert.Equal(t, 1, numIslands(
		[][]byte{
			{'1', '1', '1', '1', '0'},
			{'1', '1', '0', '1', '0'},
			{'1', '1', '0', '0', '0'},
			{'0', '0', '0', '0', '0'},
		},
	))
	assert.Equal(t, 3, numIslands(
		[][]byte{
			{'1', '1', '0', '0', '0'},
			{'1', '1', '0', '0', '0'},
			{'0', '0', '1', '0', '0'},
			{'0', '0', '0', '1', '1'},
		},
	))
}
