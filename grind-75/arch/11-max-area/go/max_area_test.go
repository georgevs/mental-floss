package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"runtime"
	"testing"

	"github.com/stretchr/testify/assert"
)

func maxArea(xs []int) (r int) {
	r, i, j := 0, 0, len(xs)-1
	for i < j {
		var h int
		if xs[i] < xs[j] {
			h = xs[i]
		} else {
			h = xs[j]
		}
		ri := h * (j - i)
		if r < ri {
			r = ri
		}
		if xs[i] < xs[j] {
			i++
		} else {
			j--
		}
	}
	return
}

func TestMaxArea(t *testing.T) {
	assert.Equal(t, 49, maxArea([]int{1, 8, 6, 2, 5, 4, 8, 3, 7}))
	assert.Equal(t, 1, maxArea([]int{1, 1}))
	assert.Equal(t, 97658256, maxArea(load_json_data("test-10000")))
	assert.Equal(t, 50000000, maxArea(load_json_data("test-20000")))
}

func load_json_data(id string) (xs []int) {
	_, callerFilePath, _, ok := runtime.Caller(0)
	if !ok {
		log.Fatal()
	}
	dataFilePath := filepath.Join(filepath.Dir(callerFilePath), fmt.Sprintf("../%v.json", id))
	data, err := os.ReadFile(dataFilePath)
	if err != nil {
		log.Fatal(err)
	}
	if err = json.Unmarshal(data, &xs); err != nil {
		log.Fatal(err)
	}
	return
}
