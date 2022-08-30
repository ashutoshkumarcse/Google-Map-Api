function calculate() {
    var input1 = document.getElementById("lat1lon1").value.split(",");
    console.log(input1[0], input1[1]);
     var lat1 =parseFloat(input1[0]);
     var lon1 =parseFloat(input1[1]);
   
     var input2 = document.getElementById("lat2lon2").value.split(",");
     console.log(input2[0],input2[1]);
     var lat2 = parseFloat(input2[0]);
     var lon2 = parseFloat(input2[1]);

   
      var R = 6371; // Radius of the earth in km
       var degLat = deg2rad(lat2-lat1);  // deg2rad below
       var degLon = deg2rad(lon2-lon1); 
       var deglat1 = deg2rad(lat1);
       var deglat2 = deg2rad(lat2);
       var deglon1 = deg2rad(lon1);
       var deglon2 = deg2rad(lon2);
   

       var a = 
         Math.sin(degLat/2) * Math.sin(degLat/2) +
         Math.cos(lat1) * Math.cos(lat2) * 
         Math.sin(degLon/2) * Math.sin(degLon/2)
         ; 
       var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
       var d = (R * c).toFixed(3); // Distance in km

      
      //  azimuth angle
       var y = Math.sin(deglon2 - deglon1) * Math.cos(deglat2);
       var x =
         Math.cos(deglat1) * Math.sin(deglat2) -
         Math.sin(deglat1) * Math.cos(deglat2) * Math.cos(deglon2 - deglon1);
        var e = Math.atan2(y, x);
         e= rad2deg(e);
        var anglea = Math.round((e + 360) % 360);
        var angleb = Math.round((anglea - 180 + 360) % 360);

       document.getElementById("linkDistance").value = d;
       document.getElementById("Azimuthanglea").value = anglea;
       document.getElementById("Azimuthangleb").value = angleb;
       return  d,anglea,angleb;
   
     
     function deg2rad(deg) {
       return deg * (Math.PI/180)
       
     }
     function rad2deg(rad) {
      return (rad * 180) / Math.PI;
    }
    
   
   }
 
