import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { times, sample } from 'lodash';
import { Store } from '@ngrx/store';
import { IActivity, AppState, ActivityTypes } from '../../shared/Definitions';

@Component({
  selector: 'app-activity-widget',
  templateUrl: './activity-widget.component.html',
  styleUrls: ['./activity-widget.component.scss']
})
export class ActivityWidgetComponent implements OnInit, OnDestroy {

  public activities: Array<any>;
  public activitiesItems: Array<IActivity>;

  constructor (public chRef: ChangeDetectorRef, private store: Store<AppState>) {
    // Initialize the private variables
  }

  ngOnInit() {
    this.store.select('activities').subscribe((activities: Array<IActivity>) => {
      this.activities = activities;
      this.chRef.detectChanges();
    });
    this.activitiesItems = [
      {
        id: 0,
        icon: 'assets/images/avatar-2.jpg',
        reason: 'Katy',
        type: ActivityTypes.DevicePinChange,
        description: 'Security Alaram',
        time: '10 minutes ago',
        iconType: 'image',
        meta: {}
      },
      {
        id: 1,
        icon: 'icon-play',
        reason: 'Sonos PLAY',
        type: ActivityTypes.DevicePinChange,
        description: 'Bakermat - teach me',
        time: '26 minutes ago',
        iconType: 'icon',
        meta: {}
      },
      {
        id: 2,
        icon: 'icon-wifi',
        reason: 'Macbook',
        type: ActivityTypes.DevicePinChange,
        description: 'Wifi network',
        time: '29 minutes ago',
        iconType: 'icon',
        meta: {}
      },
      {
        id: 3,
        icon: 'assets/images/avatar-3.jpg',
        reason: 'Chromecast',
        type: ActivityTypes.DevicePinChange,
        description: 'Interstellar',
        time: '2 hour ago',
        iconType: 'image',
        meta: {}
      },
      {
        id: 4,
        icon: 'assets/images/avatar-1.jpg',
        reason: 'Incomming call',
        type: ActivityTypes.DevicePinChange,
        description: 'Micheal Darrah',
        time: '3 hour ago',
        iconType: 'image',
        meta: {}
      }
    ];
  }

  ngOnDestroy () {
    this.chRef.detach();
  }
}
