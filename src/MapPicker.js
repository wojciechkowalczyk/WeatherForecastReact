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

        google.maps.event.addListener(this.map, 'zoom_changed', () => this.handleZoomChange())
    }

    componentDidUnMount() {
        google.maps.event.clearListeners(this.map, 'zoom_changed')
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

    handleZoomChange() {
        this.setState({
            zoom: this.map.getZoom()
        })
    }
}
