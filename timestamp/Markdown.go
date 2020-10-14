package main

import (
	"time"

	"github.com/catsalt/mylib/clipboard"
)

func main() {
// t := time.Now().Format("Monday 20060102 15:04:05 -0700")

	t := "---\r\nauthor: catsaltQin\r\n  weight: 10\r\n  date: " +
		time.Now().Format("Monday 20060102 15:04:05 -0700") +
		"\r\n  title: \r\n  \r\n---\r\n"
	c := clipboard.CaCopy(t)
	clipboard.CcFree(c)
}

// go build -ldflags "-s -w" markdown.go