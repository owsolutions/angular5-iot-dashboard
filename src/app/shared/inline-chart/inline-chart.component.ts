import { Component, OnInit } from '@angular/core';

    declare var Chart: any;
declare var c1: any;

@Component({
  selector: 'app-inline-chart',
  templateUrl: './inline-chart.component.html',
  styleUrls: ['./inline-chart.component.scss']
})
export class InlineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var data1 = {
      labels : ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      datasets : [
        {
          fillColor : "rgba(56,175,91,.6)",
          strokeColor : "rgba(56,175,91,1)",
          pointColor : "rgba(56,175,91,1)",
          pointStrokeColor : "rgba(0,0,0,0.6)",
          data : [1000,1200,935,990,1050,1030,1040]
        },
        // {
        //   fillColor : "rgba(234,142,57,.1)",
        //   strokeColor : "rgba(234,142,57,1)",
        //   pointColor : "rgba(234,142,57,1)",
        //   pointStrokeColor : "rgba(0,0,0,0.6)",
        //   data : [1300, 1200, 1000, 1200, 1100, 1150, 1180]
        // },
        // {
        //   fillColor : "rgba(236,72,127,.1)",
        //   strokeColor : "rgba(236,72,127,1)",
        //   pointColor : "rgba(236,72,127,1)",
        //   pointStrokeColor : "rgba(0,0,0,0.6)",
        //   data : [1400,1350,1250,1250,1350,1500,1550]
        // }
      ]
    }

    var options1 = {
      legend: {
          display: false,
      },
      scaleLabel: {
        display: false
      },

      scaleFontColor : "rgba(255,255,255,0.7)",
      scaleLineColor : "rgba(0,0,0,0)",
      scaleGridLineColor : "rgba(255,255,255,0.1)",
      scaleFontFamily: "Open Sans",
      scaleFontSize: 14,
      bezierCurve : true,
      scaleShowLabels: false,
      pointDotRadius: 6,
      animation: true,
      scaleShowGridLines: false,
      datasetFill: true,
      responsive: true
    }

    new Chart(c1.getContext("2d")).Line(data1,options1);
 

  }

}
