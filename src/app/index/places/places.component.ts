import { Component, OnInit, OnDestroy } from '@angular/core';
import { ILocation, AppState } from '../../shared/Definitions';
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

  constructor(public chRef: ChangeDetectorRef, private store: Store<AppState>) {
    // Initialize the private variables
  }

  async ngOnInit() {
    this.store.select('locations').subscribe((locations: Array<ILocation>) => {
      this.places = locations;
      this.chRef.detectChanges();
    });
  }

  ngOnDestroy () {
    this.chRef.detach();
  }

}
