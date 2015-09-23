Map {
  font-directory: url("fonts/");
  background-color: rgb(36, 35, 35);
 // buffer-size: 16;
 // maximum-extent:
}

// Constants:
@road:  rgb(217,217,217);
@paths: rgba(217,217,217, 0.5);
@underground: #e4e3e3;
@light:   #f7f7f7;
@concrete:  rgb(52,52,52);
@dark:  rgb(65, 63, 63);
@water: rgb(64,196,255);//rgb(12,105,149);
@land: rgb(52,52,52);
@curbs: rgba(217,217,217,0.3);

// Text
@routes: 'Arial Unicode MS Regular';
@bold: 'Arial Unicode MS Bold';


/*
#POINT {
[type='SEPTA']{
  marker-file: url("icons/SEPTA-Logo.png");
  marker-height: 15;
  marker-avoid-edges: true; 
  marker-placement: point;
  marker-allow-overlap: true;
  }
  [type='Screen']{
  marker-file: url("icons/screens3.png");
  marker-height: 15;
  marker-avoid-edges: true; 
  marker-placement: point;
  marker-allow-overlap: true;
  }
}

#buildingfootprints {
  [zoom>=16]{
  polygon-fill: @concrete;
  polygon-opacity: .5;
 // line-opacity: .2;
 }
}
*/

#curbprj {
  [zoom >= 11][FCODE=9999]{
  //line-color: @curbs;
  polygon-fill: @dark;
  polygon-opacity: 0.1;
  
//  line-width: .5;
 // line-opacity: .8;
 // line-dasharray: 1,2;
  }
}

 #Philadelphia_City_Limits.shp {
 polygon-fill: black;
}

#landuse {
//  [class='parking']{
 // line-width: 1;
 // line-color: rgba(85,153,255,0.5);
//  polygon-fill: @underground;
//  polygon-opacity: 0.1;
 // polygon-pattern-opacity: 0.1;
 // polygon-pattern-file: url("images/kindajean_@2X.png");
 // polygon-pattern-comp-op: contrast;
//  polygon-pattern-file: url("images/congruent_outline.png");
//  polygon-pattern-opacity: .7;
//  polygon-pattern-comp-op: color-burn;
 //   }
}

#waterway {
 // line-width: 1;
//  line-color: rgba(136,102,68,0.5);
 // polygon-fill: @water;
 // polygon-opacity: .3;
 //   polygon-fill: rgba(136,68,170,1);

}

#water {
    polygon-fill: @water;
  //  image-filters: agg-stack-blur(40,20);
  //  image-filters-inflate: true;
  //  line-width: .5;
  //  line-color: rgba(136,170,238,0.5);
}

#building {
 // line-width: 1;
 // line-color: rgba(204,221,102,0.5);
}

#landuse_overlay {
 // line-width: 1;
 // line-color: rgba(153,187,119,0.5);
}

//#tunnel {
 // line-width: 1;
 // line-color: @road;
 // line-opacity: .7;
 // line-dasharray: 1, 0, 0;   
//}


#admin {
 // line-width: 1;
 // line-color: rgba(85,153,255,0.5);
}

#marine_label {
  //line-width: 1;
 // line-color: rgba(255,221,187,0.5);
  
}

#place_label {
 // line-width: 1;
 // line-color: rgba(136,68,238,0.5);
}

#water_label {
 // line-width: 1;
//  polygon-fill: rgba(136,68,170,0.5);
//  line-color: rgba(136,68,170,0.5);
}

#poi_label {
//  line-width: 1;
 // line-color: rgba(85,255,221,0.5);
}

#road_label {
  [class='main'] {
    [zoom >= 16]{ 
    text-name: [name];
    text-face-name: @bold;
    text-placement: line;
 //   comp-op: contrast;
    text-fill: white;
    text-opacity: 1;
    text-transform: uppercase;
    text-size: 10;
    text-halo-fill: black;
    text-halo-radius: 2;
    text-repeat-distance: 300;
  //  text-avoid-edges: true;
    text-allow-overlap: false;
    text-margin: 100;
    text-min-padding: 20;
    text-comp-op: src-atop;
  //  text-min-path-length: 200;
   }
  }
  [class='street'] {
    [zoom >= 17]{
    text-name: [name];
    text-face-name: @bold;
    text-placement: line;
  //  comp-op: contrast;
    text-fill: white;
    text-opacity: 1;
    text-transform: uppercase;
    text-size: 10;
    text-halo-fill: black;
    text-halo-radius: 2;
    text-repeat-distance: 500;
  //  text-avoid-edges: true;
    text-allow-overlap: false;
    text-margin: 100;
    text-min-padding: 20;
    text-wrap-width: 80;
  //  text-min-path-length: 200;
   }
  }
 }

#road {
 // [name='Benjamin Franklin Parkway']
 // [osm_id = '12167183']{
 // line-color: @light;
 // line-join: round; 
 // line-comp-op: dst-atop;
 // }
}

#waterway_label {
 // line-width: 1;
//  line-color: rgba(68,204,170,0.5);
}



 #traffic-boxes-fri-6-10pm.labels {
  [zoom>=15]{
  [name='Center City Traffic Box'],[name='University City Traffic Box']{
  text-name: [title];
  text-face-name: 'Arial Unicode MS Regular';
  text-size: 8;
  text-placement: line;
//  text-repeat-distance: 200;
//  text-spacing: 00;
 // text-avoid-edges: true;
 // text-min-padding: 20;
  text-fill: @text;
  text-halo-fill: @authorized;
  text-halo-radius: 2;
  text-allow-overlap: false;
  text-vertical-alignment: top;
  text-comp-op: plus;
 // text-comp-op: src-atop;
 // text-comp-op: plus;
  [zoom >= 16]{ text-min-padding: 80; }
   }
  }
}

#traffic-boxes-fri-6-10pm {
  [zoom>=15]{
  [name='Fairmount Park'],[name='Vine Street Bridge']{
  text-name: [title];
  text-face-name: 'Arial Unicode MS Regular';
  text-size: 7;
  text-transform: uppercase;
 // text-avoid-edges: true;
  text-fill: @text;
  text-halo-fill: @authorized;
  text-placement: interior;
  text-halo-radius: 2;
  text-allow-overlap: false;
 // text-comp-op: dst-atop;
   }
  }
}
#authorized-vehicle-only_labels {
  [zoom >=15]{
  text-name: [name];
  text-face-name: 'Arial Unicode MS Regular';
  text-placement: line;
  text-size: 9;
  text-transform: uppercase;
  text-fill:white;
  text-halo-fill: black;
 // text-comp-op: src-atop;
 // text-halo-radius: 1;
  text-avoid-edges: true;
  text-min-padding: 30;
//  text-allow-overlap: false;
 // text-min-path-length: 100;
//  text-repeat-distance: 2000; 
 // comp-op: dst-out;
  }
}
/*
 #secure-vehicle-independence-fri-10p {
  [zoom >= 15]{
  text-name: 'Friday10am';
  text-size: 9;
  text-fill: white;
  text-face-name: 'Arial Unicode MS Regular';
  text-transform: uppercase;
  text-placement: line;
  text-halo-fill: @authorized;
  text-halo-radius: 2;
  text-comp-op: src-atop;
 // text-repeat-distance: 30;
  text-min-padding: 10;
  line-width: 3;
  line-color: black;// rgba(60,187,232,0.9);
  line-opacity: 0.9;
  line-comp-op: overlay;
  text-spacing: 200;
  }
} 
*/
/*
#jumbotrons {
  [zoom >= 15]{
  marker-file: url("icons/maki/svg/square-24.svg");
  marker-fill: @light;
  marker-line-color: black;
  marker-line-width: 2;
  marker-line-opacity: 0.8;
  marker-opacity: 1;
  marker-width: 18;
  marker-avoid-edges: true;
  marker-placement: point;
  marker-comp-op: src-atop;
  }
}
*/
/*
#place_label{
[zoom < 14]{  
[name='Philadelphia']{
  text-name: [name];
  text-face-name: 'Arial Unicode MS Regular';
  text-size: 20;
  text-transform: uppercase;
  text-halo-fill: black;
  text-halo-radius: 2;
  text-dy: -90;
  text-dx: 20;
  text-comp-op: src-over;
  text-fill: white;
  }
 }   
}
*/