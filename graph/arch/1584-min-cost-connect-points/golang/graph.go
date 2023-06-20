package main

type Edge struct{ u, v, w int }

func (e Edge) Other(i int) int {
	if e.u == i {
		return e.v
	} else {
		return e.u
	}
}

type Graph [][]Edge

func NewGraph(n int, xs []Edge) (g Graph) {
	g = make([][]Edge, n)
	for i := 0; i < len(xs); i++ {
		e := xs[i]
		g[e.u] = append(g[e.u], e)
		g[e.v] = append(g[e.v], e)
	}
	return
}
