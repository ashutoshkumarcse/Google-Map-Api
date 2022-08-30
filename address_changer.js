function addresschanger(){
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

  }