import React from 'react';
import './App.css';
import ForecastChartsWrapper from './ForecastChartsWrapper';

export default class ForecastCharts extends React.Component {
    constructor(props) {
        super(props);

        this.forecastChartsWrapper = new ForecastChartsWrapper();
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.data !== this.props.data && nextProps.data.city.name !== '') {
            this.forecastChartsWrapper.populateCharts(nextProps.data);
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
