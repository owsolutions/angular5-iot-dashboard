import { Component, OnInit } from '@angular/core';
import { CommunicateService } from '../../communicate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState, ILocation } from '../../shared/Definitions';
import { Store } from '@ngrx/store';
import { maxBy } from 'lodash';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.scss']
})
export class LocationEditComponent implements OnInit {

  /**
   * If we are on a editing mode, it has a number;
   * otherwise we only having null.
   */
  public id: Number = null;

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
    icon: '',
    id: null
  };

  public location: ILocation = {
    icon: '',
    id: null,
    name: ''
  };

  public defaultIcons = [
    {name: 'Kitchen' , value: 'four-cooking-accessories-set-for-kitchen.svg'},
    {name: 'Bathroom' , value: 'bathtub.svg'},
    {name: 'Master bedrrom', value: 'fireplace.svg'},
    {name: 'Living room', value: 'living-room.svg'},
    {name: 'Conference room', value: 'conference.svg'}
  ];

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
      id = maxBy(locations, x => x.id).id + 1;
    });
    return {
      icon: location.icon,
      id: location.id ? location.id : id,
      name: location.name
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

}
