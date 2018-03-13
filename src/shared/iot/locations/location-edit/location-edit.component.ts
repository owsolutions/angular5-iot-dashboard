
import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { CommunicateService } from '@shared/core/services/communicate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState, ILocation } from '@shared/iot/definitions';
import { Store } from '@ngrx/store';
import { maxBy, times } from 'lodash';
import { NgMediaComponent } from 'ng-media';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.scss']
})
export class LocationEditComponent implements OnInit, AfterContentInit {

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
    
  };

  public location: ILocation = {
    icon: '',
    id: null,
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

  public levels = times(100, (index)=> {
    return {
      name: 'Level ' + (1+index),
      value: index + 1
    };
  })

  /**
   * Assigns the mode and id above;
   * make sure you call this on ngInit
   */
  extractRouterInfo () {
    this.route.data.subscribe(data => {
      this.mode = data['mode'];
    });
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }


  constructor(
    private communications: CommunicateService,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {

  }

  public selectImage () {

  }

  ngOnInit() {
    this.extractRouterInfo();
    if ( this.mode === 'edit') {
      this.store.select('locations').subscribe((locations: Array<ILocation>) => {
        this.location = locations.find(x => x.id === this.id);
        this.form = Object.assign({}, this.location);
      });
    }
  }

  async postToServer (location: ILocation): Promise<ILocation> {
    let id = 0;
    this.store.select('locations').subscribe((locations: Array<ILocation>) => {
      id = +maxBy(locations, x => x.id).id + 1;
    });
    return {
      icon: location.icon,
      id: location.id ? location.id : id,
      name: location.name,
      level: location.level
    };
  }

  async formSubmit () {
    const result = await this.postToServer(this.form);

    this.store.dispatch({
      type: 'UPDATE_LOCATION',
      payload: result
    });
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