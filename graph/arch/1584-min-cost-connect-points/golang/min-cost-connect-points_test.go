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
	assert.Equal(t, []edge{{0, 1, 10}}, kruskal(2, []edge{{0, 1, 10}}))
	assert.Equal(t, []edge{{0, 1, 1}, {0, 2, 2}, {1, 3, 10}}, kruskal(4, []edge{{0, 1, 1}, {0, 2, 2}, {1, 3, 10}, {2, 3, 20}}))
}

func TestMinCostConenctPoints(t *testing.T) {
	assert.Equal(t, 20, minCostConnectPoints([][]int{{0, 0}, {2, 2}, {3, 10}, {5, 2}, {7, 0}}))
	assert.Equal(t, 18, minCostConnectPoints([][]int{{3, 12}, {-2, 5}, {-4, 1}}))
}
