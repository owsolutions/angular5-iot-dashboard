import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { RequestsService } from '@app/services/requests.service';
declare var Highcharts: any;

@Component({
  selector: 'app-history-statistics',
  templateUrl: './history-statistics.component.html',
  styleUrls: ['./history-statistics.component.scss']
})
export class HistoryStatisticsComponent implements OnInit, AfterViewInit {
  @Input() data: any;
  public currentData: Array<any>;
  public activeIndex = 0;
  drawChart() {
    Highcharts.chart('history-statistics', {
        chart: {
          events: {
              redraw: function () {
                const self = this;
                setTimeout (function () {
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
  ) {}

  async ngOnInit() {
    this.currentData = this.data.series[0].data;
    await this.GetDevice();
  }

  private async GetDevice (id: number = 1) {
    try {
      const result = await this.requests.getDeviceDailyHisotry(id);
      console.log('Device daily source: ', result);
    } catch (error) {
    }
  }

  ngAfterViewInit() {
    this.drawChart();
  }

  setChart(index) {
    if (this.activeIndex !== index) {
        this.activeIndex = index;
        this.currentData = this.data.series[index].data;
        this.drawChart();
    }
  }
}
