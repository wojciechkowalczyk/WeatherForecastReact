import React from 'react';
import './App.css';
import axios from 'axios';

class Forecast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {data: ''};
        let apiKey = '80e6daa3a673115878aba8e33628330e';
        this.beforeCityQueryPart = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
        this.afterCityQueryPart = '&mode=json&units=metric&cnt=7&apikey=' + apiKey;
    }

    apiCall() {
        let self = this;
        this.query = this.beforeCityQueryPart + this.props.city + this.afterCityQueryPart;
        axios.get(this.query)
                .then(function (response) {
                    //let result = response.data;
                    //let result = JSON.parse(JSON.stringify(response.data));
                    let result = JSON.stringify(response.data, null, 4);

                    //alert(result);
                    console.log(result);
                    self.setState({data: result});
                });
    }

    componentWillMount() {
        this.apiCall();
    }

    componentWillUpdate() {
        this.apiCall();
    }

    render() {
        let data = this.state.data;
        return (
                <div>
                    <pre>{data}</pre>
                </div>
                );
    }
}

export default Forecast;
