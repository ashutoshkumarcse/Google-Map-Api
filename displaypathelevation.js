function displaypathelevation(){
    var input1 = document.getElementById("lat1lon1").value.split(",");
    var input2 = document.getElementById("lat2lon2").value.split(",");

   
    const path = [
      {
        lat: parseFloat(input1[0]),
        lng: parseFloat(input1[1]),
      },
      {
        lat: parseFloat(input2[0]),
        lng: parseFloat(input2[1]),
      },
]; 
    var elevator = new google.maps.ElevationService();
    elevator
    .getElevationAlongPath({
      path: path,
      samples: 250,
    })
    .then(plotElevation)
    .catch((e) => {
      const chartDiv = document.getElementById("elevation_chart")
  });
 

}
function plotElevation({ results }) {
  var Distance= parseFloat(document.getElementById("linkDistance").value);
  const chartDiv = document.getElementById("elevation_chart");
  const chart = new google.visualization.AreaChart(chartDiv);
 console.log(Distance);
  const data = new google.visualization.DataTable();

  var arr=[];
  for(let i=0;i<=Distance;i+= Distance/250){
    arr.push(i);

    // console.log(i);
    
  }
  console.log(arr.length);

  var arr2 =[];
  for(i=0;i<=Distance;i+=Distance/5){
    arr2.push(i);
  }
  
  
 
 
  data.addColumn("number", "Distance");
  data.addColumn("number", "Elevation");
  for (let i = 0; i < results.length; i++) {
    data.addRow([arr[i], results[i].elevation]);
  
  
  }
  console.log(arr2[5]);
  
  chart.draw(data,{
    height: 150,
    legend: "none",
    title:"Elevation(m)",
    interpolateNulls: true,
    hAxis: {
      minValue: 0,
      ticks:arr2,
    
  
    },
  });

}
