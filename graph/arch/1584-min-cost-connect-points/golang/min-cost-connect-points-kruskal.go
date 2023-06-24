package main

import "sort"

func kruskal(n int, xs []Edge) (t []Edge) {
	sort.Slice(xs, func(i, j int) bool { return xs[i].w < xs[j].w })
	u := NewUnionFind(n)
	for i := 0; i < len(xs) && len(t) < n-1; i++ {
		if u.Connect(xs[i].u, xs[i].v) {
			t = append(t, xs[i])
		}
	}
	return
}

func minCostConnectPointsKruskal(vs [][]int) (r int) {
	n := len(vs)
	xs := edges(vs)
	t := kruskal(n, xs)
	r = 0
	for _, x := range t {
		r = r + x.w
	}
	return
}
