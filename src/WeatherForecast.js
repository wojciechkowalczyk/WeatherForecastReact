import React from 'react';
import './App.css';
import Forecast from './Forecast';
import CityForm from './CityForm';
import MapPicker from './MapPicker';

export default class WeatherForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            lat: 50.1056957,
            lon: 19.9717272,
            apiCall: false
        };

        this.handleCity = this.handleCity.bind(this);
        this.handleLatLon = this.handleLatLon.bind(this);
        this.handleForecastUpdate = this.handleForecastUpdate.bind(this);
    }

    handleCity(city, apiCall) {
        this.setState({
            city: city,
            apiCall: apiCall
        });
    }

    handleLatLon(lat, lon, apiCall) {
        this.setState({
            lat: lat,
            lon: lon,
            apiCall: apiCall
        });
    }

    handleForecastUpdate(forecastState) {
        if (forecastState.forecastData.city.name != this.state.city
                || forecastState.forecastData.city.coord.lat != this.state.lat
                || forecastState.forecastData.city.coord.lon != this.state.lon) {
            this.setState({
                city: forecastState.forecastData.city.name,
                lat: forecastState.forecastData.city.coord.lat,
                lon: forecastState.forecastData.city.coord.lon,
                apiCall: false
            });
        }

        console.log('WeatherForecast -> handleForecastUpdate() \n'
                + '\t city: ' + this.state.city
                + '\t lat: ' + this.state.lat
                + '\t lon: ' + this.state.lon);
    }

    render() {
        return (
                <div>
                    <MapPicker 
                        lat={this.state.lat} 
                        lon={this.state.lon}
                        onClick={this.handleLatLon}
                        />
                    <CityForm 
                        city={this.state.city}
                        onSubmit={this.handleCity}         
                        />
                    <Forecast 
                        lat={this.state.lat} 
                        lon={this.state.lon} 
                        city={this.state.city}
                        apiCall={this.state.apiCall}
                        onUpdate={this.handleForecastUpdate}
                        />
                </div>
                );
    }
}
