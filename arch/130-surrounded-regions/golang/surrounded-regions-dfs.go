package main

func SolveByDFS(xs [][]byte) {
	m, n := len(xs), len(xs[0])
	z := m * n                // safe id
	vs := make([]bool, m*n+1) // visited
	var rs []int              // surrounded

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

	var addFriendlyNeighbours func(ns map[int]bool, i int)
	addFriendlyNeighbours = func(ns map[int]bool, i int) {
		y, x := cell(i)
		for _, j := range []int{left(y, x), top(y, x), right(y, x), bottom(y, x)} {
			if j == z {
				ns[j] = true
			} else if !vs[j] && val(j) == 'O' {
				vs[j] = true
				ns[j] = true
				addFriendlyNeighbours(ns, j)
			}
		}
	}
	addSurrounded := func(ns map[int]bool) {
		for i := range ns {
			rs = append(rs, i)
		}
	}
	visit := func(i int) {
		vs[i] = true
		if val(i) == 'O' {
			ns := make(map[int]bool)
			ns[i] = true
			addFriendlyNeighbours(ns, i)
			if !ns[z] {
				addSurrounded(ns)
			}
		}
	}
	traverse := func() {
		for y := 0; y < m; y++ {
			for x := 0; x < n; x++ {
				i := id(y, x)
				if !vs[i] {
					visit(i)
				}
			}
		}
	}
	flipSurrounded := func() {
		for _, i := range rs {
			y, x := cell(i)
			xs[y][x] = 'X'
		}
	}

	traverse()
	flipSurrounded()
}
