L.mapbox.accessToken = 'pk.eyJ1IjoibGF1cmVuYW5jb25hIiwiYSI6IjYxNGUxN2ExMmQzZWVkMThhZjY2MGE0YmQxZWZlN2Q2In0.18vQmCC7jmOvuHNnDh8Ybw';
// Construct a bounding box
var southWest = L.latLng(39.864439, -75.387541),
  northEast = L.latLng(40.156325, -74.883544),
  bounds = L.latLngBounds(southWest, northEast);

var map = L.mapbox.map('map', 'laurenancona.2ff8c154', { // Popemap polygons baselayer
  // set that bounding box as maxBounds to restrict moving the map (http://leafletjs.com/reference.html#map-maxbounds)
  maxBounds: bounds,
  maxZoom: 17,
  minZoom: 13
})

.addControl(L.mapbox.geocoderControl('mapbox.places', {
  autocomplete: true
}));


// Locate user
L.control.locate().addTo(map);

map.fitBounds(bounds); // zoom/snap the map to that bounding box


// I do not want to do this:

// var points = L.mapbox.tileLayer('laurenancona.4ae9c933').addTo(map);
// blocks = L.mapbox.tileLayer('laurenancona.fc7871b8'),
// legend = map.legendControl.addLegend(document.getElementById('legend').innerHTML); // add legend		
//lots			= L.mapbox.featureLayer('').addTo(map);

// Set our icon styles
//var screenIcon = L.icon({
//			iconUrl: 'img/icons/square-18.png',
//			iconSize: [15, 15],
//            color: '#FFF',
//			iconAnchor: [16, 37],
//			popupAnchor: [0, -28]
//		});
//
//function onEachFeature(feature, layer) {
//			var popupContent = "<p>I started out as a GeoJSON " +
//					feature.geometry.type + ", but now I'm a Leaflet vector!</p>";
//
//			if (feature.properties && feature.properties.name) {
//				popupContent += feature.properties.name;
//			}
//
//			layer.bindPopup(popupContent);
//		}
//
////
//var screenLayer = L.geoJson(screens, {
//
//			pointToLayer: function (feature, latlng) {
//				return L.marker(latlng, {icon: screenIcon});
//			},
//
//			onEachFeature: onEachFeature
//		}).addTo(map);

//// Here be our data layers
var walking = L.mapbox.featureLayer().addTo(map); walking.loadURL('data/walking.geojson');

var screens = L.mapbox.featureLayer()//.addTo(map);
screens.loadURL('https://gist.githubusercontent.com/laurenancona/12875fed89f70140c706/raw/7775efb9d3b9671dbf88a4b824d3499d4b0aa604/screens.geojson');

var transit = L.mapbox.featureLayer()//.addTo(map);
transit.loadURL('data/transit-locations.geojson');

var entrances = L.mapbox.featureLayer()//.addTo(map);
entrances.loadURL('https://gist.githubusercontent.com/laurenancona/222ac7fbcb959208a93a/raw/b8953400ac6c945380203e98d6107505f9e9f0c9/entrances.geojson');

var poperide = L.mapbox.featureLayer()
poperide.loadURL('https://gist.githubusercontent.com/laurenancona/58dcb77fd09d37da7446/raw/6f194ae6c3b7bbb51e35a202bde8c0e5d7cb2003/poperide.geojson');

// Listen for individual marker clicks.
entrances.on('click',function(e) {
//  mapLayers.on('click',function(e) {

    // Force the popup closed.
    e.layer.closePopup();

    var feature = e.layer.feature;
    var content = '<div><strong>' + feature.properties.name + '</strong>' +
                  '<p>Ticketed? ' + feature.properties.ticketed + '</p></div>';

    info.innerHTML = content;
});

transit.on('click',function(e) {

    // Force the popup closed.
    e.layer.closePopup();

    var feature = e.layer.feature;
    var content = '<div><strong>' + feature.properties.type + '</strong>' +
                  '<p>' + feature.properties.name + '</p>' +
                  '<p>' + feature.properties.Fare + ' | ' + feature.properties.Tickets +  '</p>' +
                  '<p><a href=' + feature.properties.info + '</p></div>';

    info.innerHTML = content;
});

poperide.on('click',function(e) {

    // Force the popup closed.
    e.layer.closePopup();

    var feature = e.layer.feature;
    var content = '<div><strong>' + feature.properties.name + '</strong>';
//                  '<p>' + feature.properties.ticketed + '</p></div>';

    info.innerHTML = content;
});

// lookit loading via jQuery.parseJSON

// Clear the tooltip when map is clicked.
map.on('move', empty);

// Trigger empty contents when the script
// has loaded on the page.
empty();

function empty() {
  info.innerHTML = '<div><strong>Click a marker</strong></div>';
  }


// Layer control freak
L.control.layers({
//    // 'Friday': L.mapbox.tileLayer('laurenancona.mgb93lh3').addTo(map),
//    // 'Saturday': L.mapbox.tileLayer('laurenancona.fc7871b8'),
//    // 'Sunday': L.mapbox.tileLayer('laurenancona.fc7871b8')
//    }, {

    }, {
    'Jumbotrons': screens,
    'Pedestrian routes': walking.addTo(map),
    'Festival Entrances': entrances.addTo(map),
    'Pope Bike Ride': poperide,
    'Transit Stations': transit.addTo(map)
    }
    ).addTo(map);	  		

//    // UTF Grid interactivity, testing w/ multiple layers
//        var blocksTiles = blocks.addTo(map);
//        var blocksGrid 	= L.mapbox.gridLayer('laurenancona.fc7871b8').addTo(map); //,
//            // lotsGrid 				= L.mapbox.gridLayer('laurenancona.fc7871b8').addTo(map);
//        var blocksControl = L.mapbox.gridControl(blocksGrid	).addTo(map); //,
//            // lotsControl  			=   L.mapbox.gridControl('laurenancona.fc7871b8').addTo(map);

var hash = L.hash(map); // append (z)/(x)/(y) to URL for deep linking to locations
map.setView([39.9581, -75.1657], 15);



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