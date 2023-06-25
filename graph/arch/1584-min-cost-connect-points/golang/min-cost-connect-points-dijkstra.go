package main

import (
	"container/heap"
	"math"
)

type VertexDistance struct {
	v int
	d float64
}

type PriorityQueue struct {
	m map[int]int
	h []VertexDistance
}

func (pq *PriorityQueue) Len() int           { return len(pq.h) }
func (pq *PriorityQueue) Less(i, j int) bool { return pq.h[i].d < pq.h[j].d }
func (pq *PriorityQueue) Swap(i, j int) {
	pq.h[i], pq.h[j] = pq.h[j], pq.h[i]
	pq.m[pq.h[i].v] = i
	pq.m[pq.h[j].v] = j
}
func (pq *PriorityQueue) Push(x any) {
	i := len(pq.h)
	pq.m[x.(VertexDistance).v] = i
	pq.h = append(pq.h, x.(VertexDistance))
}
func (pq *PriorityQueue) Pop() (x any) {
	n := len(pq.h)
	x = pq.h[n-1]
	delete(pq.m, x.(VertexDistance).v)
	pq.h = pq.h[0 : n-1]
	return
}

func NewPriorityQueue() (pq *PriorityQueue) {
	pq = &PriorityQueue{m: make(map[int]int)}
	heap.Init(pq)
	return
}

func (pq *PriorityQueue) Put(v int, d float64) {
	if i, ok := pq.m[v]; ok {
		pq.h[i].d = d
		heap.Fix(pq, i)
	} else {
		heap.Push(pq, VertexDistance{v, d})
	}
}

func (pq *PriorityQueue) Has(v int) (ok bool) {
	_, ok = pq.m[v]
	return
}

func (pq *PriorityQueue) Relax(v int, d float64) {
	if i, ok := pq.m[v]; ok {
		if d < pq.h[i].d {
			pq.h[i].d = d
			heap.Fix(pq, i)
		}
	}
}

func minCostConnectPointsDijkstra(vs [][]int) (r int) {
	pq := NewPriorityQueue()
	pq.Put(0, 0)
	for i := 1; i < len(vs); i++ {
		pq.Put(i, math.Inf(+1))
	}
	distance := func(u, v int) float64 {
		return math.Abs(float64(vs[u][0])-float64(vs[v][0])) + math.Abs(float64(vs[u][1])-float64(vs[v][1]))
	}
	r = 0
	for pq.Len() > 0 {
		ud := heap.Pop(pq).(VertexDistance)
		r += int(ud.d)
		for v := 0; v < len(vs); v++ {
			if pq.Has(v) {
				d := distance(v, ud.v)
				pq.Relax(v, d)
			}
		}
	}
	return
}
