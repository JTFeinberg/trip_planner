const mapboxgl = require("mapbox-gl");
const marker = require('./marker.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiamZlaW5iZXJnIiwiYSI6ImNqZ3Mzd2ZodDA1OGMyeW1oNWg2OTU5d3QifQ.4ssY9ZSYcwnWqvVcX_GQJw';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


marker.addMarker("hotel", [-74.009151, 40.705086]).addTo(map);
