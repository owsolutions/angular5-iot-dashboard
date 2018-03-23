import { Component, OnInit, Input } from '@angular/core';
import { ILocation, CloudDevice, AppState } from '@shared/core/definitions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-location-row',
  templateUrl: './location-row.component.html',
  styleUrls: ['./location-row.component.scss']
})
export class LocationRowComponent implements OnInit {


  public precent: any;
  public precentStyle: any;
  public primaryTemperature: any;

  @Input() public widgets: Array<CloudDevice> = [];
  @Input() public location = <ILocation>null;
  constructor (
    private store: Store<AppState>,
  ) {

  }
  /**
   * In case that in location single we have set a device as primary temperature for this location,
   * we will display it here.
   */
  public findTemperature (location: ILocation) {
    this.store.select('devices').subscribe((devices) => {
      /* tslint:disable */
      const device = devices.find(d => d.id == location.temperatureDevice);
      if (device) {
        this.primaryTemperature = device.value;
      }
    });
  }
  setPrecent(precent) {
    const increment = 360 / 100;
    const half = Math.round(100 / 2);
    let nextdeg = 0;
    let bgGradient = '';
    if (precent < half) {
        nextdeg = 90 + ( increment * precent );
        // tslint:disable-next-line:max-line-length
        bgGradient = 'linear-gradient(90deg, #f2f2f2 50%, transparent 50%, transparent), linear-gradient(' + nextdeg + 'deg, #777 50%, #f2f2f2 50%, #f2f2f2)';
    }else {
        nextdeg = -90 + ( increment * ( precent - half ));
        // tslint:disable-next-line:max-line-length
        bgGradient = 'linear-gradient(' + nextdeg + 'deg, #777 50%, transparent 50%, transparent), linear-gradient(270deg, #777 50%, #f2f2f2 50%, #f2f2f2)';
    }
    const styles = {
      'background-image': bgGradient
    };
    return styles;
  }


  ngOnInit() {
    this.precent = 55;
    this.precentStyle = this.setPrecent(this.precent);
    this.findTemperature(this.location);
  }
}
