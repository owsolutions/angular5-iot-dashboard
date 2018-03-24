import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { CloudDevice, AppState } from '@app/definitions';
import { Store } from '@ngrx/store';
import { IResponse } from 'response-type';
import { error } from '@app/common';

@Component({
  selector: 'app-device-general-information',
  templateUrl: './device-general-information.component.html',
  styleUrls: ['./device-general-information.component.scss']
})
export class DeviceGeneralInformationComponent implements OnInit, OnDestroy {

  @Input('mode') public mode: 'edit' | 'new' = 'new';
  @Input('response') public response: IResponse<CloudDevice> = null;
  @Output('onChange') public onChange: EventEmitter<any> = new EventEmitter();
  @Input('device') public set device (value: CloudDevice) {
    this.form = Object.assign({}, value);
  }
  private ref = null;
  public locations: Array<any> = [];
  public form: any = {};
  public error = error;

  constructor (
    private store: Store<AppState>,
  ) { }

  
  ngOnInit() {
    this.ref = this.store.select('locations').subscribe((data) => {
      this.locations = data;
    });

  }

  public SubmitChange () {
    this.onChange.emit(this.form);
  }
  ngOnDestroy () {
    if ( this.ref ) {
      this.ref.unsubscribe ();
    }
  }
}
