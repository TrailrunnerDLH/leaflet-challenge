// Store json url in variable
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"

function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place +
        "</h3><hr><p>" + new Date(feature.properties.time) + "</p>" +
        "<hr> <p> Earthquake Magnitude: " + feature.properties.mag + "</p>")
}

// Use D3 library to fetch data
d3.json(url).then(function (data) {

    let long = data.features[0].geometry.coordinates[0];
    console.log(long);
    let lat = data.features[0].geometry.coordinates[1]
    console.log(lat);
    let depth = data.features[0].geometry.coordinates[2];
    console.log(depth);
    let mag = data.features[0].properties.mag;
    console.log(mag);


    console.log(data.features[1]);

    var earthquakes = L.geoJSON(data.features, {
        pointToLayer: function (feature, coordinates) {
            // console.log(feature)
            console.log(coordinates);
            return L.circle(coordinates);
        }
    })

    //Create base Leaflet map
    let myMap = L.map("map", {
        center: [40.7128, -74.0059],
        zoom: 2,
        layers: [earthquakes]
    })
    //Create base tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreeMap</a> contributors'
    }).addTo(myMap)

});