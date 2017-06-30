import { Component, OnInit } from '@angular/core';
declare var Highcharts: any;
import { times, random} from 'lodash';

@Component({
  selector: 'app-index-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public places: Array<any>;
  public largeWidgets: Array<any>;
  public chart: any;
  getMock (count = 300) {
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
            name: 'Power',
            type: 'area',
            data: this.getMock(),
            yAxis: 1,
            gapSize: 5,
            tooltip: {
                valueSuffix: ' Wh',
            },
            marker: {
                enabled: false,
                fillColor: '#FFF',
                lineColor:'#52dba7',
                lineWidth: 1,
                symbol: 'circle',
                radius: 3
            },
            fillColor: 'rgba(248, 250, 249, 0.8)',
            lineColor: '#52dba7'
        },
        {
            name: 'Consumption',
            type: 'area',
            gapSize: 5,
            data: this.getMock(),
            marker: {
                enabled: false,
                fillColor: '#FFF',
                lineColor:'#2bc661',
                lineWidth: 1,
                symbol: 'circle',
                radius: 3
            },
            tooltip: {
                valueSuffix: ' kWh'
            },
            
            fillColor: 'rgba(232, 245, 236, 0.8)',
            lineColor: '#2bc661'
        },
        {
            name: 'Water',
            type: 'area',
            data: this.getMock(),
            gapSize: 5,
            yAxis: 2,
            tooltip: {
                valueDecimals: 2,
                valueSuffix: ' L'
            },
            marker: {
                enabled: false,
                fillColor: '#FFF',
                lineColor:'rgb(0, 212, 252)',
                lineWidth: 1,
                symbol: 'circle',
                radius: 3
            },
            fillColor: 'rgba(230, 251, 255, 0.7)',
            lineColor: 'rgb(0, 212, 252)',
            threshold: null
        }
    ];
  }
  getChartOptions () {
    const chartOpt = {
        chart: {
            backgroundColor: 'transparent',
            type: 'areaspline',
            renderTo: 'container',
            margin: 10
        },
        title: {
            text: 'ENERGY',
            align: 'left',
            style: {
                color: '#9ea9bf',
                fontSize: "22px"
            },
            y:6
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
                    format: '{value:.1f} Wh',
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
                    format: '{value:.1f} kWh',
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
    const chart = this.chart = new Highcharts.stockChart(this.getChartOptions());
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
    
  }

  mockData () {
      return [
          {
              'title': 'Power',
              'icon': 'icon icon-flash',
              'value': random(300, 600),
              'unit': 'Wh'
          },
          {
              'title': 'Consumption',
              'icon': 'icon icon-temperatire',
              'value': random(5500, 6000) / 100,
              'unit': 'kWh'
          },
          {
              'title': 'Water',
              'icon': 'icon icon-tint',
              'value': random(200, 800) / 100,
              'unit': 'L'
          }
      ];
  }

  ngAfterViewInit(){
    const chart = this.chart;
    const legend = document.getElementsByClassName('legend-chart');
    Array.from(legend).forEach($el => {
        $el.addEventListener('click', function(){
            const key = this.getAttribute('data-set');
            if(chart.series[key].options.visible === false) {
                this.classList.remove('deActive');
                chart.series[key].show()  
            }else{
                this.classList.add('deActive');
                chart.series[key].hide();
            }
        });
    });
  }

  ngOnInit() {
    this.largeWidgets = this.mockData();
    this.places = [
        {name: 'Kitchen' , 'icon': 'four-cooking-accessories-set-for-kitchen.svg'},
        {name: 'Bathroom' , 'icon': 'bathtub.svg'},
        {name: 'Master bedrrom', 'icon': 'fireplace.svg'},
        {name: 'Living room', 'icon': 'living-room.svg'},
        {name: 'Conference room', 'icon': 'conference.svg'}
    ];
    this.drawChart();
  }
}
