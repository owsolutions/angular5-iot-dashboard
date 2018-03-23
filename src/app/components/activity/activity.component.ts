import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, IActivity, ActivityTypes } from '@app/definitions';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit, OnDestroy {

  public activities: Array<IActivity>;

  constructor (public chRef: ChangeDetectorRef, private store: Store<AppState>) {
    // Initialize the private variables
  }

  getType (type: any) {
    return ActivityTypes[type];
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
