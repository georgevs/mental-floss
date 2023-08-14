package main

type MinStack struct {
	xs []int
	ms []int
}

func Constructor() MinStack {
	return MinStack{}
}

func min(xs []int, val int) int {
	n := len(xs)
	if n == 0 || val < xs[n-1] {
		return val
	}
	return xs[n-1]
}

func (this *MinStack) Push(val int) {
	this.xs = append(this.xs, val)
	this.ms = append(this.ms, min(this.ms, val))
}

func (this *MinStack) Pop() {
	n := len(this.xs)
	this.xs = this.xs[0 : n-1]
	this.ms = this.ms[0 : n-1]
}

func (this *MinStack) Top() int {
	n := len(this.xs)
	return this.xs[n-1]
}

func (this *MinStack) GetMin() int {
	n := len(this.xs)
	return this.ms[n-1]
}
