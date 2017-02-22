import React from 'react';
import './App.css';

let google = window.google;

export default class MapPicker extends React.Component {
    state = {zoom: 10};

    static propTypes() {
        initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
    }

    render() {
        return (
                <div className='map_picker' ref="mapCanvas"></div>
                );
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
            zoom: this.state.zoom,
            center: this.mapCenter()
        }
        return new google.maps.Map(this.refs.mapCanvas, mapOptions)
    }

    mapCenter() {
        return new google.maps.LatLng(
                this.props.initialCenter.lat,
                this.props.initialCenter.lng
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
            lon: event.latLng.lng(),
        })

        this.marker.setPosition(new google.maps.LatLng(this.state.lat, this.state.lon));

        console.log('MapPicker lat lon \n' + this.state.lat + '\n' + this.state.lon);
    }
}
