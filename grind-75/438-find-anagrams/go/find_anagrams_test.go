package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func findAnagrams(xs string, ys string) (rs []int) {
	if len(xs) < len(ys) {
		return
	}
	dy := [26]int{}
	for _, y := range ys {
		dy[y-'a'] += 1
	}
	k, dx := len(ys), [26]int{}
	for _, x := range xs[:k] {
		dx[x-'a'] += 1
	}
	for n, i := len(xs), 0; i+k <= n; i++ {
		if dx == dy {
			rs = append(rs, i)
		}
		if i+k < n {
			dx[xs[i]-'a']--
			dx[xs[i+k]-'a']++
		}
	}
	return rs
}

func TestFindAnagrams(t *testing.T) {
	assert.Equal(t, []int{0, 6}, findAnagrams("cbaebabacd", "abc"))
	assert.Equal(t, []int{0, 1, 2}, findAnagrams("abab", "ab"))
}
