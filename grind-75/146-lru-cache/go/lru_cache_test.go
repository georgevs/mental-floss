package main

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
)

type LRUCache struct {
	capacity int
	root     *node
	xs       map[int]*node
}

func Constructor(capacity int) (self *LRUCache) {
	if capacity <= 0 {
		panic(fmt.Errorf("invalid capacity"))
	}
	self = &LRUCache{capacity: capacity, root: newNode(0, 0), xs: map[int]*node{}}
	return
}

func (self *LRUCache) Get(key int) (val int) {
	if x, ok := self.xs[key]; !ok {
		val = -1
	} else {
		x.remove()
		self.root.append(x)
		val = x.val
	}
	return
}

func (self *LRUCache) Put(key, val int) {
	x, ok := self.xs[key]
	if !ok {
		x = newNode(key, val)
		self.xs[key] = x
		if self.capacity > 0 {
			self.capacity--
		} else {
			y := self.root.prev
			y.remove()
			delete(self.xs, y.key)
		}
	} else {
		x.val = val
		x.remove()
	}
	self.root.append(x)
}

func (self *LRUCache) Iter() <-chan [2]int {
	it := make(chan [2]int)
	go func() {
		x := self.root
		for x = x.next; x != self.root; x = x.next {
			it <- [2]int{x.key, x.val}
		}
		close(it)
	}()
	return it
}

func (self *LRUCache) Items() (rs [][2]int) {
	rs = [][2]int{}
	for x := range self.Iter() {
		rs = append(rs, x)
	}
	return
}

type node struct {
	key, val   int
	prev, next *node
}

func newNode(key, val int) (self *node) {
	self = &node{key: key, val: val}
	self.prev = self
	self.next = self
	return
}

func (self *node) append(other *node) {
	if self == other {
		panic(fmt.Errorf("can't append itself"))
	}
	if self.next == self {
		other.prev = self
		other.next = self
		self.prev = other
		self.next = other
		return
	}
	next := self.next
	other.prev = self
	other.next = next
	self.next = other
	next.prev = other
}

func (self *node) remove() {
	if self.next == self {
		return
	}
	prev, next := self.prev, self.next
	self.prev = self
	self.next = self
	prev.next = next
	next.prev = prev
}

func (self *node) iter() <-chan *node {
	it := make(chan *node)
	go func() {
		x := self
		it <- x
		for x = x.next; x != self; x = x.next {
			it <- x
		}
		close(it)
	}()
	return it
}

func (self *node) String() string {
	return fmt.Sprintf("(%v,%v)", self.key, self.val)
}

func (self *node) values() (rs []int) {
	rs = []int{}
	for x := range self.iter() {
		rs = append(rs, x.val)
	}
	return
}

func TestLRUCache(t *testing.T) {
	lru := Constructor(2)
	assert.Equal(t, -1, lru.Get(1))
	assert.Equal(t, [][2]int{}, lru.Items())

	lru.Put(1, 10)
	assert.Equal(t, [][2]int{{1, 10}}, lru.Items())
	assert.Equal(t, 10, lru.Get(1))
	assert.Equal(t, -1, lru.Get(2))

	lru.Put(2, 20)
	assert.Equal(t, [][2]int{{2, 20}, {1, 10}}, lru.Items())
	assert.Equal(t, 20, lru.Get(2))
	assert.Equal(t, -1, lru.Get(3))

	lru.Put(3, 30)
	assert.Equal(t, [][2]int{{3, 30}, {2, 20}}, lru.Items())
	assert.Equal(t, 30, lru.Get(3))

	lru.Get(2) // update lru
	assert.Equal(t, [][2]int{{2, 20}, {3, 30}}, lru.Items())

	lru.Put(3, 300) // update lru
	assert.Equal(t, [][2]int{{3, 300}, {2, 20}}, lru.Items())
	assert.Equal(t, 300, lru.Get(3))
}

func TestNode(t *testing.T) {
	x1 := newNode(1, 10)
	assert.Equal(t, x1, x1.next)
	assert.Equal(t, x1, x1.prev)
	assert.Equal(t, []int{10}, x1.values())

	x2 := newNode(2, 20)
	x1.append(x2)
	assert.Equal(t, x1, x2.next)
	assert.Equal(t, x1, x2.prev)
	assert.Equal(t, x2, x1.next)
	assert.Equal(t, x2, x1.prev)
	assert.Equal(t, []int{10, 20}, x1.values())
	assert.Equal(t, []int{20, 10}, x2.values())

	x3 := newNode(3, 30)
	x1.append(x3)
	assert.Equal(t, x2, x3.next)
	assert.Equal(t, x1, x3.prev)
	assert.Equal(t, x3, x1.next)
	assert.Equal(t, x3, x2.prev)
	assert.Equal(t, []int{10, 30, 20}, x1.values())
	assert.Equal(t, []int{20, 10, 30}, x2.values())
	assert.Equal(t, []int{30, 20, 10}, x3.values())

	x4 := newNode(4, 40)
	x1.append(x4)
	assert.Equal(t, []int{10, 40, 30, 20}, x1.values())

	x2.remove()
	assert.Equal(t, []int{10, 40, 30}, x1.values())
	x4.remove()
	assert.Equal(t, []int{10, 30}, x1.values())
	x3.remove()
	assert.Equal(t, []int{10}, x1.values())
}
