import React from 'react';
import './App.css';
import ForecastService from './ForecastService';
import Drawer from './Drawer';
import ForecastCharts from './ForecastCharts';

export default class Forecast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            forecastData: {
                city: {
                    name: ''
                }
            },
            openDrawer: false
        };
        this.forecastService = new ForecastService();

        this.onDrawerClick = this.onDrawerClick.bind(this);
    }

    apiCall(passedProps) {
        this.forecastService.apiCall(this, passedProps);
    }

    componentWillMount() {
        this.apiCall(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.apiCall) {
            if (nextProps.city !== this.props.city) {
                this.apiCall(nextProps);
            }

            if ((nextProps.lat !== this.props.lat) || (nextProps.lon !== this.props.lon)) {
                this.forecastService.latLonCall(this, nextProps);
            }

            this.setState({openDrawer: true});
        }
    }

    componentWillUpdate(nextProps, nextState) {
        this.props.onUpdate(nextState);
    }

    onDrawerClick(event) {
        this.setState({openDrawer: false});
    }

    render() {
        //render() log \n\n' + JSON.stringify(this.state.forecastData, null, 4));
        return (
                <Drawer 
                    title={this.state.forecastData.city.name + ' forecast'} 
                    open={this.state.openDrawer}
                    onClick={this.onDrawerClick}
                    >
                    <ForecastCharts 
                        data={this.state.forecastData} 
                        />
                </Drawer>
                );
    }
}
