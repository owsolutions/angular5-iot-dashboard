import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { RequestsService } from '@app/services/requests.service';
import { CloudDevice } from '@app/definitions';
declare var Highcharts: any;

@Component({
  selector: 'app-history-statistics',
  templateUrl: './history-statistics.component.html',
  styleUrls: ['./history-statistics.component.scss']
})
export class HistoryStatisticsComponent implements OnInit, AfterViewInit {
  @Input() data: any;
  @Input('device') public device: CloudDevice = null;
  public dailyHistory: any = [];
  public currentData: Array<any>;
  public activeIndex = 0;
  drawChart() {
    Highcharts.chart('history-statistics', {
      chart: {
        events: {
          redraw: function () {
            const self = this;
            setTimeout(function () {
              self.reflow();
            }, 10);
          }
        },
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
        labels: {
          enabled: false
        },
        gridLineColor: '#f5f5f5'
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
          pointStart: 1
        }
      },
      series: [{
        name: this.data.unit,
        data: this.currentData,
        type: 'spline',
        dashStyle: 'ShortDash',
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
    private requests: RequestsService,
  ) { }

  async ngOnInit() {
    this.currentData = this.data.series[0].data;
    await this.GetDevice(this.device.id);
  }

  private async GetDevice(id: number) {
    try {
      const response = await this.requests.getDeviceDailyHisotry(id);
      response.data.items.map((item, i) => {
        if (response.data.items.length - 1 > i) {
            const currentValue = item.average;
            const nextValue = response.data.items[i + 1].average;
            if (currentValue > nextValue) {
                item.status = 'up';
                item.changeRate = Math.abs(((nextValue - currentValue) / currentValue ) * 100).toFixed(1);
            }else {
                item.status = 'down';
                item.changeRate = Math.abs(((currentValue - nextValue) / nextValue ) * 100).toFixed(1);
            }
        }
      });
      this.dailyHistory = response.data.items;
    } catch (error) {
    }
  }

  ngAfterViewInit() {
    this.drawChart();
  }

  private async GetDayHistory(id: number, date: Date): Promise<number[]> {
    try {
      const response = await this.requests.GetDeviceDayHistory(id, date);
      return response.data.items;
    } catch (error) {
    }
  }
  async setChart(index) {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
      const data = await this.GetDayHistory(this.device.id, new Date());
      this.currentData = data;
      this.drawChart();
    }
  }
}
