package main

import (
	"sort"
	"testing"

	"github.com/stretchr/testify/assert"
)

func isAnagramFrequency(u, v string) bool {
	xs := []rune(u)
	d := map[rune]int{}
	for _, x := range xs {
		d[x]++
	}
	xs = []rune(v)
	for _, x := range xs {
		n, ok := d[x]
		if !ok {
			return false
		}
		d[x] = n - 1
		if d[x] == 0 {
			delete(d, x)
		}
	}
	return len(d) == 0
}

func isAnagramSorted(u, v string) bool {
	return sorted(u) == sorted(v)
}

func sorted(u string) string {
	xs := []rune(u)
	sort.Slice(xs, func(i, j int) bool { return xs[i] < xs[j] })
	return string(xs)
}

func TestIsAnagramSorted(t *testing.T) {
	testIsAnagram(t, isAnagramSorted)
}

func TestIsAnagramFrequency(t *testing.T) {
	testIsAnagram(t, isAnagramFrequency)
}

func testIsAnagram(t *testing.T, isAnagram func(u, v string) bool) {
	assert.True(t, isAnagram("anagram", "nagaram"))
	assert.False(t, isAnagram("rat", "car"))
}
