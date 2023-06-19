package main

import (
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
)

func solve(xs [][]byte) {
	m, n := len(xs), len(xs[0])
	zX, zO := m*n, m*n+1
	id := func(y, x int) int { return y*n + x }
	cell := func(i int) (y, x int) { y, x = i/n, i%n; return }
	idz := func(y, x, z int) int {
		if 0 <= y && y < m && 0 <= x && x < n {
			return id(y, x)
		} else {
			return z
		}
	}
	left := func(y, x, z int) int { return idz(y, x-1, z) }
	top := func(y, x, z int) int { return idz(y-1, x, z) }
	right := func(y, x, z int) int { return idz(y, x+1, z) }
	bottom := func(y, x, z int) int { return idz(y+1, x, z) }
	zero := func(x byte) int {
		if x == 'X' {
			return zX
		} else {
			return zO
		}
	}
	team := func(i int) byte {
		switch {
		case i == zX:
			return 'X'
		case i == zO:
			return 'O'
		default:
			return xs[i/n][i%n]
		}
	}
	connectCells := func(u UnionFind, i, j int) {
		if team(i) == team(j) {
			u.connect(i, j)
		}
	}
	connectBoard := func() UnionFind {
		u := NewUnionFind(m*n + 2)
		for y := 0; y < m; y++ {
			for x := 0; x < n; x++ {
				i := id(y, x)
				z := zero(xs[y][x])
				connectCells(u, i, left(y, x, z))
				connectCells(u, i, top(y, x, z))
				connectCells(u, i, right(y, x, z))
				connectCells(u, i, bottom(y, x, z))
			}
		}
		return u
	}
	solveBoard := func(u UnionFind) {
		for i := 0; i < m*n; i++ {
			if u.find(i) != zO {
				y, x := cell(i)
				xs[y][x] = 'X'
			}
		}
	}

	solveBoard(connectBoard())
}

type UnionFind []int

func NewUnionFind(n int) UnionFind {
	u := make([]int, n)
	for i := 0; i < n; i++ {
		u[i] = i
	}
	return u
}

func (u UnionFind) find(i int) int {
	for i != u[i] {
		i = u[i]
	}
	return i
}

func (u UnionFind) connect(i, j int) {
	ri, rj := u.find(i), u.find(j)
	if ri < rj {
		u[ri] = rj
	} else if rj < ri {
		u[rj] = ri
	}
}

func TestUnionFind(t *testing.T) {
	u := NewUnionFind(6)
	assert.Equal(t, []int{0, 1, 2, 3, 4, 5}, []int(u))

	u.connect(0, 1)
	u.connect(2, 3)
	u.connect(3, 4)
	assert.Equal(t, u.find(0), u.find(1))
	assert.Equal(t, u.find(2), u.find(3))
	assert.Equal(t, u.find(3), u.find(4))
	assert.NotEqual(t, u.find(0), u.find(5))
	assert.NotEqual(t, u.find(0), u.find(2))

	u = NewUnionFind(6)
	assert.Equal(t, []int{0, 1, 2, 3, 4, 5}, []int(u))

	u.connect(1, 0)
	u.connect(3, 2)
	u.connect(4, 3)
	assert.Equal(t, u.find(2), u.find(3))
	assert.Equal(t, u.find(3), u.find(4))
	assert.NotEqual(t, u.find(0), u.find(5))
	assert.NotEqual(t, u.find(0), u.find(2))
}

func board(m, n int, s string) [][]byte {
	if m == 0 || n == 0 {
		return [][]byte{{}}
	}
	bs := []byte(s)
	xs := make([][]byte, m)
	for y := 0; y < m; y++ {
		xs[y] = bs[y*n : y*n+n]
	}
	return xs
}

func TestBoard(t *testing.T) {
	assert.Equal(t, [][]byte{{}}, board(0, 1, ""))
	assert.Equal(t, [][]byte{{}}, board(1, 0, ""))
	assert.Equal(t, [][]byte{{'X'}}, board(1, 1, "X"))
	assert.Equal(t, [][]byte{{'X', 'X'}, {'O', 'O'}, {'X', 'X'}}, board(3, 2, "XXOOXX"))
	assert.Equal(t, [][]byte{{'X', 'X', 'O'}, {'O', 'X', 'X'}}, board(2, 3, "XXOOXX"))
}

func TestSolve(t *testing.T) {
	solve_ := func(xs [][]byte) [][]byte { solve(xs); return xs }
	assert.Equal(t, board(0, 0, ""), solve_(board(0, 0, "")))
	assert.Equal(t, board(1, 1, "X"), solve_(board(1, 1, "X")))
	assert.Equal(t, board(1, 1, "O"), solve_(board(1, 1, "O")))
	assert.Equal(t, board(1, 3, "XOX"), solve_(board(1, 3, "XOX")))
	assert.Equal(t, board(1, 3, "OXO"), solve_(board(1, 3, "OXO")))
	assert.Equal(t, board(3, 3, "XXXXXXXXX"), solve_(board(3, 3, "XXXXOXXXX")))
	assert.Equal(t, board(3, 3, "OOOOXOOOO"), solve_(board(3, 3, "OOOOXOOOO")))
	assert.Equal(t, board(3, 3, "OXXXXXXXX"), solve_(board(3, 3, "OXXXOXXXX")))
	assert.Equal(t, board(4, 4, "XXXXXXXXXXXXXOXX"), solve_(board(4, 4, "XXXXXOOXXXOXXOXX")))

	assert.Equal(t,
		board(5, 5, "OXXOXXXXXOXXXOXOXOOOXXOXO"),
		solve_(board(5, 5, "OXXOXXOOXOXOXOXOXOOOXXOXO")))
}

type Board [][]byte

func (xs Board) String() string {
	m := len(xs)
	rs := make([]string, m)
	for y := 0; y < m; y++ {
		rs[y] = string(xs[y])
	}
	return strings.Join(rs, "\n")
}
