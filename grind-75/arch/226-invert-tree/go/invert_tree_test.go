package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func invertTree(x *TreeNode) *TreeNode {
	iter := func(xs []*TreeNode) (ys []*TreeNode) {
		for _, x := range xs {
			if x != nil {
				x.Left, x.Right = x.Right, x.Left
				ys = append(ys, x.Left, x.Right)
			}
		}
		return
	}
	xs := []*TreeNode{x}
	for len(xs) > 0 {
		xs = iter(xs)
	}
	return x
}
