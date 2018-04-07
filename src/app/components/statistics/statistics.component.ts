import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/definitions';
import { Subscription, combineLatest } from '@rxjs';

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
    this.ref = combineLatest(
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
      this.statistics.push({
        title: 'Temperatures',
        value: sink[1].filter(x => x.type === 0).length
      });
      this.statistics.push({
        title: 'Lights',
        value: sink[1].filter(x => x.type === 1).length
      });
    });
  }

  ngOnDestroy () {
    if (this.ref) {
      this.ref.unsubscribe();
    }
  }

}
