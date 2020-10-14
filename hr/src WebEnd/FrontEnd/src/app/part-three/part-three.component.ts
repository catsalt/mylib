import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-part-three',
  templateUrl: './part-three.component.html',
  styleUrls: ['./part-three.component.css']
})

export class PartThreeComponent implements OnInit {
  @Input() zhuX: string[];
  @Input() liuX: string[];
  constructor() { }
  ngOnInit() { }
}
