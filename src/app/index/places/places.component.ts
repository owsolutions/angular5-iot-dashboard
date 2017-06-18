import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss',  '../../shared/checkbox-switch.scss']
})
export class PlacesComponent implements OnInit {
  public places: Array<any>;

  constructor() { }

  async ngOnInit() {

    this.places = [
        {name: 'Kitchen' , 'icon': 'four-cooking-accessories-set-for-kitchen.svg'},
        {name: 'Bathroom' , 'icon': 'bathtub.svg'},
        {name: 'Master bedrrom', 'icon': 'fireplace.svg'},
        {name: 'Living room', 'icon': 'living-room.svg'},
        {name: 'Conference room', 'icon': 'conference.svg'}
    ];
  }

}
