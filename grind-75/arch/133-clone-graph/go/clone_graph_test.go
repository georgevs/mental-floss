package main

type Node struct {
	Val       int
	Neighbors []*Node
}

func cloneGraph(u *Node) (y *Node) {
	if u == nil {
		return nil
	}
	ds := map[*Node]*Node{}
	copy := func(u *Node) (y *Node) {
		y, ok := ds[u]
		if !ok {
			y = &Node{Val: u.Val}
			ds[u] = y
		}
		return
	}
	bfs := func(u *Node) {
		qs := []*Node{u}
		vs := map[*Node]bool{u: true}
		for len(qs) > 0 {
			var nqs []*Node
			for _, u := range qs {
				y := copy(u)
				for _, v := range u.Neighbors {
					y.Neighbors = append(y.Neighbors, copy(v))
					if !vs[v] {
						vs[v] = true
						nqs = append(nqs, v)
					}
				}
			}
			qs = nqs
		}
	}

	bfs(u)
	return copy(u)
}
