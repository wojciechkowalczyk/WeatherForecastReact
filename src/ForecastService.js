import axios from 'axios';

class ForecastService {
    constructor() {
        let apiKey = '2bbc0760023b04a468c32abf8773fa75';
        this.beforeCityQueryPart = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
        this.afterCityQueryPart = '&mode=json&units=metric&cnt=7&apikey=' + apiKey;
    }

    apiCall(component, passedProps) {
        this.query = this.beforeCityQueryPart + passedProps.city + this.afterCityQueryPart;
        axios.get(this.query)
                .then(function (response) {
                    let result = JSON.stringify(response.data, null, 4);

                    console.log(result);
                    component.setState({forecastData: result});
                });
    }
}

export default ForecastService;
