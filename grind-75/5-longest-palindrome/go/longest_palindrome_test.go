package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func longestPalindrome(xs string) string {
	n := len(xs)
	for k := n; 1 <= k; k-- {
		for i := 0; i <= n-k; i++ {
			x := xs[i : i+k]
			if palindrome(x) {
				return x
			}
		}
	}
	return ""
}

func palindrome(xs string) bool {
	i, j := 0, len(xs)-1
	for i < j {
		if xs[i] != xs[j] {
			return false
		}
		i++
		j--
	}
	return true
}

func TestLongestPalindrome(t *testing.T) {
	assert.Equal(t, "bab", longestPalindrome("babad"))
	assert.Equal(t, "bb", longestPalindrome("cbbd"))
}
