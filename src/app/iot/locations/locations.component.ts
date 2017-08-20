import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { AppState, ILocation, IWidget } from '@app/iot/definitions';
import { Store } from '@ngrx/store';
import { CommunicateService } from '@app/core/services/communicate.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, OnDestroy {

  public locations: Array<ILocation>;
  public widgets: Array<IWidget>;

  constructor (public chRef: ChangeDetectorRef, private store: Store<AppState>, private communications: CommunicateService) {
    // Initialize private variables
  }

  ngOnInit() {
    this.store.select('locations').subscribe(collection => {
      this.locations = (collection as Array<ILocation>);
    });
    this.store.select('widgets').subscribe(collection => {
      this.widgets = (collection as Array<IWidget>);
    });
  }

  findWidgets (location: ILocation): Array<IWidget> {
    return this.widgets.filter(widget => widget.location.id === location.id);
  }

  ngOnDestroy () {
    this.chRef.detach();
  }

}
