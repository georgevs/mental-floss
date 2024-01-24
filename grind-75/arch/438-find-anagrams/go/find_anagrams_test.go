package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func findAnagrams(xs, ys string) (zs []int) {
	n, k := len(xs), len(ys)

	if n < k {
		return
	}

	fy := [26]int{}
	for _, y := range ys {
		fy[y-'a']++
	}

	fx := [26]int{}
	for _, x := range xs[0:k] {
		fx[x-'a']++
	}

	for i := 0; i <= n-k; i++ {
		if fx == fy {
			zs = append(zs, i)
		}
		j := i + k
		if j < n {
			fx[xs[i]-'a']--
			fx[xs[j]-'a']++
		}
	}

	return
}

func TestFindAnagrams(t *testing.T) {
	assert.Equal(t, []int{0, 6}, findAnagrams("cbaebabacd", "abc"))
	assert.Equal(t, []int{0, 1, 2}, findAnagrams("abab", "ab"))
}
