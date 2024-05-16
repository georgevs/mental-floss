package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}
	for i := 0; ; i++ {
		for _, w := range strs {
			if len(w) <= i || strs[0][i] != w[i] {
				return w[0:i]
			}
		}
	}
}

func TestLongestCommonPrefix(t *testing.T) {
	assert.Equal(t, "fl", longestCommonPrefix([]string{"flower", "flow", "flight"}))
	assert.Equal(t, "", longestCommonPrefix([]string{"dog", "racecar", "car"}))
	assert.Equal(t, "", longestCommonPrefix([]string{}))
	assert.Equal(t, "", longestCommonPrefix([]string{"", "ab"}))
}
