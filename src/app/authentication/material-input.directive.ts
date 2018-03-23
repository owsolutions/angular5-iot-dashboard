import { Directive, HostListener } from '@angular/core';

@Directive({
  /* tslint:disable */
  selector: 'input[material-input]'
})
export class MaterialInputDirective {
  @HostListener('change', ['$event'])
  onchange(e) {
    const value = e.target.value;
    if (value.length > 0) {
      e.target.classList.add('focused');
    } else {
      e.target.classList.remove('focused');
    }
  }
  constructor() { }

}
