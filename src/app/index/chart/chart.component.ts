import { Component, OnInit } from '@angular/core';
declare var Highcharts: any;
import { times, random} from 'lodash';

@Component({
  selector: 'app-index-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {


  getMock (count = 100) {
    return times(count, (index) => {
        return [
            1317888000000 + (index * 60000),
            random(32000, 40000) / 100,
            random(32000, 40000) / 100,
            random(32000, 40000) / 100,
        ];
    });
  }

  getSeries () {
      return [
        {
            name: 'Sea-Level Pressure',
            type: 'area',
            gapSize: 5,
            data: this.getMock(),
            marker: {
                enabled: false
            },
            tooltip: {
                valueSuffix: ' mb'
            },
            fillColor: 'rgba(230, 251, 255, 0.8)',
            lineColor: '#00d7ff'

        },
        {
            name: 'Temperature',
            type: 'area',
            data: this.getMock(),
            yAxis: 2,
            gapSize: 5,
            tooltip: {
                valueSuffix: ' °C'
            },
            marker: {
                enabled: false
            },
            fillColor: 'rgba(232, 245, 236, 0.8)',
            lineColor: '#2bc661'
        },
        {
            name: 'AAPL',
            type: 'area',
            data: this.getMock(),
            gapSize: 5,
            yAxis: 1,
            tooltip: {
                valueDecimals: 2
            },
            marker: {
                enabled: false
            },
            fillColor: 'rgba(248, 250, 249, 0.8)',
            lineColor: '#52dba7',
            threshold: null
        }
    ];
  }
  getChartOptions () {
    const chartOpt = {
        chart: {
            backgroundColor: 'transparent',
            type: 'areaspline',
            renderTo: 'container'
        },
        title: {
            text: 'ENERGY',
            align: 'left'
        },
        xAxis: {
            gapGridLineWidth: 0
        },
        yAxis: [
            {
                labels: {
                    enabled: false
                },
                title: {
                    text: null,
                },
                gridLineDashStyle: 'longdash',
                gridLineColor: '#e4e4e4',
                gridZIndex: 4
            },
            {
                title: {
                    text: null
                },
                labels: {
                    format: '{value:.1f} Wh',
                    x: 65,
                    y: -30,
                    useHTML: true
                },
                gridLineDashStyle: 'longdash',
                gridLineColor: '#e4e4e4',
                gridZIndex: 4,
                opposite: false,

            },
            {
                title: {
                    text: null
                },
                labels: {
                    format: '{value} L',
                    x: -45,
                    y: -30,
                    useHTML: true
                },
                gridLineDashStyle: 'longdash',
                gridLineColor: '#e4e4e4',
                gridZIndex: 4,
                opposite: true
            }
        ],
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        navigator: {
            enabled: false
        },
        rangeSelector: {
            buttons: [
                {
                    type: 'hour',
                    count: 1,
                    text: 'HOUR'
                }
            ],
            selected: 0,
            inputEnabled: false
        },
        series: this.getSeries()
    };
    return chartOpt;
  }
  constructor() { }


  drawChart () {
    const chart = new Highcharts.stockChart(this.getChartOptions());
    const btnEx = document.getElementsByClassName('setChartEx');
    Array.from(btnEx).forEach(function(element) {
        element.addEventListener ('click', function(){
            if (!chart) {
                return;
            }
            const extremes = chart.xAxis[0].getExtremes();
            const max = extremes.max;
            let min = 0;
            switch (this.getAttribute('data_set')) {
                case 'half_hour':
                    min = max - 1800000;
                break;
                case 'hour':
                    min = max - 3600000;
                break;
                case 'day':
                    min = max - 86400000;
                break;
                case 'week':
                    min = max - 604800000;
                break;
                case 'month':
                    min = max - 2592000000;
                break;
                case 'year':
                    min = max - 31104000000;
                break;
            }
            chart.xAxis[0].setExtremes(min, max);
            removeClassPressed(btnEx, 'pressed');
            this.className += ' pressed';
        });
    });

    function removeClassPressed ($btnEx, className) {
        Array.from($btnEx).forEach(($el: any) => {
            $el.className = $el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        });
    }
    const legend = document.getElementsByClassName('legend-chart');
    Array.from(legend).forEach($el => {
        $el.addEventListener('click', function(){
            const key = this.getAttribute('data_set');
            chart.series[key - 1].options.visible === false ? chart.series[key - 1].show() : chart.series[key - 1].hide();
        });
    });
  }

  ngOnInit() {
    this.drawChart();
  }
}
