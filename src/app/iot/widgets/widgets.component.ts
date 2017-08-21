import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { IWidget, AppState } from '@app/iot/definitions';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {

  public widgets: Array<IWidget>;

  constructor (private store: Store<AppState>) {
    // Initialize private variables
  }

  ngOnInit() {
    this.store.select('widgets').subscribe(widgets => {
      this.widgets = (widgets as Array<IWidget>);
    });
  }
}
