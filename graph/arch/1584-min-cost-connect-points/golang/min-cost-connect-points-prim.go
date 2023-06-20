package main

import "container/heap"

type EdgeHeap []Edge

func (h EdgeHeap) Len() int           { return len(h) }
func (h EdgeHeap) Less(i, j int) bool { return h[i].w < h[j].w }
func (h EdgeHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *EdgeHeap) Push(x any) {
	*h = append(*h, x.(Edge))
}

func (h *EdgeHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func prim(g Graph) (t []Edge) {
	var h EdgeHeap
	heap.Init(&h)
	n := len(g)
	u := 0
	bs := NewBitSet(n)
	bs.Add(u)
	for len(t) < n-1 {
		for _, e := range g[u] {
			h.Push(e)
		}
		for {
			e := h.Pop().(Edge)
			v := e.Other(u)
			if !bs.Has(v) {
				u = v
				t = append(t, e)
				bs.Add(u)
				break
			}
		}
	}
	return
}

func minCostConnectPointsPrim(vs [][]int) (r int) {
	n := len(vs)
	xs := edges(vs)
	g := NewGraph(n, xs)
	t := prim(g)
	r = 0
	for _, x := range t {
		r = r + x.w
	}
	return
}
