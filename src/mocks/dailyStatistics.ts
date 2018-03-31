export const DailyStatistics = {
    title: 'Bedroom Tempreture',
    subTitle: 'Show Today Live Statistics',
    for: 'Tempreture',
    unit: '°C',
    chartColor: 'orange',
    series: generateMockSeries()
};

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
