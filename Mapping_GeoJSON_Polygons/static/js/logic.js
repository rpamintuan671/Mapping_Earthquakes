// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);


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


// Skill Drill 13.5.3
// // Edit your L.geoJson() layer to add a popup marker that displays all airports' codes and names.

// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data, {
//       onEachFeature: function(feature, layer) {
//           console.log(layer);
//           layer.bindPopup("<h3> Airport code: " + feature.properties.faa + "</h3> <hr><h3> Airport name: "
//                + feature.properties.name + "</h3>");
//       }
//   }).addTo(map);
// });

   
 

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

// We create the navigation day view tile layer that will be an option for our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the navigation night view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer. Day navigation matches 
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [satelliteStreets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
// let torontoData = "https://raw.githubusercontent.com/rpamintuan671/Mapping_Earthquakes/main/torontoRoutes.json"

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/rpamintuan671/Mapping_Earthquakes/main/torontoNeighborhoods.json"

// Create a style for the lines.
let myStyle = {
  color:"blue",
  weight: 1
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data,{
    style : myStyle,
    onEachFeature : function(feature,layer) {
  layer.bindPopup("<h3> Area Name: "+ feature.properties.AREA_NAME + "</h3> <hr> <h3> Area ID: " +feature.properties.AREA_S_CD +"</h3>");
  }
  }).addTo(map);
  });

  // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data, {
//      onEachFeature: function(feature, layer) {
//          console.log(layer);
//          layer.bindPopup("<h3> Airport code: " + feature.properties.faa + "</h3> <hr><h3> Airport name: "
//               + feature.properties.name + "</h3>");
//      }
//  }).addTo(map);
// });