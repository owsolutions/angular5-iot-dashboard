import { Component, OnInit, OnDestroy } from '@angular/core';
import { ILocation, AppState, CloudDevice } from '@app/definitions';
import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionsService } from '@services/actions.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss',  '../../checkbox-switch.scss']
})
export class PlacesComponent implements OnInit, OnDestroy {

  public locations: Array<ILocation> = [];
  public devices: Array<CloudDevice> = [];

  constructor(
    public chRef: ChangeDetectorRef,
    private store: Store<AppState>,
    public actions: ActionsService,
  ) {
    // Initialize the private variables
  }

  async ngOnInit() {
    this.store.select('locations').subscribe((locations: Array<ILocation>) => {
      this.locations = locations;
    });
    this.store.select('devices').subscribe(collection => {
      this.devices = (collection as Array<CloudDevice>);
    });
  }

  ngOnDestroy () {
    this.chRef.detach();
  }

}
