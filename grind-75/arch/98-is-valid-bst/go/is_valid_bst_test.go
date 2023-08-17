package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isValidBST(r *TreeNode) bool {
	var visit func(r *TreeNode) bool
	var val []int
	visit = func(r *TreeNode) bool {
		if r.Left != nil {
			if !visit(r.Left) {
				return false
			}
		}
		if len(val) > 0 && r.Val <= val[0] {
			return false
		}
		val = []int{r.Val}
		if r.Right != nil {
			if !visit(r.Right) {
				return false
			}
		}
		return true
	}
	return visit(r)
}

func TestIsValidBST(t *testing.T) {
	assert.True(t, isValidBST(&TreeNode{2, &TreeNode{1, nil, nil}, &TreeNode{3, nil, nil}}))
}
