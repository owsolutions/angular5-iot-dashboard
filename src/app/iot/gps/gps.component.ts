import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss']
})
export class GpsComponent implements OnInit {

  public gps: any = null;
  constructor() { }

  ngOnInit() {

    navigator.geolocation.getCurrentPosition((position) => {
      this.gps = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        head: position.coords.heading
      };
    }, (error) => {
      this.gps = error;
    });
  }
}
