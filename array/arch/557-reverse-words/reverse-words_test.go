package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func reverseWords(s string) string {
	xs := []rune(s)
	n := len(xs)
	i := 0
	for {
		for ; i < n && xs[i] == ' '; i++ {
		}
		if i == n {
			break
		}
		b := i
		for ; i < n && xs[i] != ' '; i++ {
		}
		e := i
		for b < e-1 {
			e--
			xs[b], xs[e] = xs[e], xs[b]
			b++
		}
	}
	return string(xs)
}

func TestReverseWords(t *testing.T) {
	assert.Equal(t, "", reverseWords(""))
	assert.Equal(t, "a", reverseWords("a"))
	assert.Equal(t, " a b ", reverseWords(" a b "))
	assert.Equal(t, " cba fed ", reverseWords(" abc def "))
	assert.Equal(t, " cba   fed ", reverseWords(" abc   def "))
	assert.Equal(t, "s'teL ekat edoCteeL tsetnoc", reverseWords("Let's take LeetCode contest"))
	assert.Equal(t, "doG gniD", reverseWords("God Ding"))
}
