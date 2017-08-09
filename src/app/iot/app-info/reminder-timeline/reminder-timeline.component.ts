import { Component, OnInit } from '@angular/core';
declare var Highcharts: any;
import { times, random, shuffle } from 'lodash';

@Component({
  selector: 'app-reminder-timeline',
  templateUrl: './reminder-timeline.component.html',
  styleUrls: ['./reminder-timeline.component.scss', '../custom-switch.scss']
})
export class ReminderTimelineComponent implements OnInit {
  public chart: any;

  timelineOption() {
    return {
      chart: {
        backgroundColor: 'transparent',
        type: 'line',
        renderTo: 'timeline',
        margin: [0, 0, 0, 0]
      },
      tooltip: {
        enabled: false
      },
      scrollbar: {
        barBackgroundColor: '#dfdfdf',
        barBorderRadius: 7,
        barBorderWidth: 0,
        buttonBackgroundColor: 'none',
        buttonBorderWidth: 0,
        buttonBorderRadius: 7,
        trackBackgroundColor: 'none',
        trackBorderWidth: 0,
        trackBorderRadius: 8,
        trackBorderColor: '#dfdfdf'
      },
      title: null,
      xAxis: {
        plotLines: [{
          value: 1499433993000, // new Date().getTime(),
          width: 2,
          color: '#d0d6e2',
          label: {
            text: '',
            useHTML: true,
            verticalAlign: 'bottom',
            class: 'sami'
          }
        }],
        min: 1499425233000,
        max: 1499443233000,
        crosshair: false
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null,
        },
        opposite: true,
        gridLineWidth: 0,
        min: 0,
        max: 10
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      navigator: {
        enabled: false
      },
      series: this.getTimelineSeries()
    };
  }

  getDataSeries(begin, offset) {
    return [
      [begin, offset % 2 === 0 ? offset : offset + 2],
      [begin + (random(1, 3) * 3600 * 1000), offset % 2 === 0 ? offset : offset + 2]
    ];
  }

  getTimelineSeries() {
    return [{
      data: [[1499382584000, 5], [1499389784000, 5]],
      lineWidth: 10,
      name: {
        title: 'Confort',
        icon: 'icon-bed'
      }
    }, {
      data: [[1499396984000, 2], [1499407784000, 2]],
      lineWidth: 10,
      name: {
        title: 'Eco',
        icon: 'icon-leaf'
      }
    }, {
      data: [[1499411384000, 8], [1499418584000, 8]],
      lineWidth: 10,
      name: {
        title: 'Night',
        icon: 'icon-moon'
      }
    }, {
      data: [[1499425658000, 5], [1499432858000, 5]],
      lineWidth: 10,
      name: {
        title: 'Game',
        icon: 'icon-gamepad'
      }
    }, {
      data: [[1499429258000, 8], [1499440058000, 8]],
      lineWidth: 10,
      name: {
        title: 'Recreation',
        icon: 'icon-keyboard'
      }
    }, {
      data: [[1499436458000, 2], [1499447258000, 2]],
      lineWidth: 10,
      name: {
        title: 'Visit',
        icon: 'icon-stethoscope'
      }
    }, {
      data: [[1499466393000, 5], [1499469993000, 5]],
      lineWidth: 10,
      name: {
        title: 'Work',
        icon: 'icon-briefcase'
      }
    }, {
      data: [[1499473593000, 2], [1499484393000, 2]],
      lineWidth: 10,
      name: {
        title: 'Shopping',
        icon: 'icon-shopping-bag'
      }
    }, {
      data: [[1499477193000, 5], [1499491593000, 5]],
      lineWidth: 10,
      name: {
        title: 'Confort',
        icon: 'icon-flash'
      }
    }];
  }

  timelineSeries(count = 8) {
    const offsets = shuffle(times(count, (index) => index));
    const labels = [['Confort', 'icon-bed'],
    ['Eco', 'icon-leaf'],
    ['Night', 'icon-moon'],
    ['Game', 'icon-gamepad'],
    ['Recreation', 'icon-keyboard'],
    ['Visit', 'icon-stethoscope'],
    ['Work', 'icon-briefcase'],
    ['Shopping', 'icon-shopping-bag']];
    return times(count, (index) => {
      const offset = offsets.pop();
      const title = labels.pop();
      const date = new Date().getTime();
      const seeek = random(-72, 72);
      const begin = date + (seeek * 10000);
      return {
        data: this.getDataSeries(begin, offset),
        lineWidth: 10,
        name: {
          title: title[0],
          icon: title[1]
        }
      };
    });
  }

  titleGenerator() {
    for (const k in this.chart.series) {
      if (typeof this.chart.series[k] === 'object') {
        const icon = '<i class="icon ' + this.chart.series[k].name.icon + '"></i>',
          title = '<span>' + this.chart.series[k].name.title + '</span>',
          titleWrapp = document.createElement('span');
        titleWrapp.innerHTML = icon + title;
        titleWrapp.id = 'highcharts-series-title' + k;
        titleWrapp.style.position = 'absolute';
        titleWrapp.style.color = this.chart.series[k].color;
        titleWrapp.style.fontSize = '14';
        titleWrapp.style.fontWeight = 'bold';
        titleWrapp.style.width = '100%';
        titleWrapp.style.left = (this.retPosition()[k].x + (this.retPosition()[k].width / 3)) + 'px';
        titleWrapp.style.top = (this.retPosition()[k].y + 7) + 'px';
        // tslint:disable-next-line:max-line-length
        this.retPosition()[k].x + (this.retPosition()[k].width / 3) <= 0 ? titleWrapp.style.opacity = '0' : titleWrapp.style.opacity = '1';
        document.getElementById('timeline').appendChild(titleWrapp);
      }
    }
  }

  drawChart() {
    const chart = this.chart = new Highcharts.stockChart(this.timelineOption());
    Highcharts.addEvent(chart, 'redraw', () => {
      for (const k in chart.series) {
        if (typeof chart.series[k] === 'object') {
          const title = document.getElementById('highcharts-series-title' + k);
          title.style.left = (this.retPosition()[k].x + (this.retPosition()[k].width / 3)) + 'px';
          title.style.top = (this.retPosition()[k].y + 7) + 'px';
          (this.retPosition()[k].x + (this.retPosition()[k].width / 3) <= 0) ? title.style.opacity = '0' : title.style.opacity = '1';
        }
      }
    });
  }

  retPosition() {
    const allPositions = [];
    for (const k in this.chart.series) {
      if (typeof this.chart.series[k] === 'object') {
        const chartSeries: any = document.querySelector('#timeline .highcharts-series-' + k);
        allPositions.push(chartSeries.getBBox());
      }
    }
    return allPositions;
  }

  ngOnInit() {
    this.drawChart();
    this.titleGenerator();
  }
}
