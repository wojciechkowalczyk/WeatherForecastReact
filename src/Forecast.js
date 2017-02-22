import React from 'react';
import './App.css';
import ForecastService from './ForecastService';
import Drawer from './Drawer';

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

        if ((nextProps.lat !== this.props.lat) || (nextProps.lon !== this.props.lon)) {
            this.forecastService.latLonCall(this, nextProps);
        }
    }

    render() {
        console.log('render() log \n\n' + this.state.forecastData);
        return (
                <Drawer data={this.state.forecastData} />
                );
    }
}

export default Forecast;
