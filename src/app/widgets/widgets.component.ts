import { Component, OnInit, ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IWidget, AppState } from '../shared/Definitions';

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
