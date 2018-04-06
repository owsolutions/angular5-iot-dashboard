import { EventEmitter,  Output, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forms-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input() public name: string;
  @Input() public icon: string;
  @Input() public placeholder: string;
  @Input() public value: any;
  @Input('class') public class: any;
  @Output() public onChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  onInputChange (e) {
    this.onChange.emit(e.target.value);
  }
  ngOnInit() {
  }

}
