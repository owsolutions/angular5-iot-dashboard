import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { times, sample } from 'lodash';
import { Store } from '@ngrx/store';
import { IActivity, AppState } from '../../shared/Definitions';

@Component({
  selector: 'app-activity-widget',
  templateUrl: './activity-widget.component.html',
  styleUrls: ['./activity-widget.component.scss']
})
export class ActivityWidgetComponent implements OnInit, OnDestroy {

  public activities: Array<any>;
  public activitiesItems: Array<any>;

  constructor (public chRef: ChangeDetectorRef, private store: Store<AppState>) {
    // Initialize the private variables
  }

  ngOnInit() {
    this.store.select('activities').subscribe((activities: Array<IActivity>) => {
      this.activities = activities;
    });
    this.activitiesItems = [{
        icon: 'assets/images/avatar-2.jpg',
        reason: 'Katy',
        act: 'activated the',
        description: 'Security Alaram',
        time: '10 minutes ago',
        iconType: 'image'
      },
      {
        icon: 'icon-play',
        reason: 'Sonos PLAY',
        act: 'played',
        description: 'Bakermat - teach me',
        time: '26 minutes ago',
        iconType: 'icon'
      },
      {
        icon: 'icon-wifi',
        reason: 'Macbook',
        act: 'connected to',
        description: 'Wifi network',
        time: '29 minutes ago',
        iconType: 'icon'
      },
      {
        icon: 'assets/images/avatar-3.jpg',
        reason: 'Chromecast',
        act: 'played movie',
        description: 'Interstellar',
        time: '2 hour ago',
        iconType: 'image'
      },
      {
        icon: 'assets/images/avatar-1.jpg',
        reason: 'Incomming call',
        act: '3min50',
        description: 'Micheal Darrah',
        time: '3 hour ago',
        iconType: 'image'
      }
    ];
  }

  ngOnDestroy () {
    this.chRef.detach();
  }
}
