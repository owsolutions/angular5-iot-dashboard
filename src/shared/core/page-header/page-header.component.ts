import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input() public title: string;
  @Input() public icon: string;
  @Input() public searchbar = false;
  @Output('searchChange') public searchChange: EventEmitter<string> = new EventEmitter();
  public loading = false;
  private _timer = null;

  public keyup (value: string) {
    if (!value) {
      this.loading = false;
      clearTimeout(this._timer);
      return this.searchChange.emit(value);
    }
    this.loading = true;
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      this.actualFetch();
      this.loading = false;
    }, 400);
  }
  public actualFetch () {
    setTimeout(() => {
      this.searchChange.emit('hey');
    }, 200);
  }
}
