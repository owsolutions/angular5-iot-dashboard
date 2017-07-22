import { Component, OnInit, Input } from '@angular/core';
import { times, random } from 'lodash';
import { IWidget } from '../Definitions';

@Component({
  selector: 'app-switch-widgets',
  templateUrl: './switch-widgets.component.html',
  styleUrls: ['./switch-widgets.component.scss' , '../checkbox-switch.scss']
})
export class SwitchWidgetsComponent implements OnInit {
  @Input() public widget: IWidget;
  constructor() {
  }
  ngOnInit() {

  }
}
