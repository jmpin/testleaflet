import React, { Component, createRef } from 'react';
import { Map, withLeaflet, Marker, Popup } from 'react-leaflet';
import MapLayout from './mapLayout';
import ShowLayers from './showLayers';
import ShowMapLatLong from './showLatLong';

export default class MyMap extends Component {
    state = {
        center: {
            lat: -6.1623,
            lng: 39.1877 ,
        },
        marker: {
            lat: -6.1623,
            lng: 39.1877,
        },
        zoom: 18,
    }

    refmarker = createRef(this.state.marker)

    render() {
        const position = [this.state.center.lat, this.state.center.lng];
        const markerPosition = [this.state.marker.lat, this.state.marker.lng];

        const ShowLatLong = withLeaflet(ShowMapLatLong);

        return (
            <React.Fragment>
                <MapLayout>
                    <div>
                        <Map center={position}
                            zoom={this.state.zoom}
                            style={{ height: '98vh', width: '100wh' }}
                            attributionControl={true}
                        >
                            <ShowLayers />
                            <ShowLatLong></ShowLatLong>
                            <Marker
                                position={markerPosition}
                                ref={this.refmarker}>
                            </Marker>
                        </Map>
                    </div>
                </MapLayout>
            </React.Fragment>
        );
    }
}