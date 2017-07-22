import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { IDevice, IPin, AppState, ILocation, IWidget } from '../shared/Definitions';
import { Store } from '@ngrx/store';
import { CommunicateService } from '../communicate.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, OnDestroy {

  public locations: Array<ILocation>;

  constructor (public chRef: ChangeDetectorRef, private store: Store<AppState>, private communications: CommunicateService) {
    // Initialize private variables
  }

  ngOnInit() {
    this.store.select('locations').subscribe(collection => {
      this.locations = (collection as Array<ILocation>);
    });
  }

  ngOnDestroy () {
    this.chRef.detach();
  }

}
