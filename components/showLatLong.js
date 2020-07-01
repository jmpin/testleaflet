import { MapControl } from 'react-leaflet';
import L from 'leaflet';

class ShowLatLong extends MapControl {
    constructor(props) {
        super(props);
        props.leaflet.map.addEventListener("mousemove", ev => {
            this.panelDiv.innerHTML = `<h2><span>Lat: ${ev.latlng.lat.toFixed(
                4
            )}</span>&nbsp;<span>Lng: ${ev.latlng.lng.toFixed(4)}</span></h2>`;
        });
        console.log ("constructor props: ", this.props)
    }

    //Whatever leaflet element this function return it will be assigned to this.leafletElement property.
    createLeafletElement() {
        const MapInfo = L.Control.extend({
            onAdd: (map) => {
                this.panelDiv = L.DomUtil.create('div', 'info');
                return this.panelDiv;
            }
        });
        console.log ("createLeafletElement props: ", this.props)
        return new MapInfo({ position: 'bottomleft' });
    }
}

export default ShowLatLong