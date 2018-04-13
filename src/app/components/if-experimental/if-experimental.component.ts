import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-if-experimental',
  templateUrl: './if-experimental.component.html',
  styleUrls: ['./if-experimental.component.scss']
})
export class IfExperimentalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public ISExperimental () {
    return ! environment.production;
  }

}
