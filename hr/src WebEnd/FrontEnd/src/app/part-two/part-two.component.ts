import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-part-two',
  templateUrl: './part-two.component.html',
  styleUrls: ['./part-two.component.css']
})

export class PartTwoComponent implements OnInit {
  @Input() zhuX: string[];
  @Input() liuX: string[];
  constructor() { }
  ngOnInit() { }
}
