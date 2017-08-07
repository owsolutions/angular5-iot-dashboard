import { Component, OnInit, OnDestroy } from '@angular/core';
import { ILocation, AppState, IWidget } from '../../shared/Definitions';
import { Observable } from 'rxjs/Observable';
import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss',  '../../shared/checkbox-switch.scss']
})
export class PlacesComponent implements OnInit, OnDestroy {

  public places: Array<ILocation> = [];
  public widgets: Array<IWidget> = [];

  constructor(public chRef: ChangeDetectorRef, private store: Store<AppState>) {
    // Initialize the private variables
  }

  async ngOnInit() {
    this.store.select('locations').subscribe((locations: Array<ILocation>) => {
      this.places = locations;
      this.chRef.detectChanges();
    });
    this.store.select('widgets').subscribe(collection => {
      this.widgets = (collection as Array<IWidget>);
    });
  }

  findWidgets (location: ILocation): Array<IWidget> {
    return this.widgets.filter(widget => widget.location && widget.location.id === location.id);
  }

  ngOnDestroy () {
    this.chRef.detach();
  }

}
