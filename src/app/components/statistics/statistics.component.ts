import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/definitions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, OnDestroy {

  private ref: Subscription = null;
  @Input('statistics') public statistics: Array<{title: string, value: any}> = [];
  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.InitDefaultStatistics();
  }

  private InitDefaultStatistics () {
    if (this.statistics.length) {
      return;
    }
    this.ref = Observable.combineLatest(
      this.store.select('locations'),
      this.store.select('devices'),
    ).subscribe((sink) => {
      this.statistics = [];
      this.statistics.push({
        title: 'Devices',
        value: sink[1].length
      });
      this.statistics.push({
        title: 'Locations',
        value: sink[0].length
      });
    });
  }

  ngOnDestroy () {
    if (this.ref) {
      this.ref.unsubscribe();
    }
  }

}
