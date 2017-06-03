import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log(">> index");
    (window as any).createChart("#chart1" , 15);
    (window as any).createChart("#chart2", 16);
  }

}
