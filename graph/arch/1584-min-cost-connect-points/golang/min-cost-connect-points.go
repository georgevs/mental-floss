package main

type point []int

func makePoint(x, y int) point {
	return []int{x, y}
}

func (p1 point) distance(p2 point) int {
	var d int
	if p1[0] < p2[0] {
		d = p2[0] - p1[0]
	} else {
		d = p1[0] - p2[0]
	}
	if p1[1] < p2[1] {
		d = d + p2[1] - p1[1]
	} else {
		d = d + p1[1] - p2[1]
	}
	return d
}

func edges(vs [][]int) (xs []Edge) {
	n := len(vs)
	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			w := point(vs[i]).distance(point(vs[j]))
			xs = append(xs, Edge{u: i, v: j, w: w})
		}
	}
	return
}
