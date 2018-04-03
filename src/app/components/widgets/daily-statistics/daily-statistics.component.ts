import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
declare var Highcharts: any;
import { CloudDevice, DataSource, AppState } from '@app/definitions';
import { Store } from '@ngrx/store';

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
    return [x.date, +x.value];
  });
}
@Component({
  selector: 'app-daily-statistics',
  templateUrl: './daily-statistics.component.html',
  styleUrls: ['./daily-statistics.component.scss']
})
export class DailyStatisticsComponent implements OnInit, AfterViewInit {

  public token = '';
  public chartName = 'live-tempreture';
  public data: any = {};
  @Input('device') public device: CloudDevice = null;
  @Input('id') public id: any = null;

  public chart: any;
  public currentValue = 0;
  public highest: number;
  public lowest: number;
  public average = 0;

  drawChart() {
    this.data = {
      title: 'Bedroom Tempreture',
      subTitle: 'Show Today Live Statistics',
      for: 'Tempreture',
      unit: '°C',
      chartColor: 'orange',
      series: CastHistoryToSeries(this.device && this.device.dataHistory || [])
    };

    if (this.chart) {
      return ;
    }
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

  constructor(
    private store: Store<AppState>
  ) { }

  public pushValue (date: Date, value: number) {
    if ( !this.chart) {
      return false;
    }
    const series = this.chart.series[0],
    shift = series.data.length > 10;
    this.chart.series[0].addPoint([date, value], true, shift);
  }


  ngOnInit() {
    this.chartName = 'chart-' + this.id;

    this.store.select('devices').subscribe(devices => {
      this.device = devices.find(x => +x.id === +this.id);
      const history = this.device && this.device.dataHistory &&
        this.device.dataHistory[this.device.dataHistory.length - 1] || null;
      if (!history) {
        return ;
      }
      this.pushValue(history.date, history.value);
    });

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
    // setInterval(() => {
    //   if (!this.device.dataHistory) {
    //     return;
    //   }


    // }, 2500);

    this.drawChart();

  }

  public HasHistory () {
    const device = this.device;
    if ( ! device || ! device.dataHistory) {
      return 0;
    }
    return device.dataHistory.length;
  }

}
