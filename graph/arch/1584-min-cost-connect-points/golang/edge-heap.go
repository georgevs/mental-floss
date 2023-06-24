package main

type EdgeHeap []Edge

func (h EdgeHeap) Len() int           { return len(h) }
func (h EdgeHeap) Less(i, j int) bool { return h[i].w < h[j].w }
func (h EdgeHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *EdgeHeap) Push(x any) {
	*h = append(*h, x.(Edge))
}

func (h *EdgeHeap) Pop() (x any) {
	n := len(*h)
	x = (*h)[n-1]
	*h = (*h)[0 : n-1]
	return
}
