import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-widgets',
  templateUrl: './switch-widgets.component.html',
  styleUrls: ['./switch-widgets.component.scss']
})
export class SwitchWidgetsComponent implements OnInit {

  public Widgets: Array<any>;
  constructor() { 

    this.Widgets = [
      {} ,
      {},
      {},
      {},
      {}
    ]


  }

  ngOnInit() {

  }

}
