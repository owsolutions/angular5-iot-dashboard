import { Component, OnInit } from '@angular/core';
import { times, random } from 'lodash';

@Component({
  selector: 'app-switch-widgets',
  templateUrl: './switch-widgets.component.html',
  styleUrls: ['./switch-widgets.component.scss' , '../checkbox-switch.scss']
})
export class SwitchWidgetsComponent implements OnInit {
  public Widgets: Array<any>;
  constructor() {
    this.Widgets = [
      {
        icon: 'icon icon-spin5'
      },
      {
        icon: 'icon icon-cloud'
      },
      {
        icon: 'icon icon-sun'
      },
      {
        icon: 'icon  icon-lightbulb'
      },
    ];
  }
  ngOnInit() {

  }
}
