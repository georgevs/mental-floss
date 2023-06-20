package main

func SolveByDFS2(xs [][]byte) {
	m, n := len(xs), len(xs[0])
	if m <= 1 || n <= 1 {
		return // all are safe
	}
	z := m * n                // invalid id
	vs := make([]bool, m*n+1) // visited
	rs := make(map[int]bool)  // safe

	id := func(y, x int) int { return y*n + x }
	cell := func(i int) (y, x int) { y, x = i/n, i%n; return }
	val := func(i int) byte {
		if i == z {
			return 'O'
		} else {
			y, x := cell(i)
			return xs[y][x]
		}
	}
	idz := func(y, x int) int {
		if 0 <= y && y < m && 0 <= x && x < n {
			return id(y, x)
		} else {
			return z
		}
	}
	left := func(y, x int) int { return idz(y, x-1) }
	top := func(y, x int) int { return idz(y-1, x) }
	right := func(y, x int) int { return idz(y, x+1) }
	bottom := func(y, x int) int { return idz(y+1, x) }

	var addSafe func(int)
	addSafe = func(i int) {
		rs[i] = true
		y, x := cell(i)
		for _, j := range []int{left(y, x), top(y, x), right(y, x), bottom(y, x)} {
			if !vs[j] && val(j) == 'O' {
				vs[j] = true
				addSafe(j)
			}
		}
	}
	visit := func(i int) {
		if !vs[i] {
			vs[i] = true
			if val(i) == 'O' {
				addSafe(i)
			}
		}
	}
	traverse := func() {
		for y, x := 0, 0; x < n-1; x++ {
			visit(id(y, x))
		}
		if n > 1 {
			for y, x := 0, n-1; y < m-1; y++ {
				visit(id(y, x))
			}
		}
		if m > 1 {
			for y, x := m-1, n-1; 0 < x; x-- {
				visit(id(y, x))
			}
		}
		if n > 1 {
			for y, x := m-1, 0; 0 < y; y-- {
				visit(id(y, x))
			}
		}
	}
	flipSurronded := func() {
		for y := 1; y < m-1; y++ {
			for x := 1; x < n-1; x++ {
				if xs[y][x] == 'O' && !rs[id(y, x)] {
					xs[y][x] = 'X'
				}
			}
		}
	}

	traverse()
	flipSurronded()
}
