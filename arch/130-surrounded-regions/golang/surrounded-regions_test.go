package main

import (
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
)

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

func TestSolveByUnionFind(t *testing.T) {
	testSolution(t, SolveByUnionFind)
}

func TestSolveByDFS(t *testing.T) {
	testSolution(t, SolveByDFS)
}

func TestSolveByDFS2(t *testing.T) {
	testSolution(t, SolveByDFS2)
}

func testSolution(t *testing.T, solve func([][]byte)) {
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

	assert.Equal(t,
		board(6, 6, "OXOOXXOXXXOXXOOXOOXOXXXXOOXOXXXXOOOO"),
		solve_(board(6, 6, "OXOOXXOXXXOXXOOXOOXOXXXXOOXOXXXXOOOO")))
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

type Board [][]byte

func (xs Board) String() string {
	m := len(xs)
	rs := make([]string, m)
	for y := 0; y < m; y++ {
		rs[y] = string(xs[y])
	}
	return strings.Join(rs, "\n")
}
