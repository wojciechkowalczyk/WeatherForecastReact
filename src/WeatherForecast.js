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
    }

    handleUserInput(city) {
        this.setState({
            city: city
        });
    }

    render() {
        return (
                <div>
                    <MapPicker initialCenter={this.state.initialCenter} />
                    <CityForm 
                        city={this.state.city}
                        onSubmit={this.handleUserInput}            
                        />
                    <Forecast city={this.state.city} />
                </div>
                );
    }
}

export default WeatherForecast;
