package main

import (
	"sort"
	"testing"

	"github.com/stretchr/testify/assert"
)

func twoSum(xs []int, k int) (ys [][]int) {
	n := len(xs)
	i := 0
	vs := map[int]int{}
	for i < n {
		x := xs[i]
		y, ok := vs[k-x]
		vs[x] = x
		i++
		if ok {
			ys = append(ys, []int{y, x})
			for ; i < n && xs[i] == x; i++ {
			}
		}
	}
	return
}

func threeSumHashset(xs []int) (ys [][]int) {
	ys = [][]int{}
	sort.Ints(xs)
	n := len(xs)
	i := 0
	for i < n-2 {
		xi := xs[i]
		zs := twoSum(xs[i+1:], -xi)
		i++
		for _, z := range zs {
			xj, xk := z[0], z[1]
			ys = append(ys, []int{xi, xj, xk})
		}
		if len(xs) > 0 {
			for ; i < n && xs[i] == xi; i++ {
			}
		}
	}
	return
}

func threeSumTwoPointers(xs []int) (ys [][]int) {
	ys = [][]int{}
	sort.Ints(xs)
	n := len(xs)
	i := 0
	for i < n-2 {
		j, k := i+1, n-1
		for j < k {
			r := xs[i] + xs[j] + xs[k]
			if r > 0 {
				k--
			} else if r < 0 {
				j++
			} else {
				ys = append(ys, []int{xs[i], xs[j], xs[k]})
				j++
				for j < k && xs[j-1] == xs[j] {
					j++
				}
			}
		}
		i++
		for i < n-2 && xs[i-1] == xs[i] {
			i++
		}
	}
	return
}

func lessSlice(lhs, rhs []int) bool {
	if len(lhs) == 0 {
		return false
	}
	return lhs[0] < rhs[0] ||
		(lhs[0] == rhs[0] && lessSlice(lhs[1:], rhs[1:]))
}

func TestTwoSum(t *testing.T) {
	twoSum_ := func(xs []int, k int) (ys [][]int) {
		ys = twoSum(xs, k)
		sort.Slice(ys, func(i, j int) bool {
			return lessSlice(ys[i], ys[j])
		})
		return
	}
	assert.Equal(t, [][]int{{-1, 2}, {0, 1}}, twoSum_([]int{-1, 0, 1, 2}, 1))
	assert.Equal(t, [][]int{{-1, 2}, {0, 1}}, twoSum_([]int{-1, 0, 1, 1, 1, 2}, 1))
	assert.Equal(t, [][]int{{0, 0}}, twoSum_([]int{0, 0}, 0))
}

func TestThreeSumHashset(t *testing.T) {
	testThreeSum(t, threeSumHashset)
}

func TestThreeSumTwoPointers(t *testing.T) {
	testThreeSum(t, threeSumTwoPointers)
}

func testThreeSum(t *testing.T, threeSum func(xs []int) [][]int) {
	threeSum_ := func(xs []int) (ys [][]int) {
		ys = threeSum(xs)
		sort.Slice(ys, func(i, j int) bool {
			return lessSlice(ys[i], ys[j])
		})
		return
	}
	assert.Equal(t, [][]int{{-1, -1, 2}, {-1, 0, 1}},
		threeSum_([]int{-1, 0, 1, 2, -1, -4}))
	assert.Equal(t, [][]int{}, threeSum_([]int{0, 1, 1}))
	assert.Equal(t, [][]int{{0, 0, 0}}, threeSum_([]int{0, 0, 0}))
}
