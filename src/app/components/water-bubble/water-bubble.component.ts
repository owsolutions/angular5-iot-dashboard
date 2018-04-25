import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-water-bubble',
  templateUrl: './water-bubble.component.html',
  styleUrls: ['./water-bubble.component.scss']
})
export class WaterBubbleComponent implements OnInit {

  public _val = 50;
  @Input('value') public set value (val) {
    this._val = val;
  }
  constructor() { }

  ngOnInit() {
  }


}
