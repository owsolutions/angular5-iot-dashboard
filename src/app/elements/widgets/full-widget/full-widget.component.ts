import { Component, OnInit } from '@angular/core';
import { random } from 'lodash';

@Component({
  /* tslint:disable-next-line */
  selector: '[app-full-widget]',
  templateUrl: './full-widget.component.html',
  styleUrls: ['./full-widget.component.scss']
})
export class FullWidgetComponent implements OnInit {
  public thermometerValue: any;
  constructor() { }

  ngOnInit() {
    this.thermometerValue = random(0,4);
  }

}
