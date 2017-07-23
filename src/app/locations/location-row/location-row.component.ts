import { Component, OnInit, Input } from '@angular/core';
import { ILocation, IWidget } from '../../shared/Definitions';

@Component({
  selector: 'app-location-row',
  templateUrl: './location-row.component.html',
  styleUrls: ['./location-row.component.scss', '../../shared/checkbox-switch.scss']
})
export class LocationRowComponent {

  @Input() public widgets: Array<IWidget>;
  @Input() public location: ILocation;

}
