// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>" + "Airport: " + feature.properties.faa + "</h2>" + "<h2>" + "Airport name: " + feature.properties.name +"</h2>");
   }
}).addTo(map);
   
 

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
// SFO - AUS - YYZ - JFK
// let line = [
  //[37.6213, -122.3790],
  //[30.1975, -97.6664],
  //[43.6777, -79.6248],
  //[40.6413, -73.7781]
  
//];

// Make the route a blue dashed line, with a weight of 4 and opacity of 0.5 on the light map.
//L.polyline(line, {
  //color: "blue",
  //opacity: 0.5,
  //dashArray: '2, 5'
// }).addTo(map);

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
  // color: "blue"
// }).addTo(map);

  // Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
  // console.log(city);
  // L.circleMarker(city.location, {
    // radius: city.population/200000,
    // color: "orange",
    // fillColor: "orange",
    // lineweight: 4
  // })

  
  // commas added as separator on population (city.population.toLocaleString)
  
  // .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  // .addTo(map);
// });


// Using MAPBLOX STYLES API
// We create the tile layer that will be the background of our map.
// Light Background 
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// Default background - Street view
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);



