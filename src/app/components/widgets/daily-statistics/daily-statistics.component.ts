import { Component, OnInit, Input, EventEmitter, OnChanges } from '@angular/core';
declare var Highcharts: any;
@Component({
  selector: 'app-daily-statistics',
  templateUrl: './daily-statistics.component.html',
  styleUrls: ['./daily-statistics.component.scss']
})
export class DailyStatisticsComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Input() liveChange: Array<any>;
  public chart: any;
  public currentValue = 0;
  public highest: number;
  public lowest: number;
  public average = 0;

  drawChart() {
    this.chart = Highcharts.chart('live-tempreture', {
        chart: {
          events: {
              redraw: function () {
                const self = this;
                setTimeout (function () {
                    self.reflow();
                }, 10);
              }
          },
          backgroundColor: 'rgba(255, 255, 255, 0.0)',
        },
        credits: {
            enabled: false
        },
        title: {
            text: null
        },
        yAxis: {
            title: {
                text: null,
            },
            visible: false
        },
        xAxis: {
          visible: false,
          type: 'datetime',
          dateTimeLabelFormats: {
            minute: '%H:%M',
          }
        },
        legend: {
            layout: 'horizontal',
            align: 'left',
            verticalAlign: 'top',
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: new Date().getTime(),
            }
        },
        series: [{
            name: this.data.unit,
            data: this.data.series,
            type: 'spline',
            color: this.data.chartColor,
            showInLegend: false,
            marker: {
              enabled: false,
            }
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });
  }

  constructor() { }

  ngOnChanges() {
    if (this.liveChange !== undefined) {
      this.currentValue = this.liveChange[1];
      this.highest = this.currentValue > this.highest ? this.currentValue : this.highest;
      this.lowest = this.currentValue < this.lowest ? this.currentValue : this.lowest;
      this.average = parseFloat(((this.average + this.currentValue) / 2).toFixed(1));
      const series = this.chart.series[0],
            shift = series.data.length > 10;
      this.chart.series[0].addPoint(this.liveChange, true, shift);
    }
  }

  ngOnInit() {
    this.currentValue = this.data.series[this.data.series.length - 1][1];
    this.highest = this.currentValue;
    this.lowest = this.currentValue;
    for (const seri of this.data.series) {
      this.average += seri[1];
    }
    this.average = parseFloat((this.average / this.data.series.length).toFixed(1));
    this.drawChart();
  }

}
