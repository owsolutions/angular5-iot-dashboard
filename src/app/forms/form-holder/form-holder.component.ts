import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IResponse } from 'response-type';
@Component({
  selector: 'app-form-holder',
  templateUrl: './form-holder.component.html',
  styleUrls: ['./form-holder.component.scss']
})
export class FormHolderComponent implements OnInit {

  @Input('title') public title = '';
  @Input('response') public response: IResponse<any> = null;
  @Output('submit') public submit: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public Onsubmit () {
    this.submit.emit(true);
  }

}
