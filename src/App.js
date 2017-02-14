import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Forecast extends Component {
    constructor() {
        super();

        this.state = {data: ''};
        let apiKey = '80e6daa3a673115878aba8e33628330e';
        this.beforeCityQueryPart = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
        this.afterCityQueryPart = '&mode=json&units=metric&cnt=7&apikey=' + apiKey;
    }

    componentWillMount() {
        let self = this;
        this.query = this.beforeCityQueryPart + this.props.city + this.afterCityQueryPart;
        axios.get(this.query)
                .then(function (response) {
                    //let result = response.data;
                    //let result = JSON.parse(JSON.stringify(response.data));
                    let result = JSON.stringify(response.data, null, 4);

                    alert(result);
                    console.log(result);
                    self.setState({data: result});
                })

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

class App extends Component {
    constructor() {
        super();
        this.city = 'Oslo';
    }

    render() {
        return (
                <div>
                    <Forecast city={this.city} />
                </div>
                );
    }
}

export default App;
