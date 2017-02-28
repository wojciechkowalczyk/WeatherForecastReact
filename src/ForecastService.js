import axios from 'axios';

export default class ForecastService {
    constructor() {
        let apiKey = '2bbc0760023b04a468c32abf8773fa75';

        this.beforeCityQueryPart = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
        this.afterCityQueryPart = '&mode=json&units=metric&cnt=7&apikey=' + apiKey;

        this.beforeLatQueryPart = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=';
        this.innerQueryPart = '&lon=';
        this.afterLonQueryPart = '&mode=json&units=metric&cnt=7&apikey=' + apiKey;
    }

    apiCall(component, props) {
        this.query = this.beforeCityQueryPart + props.city + this.afterCityQueryPart;
        axios.get(this.query)
                .then(function (response) {
                    //let result = JSON.stringify(response.data, null, 4);
                    let result = response.data;

                    //console.log('ForecastService log \n\n' + result);
                    component.setState({forecastData: result});
                });
    }

    latLonCall(component, props) {
        this.latLonQuery = this.beforeLatQueryPart + props.lat + this.innerQueryPart + props.lon + this.afterLonQueryPart;
        axios.get(this.latLonQuery)
                .then(function (response) {
                    //let result = JSON.stringify(response.data, null, 4);
                    let result = response.data;

                    //console.log('ForecastService lat lon log \n\n' + result);
                    component.setState({forecastData: result});
                });
    }
}
