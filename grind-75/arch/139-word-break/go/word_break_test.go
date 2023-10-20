package main

import (
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
)

func wordBreak(s string, xs []string) bool {
	n := len(s)
	var dp func(i int) bool
	iter := func(i int) bool {
		if i == n {
			return true
		}
		for _, x := range xs {
			if strings.HasPrefix(s[i:], x) && dp(i+len(x)) {
				return true
			}
		}
		return false
	}
	m := map[int]bool{}
	dp = func(i int) (r bool) {
		r, ok := m[i]
		if !ok {
			r = iter(i)
			m[i] = r
		}
		return
	}

	return dp(0)
}

func TestWordBreak(t *testing.T) {
	assert.True(t, wordBreak("leetcode", []string{"leet", "code"}))
	assert.True(t, wordBreak("applepenapple", []string{"apple", "pen"}))
	assert.False(t, wordBreak("catsandog", []string{"cats", "dog", "sand", "and", "cat"}))
}
