L.mapbox.accessToken = 'pk.eyJ1IjoibGF1cmVuYW5jb25hIiwiYSI6IjYxNGUxN2ExMmQzZWVkMThhZjY2MGE0YmQxZWZlN2Q2In0.18vQmCC7jmOvuHNnDh8Ybw';
// Construct a bounding box
//var southWest = L.latLng(39.864439, -75.387541),
//    northEast = L.latLng(40.156325, -74.883544),
//    bounds = L.latLngBounds(southWest, northEast);

var map = L.mapbox.map('map', 'laurenancona.2ff8c154', { // Popemap polygons baselayer
  // set that bounding box as maxBounds to restrict moving the map (http://leafletjs.com/reference.html#map-maxbounds)
//  maxBounds: bounds,
  maxZoom: 17,
  minZoom: 13,
  center: [39.9572, -75.1575],
  zoom: 14
})

.addControl(L.mapbox.geocoderControl('mapbox.places', {
  autocomplete: true
}));

//var secureareas = L.mapbox.featureLayer().addTo(map);
//secureareas.loadURL('data/secure-areas.geojson')

var mapLayers = [],
    layerNames = ['highways','walking','screens', 'hospitals','transit','entrances','poperide','parking']

// Here be our data layers

var highways = L.mapbox.featureLayer(); //.addTo(map);
highways.loadURL('data/highways.geojson');
mapLayers.push(highways);

var walking = L.mapbox.featureLayer(); //.addTo(map);
walking.loadURL('data/walking.geojson');
mapLayers.push(walking);

var screens = L.mapbox.featureLayer();//.addTo(map);
screens.loadURL('data/jumbotrons.geojson');
mapLayers.push(screens);

var hospitals =  L.mapbox.featureLayer();//.addTo(map);
hospitals.loadURL('data/hospitals.geojson');
mapLayers.push(hospitals);

var transit = L.mapbox.featureLayer(); //.addTo(map);
transit.loadURL('data/transit-locations.geojson');
mapLayers.push(transit);

var entrances = L.mapbox.featureLayer(); //.addTo(map);
entrances.loadURL('https://gist.githubusercontent.com/laurenancona/222ac7fbcb959208a93a/raw/b8953400ac6c945380203e98d6107505f9e9f0c9/entrances.geojson');
mapLayers.push(entrances);

var poperide = L.mapbox.featureLayer(); //.addTo(map);
poperide.loadURL('https://gist.githubusercontent.com/laurenancona/51985e88ee9e6df7355a/raw/bc1e5536e0cd01d167615bce9eff2a50bed881a0/poperide.geojson');
mapLayers.push(poperide);

var parking = L.mapbox.featureLayer().addTo(map);
parking.loadURL('data/parking.geojson');
mapLayers.push(parking);

layerNames.forEach(function(item, index){
  var layer = mapLayers[index], layerName = layerNames[index];
  document.getElementById(layerName).addEventListener('change', function(){
    if (document.getElementById(layerName).checked)
      layer.addTo(map);
    else
      map.removeLayer(layer);
  });
});

// Locate user
L.control.locate().addTo(map);

//============================================================//

// Listen for individual marker clicks.
entrances.on('click', function (e) {
  e.layer.closePopup(); // Force the popup closed.
  var feature = e.layer.feature;
  var content = '<div><strong>' + feature.properties.name + '</strong>' +
    '<p>Ticketed? ' + feature.properties.ticketed + '</p></div>';
  info.innerHTML = content;
});

transit.on('click', function (e) {
  e.layer.closePopup();
  var feature = e.layer.feature;
  var content = '<div><strong>' + feature.properties.type + ' | ' + feature.properties.desc + '<strong>' +
    '<p>' + feature.properties.name + '</p>' +
    '<p>' + feature.properties.Fare + '</p>' +
    '<p>' + feature.properties.Tickets + '</p>' +
    '<p><a href=' + '"' + feature.properties.info + '"' + ' target="_blank" /><strong>VISIT SITE</strong></a></p></div>';
  info.innerHTML = content;
});

poperide.on('click', function (e) {
  e.layer.closePopup();
  var feature = e.layer.feature;
  var content = '<div><strong>Pope Bike Ride</strong>' +
          '<p>' + feature.properties.name + '</p></div>';

  info.innerHTML = content;
});

parking.on('click', function (e) {
  e.layer.closePopup();
  var feature = e.layer.feature;
  var content = '<div><strong>' + feature.properties.name + '</strong>' +
    '<p> Deadline to move vehicles: ' + '</p>' +
    '<p>' +feature.properties.desc + '</p>' +
    '<p><a href="http://www.philapark.org/2015/09/the-papal-visit-what-the-ppa-is-doing/" target="_blank" /><strong>VISIT SITE</strong></a></p></div>';
  info.innerHTML = content;
});

highways.on('click', function (e) {
  e.layer.closePopup();
  var feature = e.layer.feature;
  var content = '<div><strong>' + feature.properties.name + '</strong>' +
    '<p> Closed to inbound traffic</p></div>';
  info.innerHTML = content;
});

hospitals.on('click', function (e) {
  e.layer.closePopup();
  var feature = e.layer.feature;
  var content = '<div><strong>' + feature.properties.name + '</strong>' +
    '<p>' + feature.properties.address + '</p>' +
    '<p> PHILADELPHIA, PA ' + feature.properties.zip + '</p>' +
    '<p>' + feature.properties.phone + '</p></div>';
  info.innerHTML = content;
});


// Clear the tooltip when map is clicked.
map.on('move', empty);

// Trigger empty contents when the script has loaded on the page.
empty();

function empty() {
  info.innerHTML = '<div><p><strong>Choose layers at left, then click features for info</strong></p></div>';
}

// UTF Grid interactivity, testing w/ multiple layers
//    var blocksTiles = blocks.addTo(map);
    var infoGrid = L.mapbox.gridLayer('laurenancona.2ff8c154').addTo(map); //,
//        lotsGrid = L.mapbox.gridLayer('laurenancona.fc7871b8').addTo(map);
//    var blocksControl = L.mapbox.gridControl(blocksGrid	).addTo(map); //,
//        lotsControl = L.mapbox.gridControl('laurenancona.fc7871b8').addTo(map);

var hash = L.hash(map); // append (z)/(x)/(y) to URL for deep linking to locations


// ht @konklone for console.log-fication example
// for sad, sad IE:
if (window._ie) {
  console.log("Hey there.");
  console.log("If you're into this kind of thing and want to help out, let me know.");
  console.log("http://github.com/laurenancona or @laurenancona");
}

// otherwise, style it up:
else {
  var styles = {
    medium: "font-size: 10pt, font-weight: bold;color: #1B3B56",
    medium_link: "font-size: 10pt; font-weight: bold; color: #027ea4",
  };
  console.log("%cHey there", styles.medium);
  console.log("%cIf you're into this kind of thing and want to help out, let me know.", styles.medium);
  console.log("%chttp://github.com/laurenancona or @laurenancona", styles.medium);
}