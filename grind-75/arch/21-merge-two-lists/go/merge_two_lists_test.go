package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func minxy(x *ListNode, y *ListNode) (z *ListNode) {
	if x != nil && y != nil {
		if x.Val <= y.Val {
			z = x
		} else {
			z = y
		}
	} else if x != nil {
		z = x
	} else if y != nil {
		z = y
	}
	return
}

func mergeTwoLists(x *ListNode, y *ListNode) (z *ListNode) {
	z = minxy(x, y)
	if z != nil {
		if z == x {
			x = x.Next
		}
		if z == y {
			y = y.Next
		}
		z.Next = mergeTwoLists(x, y)
	}
	return
}

func to_list(x *ListNode) (xs []int) {
	xs = []int{}
	for x != nil {
		xs = append(xs, x.Val)
		x = x.Next
	}
	return
}

func from_list(xs []int) *ListNode {
	if len(xs) == 0 {
		return nil
	}
	return &ListNode{Val: xs[0], Next: from_list(xs[1:])}
}

func TestUtils(t *testing.T) {
	assert.Nil(t, from_list([]int{}))
	assert.Equal(t, []int{}, to_list(nil))
	assert.Equal(t, []int{}, to_list(from_list([]int{})))
	assert.Equal(t, []int{1, 2, 3, 4}, to_list(from_list([]int{1, 2, 3, 4})))
}

func TestMergeTwoLists(t *testing.T) {
	mergeTwoLists_ := func(xs, ys []int) []int {
		return to_list(mergeTwoLists(from_list(xs), from_list(ys)))
	}
	assert.Equal(t, []int{1, 1, 2, 3, 4, 4}, mergeTwoLists_([]int{1, 2, 4}, []int{1, 3, 4}))
	assert.Equal(t, []int{}, mergeTwoLists_([]int{}, []int{}))
	assert.Equal(t, []int{0}, mergeTwoLists_([]int{}, []int{0}))
}
