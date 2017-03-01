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

    apiCall(component, passedProps) {
        this.cityQuery =
                this.beforeCityQueryPart
                + passedProps.city
                + this.afterCityQueryPart;

        axios.get(this.cityQuery)
                .then(function (response) {
                    let result = response.data;
                    component.setState({forecastData: result});
                });
    }

    latLonCall(component, passedProps) {
        this.latLonQuery =
                this.beforeLatQueryPart
                + passedProps.lat
                + this.innerQueryPart
                + passedProps.lon
                + this.afterLonQueryPart;

        axios.get(this.latLonQuery)
                .then(function (response) {
                    let result = response.data;
                    component.setState({forecastData: result});
                });
    }
}
