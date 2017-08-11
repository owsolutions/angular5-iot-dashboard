import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss']
})
export class CheckboxInputComponent implements OnInit {

  @Input('name') public name = '';
  @Input('check') public check = 'ON';
  @Input('uncheck') public uncheck = 'OFF';
  @Input('checked') public checked = false;
  @Output('onChange') public onChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onInputChange (e) {
    this.onChange.emit(e.target.checked);
  }


  ngOnInit() {
  }

}
