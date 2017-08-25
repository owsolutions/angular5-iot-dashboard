import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thermostat',
  templateUrl: './thermostat.component.html',
  styleUrls: ['./thermostat.component.scss']
})
export class ThermostatComponent implements OnInit {
  public tempratures: Array<any>;
  public nowTemp: any;
  public temp: any = 22;

  constructor() { }

  changeTemp(status) {
     
  }

  getTemperature() {
    const temp = this.temp;
    return temp;
  }

  setTemperature(temp) {
    const temps = [];
    for (let i = temp + 1; i > temp - 3; i--) {
      temps.push(i);
    }
    return temps;
  }

  ngOnInit() {
    this.tempratures = this.setTemperature(this.getTemperature());
    this.nowTemp = this.getTemperature();
  }
}
