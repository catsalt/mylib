package main

import (
	"log"
	"net/http"
	"zwds"
)

func main() {
	mux := http.NewServeMux()
	fs := http.FileServer(http.Dir("FrontEnd/dist/FrontEnd"))
	mux.Handle("/", fs)
	mux.HandleFunc("/api/heroInfo", zwds.GetHandler)
	mux.HandleFunc("/api/heroInfo/prev", zwds.GetUpHandler)
	mux.HandleFunc("/api/heroInfo/next", zwds.GetDownHandler)
	mux.HandleFunc("/api/heroInfo/zhuX", zwds.ZhuXHandler)
	mux.HandleFunc("/api/liuNianInfo/liuX", zwds.LiuXHandler)
	server := &http.Server{
		Addr:    ":9000",
		Handler: mux,
	}

	log.Fatal(server.ListenAndServe())
}
