const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker.js');

mapboxgl.accessToken = "pk.eyJ1IjoiZ3JpbmZpc2giLCJhIjoiY2o4YnFtMjVmMDByeDMzc2ZvamcwZ2JtOSJ9.mOcgdBFWBTsy8pxtI6Dsig";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack coordinates
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

buildMarker("activity", [-74.009, 40.705]).addTo(map);

//module.exports = map;

console.log("Why hello there!");