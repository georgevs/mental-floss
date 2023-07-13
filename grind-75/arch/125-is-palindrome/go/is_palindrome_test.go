package main

import (
	"strings"
	"testing"
	"unicode"

	"github.com/stretchr/testify/assert"
)

func isPalindrome(xs string) bool {
	isLetterOrNumber := func(r rune) bool { return unicode.IsLetter(r) || unicode.IsNumber(r) }
	ys := []rune(strings.ToLower(xs))
	n := len(ys)
	for i, j := 0, n-1; i < j; i, j = i+1, j-1 {
		for ; i < j && !isLetterOrNumber(ys[i]); i++ {
		}
		for ; i < j && !isLetterOrNumber(ys[j]); j-- {
		}
		if ys[i] != ys[j] {
			return false
		}
	}
	return true
}

func TestIsPalindrome(t *testing.T) {
	assert.True(t, isPalindrome("A man, a plan, a canal: Panama"))
	assert.False(t, isPalindrome("race a car"))
	assert.True(t, isPalindrome(" "))
}
