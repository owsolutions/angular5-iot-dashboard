import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IActivity, AppState } from '@app/definitions';

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
  }

  ngOnDestroy () {
    this.chRef.detach();
  }
}
