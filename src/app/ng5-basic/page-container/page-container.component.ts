import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit {

  @Input('maintitle') public maintitle = '';
  @Input('subtitle') public subtitle = '';
  constructor() { }

  ngOnInit() {
  }

}
