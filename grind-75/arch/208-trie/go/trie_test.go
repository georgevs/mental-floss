package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

type Node struct {
	val bool
	ns  [26]*Node
}
type Trie struct {
	root Node
}

func Constructor() Trie {
	return Trie{}
}

func (x *Trie) Insert(s string) {
	var iter func(string, *Node)
	iter = func(s string, r *Node) {
		if len(s) == 0 {
			r.val = true
		} else {
			i := s[0] - 'a'
			rn := r.ns[i]
			if rn == nil {
				rn = &Node{}
				r.ns[i] = rn
			}
			iter(s[1:], rn)
		}
	}
	if len(s) > 0 {
		iter(s, &x.root)
	}
}

func (x *Trie) SearchNode(s string) *Node {
	var iter func(string, *Node) *Node
	iter = func(s string, r *Node) *Node {
		if len(s) == 0 {
			return r
		}
		i := s[0] - 'a'
		nr := r.ns[i]
		if nr == nil {
			return nil
		}
		return iter(s[1:], nr)
	}
	return iter(s, &x.root)
}

func (x *Trie) Search(s string) bool {
	r := x.SearchNode(s)
	return r != nil && r.val
}

func (x *Trie) StartsWith(s string) bool {
	return x.SearchNode(s) != nil
}

func TestTrie(t *testing.T) {
	x := Constructor()
	x.Insert("apple")
	assert.True(t, x.Search("apple"))
	assert.False(t, x.Search("app"))
	assert.True(t, x.StartsWith("app"))
	x.Insert("app")
	assert.True(t, x.Search("app"))
	x.Insert("zoo")
}
