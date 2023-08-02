package main

import (
	"github.com/stretchr/testify/assert"
	"strconv"
	"testing"
)

func evalRPN(xs []string) int {
	s := []int{}
	ops := map[byte]func(int, int) int{
		'+': func(a, b int) int { return a + b },
		'-': func(a, b int) int { return a - b },
		'*': func(a, b int) int { return a * b },
		'/': func(a, b int) int { return a / b },
	}
	for _, x := range xs {
		if op, ok := ops[x[0]]; len(x) == 1 && ok {
			n := len(s)
			a, b := s[n-2], s[n-1]
			s = s[:n-2]
			y := op(a, b)
			s = append(s, y)
		} else if y, e := strconv.Atoi(x); e == nil {
			s = append(s, y)
		}
	}
	return s[0]
}

func TestEvalERP(t *testing.T) {
	assert.Equal(t, 9, evalRPN([]string{"2", "1", "+", "3", "*"}))
	assert.Equal(t, 6, evalRPN([]string{"4", "13", "5", "/", "+"}))
	assert.Equal(t, 22, evalRPN(
		[]string{"10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"}))
}
