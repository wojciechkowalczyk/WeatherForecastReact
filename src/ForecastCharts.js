import React from 'react';
import './App.css';

let google = window.google;

export default class ForecastCharts extends React.Component {
    constructor(props) {
        super(props);
        google.charts.load('current', {packages: ['corechart']});
    }

    populateCharts(forecast) {
        var forecastArray = forecast;
        var cnt = forecastArray.cnt;
        var list = new Array();
        list = forecastArray.list;

        let temperatureArrayHeader = ['Date', 'morning', 'day', 'evening', 'night', 'minimum', 'maximum'];
        let temperatureArray = new Array();
        temperatureArray[0] = temperatureArrayHeader;

        let percentageArrayHeader = ['Date', 'humidity', 'clouds'];
        let percentageArray = new Array();
        percentageArray[0] = percentageArrayHeader;
        let pressureArrayHeader = ['Date', 'pressure'];
        let pressureArray = new Array();
        pressureArray[0] = pressureArrayHeader;

        /*windArrayHeader = ['Date', 'humidity', 'clouds'];  
         windArray = new Array();
         windArray[0] = windArrayHeader;*/

        for (let i = 0; i < cnt; i++) {
            temperatureArray[i + 1] = new Array();
            temperatureArray[i + 1][0] = this.day(list[i].dt);
            temperatureArray[i + 1][1] = list[i].temp.morn;
            temperatureArray[i + 1][2] = list[i].temp.day;
            temperatureArray[i + 1][3] = list[i].temp.eve;
            temperatureArray[i + 1][4] = list[i].temp.night;
            temperatureArray[i + 1][5] = list[i].temp.min;
            temperatureArray[i + 1][6] = list[i].temp.max;
            percentageArray[i + 1] = new Array();
            percentageArray[i + 1][0] = this.day(list[i].dt);
            percentageArray[i + 1][1] = list[i].humidity;
            percentageArray[i + 1][2] = list[i].clouds;
            pressureArray[i + 1] = new Array();
            pressureArray[i + 1][0] = this.day(list[i].dt);
            pressureArray[i + 1][1] = list[i].pressure;
        }

        this.drawTemperature(temperatureArray);
        this.drawPercentageQuantities(percentageArray);
        this.drawPressure(pressureArray);
    }

    drawTemperature(temperatureArray) {
        var data = google.visualization.arrayToDataTable(temperatureArray);
        var options = {
            title: 'Temperature',
            vAxis: {title: 'Celsius degrees'},
            //hAxis: {title: 'Day'},
            seriesType: 'bars',
            series: {
                4: {type: 'line'},
                5: {type: 'line'}
            }
        };
        var chart = new google.visualization.ComboChart(document.getElementById('temperature_chart'));
        chart.draw(data, options);
    }

    drawPercentageQuantities(percentageArray) {
        var data = google.visualization.arrayToDataTable(percentageArray);
        var options = {
            title: 'Humidity and Clouds',
            vAxis: {title: 'percentages', titleTextStyle: {color: '#333'}},
            //vAxis: {minValue: 0}
        };
        var chart = new google.visualization.AreaChart(document.getElementById('percentage_quantities_chart'));
        chart.draw(data, options);
    }

    drawPressure(pressureArray) {
        var data = google.visualization.arrayToDataTable(pressureArray);
        var options = {
            title: 'Pressure',
            vAxis: {title: 'hPa', titleTextStyle: {color: '#333'}},
            //vAxis: {minValue: 0}
        };
        var chart = new google.visualization.AreaChart(document.getElementById('pressure_chart'));
        chart.draw(data, options);
    }

    day(unix_timestamp) {
        var day = new Date(unix_timestamp * 1000);
        var dd = day.getDate();
        var mm = day.getMonth() + 1;
        var yyyy = day.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var day = dd + '/' + mm + '/' + yyyy;
        return day;
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.data !== this.props.data && nextProps.data.city.name !== '') {
            this.populateCharts(nextProps.data);
        }
    }

    render() {
        return (
                <div>
                    <div id="temperature_chart" className="forecast_chart"></div>
                    <div id="percentage_quantities_chart" className="forecast_chart"></div>
                    <div id="pressure_chart" className="forecast_chart"></div>
                
                    <div className="forecast_charts">
                        <div>
                            <pre>{JSON.stringify(this.props.data, null, 4)}</pre>
                        </div>
                    </div>
                </div>
                );
    }
}
