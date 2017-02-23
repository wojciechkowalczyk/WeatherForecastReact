import React from 'react';
import './App.css';

export default class ForecastCharts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    <div id="temperature_chart" className="forecast_chart"></div>
                    <div id="percentage_quantities_chart" className="forecast_chart"></div>
                    <div id="pressure_chart" className="forecast_chart"></div>
                    
                    <div className="forecast_charts">
                        <div>
                            <pre>{this.props.data}</pre>
                        </div>
                    </div>
                </div>
                );
    }
}
