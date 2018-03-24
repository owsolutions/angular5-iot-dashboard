import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState, ILocation, CloudDevice } from '@app/definitions';
import { Store } from '@ngrx/store';
import { times } from 'lodash';
import { NgMediaComponent } from 'ng-media';
import { RequestsService } from '@app/services/requests.service';

@Component({
  selector: 'app-location-single',
  templateUrl: './location-single.component.html',
  styleUrls: ['./location-single.component.scss']
})
export class LocationSingleComponent implements OnInit, AfterContentInit {

  public devices: Array<{value: any, name: any}> = [];
  /**
   * If we are on a editing mode, it has a number;
   * otherwise we only having null.
   */
  public id: number = null;

  /**
   * Mode shows if it's an editing mode or not.
   * initial mode is new; but it will be set
   * through the routes
   */
  public mode = 'new';

  /**
   * When editing form, temporary values are stored
   * in this object.
   */
  public form: ILocation = {
    name: '',
    icon: null,
    id: null,
    level: null,
    temperatureDevice: null
  };

  public location: ILocation = {
    icon: '',
    id: null,
    temperatureDevice: null,
    name: '',
    level: null
  };

  public items = [];

  @ViewChild('locationIcon')
  public locationIcon: NgMediaComponent;

  public defaultIcons = [
    {name: 'Kitchen' , value: 'four-cooking-accessories-set-for-kitchen.svg'},
    {name: 'Bathroom' , value: 'bathtub.svg'},
    {name: 'Master bedrrom', value: 'fireplace.svg'},
    {name: 'Living room', value: 'living-room.svg'},
    {name: 'Conference room', value: 'conference.svg'}
  ];

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
    this.route.data.subscribe(data => {
      this.mode = data['mode'];
    }).unsubscribe();
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    }).unsubscribe();
  }


  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
    private requests: RequestsService,
  ) {

  }

  private DevicesAsKeyName (devices: Array<CloudDevice>): Array<{value: any, name: any}> {
    return [{name: '- none -', value: ''}].concat(devices.map(x => {
      return {
        name: x.name,
        value: x.id
      };
    }));
  }
  public selectImage () {

  }

  ngOnInit() {
    this.extractRouterInfo();
    if ( this.mode === 'edit') {
      this.store.select('locations').subscribe((locations: Array<ILocation>) => {
        this.location = locations.find(x => x.id === this.id);
        this.form = Object.assign({}, this.location);
      }).unsubscribe();
    }

    this.store.select('devices').subscribe((devices: Array<CloudDevice>) => {
      this.devices = this.DevicesAsKeyName(devices);
    }).unsubscribe();
  }

  async formSubmit () {
    const result = await this.requests.PostLocation(this.form);
    console.log('Submitted the location: ', result);
    this.router.navigateByUrl('/locations');
  }

  onInputChange (field, value) {
    this.form[field] = value;
  }

  ngAfterContentInit () {
    setTimeout(() => {
      this.locationIcon.ResetItems([{
        id: '2',
        src: '',
        name: 'text.svg',
      }]);
    });
  }

  public changeSelection (items) {
    this.form.icon = GetSelectedItem(items).src;
  }
}

function GetSelectedItem (items: Array<any> = []) {
  return items.find(x => x.$meta && x.$meta.selected);
}
