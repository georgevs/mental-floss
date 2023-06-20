package main

type UnionFind struct {
	rs []int
	hs []int
}

func NewUnionFind(n int) *UnionFind {
	rs := make([]int, n)
	hs := make([]int, n)
	for i := 0; i < n; i++ {
		rs[i] = i
		hs[i] = 1
	}
	return &UnionFind{rs: rs, hs: hs}
}

func (u *UnionFind) Find(i int) int {
	for i != u.rs[i] {
		i = u.rs[i]
	}
	return i
}

func (u *UnionFind) Connect(i, j int) bool {
	ri, rj := u.Find(i), u.Find(j)
	if ri == rj {
		return false
	}
	if u.hs[ri] < u.hs[rj] {
		u.rs[ri] = rj
	} else if u.hs[rj] < u.hs[ri] {
		u.rs[rj] = ri
	} else {
		u.rs[ri] = rj
		u.hs[rj]++
	}
	return true
}
