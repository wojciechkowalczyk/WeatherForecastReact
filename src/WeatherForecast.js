import React from 'react';
import './App.css';
import Forecast from './Forecast';
import CityForm from './CityForm';
import MapPicker from './MapPicker';

class WeatherForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            initialCenter: {lng: -90.1056957, lat: 29.9717272}
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleLatLon = this.handleLatLon.bind(this);
    }

    handleUserInput(city) {
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
                    <MapPicker onClick={this.handleLatLon} initialCenter={this.state.initialCenter} />
                    <CityForm 
                        city={this.state.city}
                        onSubmit={this.handleUserInput}            
                        />
                    <Forecast lat={this.state.lat} lon={this.state.lon} city={this.state.city} />
                </div>
                );
    }
}

export default WeatherForecast;
