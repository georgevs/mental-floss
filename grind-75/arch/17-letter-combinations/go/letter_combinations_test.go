package main

import (
	"sort"
	"testing"

	"github.com/stretchr/testify/assert"
)

func letterCombinations(xs string) (ys []string) {
	if len(xs) == 0 {
		return []string{}
	}
	zs := map[rune]string{
		'2': "abc", '3': "def", '4': "ghi",
		'5': "jkl", '6': "mno", '7': "pqrs",
		'8': "tuv", '9': "wxyz",
	}
	ys = []string{""}
	for _, x := range xs {
		ys2 := []string{}
		for _, z := range zs[x] {
			for _, y := range ys {
				ys2 = append(ys2, y+string(z))
			}
		}
		ys = ys2
	}

	return
}

func TestLettercombinations(t *testing.T) {
	sorted := func(ys []string) []string {
		sort.Strings(ys)
		return ys
	}
	assert.Equal(t, []string{}, sorted(letterCombinations("")))
	assert.Equal(t, []string{"a", "b", "c"}, sorted(letterCombinations("2")))
	assert.Equal(t, []string{"ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"},
		sorted(letterCombinations("23")))
}
