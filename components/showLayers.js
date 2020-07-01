import React from 'react';
import { LayersControl, TileLayer } from 'react-leaflet';

const { BaseLayer, Overlay } = LayersControl;

const MostraLayers = () => {
    return (
        <React.Fragment>
            <LayersControl position='topright'>
                <BaseLayer checked name="OpenStreetMap">
                    <TileLayer
                        attribution='&amp;copy <a href="https://www.openstreetmap.org">OSM</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </BaseLayer>
            </LayersControl>
        </React.Fragment>
    )
};

export default MostraLayers;