import { Component, OnInit } from '@angular/core';
import { random } from 'lodash';
@Component({
  /* tslint:disable-next-line */
  selector: '[app-large-value-widget]',
  templateUrl: './large-value-widget.component.html',
  styleUrls: ['./large-value-widget.component.scss']
})
export class LargeValueWidgetComponent implements OnInit {

  public value: Number;

  constructor() { }

  ngOnInit() {
    this.value = random(20, 90);
  }

}
