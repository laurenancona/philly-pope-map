var PopeMap = PopeMap || {};

(function() {
  'use strict';

  var map;
  var accessToken = 'pk.eyJ1IjoibGF1cmVuYW5jb25hIiwiYSI6IjYxNGUxN2ExMmQzZWVkMThhZjY2MGE0YmQxZWZlN2Q2In0.18vQmCC7jmOvuHNnDh8Ybw';

  PopeMap.initFancyMap = function() {
    mapboxgl.accessToken = accessToken;
    map = new mapboxgl.Map({
      bearing: 9, // Rotate Philly 9° off of north
      container: 'map',
      style: 'mapbox://styles/laurenancona/cieoq4nyj0i1ns1m2sctobre0',
      maxZoom: 17,
      minZoom: 10,
      center: [-75.1575, 39.9572],
      zoom: 14
    });

    map.on('mousemove', function(evt) {
      map.featuresAt(evt.point, {radius: 5}, function(err, features) {
          if (err) throw err;

          if (features.length > 0) {
            document.body.classList.add('hovering');
          } else {
            document.body.classList.remove('hovering');
          }
      });

    });

    map.on('click', function(evt) {
      // Find what was clicked on
      map.featuresAt(evt.point, {radius: 5}, function(err, features) {
          if (err) throw err;

          if (features.length > 0) {
            console.log(features[0]);
          }
      });

    });
  };

  PopeMap.initClassicMap = function() {
    L.mapbox.accessToken = accessToken;

    // Construct a bounding box

    var southWest = L.latLng(39.864439, -75.387541),
        northEast = L.latLng(40.156325, -74.883544),
        bounds = L.latLngBounds(southWest, northEast);

    map = L.mapbox.map('map', 'laurenancona.2ff8c154', { // Popemap polygons baselayer
      // set that bounding box as maxBounds to restrict moving the map (http://leafletjs.com/reference.html#map-maxbounds)
    //  maxBounds: bounds,
      infoControl: false,
      attributionControl: false,
      maxZoom: 17,
      minZoom: 13,
      center: [39.9572, -75.1575],
      zoom: 14
    })

    .addControl(L.mapbox.geocoderControl('mapbox.places', {
      autocomplete: true
    }));

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

    var transit = L.mapbox.featureLayer().addTo(map);
    transit.loadURL('https://gist.githubusercontent.com/laurenancona/f6fc6dee346781538cf7/raw/9ef66b848017b61a972eaa27179541ddfe90d990/septa-train-stations.geojson')
    mapLayers.push(transit);

    var entrances = L.mapbox.featureLayer(); //.addTo(map);
    entrances.loadURL('https://gist.githubusercontent.com/laurenancona/222ac7fbcb959208a93a/raw/b8953400ac6c945380203e98d6107505f9e9f0c9/entrances.geojson');
    mapLayers.push(entrances);

    var poperide = L.mapbox.featureLayer(); //.addTo(map);
    poperide.loadURL('data/poperide.geojson');
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
      var content = '<div><strong>' + feature.properties.name + '</strong>' +
          feature.properties.description + '</div>';
//        '<p>' + feature.properties.Tickets + '</p>' +
//        '<p><a href=' + '"' + feature.properties.info + '"' + ' target="_blank" /><strong>VISIT SITE</strong></a></p></div>';
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
    //    var blocksControl = L.mapbox.gridControl(blocksGrid ).addTo(map); //,
    //        lotsControl = L.mapbox.gridControl('laurenancona.fc7871b8').addTo(map);

    var hash = L.hash(map); // append (z)/(x)/(y) to URL for deep linking to locations
  };

  if (PopeMap.allowFancyMap && mapboxgl.supported()) {
    PopeMap.initFancyMap();
  } else {
    PopeMap.initClassicMap();
  }
})();


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
