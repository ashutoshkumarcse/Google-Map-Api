var map;
var map2;
var marker;
var Polyline = null;
var markerArray=[];
var reportline;
google.load("visualization", "1", { packages: ["corechart"] });

function initMap() {
var location = { lat: 28.4595, lng: 77.0266 };
map = new google.maps.Map(document.getElementById("map"), {
zoom: 8,
center: location,
});
map.addListener('click',function(e){
    if(markerArray.length <=1){
       placemarker(e.latLng);
       console.log(e);
     drawPolyline();
     addresschanger();
    }
    });
  }
  
// on click function()
    function placemarker(a){
      marker = new google.maps.Marker({
        map:map,
        position:a,
        draggable:true,
      });
     marker.addListener('dragend',function(){
        drawPolyline();
        addresschanger();
    

      });
      markerArray.push(marker);
      console.log(markerArray)
    }

    
   // input function
  function addmarker(){
    clearMarker();
    var input1 = document.getElementById("lat1lon1").value.split(",");
    console.log(input1)
    const latlng = {
      lat: parseFloat(input1[0]),
      lng: parseFloat(input1[1]),
    };
    
    geocoder = new google.maps.Geocoder();
    console.log(latlng)
      geocoder
    .geocode({ location: latlng })
    .then((response) => {
      if (response.results[0]) {
        document.getElementById("searchboxA").value = response.results[0].formatted_address
      }
    });

    var bounds = new google.maps.LatLngBounds();
    marker = new google.maps.Marker({
    map:map,
    position:latlng,
    draggable:true,
    });
    markerArray.push(marker);
    bounds.extend(marker.getPosition());
    map.fitBounds(bounds);
    
    marker.addListener('dragend',function(){
    drawPolyline();
    addresschanger();
    });
      
    
    var input2 = document.getElementById("lat2lon2").value.split(",");
    console.log(input2[0],input2[1]);
    var lat2lng2 = {
      lat: parseFloat(input2[0]),
      lng: parseFloat(input2[1]),
    };
    
    geocoder = new google.maps.Geocoder();
    console.log(latlng)
      geocoder
    .geocode({ location: lat2lng2 })
    .then((response) => {
      if (response.results[0]) {
        document.getElementById("searchboxB").value = response.results[0].formatted_address
      }
    });
   marker = new google.maps.Marker({
    map:map,
    position:lat2lng2,
    draggable:true,
    });
    markerArray.push(marker);
    bounds.extend(marker.getPosition());
    map.fitBounds(bounds);
    marker.addListener('dragend',function(){
    drawPolyline();
    addresschanger();
    });
    


  }
 
      
    //polyline function()
  function drawPolyline(){
  console.log(markerArray);
  let markerPositionArray = [];
  markerArray.forEach(function(e){
  markerPositionArray.push(e.getPosition());
  });
      
  if (Polyline != null){
  Polyline.setMap(null);
   
 }
     Polyline = new google.maps.Polyline({
      map:map,
    
      path:markerPositionArray,
      strokecolor: "#000000",
      strokeOpacity:1.0,
      });
    
      if(markerArray.length == 2)
      {console.log(markerArray[0][0])
        document.getElementById("lat1lon1").value = markerArray[0].getPosition().lat().toFixed(4) + "," + markerArray[0].getPosition().lng().toFixed(4);
        document.getElementById("lat2lon2").value = markerArray[1].getPosition().lat().toFixed(4) + "," + markerArray[1].getPosition().lng().toFixed(4);
        displaypathelevation();
        calculate();
        // Snr();
        calculateeirp();
        report();
      
        
    


      }
      }
       function clearMarker(){
    for(i=0;i<markerArray.length; i++){
      markerArray[i].setMap(null);
    }
      markerArray.length=0;
  }



  