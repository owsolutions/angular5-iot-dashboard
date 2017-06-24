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

  constructor (public chRef: ChangeDetectorRef, private store: Store<AppState>) {
    // Initialize the private variables
  }

  ngOnInit() {
    this.store.select('activities').subscribe((activities: Array<IActivity>) => {
      this.activities = activities;
      this.chRef.detectChanges();
    });
  }

  ngOnDestroy () {
    this.chRef.detach();
  }
}
