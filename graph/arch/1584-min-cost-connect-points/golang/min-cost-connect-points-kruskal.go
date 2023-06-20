package main

import "sort"

type edge struct{ u, v, w int }

type point []int

func makePoint(x, y int) point {
	return []int{x, y}
}

func (p1 point) distance(p2 point) int {
	var d int
	if p1[0] < p2[0] {
		d = p2[0] - p1[0]
	} else {
		d = p1[0] - p2[0]
	}
	if p1[1] < p2[1] {
		d = d + p2[1] - p1[1]
	} else {
		d = d + p1[1] - p2[1]
	}
	return d
}

func edges(vs [][]int) (xs []edge) {
	n := len(vs)
	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			w := point(vs[i]).distance(point(vs[j]))
			xs = append(xs, edge{u: i, v: j, w: w})
		}
	}
	return
}

func kruskal(n int, xs []edge) (t []edge) {
	sort.Slice(xs, func(i, j int) bool { return xs[i].w < xs[j].w })
	u := NewUnionFind(n)
	for i := 0; len(t) < n-1; i++ {
		if u.Connect(xs[i].u, xs[i].v) {
			t = append(t, xs[i])
		}
	}
	return
}

func minCostConnectPoints(vs [][]int) (r int) {
	n := len(vs)
	xs := edges(vs)
	t := kruskal(n, xs)
	r = 0
	for _, x := range t {
		r = r + x.w
	}
	return
}
