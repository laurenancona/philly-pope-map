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


//var screens = {
//  "type": "FeatureCollection",
//  "features": [
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-size": "small",
//        "marker-symbol": "square",
//        "name": "19th St & Spring Garden",
//        "id": 6,
//        "type": "Screen",
//        "desc": ""
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.16976595,
//          39.96356969
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "name": "16th & Spring Garden",
//        "id": 7,
//        "type": "Screen",
//        "desc": "",
//        "marker-symbol": "square",
//        "marker-size": "small",
//        "marker-color": "#0891C4"
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.16539931297302,
//          39.96303518607153
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "name": "N Broad St & Green St",
//        "id": 8,
//        "type": "Screen",
//        "desc": "",
//        "marker-symbol": "square",
//        "marker-size": "small",
//        "marker-color": "#0891C4"
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.16105413,
//          39.96383283
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "name": "N Broad St & Callowhill St",
//        "id": 9,
//        "type": "Screen",
//        "desc": "",
//        "marker-symbol": "square",
//        "marker-size": "small",
//        "marker-color": "#0891C4"
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.16206264,
//          39.95949089
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "name": "Franklin Square",
//        "id": 10,
//        "type": "Screen",
//        "desc": "",
//        "marker-symbol": "square",
//        "marker-size": "medium",
//        "marker-color": "#0891C4"
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.15056133,
//          39.95610267
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "name": "S Broad St & Spruce St",
//        "id": 11,
//        "type": "Screen",
//        "desc": "",
//        "marker-symbol": "square",
//        "marker-size": "medium",
//        "marker-color": "#0891C4"
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.16483068,
//          39.94680886
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "name": "S Broad St & Rodman St",
//        "id": 12,
//        "type": "Screen",
//        "desc": "",
//        "marker-symbol": "square",
//        "marker-size": "medium",
//        "marker-color": "#0891C4"
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.16541004,
//          39.94420966
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 13
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.1795506477356,
//          39.96389039485156
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 14
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.17866015434265,
//          39.964531794416494
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 1
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.17738342285156,
//          39.96273914977074
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 2
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.17714738845825,
//          39.96290361454053
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 3
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.17808079719543,
//          39.96222108316007
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 4
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.1766538619995,
//          39.96324076608185
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 5
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.17619252204894,
//          39.96380816370295
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 15
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.17673969268799,
//          39.96208951006248
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 16
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.17622470855713,
//          39.96240199575588
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 17
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.17508745193481,
//          39.96120960846406
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 18
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.1744544506073,
//          39.9607655416759
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 19
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.17369270324707,
//          39.96018989525084
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 20
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.17212629318237,
//          39.95903858786237
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 21
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.17215847969055,
//          39.95833957034783
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 22
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.17314553260803,
//          39.95930996920717
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 23
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.17285585403442,
//          39.95892345605739
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 24
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.1704740524292,
//          39.95850404569999
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 25
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.16937971115112,
//          39.95704842509196
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 26
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.1678454875946,
//          39.95589706481237
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 27
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.16661167144775,
//          39.953816343140794
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 28
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.16499161720274,
//          39.95452363112699
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 29
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.16490578651428,
//          39.95366830519476
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 30
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.16356468200684,
//          39.953989053672856
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 31
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.16265273094177,
//          39.95227015323417
//        ]
//      }
//    },
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "#0891C4",
//        "marker-symbol": "square",
//        "type": "Screen",
//        "marker-size": "medium",
//        "id": 32
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.16374707221985,
//          39.950789725888576
//        ]
//      }
//    }
//  ]
//};


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
var walking = L.mapbox.featureLayer().addTo(map); walking.loadURL('https://gist.githubusercontent.com/laurenancona/38fc102e1954956e5fd4/raw/0386e32eed89b63e75654bcd4c2b0090ab2ae58b/walking.geojson');
var screens = L.mapbox.featureLayer()//.addTo(map);
screens.loadURL('https://gist.githubusercontent.com/laurenancona/12875fed89f70140c706/raw/7775efb9d3b9671dbf88a4b824d3499d4b0aa604/screens.geojson');

var transit = L.mapbox.featureLayer()//.addTo(map);
screens.loadURL('https://gist.githubusercontent.com/laurenancona/c1fc8125934afa3bb7b2/raw/fcebed4fc907679bde7306ffbf1aa856e1165097/transit-locations.geojson');

var entrances = L.mapbox.featureLayer()//.addTo(map);
screens.loadURL('https://gist.githubusercontent.com/laurenancona/c1fc8125934afa3bb7b2/raw/fcebed4fc907679bde7306ffbf1aa856e1165097/transit-locations.geojson');

// Listen for individual marker clicks.
screens.on('click',function(e) {
//  mapLayers.on('click',function(e) {

    // Force the popup closed.
    e.layer.closePopup();

    var feature = e.layer.feature;
    var content = '<div><strong>' + feature.properties.name + '</strong>' +
                  '<p>' + feature.properties.type + '</p></div>';

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
//    // 'Parking Dark': L.mapbox.tileLayer('laurenancona.mgb93lh3').addTo(map),
//    // 'Parking Light': L.mapbox.tileLayer('laurenancona.fc7871b8')
//    }, {
    'Jumbotrons': screens.addTo(map),
    'Pedestrian routes': walking.addTo(map),
    'Festival Entrances': entrances.addTo(map),
   // 'Pope Bike Ride': 
    'Transit Stations': transit
    }, {
    position: 'bottomright'
    }
    ).addTo(map);	  		

//    // UTF Grid interactivity, testing w/ multiple layers
//        var blocksTiles = blocks.addTo(map);
//        var blocksGrid 	= L.mapbox.gridLayer('laurenancona.fc7871b8').addTo(map); //,
//            // lotsGrid 				= L.mapbox.gridLayer('laurenancona.fc7871b8').addTo(map);
//        var blocksControl = L.mapbox.gridControl(blocksGrid	).addTo(map); //,
//            // lotsControl  			=   L.mapbox.gridControl('laurenancona.fc7871b8').addTo(map);

var hash = L.hash(map); // append (z)/(x)/(y) to URL for deep linking to locations
map.setView([39.9577, -75.1641], 14);



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