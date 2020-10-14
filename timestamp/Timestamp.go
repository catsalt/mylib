package main

import (
	"time"

	"github.com/catsal/mylib/clipboard"
)

func main() {
	// t := "---\r\nauthor: catsaltQin\r\nweight: 10\r\ndate: " +
	// 	time.Now().Format("Monday 20060102 15:04:05 -0700") +
	// 	"\r\ntitle: \r\n---\r\n"

	t := time.Now().Format("Monday 20060102 15:04:05 -0700")
	c := clipboard.CaCopy(t)
	clipboard.CcFree(c)
}

// go build -ldflags "-s -w" timestamp.go
