import { Component, OnInit } from '@angular/core';
import { CommunicateService } from './communicate.service';
import { PaginationRequestService } from './pagination.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    CommunicateService,
    PaginationRequestService
  ]
})
export class AppComponent implements OnInit {
  constructor (private communications: CommunicateService) {

  }
  ngOnInit (): void {
    // this.communications.connect();
  }
}
