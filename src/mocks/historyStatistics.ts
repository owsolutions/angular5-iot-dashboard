export const HistoryStatistics = {
    title: 'Hall Tempreture History',
    subTitle: 'Show Hall Tempreture for now and others ...',
    unit: 'Centigrade',
    resultUnit: 'Avg',
    series: generateMockSeries()
};

function generateMockSeries() {
    const series = [];
    for (let i = 26; i >= 1; i--) {
        series.push({
            date: new Date('3/' + i + '/2018'),
            value: ((Math.random() * 30) + 8).toFixed(2) + '°',
            changeRate: {
                status: Math.random() < 0.5 ? 'up' : 'down',
                value: ((Math.random() * 3) + 1).toFixed(2)
            },
            data: generateMockData()
        });
    }
    return series;
}

function generateMockData() {
    const datas = [];
    for (let i = 1; i <= 30; i++) {
        datas.push(parseFloat(((Math.random() * 30) + 8).toFixed(2)));
    }
    return datas;
}
