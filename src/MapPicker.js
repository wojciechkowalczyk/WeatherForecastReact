import React from 'react';
import './App.css';

let google = window.google;

export default class MapPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: this.props.lat,
            lon: this.props.lon
        }
    }

    componentDidMount() {
        this.map = this.createMap()
        this.marker = this.createMarker()

        google.maps.event.addListener(this.map, 'click', (event) => this.handleClick(event))
    }

    componentDidUnMount() {
        google.maps.event.clearListeners(this.map, 'click')
    }

    createMap() {
        let mapOptions = {
            zoom: 10,
            center: this.mapCenter()
        }
        return new google.maps.Map(this.refs.mapCanvas, mapOptions)
    }

    mapCenter() {
        return new google.maps.LatLng(
                this.state.lat,
                this.state.lon
                )
    }

    createMarker() {
        return new google.maps.Marker({
            position: this.mapCenter(),
            map: this.map
        })
    }

    handleClick(event) {
        this.setState({
            lat: event.latLng.lat(),
            lon: event.latLng.lng()
        })

        this.marker.setPosition(new google.maps.LatLng(this.state.lat, this.state.lon));

        this.props.onClick(this.state.lat, this.state.lon, true);

        console.log('MapPicker -> handleClick() \n' + '\t state.lat: ' + this.state.lat + '\t state.lon: ' + this.state.lon);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.lat != this.state.lat
                || nextProps.lon != this.state.lon) {
            this.setState({
                lat: nextProps.lat,
                lon: nextProps.lon
            });
        }
    }

    componentDidUpdate(pastProps, pastState) {
        this.marker.setPosition(new google.maps.LatLng(this.state.lat, this.state.lon));
        this.map.setCenter(new google.maps.LatLng(this.state.lat, this.state.lon));

        console.log('MapPicker -> componentDidUpdate() \n' + '\t state.lat: ' + this.state.lat + '\t state.lon: ' + this.state.lon);
    }

    render() {
        return (
                <div 
                    className='map_picker' 
                    ref="mapCanvas"></div>
                );
    }
}
