import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IResponse } from 'response-type';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  private _response: IResponse<any> = null;
  @Output('change') public change: EventEmitter<string> = new EventEmitter();
  @Input('icon') public icon = 'person';
  @Input('placeholder') public placeholder = '';
  @Input('type') public type = '';
  @Input('name') public name = '';
  @Input('isRequesting') public isRequesting = false;
  @Input('response') public set response (value: IResponse<any>) {
    this._response = value;
  }
  constructor(
  ) { }

  ngOnInit() {
  }
  public changeInput(value: string) {
    this.change.emit(value);
  }

  public error (fieldName: string) {
    const res = this._response;
    if ( ! res || ! res.error || ! res.error.errors ||
      ! res.error.errors.find) {
        return '';
    }
    const error = res.error.errors.find(x => x.location === fieldName);
    return error ? error.message : '';
  }
}
