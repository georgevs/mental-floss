package main

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
	"golang.org/x/exp/slices"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func (p TreeNode) Iter() <-chan *TreeNode {
	ch := make(chan *TreeNode)
	go func() {
		qs := []*TreeNode{&p}
		rs := []*TreeNode{}
		for len(qs) > 0 {
			x := qs[0]
			qs = qs[1:]
			rs = append(rs, x)
			if x != nil {
				for _, y := range rs {
					ch <- y
				}
				rs = []*TreeNode{}
				qs = append(qs, x.Left, x.Right)
			}
		}
		close(ch)
	}()
	return ch
}

func (p *TreeNode) String() string {
	if p == nil {
		return "nil"
	}
	return fmt.Sprintf("%v", p.Val)
}

func buildTree(xs []int, ys []int) (p *TreeNode) {
	return buildTree_(&xs, ys)
}

func buildTree_(xs *[]int, ys []int) (p *TreeNode) {
	// fmt.Println(xs, ys)
	val := (*xs)[0]
	*xs = (*xs)[1:]
	p = &TreeNode{Val: val}
	i := slices.Index(ys, val)
	if 0 < i {
		p.Left = buildTree_(xs, ys[0:i])
	}
	if i+1 < len(ys) {
		p.Right = buildTree_(xs, ys[i+1:])
	}
	return p
}

func TestBuildNode(t *testing.T) {
	root := &TreeNode{Val: 3,
		Left: &TreeNode{Val: 9},
		Right: &TreeNode{Val: 20,
			Left:  &TreeNode{Val: 15},
			Right: &TreeNode{Val: 7}}}

	toStringArray := func(root *TreeNode) (rs []string) {
		for p := range root.Iter() {
			rs = append(rs, p.String())
		}
		return
	}

	assert.Equal(t, []string{"3", "9", "20", "nil", "nil", "15", "7"}, toStringArray(root))
	assert.Equal(t, []string{"3", "9", "20", "nil", "nil", "15", "7"}, toStringArray(buildTree([]int{3, 9, 20, 15, 7}, []int{9, 3, 15, 20, 7})))
	assert.Equal(t, []string{"-1"}, toStringArray(buildTree([]int{-1}, []int{-1})))
}
