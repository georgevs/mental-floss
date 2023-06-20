package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestPoint(t *testing.T) {
	assert.Equal(t, 10, makePoint(0, 0).distance(makePoint(0, 10)))
	assert.Equal(t, 10, makePoint(0, 10).distance(makePoint(0, 0)))
	assert.Equal(t, 10, makePoint(0, 0).distance(makePoint(10, 0)))
	assert.Equal(t, 10, makePoint(10, 0).distance(makePoint(0, 0)))
	assert.Equal(t, 11, makePoint(10, 1).distance(makePoint(20, 2)))
}

func TestKruskal(t *testing.T) {
	assert.Equal(t, []Edge{{0, 1, 10}}, kruskal(2, []Edge{{0, 1, 10}}))
	assert.Equal(t, []Edge{{0, 1, 1}, {0, 2, 2}, {1, 3, 10}}, kruskal(4, []Edge{{0, 1, 1}, {0, 2, 2}, {1, 3, 10}, {2, 3, 20}}))
}

func TestPrim(t *testing.T) {
	assert.Equal(t, []Edge{{0, 1, 10}}, prim(NewGraph(2, []Edge{{0, 1, 10}})))
	// assert.Equal(t, []Edge{{0, 1, 1}, {0, 2, 2}, {1, 3, 10}}, prim(NewGraph(4, []Edge{{0, 1, 1}, {0, 2, 2}, {1, 3, 10}, {2, 3, 20}})))
}

func TestMinCostConenctPointsKruskal(t *testing.T) {
	testMinCostConnectPoints(t, minCostConnectPointsKruskal)
}

func TestMinCostConenctPointsPrim(t *testing.T) {
	// testMinCostConnectPoints(t, minCostConnectPointsPrim)
}

func testMinCostConnectPoints(t *testing.T, minCostConnectPoints func([][]int) int) {
	assert.Equal(t, 20, minCostConnectPoints([][]int{{0, 0}, {2, 2}, {3, 10}, {5, 2}, {7, 0}}))
	assert.Equal(t, 18, minCostConnectPoints([][]int{{3, 12}, {-2, 5}, {-4, 1}}))
}

func TestUnionFind(t *testing.T) {
	u := NewUnionFind(6)
	assert.True(t, u.Connect(0, 1))
	assert.True(t, u.Connect(2, 3))
	assert.True(t, u.Connect(3, 4))
	assert.False(t, u.Connect(2, 4))
	assert.Equal(t, u.Find(0), u.Find(1))
	assert.Equal(t, u.Find(2), u.Find(3))
	assert.Equal(t, u.Find(3), u.Find(4))
	assert.NotEqual(t, u.Find(0), u.Find(5))
	assert.NotEqual(t, u.Find(2), u.Find(5))
}

func TestBitSet(t *testing.T) {
	assert.Equal(t, 10, NewBitSet(10).Size())
	assert.Equal(t, 0, NewBitSet(0).Capacity())
	assert.Equal(t, 64, NewBitSet(63).Capacity())
	assert.Equal(t, 64, NewBitSet(64).Capacity())
	assert.Equal(t, 2*64, NewBitSet(65).Capacity())

	s := NewBitSet(10)
	s.Add(5)
	assert.True(t, s.Has(5))
	s.Remove(5)
	assert.False(t, s.Has(5))
}

func TestGraph(t *testing.T) {
	g := NewGraph(4, []Edge{
		{0, 1, 1}, {0, 2, 2},
		{1, 3, 10},
		{2, 3, 20},
	})
	assert.Equal(t, 4, len(g))
	assert.Equal(t, 2, len(g[0]))
	assert.Equal(t, 2, len(g[1]))
	assert.Equal(t, 2, len(g[2]))
	assert.Equal(t, 2, len(g[3]))
}
