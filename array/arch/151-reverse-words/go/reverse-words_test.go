package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func reverseWords(s string) string {
	xs := split(s)
	reverse(xs)
	return join(xs)
}

func split(s string) (xs []string) {
	n := len(s)
	i := 0
	for i < n {
		var b int
		for b = i; b < n && s[b] == ' '; b++ {
		}
		var e int
		for e = b; e < n && s[e] != ' '; e++ {
		}
		if b < e {
			xs = append(xs, s[b:e])
		}
		i = e
	}
	return
}
func reverse(xs []string) []string {
	n := len(xs)
	for i, j := 0, n-1; i < j; i, j = i+1, j-1 {
		xs[i], xs[j] = xs[j], xs[i]
	}
	return xs
}
func join(xs []string) (s string) {
	n := len(xs)
	if n > 0 {
		for i := 0; i < n-1; i++ {
			s += xs[i] + " "
		}
		s += xs[n-1]
	}
	return
}

func TestReverseWords(t *testing.T) {
	assert.Equal(t, "abc def", reverseWords("  def  abc  "))
	assert.Equal(t, "blue is sky the", reverseWords("the sky is blue"))
	assert.Equal(t, "world hello", reverseWords("  hello world  "))
	assert.Equal(t, "example good a", reverseWords("a good   example"))
}
