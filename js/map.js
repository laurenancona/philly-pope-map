
	    L.mapbox.accessToken = 'pk.eyJ1IjoibGF1cmVuYW5jb25hIiwiYSI6IjYxNGUxN2ExMmQzZWVkMThhZjY2MGE0YmQxZWZlN2Q2In0.18vQmCC7jmOvuHNnDh8Ybw';
		  	// Construct a bounding box
				var southWest = L.latLng(39.864439, -75.387541),
		   			northEast = L.latLng(40.156325, -74.883544),
				    bounds = L.latLngBounds(southWest, northEast);

	     	var map = L.mapbox.map('map','laurenancona.2ff8c154', { // Popemap polygons baselayer
	     		// set that bounding box as maxBounds to restrict moving the map (http://leafletjs.com/reference.html#map-maxbounds)
			    	maxBounds: bounds,
			    	maxZoom: 17,
			    	minZoom: 12
				});

	     	L.control.locate().addTo(map);

				map.fitBounds(bounds); // zoom/snap the map to that bounding box

				// Here be our data layers
            var featureLayer = L.mapbox.featureLayer().addTo(map);                    featureLayer.loadURL('https://gist.githubusercontent.com/laurenancona/12875fed89f70140c706/raw/93d3d0f7e207d6baa8a1b46da196f48505854b0e/screens.geojson');

		    var points = L.mapbox.tileLayer('laurenancona.4ae9c933').addTo(map);
				   // blocks = L.mapbox.tileLayer('laurenancona.fc7871b8'),
				  //  legend = map.legendControl.addLegend(document.getElementById('legend').innerHTML); // add legend		
				      //lots			= L.mapbox.featureLayer('').addTo(map);
	    
	    // Layer control freak
//	    L.control.layers({
//		  	// 'Parking Dark': L.mapbox.tileLayer('laurenancona.mgb93lh3').addTo(map),
//		  	// 'Parking Light': L.mapbox.tileLayer('laurenancona.fc7871b8')
//		  	}, {
//		  	'Permit Districts': districts ,
//		  	'Permit Blocks': blocks.addTo(map)
//		  	// 'Permit Lots': lots
//			}, {
//			position: 'topleft'
//			}
//			).addTo(map);	  		

//	  		// UTF Grid interactivity, testing w/ multiple layers
//				var blocksTiles = blocks.addTo(map);
//				var blocksGrid 	= L.mapbox.gridLayer('laurenancona.fc7871b8').addTo(map); //,
//		  	 		// lotsGrid 				= L.mapbox.gridLayer('laurenancona.fc7871b8').addTo(map);
//				var blocksControl = L.mapbox.gridControl(blocksGrid	).addTo(map); //,
//				 	// lotsControl  			=   L.mapbox.gridControl('laurenancona.fc7871b8').addTo(map);

				var hash = L.hash(map); // append (z)/(x)/(y) to URL for deep linking to locations

				map.setView([39.9547, -75.1695], 14);

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