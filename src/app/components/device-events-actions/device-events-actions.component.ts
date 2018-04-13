import { Component, OnInit } from '@angular/core';

export interface IEventAction {
  id?: number;
}

@Component({
  selector: 'app-device-events-actions',
  templateUrl: './device-events-actions.component.html',
  styleUrls: ['./device-events-actions.component.scss']
})
export class DeviceEventsActionsComponent implements OnInit {
  public terms: Array<IEventAction> = [
    {

    }
  ];
  constructor() { }

  ngOnInit() {

  }
  public AddAnother () {
    this.terms.push({
    });
  }

}
