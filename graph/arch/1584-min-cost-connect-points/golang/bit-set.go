package main

import "fmt"

type BitSet struct {
	n  int
	xs []uint64
}

func NewBitSet(n int) *BitSet {
	xs := make([]uint64, (n+63)/64)
	return &BitSet{n: n, xs: xs}
}

func (s *BitSet) Size() int     { return s.n }
func (s *BitSet) Capacity() int { return len(s.xs) * 64 }

func (s *BitSet) Add(i int) {
	s.xs[i/64] = s.xs[i/64] | (1 << (i % 64))
}

func (s *BitSet) Remove(i int) {
	s.xs[i/64] = s.xs[i/64] & ^(1 << (i % 64))
}

func (s *BitSet) Has(i int) bool {
	return s.xs[i/64]&(1<<(i%64)) != 0
}

func (s *BitSet) String() string {
	return fmt.Sprintf("BitSet{%d %v}", s.n, s.xs)
}
