This example is to start the integration of react-leaflet with leaflet-geoman and Next.js

## Getting Started

First, run the development server:

```bash
yarn install
# and
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Select the Map url

Move the mouse and you will see the latitude and longitude in the botton left corner.

showLatLong.js extends MapControl. With leaflet-geoman should be something similar. We need to extend it at MapControl too.