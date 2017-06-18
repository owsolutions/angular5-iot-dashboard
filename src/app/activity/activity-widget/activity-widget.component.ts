import { Component, OnInit } from '@angular/core';
import { times, sample } from 'lodash';

@Component({
  selector: 'app-activity-widget',
  templateUrl: './activity-widget.component.html',
  styleUrls: ['./activity-widget.component.scss']
})
export class ActivityWidgetComponent implements OnInit {

  public activities: Array<any>;
  constructor() { }

  mockActivity (): Array<any> {

    function mockDescription () {
      const descriptions = [
        'User 1 Changed Lamp 3 to ON',
        'Bathroom temperature changed to 55.3F'
      ];
      return sample(descriptions);

    }


    let activities = times(55, (index) => {
      return {
        key: index,
        description: mockDescription()

      };
    });
    activities = activities.reverse();
    return activities;
  }
  ngOnInit() {
    this.activities = this.mockActivity();
  }

}
