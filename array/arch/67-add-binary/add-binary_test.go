package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func addBinary(xs, ys string) string {
	digit := func(ch byte) int { return int(ch - '0') }
	alpha := func(d int) byte { return byte(d + '0') }
	add := func(xs, ys string, b int) string {
		zs := []byte(xs)
		n, l := len(xs), len(ys)
		c := 0
		for i := 0; i < l; i++ {
			x := digit(zs[n-i-1]) + digit(ys[l-i-1]) + c
			zs[n-i-1] = alpha(x % b)
			c = x / b
		}
		for i := l; c > 0 && i < n; i++ {
			x := digit(zs[n-i-1]) + c
			zs[n-i-1] = alpha(x % b)
			c = x / b
		}
		if c > 0 {
			zs = append(append(make([]byte, 0, len(zs)+1), alpha(c)), zs...)
		}
		return string(zs)
	}
	if len(xs) < len(ys) {
		xs, ys = ys, xs
	}
	return add(xs, ys, 2)
}

func TestAddBinary(t *testing.T) {
	assert.Equal(t, "100", addBinary("11", "1"))
	assert.Equal(t, "100", addBinary("1", "11"))
	assert.Equal(t, "10101", addBinary("1010", "1011"))
	assert.Equal(t, "110110", addBinary("100", "110010"))
}
