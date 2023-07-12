package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func isValid(xs string) bool {
	d := map[rune]rune{
		'[': ']',
		'(': ')',
		'{': '}',
	}
	var s []rune
	for _, x := range xs {
		if y, ok := d[x]; ok {
			s = append(s, y)
		} else if len(s) != 0 {
			y := s[len(s)-1]
			if y != x {
				return false
			}
			s = s[:len(s)-1]
		} else {
			return false
		}
	}
	return len(s) == 0
}

func TestIsValid(t *testing.T) {
	assert.Equal(t, true, isValid("()"))
	assert.Equal(t, true, isValid("()[]{}"))
	assert.Equal(t, false, isValid("(]"))
	assert.Equal(t, true, isValid("({}[()])"))
	assert.Equal(t, false, isValid("({}[()]"))
	assert.Equal(t, false, isValid("["))
	assert.Equal(t, false, isValid("]"))
}
