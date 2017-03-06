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

    cityCall(component, passedProps) {
        console.log('ForecastService -> cityCall() \n'
                + '\t passedProps.city: ' + passedProps.city
                + '\t passedProps.lat: ' + passedProps.lat
                + '\t passedProps.lon: ' + passedProps.lon);

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
        console.log('ForecastService -> latLonCall() \n'
                + '\t passedProps.city: ' + passedProps.city
                + '\t passedProps.lat: ' + passedProps.lat
                + '\t passedProps.lon: ' + passedProps.lon);

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
