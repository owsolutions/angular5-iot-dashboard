import { Component, OnInit } from '@angular/core';
import { CommunicateService } from '../../communicate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState, ILocation } from '../../shared/Definitions'; 
import { Store } from '@ngrx/store';

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
  public mode: string = "new";

  /**
   * When editing form, temporary values are stored
   * in this object.
   */
  public form: ILocation = {
    name: '',
    icon: '',
    id: null
  };

  public location: ILocation;

  constructor(
    private communications: CommunicateService,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) { 

  }

  public defaultIcons = [
    {name: 'Kitchen' , value: 'four-cooking-accessories-set-for-kitchen.svg'},
    {name: 'Bathroom' , value: 'bathtub.svg'},
    {name: 'Master bedrrom', value: 'fireplace.svg'},
    {name: 'Living room', value: 'living-room.svg'},
    {name: 'Conference room', value: 'conference.svg'}
  ];

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.mode = data['mode'];
    });

    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    if ( this.mode === 'edit') {
      this.store.select('locations').subscribe((locations: Array<ILocation>) => {
        this.location = locations.find(x => x.id === this.id);
        this.form = Object.assign({}, this.location);
      });
    }
  }

  formSubmit () {
    console.error(this.form);
    this.store.dispatch({
      type: 'UPDATE_LOCATION',
      payload: this.form
    });
    this.router.navigateByUrl('/locations');
  }

  onInputChange (field, value) {
    this.form[field] = value;
  }

}
