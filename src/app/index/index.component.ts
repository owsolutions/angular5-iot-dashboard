import { Component, OnInit } from '@angular/core';
import { fetchApi } from '../api';
import { times, random} from 'lodash';
import { ChartComponent } from './chart/chart.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent {
    // Index is empty, since for each customer we might implement
    // different widgets.
}
