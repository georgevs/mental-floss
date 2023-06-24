package main

import (
	"container/heap"
)

func prim(g Graph) (t []Edge) {
	// fmt.Println(g) // DBG
	n := len(g)
	bs := NewBitSet(n)
	h := EdgeHeap{}
	heap.Init(&h)

	prims := func(s int) {
		for bs.Add(s); len(t) < n-1; bs.Add(s) {
			for _, e := range g[s] {
				heap.Push(&h, e)
			}
			// fmt.Println("->", s, h) // DBG
			for {
				e := heap.Pop(&h).(Edge)
				// fmt.Println("<-", e, []bool{bs.Has(e.u), bs.Has(e.v)}, h) // DBG
				if !bs.Has(e.u) {
					s = e.u
					t = append(t, e)
					break
				}
				if !bs.Has(e.v) {
					s = e.v
					t = append(t, e)
					break
				}
				if h.Len() == 0 {
					return
				}
			}
		}
	}

	for s := 0; s < n && len(t) < n-1; s++ {
		if !bs.Has(s) {
			prims(s)
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
