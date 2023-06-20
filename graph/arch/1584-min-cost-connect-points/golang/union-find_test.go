package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestUnionFind(t *testing.T) {
	u := NewUnionFind(6)
	assert.True(t, u.Connect(0, 1))
	assert.True(t, u.Connect(2, 3))
	assert.True(t, u.Connect(3, 4))
	assert.False(t, u.Connect(2, 4))
	assert.Equal(t, u.Find(0), u.Find(1))
	assert.Equal(t, u.Find(2), u.Find(3))
	assert.Equal(t, u.Find(3), u.Find(4))
	assert.NotEqual(t, u.Find(0), u.Find(5))
	assert.NotEqual(t, u.Find(2), u.Find(5))
}
