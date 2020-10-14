// test
package main

import (
	"fmt"
)

var x [][]int

func main() {

	fmt.Println("Hello World!")

	y := [][]string{{"2", "3", "4", "5"}, {"1", "1", "1", "1"}}
	z := [][]int{{2, 2, 2, 2}, {3, 3, 3, 3, 3, 3}}
	for i := 0; i < 2; i++ {
		y[i] = make([]string, 10)
		z[i] = make([]int, 10)
	}

	fmt.Println(y, z)
	fmt.Println(len(y[0]))
	//	for i := 0; i < 2; i++ {
	//		copy(x[i], z[i])
	//	}

	//	fmt.Println(x)
}
