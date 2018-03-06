import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-tree',
  templateUrl: './nav-tree.component.html',
  styleUrls: ['./nav-tree.component.scss']
})
export class NavTreeComponent implements OnInit {

  @Input() menuObject: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
