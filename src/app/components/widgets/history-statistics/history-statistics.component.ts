import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { RequestsService } from '@app/services/requests.service';
import { CloudDevice, ICloudDeviceDailyHistory } from '@app/definitions';
declare var Highcharts: any;

interface IComponentHistory extends ICloudDeviceDailyHistory {
  status: 'up' | 'down';
  changeRate: string;
}
@Component({
  selector: 'app-history-statistics',
  templateUrl: './history-statistics.component.html',
  styleUrls: ['./history-statistics.component.scss']
})
export class HistoryStatisticsComponent implements OnInit, AfterViewInit {
  @Input('device') public device: CloudDevice = null;
  public dailyHistory: Array<IComponentHistory> = [];
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
        name: 'Centigrade',
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
    await this.GetDevice(this.device.id);
    if (!this.dailyHistory || !this.dailyHistory.length) {
      return ;
    }
    this.fetchChart(this.dailyHistory[0].date);
  }

  private CalculateChangeRate(items: Array<ICloudDeviceDailyHistory>): Array<IComponentHistory> {

    return items.map((item: IComponentHistory, i) => {
      if (items.length - 1 > i) {
        const currentValue = item.average;
        const nextValue = items[i + 1].average;
        if (currentValue > nextValue) {
          item.status = 'up';
          item.changeRate = Math.abs(((nextValue - currentValue) / currentValue) * 100).toFixed(1);
        } else {
          item.status = 'down';
          item.changeRate = Math.abs(((currentValue - nextValue) / nextValue) * 100).toFixed(1);
        }
      }
      return item;
    }) as Array<IComponentHistory>;
  }
  private async GetDevice(id: number) {
    try {
      const response = await this.requests.getDeviceDailyHisotry(id);
      this.dailyHistory = this.CalculateChangeRate(response.data.items);
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
  async setChart(index: number, date: Date) {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
      this.fetchChart(date);
    }
  }
  public async fetchChart(date: Date) {
    const data = await this.GetDayHistory(this.device.id, date);
    this.currentData = data;
    this.drawChart();
  }
}
