/*
#bridge {
  line-color: @dark;
  line-join: round;
  [zoom>14]{
  [class='street']{
  line-width: 3;
  }
  [class='main']{
  line-width: 4;
  }
  [class='path']{
   line-color: @paths;   
   line-width: .6;
   line-dasharray: 1, 2;
   }
 }   
  [zoom>=16]{
  [class='street']{
  line-width: 5;
  }
  [class='main']{
  line-width: 7;
  }
 } 
}
*/
#road {
  line-color: @dark;
  line-join: round;
  line-opacity: 1;
  [zoom>14]{
  [class='street']{
  line-width: 3;
  }
  [class='main']{
  line-width: 4;
  }
  [zoom>=16]{
  [class='street']{
  line-width: 5;
  }
  [class='main']{
  line-width: 7;
   }
  }    
 } 
}

#road {
  [class='path']{
   line-color: @dark;   
   [zoom>=15]{
   line-width: .8;
   line-dasharray: 1, 2;
 //  line-comp-op: dst-over;
   } 
  }
 } 

#tunnel {
  [type='subway'] {
    line-comp-op: dst-out;
    line-color: @dark;
  [zoom < 16]{
    line-width: 6;
    line-opacity: 0.1;
    line-dasharray: 2,2;  
  }
  [zoom >= 16]{
    line-width: 8;
    line-opacity: 0.1;
    line-dasharray: 3,3;  
  }  
 }
}

 #road { [class='major_rail'], [class='minor_rail'] {
  ::line, ::hatch { line-color: @dark;
    line-opacity: 0.5; }
  ::line { line-width: 0.6; }
  ::hatch {
    line-width: 4;
    line-dasharray: 1, 24; 
  //  line-width: 1;
    } 
  }
}