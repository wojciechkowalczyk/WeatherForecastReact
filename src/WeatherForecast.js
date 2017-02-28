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
            lon: 19.9717272
        };

        this.handleCity = this.handleCity.bind(this);
        this.handleLatLon = this.handleLatLon.bind(this);
    }

    handleCity(city) {
        this.setState({
            city: city
        });
    }
    
    handleLatLon(lat, lon) {
        this.setState({
            lat: lat,
            lon: lon
        });
    }

    render() {
        return (
                <div>
                    <MapPicker onClick={this.handleLatLon} lat={this.state.lat} lon={this.state.lon} />
                    <CityForm 
                        city={this.state.city}
                        onSubmit={this.handleCity}            
                        />
                    <Forecast lat={this.state.lat} lon={this.state.lon} city={this.state.city} />
                </div>
                );
    }
}
