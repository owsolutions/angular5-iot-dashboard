import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppState, ILocation, CloudDevice } from '@app/definitions';
import { Store } from '@ngrx/store';
import { ActionsService } from '@services/actions.service';
import { RequestsService } from '@app/services/requests.service';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';

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
    public actions: ActionsService,
    private requests: RequestsService,
    private router: Router,
    private toasterService: ToasterService
  ) {
    this.toasterService = toasterService;
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

  getLocationTempreture(id) {
    return this.devices.filter(x => x.id === parseInt(id, 0))[0].name;
  }

  public DeleteLocation (id: number) {
    this.requests.deleteLocation(id);
    this.toasterService.pop('error', 'Your Location Deleted', this.locations.filter(x => x.id === id)[0].name);
  }
}
