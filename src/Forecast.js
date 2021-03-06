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
                    name: '',
                    coord: {
                        lat: 50,
                        lon:20
                    }
                }
            },
            openDrawer: false
        };
        this.forecastService = new ForecastService();

        this.onDrawerClick = this.onDrawerClick.bind(this);
    }

    componentWillMount() {
        this.forecastService.cityCall(this, this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.apiCall) {
            if (nextProps.city != this.props.city) {
                this.forecastService.cityCall(this, nextProps);
            }

            if ((nextProps.lat != this.props.lat) || (nextProps.lon != this.props.lon)) {
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
        //console.log('Forecast -> render() \n\t state.forecastData: \n\n' + JSON.stringify(this.state.forecastData, null, 4));
        console.log('Forecast -> render() \n\t state.forecastData.city.name: ' + this.state.forecastData.city.name
                + '\t state.forecastData.city.coord.lat: ' + this.state.forecastData.city.coord.lat
                + '\t state.forecastData.city.coord.lon: ' + this.state.forecastData.city.coord.lon);
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
