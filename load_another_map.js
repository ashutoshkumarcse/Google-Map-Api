function loadmap(){
    let PolylineArray =[];
    var location = { lat: 28.4595, lng: 77.0266 };
    map2 = new google.maps.Map(document.getElementById("map2"),{
      zoom :8,
      center:location,
    });
    var bounds = new google.maps.LatLngBounds();
    markerArray.forEach(function(e){
    marker = new google.maps.Marker({
      map:map2,
      position:e.getPosition(),
     });
     bounds.extend(marker.getPosition());
     map.fitBounds(bounds);
    
   
      PolylineArray.push(e.getPosition());
     
    });
    reportline = new google.maps.Polyline({
      map:map2,
    
      path:PolylineArray,
      strokecolor: "#000000",
      strokeOpacity:1.0,
      });
      
  
 
  }
  