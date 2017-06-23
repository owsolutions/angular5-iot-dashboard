import { Component, OnInit } from '@angular/core';
import { CommunicateService } from './communicate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    CommunicateService
  ]
})
export class AppComponent implements OnInit {
  constructor (private communications: CommunicateService) {

  }
  ngOnInit (): void {
    this.communications.connect();
  }
}
