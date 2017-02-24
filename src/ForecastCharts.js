import React from 'react';
import './App.css';

export default class ForecastCharts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUpdate(nextProps, nextState) {
        if (typeof nextProps.data === "object") {
            if (nextProps.data !== this.props.data) {
                alert(nextProps.data.city.name);
            }
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
