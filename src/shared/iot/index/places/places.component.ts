import { Component, OnInit, OnDestroy } from '@angular/core';
import { ILocation, AppState, CloudDevice } from '@shared/iot/definitions';
import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss',  '../../shared/checkbox-switch.scss']
})
export class PlacesComponent implements OnInit, OnDestroy {

  public places: Array<ILocation> = [];
  public devices: Array<CloudDevice> = [];

  constructor(public chRef: ChangeDetectorRef, private store: Store<AppState>) {
    // Initialize the private variables
  }

  async ngOnInit() {
    this.store.select('locations').subscribe((locations: Array<ILocation>) => {
      this.places = locations;
    });
    this.store.select('devices').subscribe(collection => {
      this.devices = (collection as Array<CloudDevice>);
    });
  }

  findWidgets (location: ILocation): Array<CloudDevice> {
    return this.devices.filter(widget => widget.location && widget.location.id === location.id);
  }

  ngOnDestroy () {
    this.chRef.detach();
  }

}
