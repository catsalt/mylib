import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() outZhuX: string[][];
  @Input() outLiuX: string[][];
  constructor() { }
  ngOnInit() { }
}
