import React from 'react';
import './App.css';
import Forecast from './Forecast';
import CityForm from './CityForm';

class WeatherForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
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
