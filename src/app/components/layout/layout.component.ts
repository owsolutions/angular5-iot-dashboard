import { Component, OnInit } from '@angular/core';
import { RequestsService } from '@app/services/requests.service';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private requests: RequestsService,
  ) {
  
   }

  ngOnInit() {

  }

}
