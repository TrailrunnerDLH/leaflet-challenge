// Store json url in variable
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"

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
  
  });