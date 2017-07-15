import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forms-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {
  @Input() public name: string;
  @Input() public icon: string;
  @Input() public placeholder: string;
  @Input() public options: any;
  @Input() public selected: any;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  constructor() { }
  onInputChange (e) {
    this.onChange.emit(e.target.value);
  }
  ngOnInit() {
  }

}
