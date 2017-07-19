import { Component, OnInit, Input } from '@angular/core';
import { ILocation } from '../../shared/Definitions';

@Component({
  selector: 'app-location-row',
  templateUrl: './location-row.component.html',
  styleUrls: ['./location-row.component.scss', '../../shared/checkbox-switch.scss']
})
export class LocationRowComponent implements OnInit {

  @Input() public location: ILocation;
  constructor() { }

  ngOnInit() {
  }

}
