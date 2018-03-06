import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-form-holder',
  templateUrl: './form-holder.component.html',
  styleUrls: ['./form-holder.component.scss']
})
export class FormHolderComponent implements OnInit {

  @Input('title') public title = '';
  @Output('submit') public submit: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public Onsubmit () {
    this.submit.emit(true);
  }

}
