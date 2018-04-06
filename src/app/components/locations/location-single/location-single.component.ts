import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState, ILocation, CloudDevice } from '@app/definitions';
import { Store } from '@ngrx/store';
import { times } from 'lodash';
import { NgMediaComponent } from 'ng-media';
import { RequestsService } from '@app/services/requests.service';
import { IotImages, IsSuccessEntity, error } from '@app/common';
import { IResponse } from 'response-type';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-location-single',
  templateUrl: './location-single.component.html',
  styleUrls: ['./location-single.component.scss']
})
export class LocationSingleComponent implements OnInit, AfterContentInit {

  public isRequesting = false;
  public response: IResponse<ILocation> = null;
  public devices: Array<{value: any, name: any}> = [];
  public form: ILocation = {
    name: '',
    icon: null,
    id: null,
    level: null,
    temperatureDevice: null
  };
  public error = error;
  public items = [];
  private toasterService: ToasterService;
  @ViewChild('locationIcon') public locationIcon: NgMediaComponent;

  public levels = times(100, (index) => {
    return {
      name: 'Level ' + (1 + index),
      value: index + 1
    };
  });

  /**
   * Assigns the mode and id above;
   * make sure you call this on ngInit
   */
  extractRouterInfo () {
    this.route.params.subscribe(params => {
      this.form.id = +params['id'];
      this.store.select('locations').subscribe((locations: Array<ILocation>) => {
        const form = locations.find(x => x.id === this.form.id);
        if ( form ) {
          this.form = form;
        }
      }).unsubscribe();
    }).unsubscribe();
    this.store.select('devices').subscribe((devices: Array<CloudDevice>) => {
      this.devices = DevicesAsKeyName(devices);
    }).unsubscribe();
  }

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
    private requests: RequestsService,
    toasterService: ToasterService
  ) {
    this.toasterService = toasterService;
   }


  ngOnInit() {
    this.extractRouterInfo();

  }

  public async formSubmit () {
    this.isRequesting = true;
    const toaserTitle = (!this.form.id) ? 'Location Created Succesfully' : 'Location Edited!';
    const response = this.response = await this.requests.PostLocation(this.form);
    this.isRequesting = false;
    if (IsSuccessEntity(response)) {
      this.toasterService.pop('success', toaserTitle, response.data.items[0].name);
      this.router.navigateByUrl('/locations');
    }
  }

  onInputChange (field, value) {
    this.form[field] = value;
  }

  ngAfterContentInit () {
    setTimeout(() => {
      if (!this.locationIcon) {
        return;
      }
      this.locationIcon.ResetItems(IotImages);
    });
  }

  public changeSelection (items) {
    this.form.icon = GetSelectedItem(items).src;
  }
  public deleteItem() {
    this.requests.deleteLocation(+this.form.id);
    this.toasterService.pop('error', 'Your Location Deleted', this.form.name);
    this.router.navigateByUrl('/locations');
  }
}

function GetSelectedItem (items: Array<any> = []) {
  return items.find(x => x.$meta && x.$meta.selected);
}

function DevicesAsKeyName (devices: Array<CloudDevice>): Array<{value: any, name: any}> {
  return [{name: '- none -', value: ''}].concat(devices.map(x => {
    return {
      name: x.name,
      value: x.id
    };
  }));
}
