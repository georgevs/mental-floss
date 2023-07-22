package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func lengthOfLongestSubstring(xs string) (k int) {
	n := len(xs)
	var i, j int
	ds := map[byte]int{}
	for j < n {
		if l, ok := ds[xs[j]]; ok && i <= l {
			i = l + 1
		}
		ds[xs[j]] = j
		j++
		if k < j-i {
			k = j - i
		}
	}
	return
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func TestLengthOfLongestSubstring(t *testing.T) {
	assert.Equal(t, 3, lengthOfLongestSubstring("abcabcbb"))
	assert.Equal(t, 1, lengthOfLongestSubstring("bbbbb"))
	assert.Equal(t, 3, lengthOfLongestSubstring("pwwkew"))
	assert.Equal(t, 2, lengthOfLongestSubstring("abba"))
}
