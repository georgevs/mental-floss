package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func strStr(xs string, ys string) int {
	n := len(xs)
	l := len(ys)
	for i := 0; i < n-l+1; i++ {
		j := 0
		for ; j < l && xs[i+j] == ys[j]; j++ {
		}
		if j == l {
			return i
		}
	}
	return -1
}

func TestStrStr(t *testing.T) {
	assert.Equal(t, 0, strStr("abcdefghi", "abc"))
	assert.Equal(t, 3, strStr("abcdefghi", "def"))
	assert.Equal(t, 6, strStr("abcdefghi", "ghi"))
	assert.Equal(t, -1, strStr("abcdefghi", "jkl"))
	assert.Equal(t, -1, strStr("ab", "abc"))
	assert.Equal(t, -1, strStr("", "abc"))
	assert.Equal(t, 0, strStr("abc", ""))
	assert.Equal(t, 4, strStr("mississippi", "issip"))
	assert.Equal(t, -1, strStr("leetcode", "leeto"))
}
