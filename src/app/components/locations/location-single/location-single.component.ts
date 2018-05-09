import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState, ILocation, CloudDevice } from '@app/definitions';
import { Store } from '@ngrx/store';
import { times } from '@lodash';
import { NgMediaComponent } from '../../../ng-media';
import { RequestsService } from '@app/services/requests.service';
import { IotImages, IsSuccessEntity, error } from '@app/common';
import { IResponse } from 'response-type';
import { NotificationService } from '@app/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { ActionsService } from '@app/services/actions.service';

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
  @ViewChild('locationIcon') public locationIcon: NgMediaComponent;

  public levels = [];

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
    private actions: ActionsService,
    private notification: NotificationService,
    private translation: TranslateService,
  ) {}
  ngOnInit() {
    this.extractRouterInfo();
    this.levels = times(100, (index) => {
      return {
        name:  this.translation.get('Level')['value'] + ' ' + (1 + index),
        value: index + 1
      };
    });
  }
  public async formSubmit () {
    this.actions.scrollTop();
    this.isRequesting = true;
    const response = this.response = await this.requests.PostLocation(this.form);
    this.isRequesting = false;
    if (IsSuccessEntity(response)) {
      const $location = response.data.items[0];
      if (this.form.id) {
        this.notification.InvokeLocationUpdate($location);
      } else {
        this.notification.InvokeLocationCreate($location);
      }
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
    this.router.navigateByUrl('/locations');
    this.notification.InvokeLocationDelete(this.form);
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
