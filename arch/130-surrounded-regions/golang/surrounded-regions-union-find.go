package main

func SolveByUnionFind(xs [][]byte) {
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
