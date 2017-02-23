import React from 'react';
import './App.css';

export default class ForecastCharts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="forecast_charts">
                    <div>
                        <pre>{this.props.data}</pre>
                    </div>
                </div>
                );
    }
}
