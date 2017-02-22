import React from 'react';
import './App.css';
import ForecastService from './ForecastService';

class Forecast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {forecastData: ''};
        this.forecastService = new ForecastService();
    }

    apiCall(passedProps) {
        this.forecastService.apiCall(this, passedProps);
    }

    componentWillMount() {
        this.apiCall(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.apiCall(nextProps);
        }
    }

    render() {
        console.log('render() log \n\n' + this.state.forecastData);
        /*return (
                <div>
                    <pre>{this.state.forecastData}</pre>
                </div>
                );*/
        return null;
    }
}

export default Forecast;
