import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppState, ILocation, CloudDevice } from '@shared/iot/definitions';
import { Store } from '@ngrx/store';
import { CommunicateService } from '@shared/core/services/communicate.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  public locations: Array<ILocation>;
  public devices: Array<CloudDevice>;

  constructor (
    public chRef: ChangeDetectorRef,
    private store: Store<AppState>,
    private communications: CommunicateService,
  ) {
    // Initialize private variables
  }
  public searchChange ($event) {
  }

  ngOnInit() {
    this.store.select('locations').subscribe(collection => {
      this.locations = (collection as Array<ILocation>);
    });
    this.store.select('devices').subscribe(collection => {
      this.devices = (collection as Array<CloudDevice>);
    });
  }

  findWidgets (location: ILocation): Array<CloudDevice> {
    return this.devices.filter(device => device.location === location.id);
  }

}
