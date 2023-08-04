package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func canFinish(n int, xs [][]int) bool {
	g := NewGraph(n, xs)
	cs := make(map[int]byte, n)
	var visit func(u int) bool
	visit = func(u int) bool {
		c, ok := cs[u]
		if ok && c == 'w' {
			return true
		}
		if ok && c == 'g' {
			return false
		}
		cs[u] = 'g'
		for _, v := range g[u] {
			if !visit(v) {
				return false
			}
		}
		cs[u] = 'w'
		return true
	}

	for u := 0; u < n; u++ {
		if !visit(u) {
			return false
		}
	}
	return true
}

type Graph [][]int

func NewGraph(n int, xs [][]int) (g Graph) {
	g = make([][]int, n)
	for _, x := range xs {
		u, v := x[1], x[0]
		g[u] = append(g[u], v)
	}
	return
}

func TestCanFinish(t *testing.T) {
	assert.True(t, canFinish(2, [][]int{{1, 0}}))
	assert.False(t, canFinish(2, [][]int{{1, 0}, {0, 1}}))
}
