import React from 'react';
import './App.css';
import Forecast from './Forecast';

class WeatherForecast extends React.Component {
    constructor() {
        super();
        this.city = 'Oslo';
    }

    render() {
        return (
                <div>
                    <Forecast city={this.city} />
                </div>
                );
    }
}

export default WeatherForecast;
