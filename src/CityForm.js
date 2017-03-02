import React from 'react';
import './App.css';

export default class CityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: this.props.city
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            city: this.city.value
        });
    }

    handleSubmit(event) {
        this.props.onSubmit(
                this.city.value,
                true
                );
        event.preventDefault();
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            city: nextProps.city
        });
    }

    render() {
        return (
                <div className="city_form">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="Enter city ..."
                            value={this.state.city}
                            ref={(input) => this.city = input}
                            onChange={this.handleChange}
                            autoFocus="true"
                            />
                        <input 
                            type="submit" 
                            value="City forecast"
                            />
                    </form>
                </div>
                );
    }
}
