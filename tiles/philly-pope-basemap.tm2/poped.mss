@traffic: rgba(158, 206, 9, 0.7);
@authorized: #000000;
@polygons: rgba(217,217,217,0.5);
@ticketed:  rgba(248, 0, 47, 0.5);
@text: rgba(255, 255, 255,1);
@parking: rgba(242,185,12,1);
@driving: rgba(242,139,12,1);
@walking: rgba(242,96,12,1);
@transit: rgba(242,54,12,1);




 
  [name='JFK Boulevard (closed)'] {
  polygon-fill:  @dark;
  polygon-opacity: 0.6;
  polygon-comp-op: overlay;
 // line-color: @authorized;
 // line-width: 4;
  [zoom >= 15]{
  text-name: 'CLOSED';
  text-size: 7;
  text-face-name: 'Arial Unicode MS Regular';
  text-fill: @text;
  text-halo-fill: @authorized;
  text-halo-radius: 2;
  text-dx: -10;
  text-avoid-edges: true;
  }
  // [zoom >= 16]{ line-width: 9; }
  // [zoom >= 17]{ line-width: 12; }
 }

// TRAFFIC BOXES ================================
#traffic-boxes-fri-6-10pm{
  [name='Center City Traffic Box'],[name='University City Traffic Box']{
  polygon-fill:   rgba(177, 174, 174, 0.3);
  polygon-comp-op: plus;
  line-color: @driving;
  line-width: 3;
  line-comp-op: src-over;
  }
}
#traffic-boxes-fri-6-10pm{
[name='Fairmount Park'],[name='Vine Street Bridge']{
  polygon-fill:  @dark;
  polygon-opacity: 0.6;
  polygon-comp-op: overlay;
  line-color: @authorized;
  line-width: 0; 
  }
}

// SECURE VEHICLE PERIMETERS ======================
#secure-vehicle-perimeter-fri-10a {
  polygon-fill: @polygons;
  polygon-comp-op: plus;
  line-color: @driving;
  line-width: 2;
  line-opacity: 1;
 // line-comp-op: soft-light;
}
#secure-perimeter-thur-10p {
  //polygon-fill:   rgba(217,217,217,0.7);
 // polygon-comp-op: overlay;
}

#secure-vehicle-perimeter-fri-10p_3857 {
 // polygon-fill:   rgba(217,217,217,1);
 // polygon-comp-op: overlay;
//  polygon-comp-op: contrast;
}

#secure-vehicle-independence-fri-10p {
  polygon-fill:   @polygons;
//  polygon-opacity: 0.8;
  polygon-comp-op: plus;
  line-color: @driving;
  line-width: 2;
  line-opacity: 1;
 // line-comp-op: soft-light;
}


// SECURE PERIMETERS ===========================
#secure-perimeter-12-20th-6a {
 // polygon-fill:   rgba(228, 0, 0,0.3);
 // polygon-fill:  @driving;
 // polygon-comp-op: dst-atop;
 // polygon-opacity: 0.7;
  line-color: @walking;
  line-width: 4;
  line-opacity: 1;
 // line-comp-op: soft-light;
 // polygon-smooth: 0.1;
 }

#independence-mall-secure-perimeter-sat-6am {
  // polygon-fill:  @ticketed;
//  polygon-fill:  @driving;
 // polygon-comp-op: overlay;
 // polygon-opacity: 0.7;
  line-color: @walking;
  line-width: 4;
  line-opacity: 1;
 // line-comp-op: soft-light;
}

// LINE SEGMENTS - WALKING & DRIVING ==================

#authorized-vehicles-only {
  [zoom > 14]{
  line-color: @driving;
  line-width: 4;
  line-comp-op: overlay;
  [zoom < 17]{ line-width: 8; }
  [zoom >= 17]{ line-width: 12; }
  }
}

/*
#walking {
 // [name='name']{
  [zoom >= 15]{
  line-color: rgba(8,145,196, 0.6);
  line-width: 6;
  line-opacity: 0.9;
 // line-comp-op: overlay;
  text-name: ['Walking Route'];
  text-face-name: @routes;
  text-size: 9;
  text-placement: line;
  text-fill: black;
  text-halo-fill:white;
 // text-halo-radius: 1;
 // [zoom >= 16]{ text-min-padding: 80; }
 // }
 }


*/