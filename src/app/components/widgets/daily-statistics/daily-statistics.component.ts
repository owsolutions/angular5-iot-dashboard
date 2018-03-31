import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
declare var Highcharts: any;
import { CloudDevice, DataSource } from '@app/definitions';

function generateMockSeries() {
  const series = [];
  for (let i = 20; i >= 1; i = i - 2) {
      series.push([previousSeconds(i), Math.floor(Math.random() * 8 + 30)]);
  }
  return series;
}

function previousSeconds(s) {
  return new Date().getTime() - (s * 1000);
}

function CastHistoryToSeries (items: Array<DataSource>): Array<Array<any>> {
  return items.map(x => {
    return [x.date, x.value];
  });
}
@Component({
  selector: 'app-daily-statistics',
  templateUrl: './daily-statistics.component.html',
  styleUrls: ['./daily-statistics.component.scss']
})
export class DailyStatisticsComponent implements OnInit, OnChanges, AfterViewInit {

  public chartName = 'live-tempreture';
  public data: any = {};
  @Input('device') public device: CloudDevice = null;
  // @Input('
  @Input() liveChange: Array<any> = [];
  public chart: any;
  public currentValue = 0;
  public highest: number;
  public lowest: number;
  public average = 0;

  drawChart() {
    this.chart = Highcharts.chart(this.chartName, {
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
      if (!this.chart) {
        return;
      }
      const series = this.chart.series[0],
            shift = series.data.length > 10;
      this.chart.series[0].addPoint(this.liveChange, true, shift);
    }
  }

  public pushValue (date: Date, value: number) {
    if ( !this.chart) {
      return false;
    }
    const series = this.chart.series[0],
    shift = series.data.length > 10;
    this.chart.series[0].addPoint([date, value], true, shift);
  }


  ngOnInit() {
    this.chartName = 'chart-' + this.device.id;

    this.data = {
      title: 'Bedroom Tempreture',
      subTitle: 'Show Today Live Statistics',
      for: 'Tempreture',
      unit: '°C',
      chartColor: 'orange',
      series: generateMockSeries()
    };
  }

  ngAfterViewInit () {
    setInterval(() => {
      if (!this.device.dataHistory) {
        return;
      }
      this.data = {
        title: 'Bedroom Tempreture',
        subTitle: 'Show Today Live Statistics',
        for: 'Tempreture',
        unit: '°C',
        chartColor: 'orange',
        series: CastHistoryToSeries(this.device.dataHistory)
      };
      this.drawChart();

    }, 2500);
  }

  public HasHistory (device: CloudDevice) {
    if (device.dataHistory && device.dataHistory.length > 1) {
      return true;
    }
    return false;
  }

}
