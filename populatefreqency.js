function populatefreqency(s1, s2) {
    var s1 = document.getElementById("Bandwidth");
    var s2 = document.getElementById("channelFrequency");
    console.log(s1.value);
    s2.innerHTML = "";
    if (s1.value == "20") {
      var min = 5160;
      var max = 5865;
      // var optionarr = [
      //   "Channel frequency",
        
      //   "5160","5165","5170","5175","5180","5185","5190","5195","5200","5205","5210","5215","5220","5225","5230",
      //   "5235","5240","5260","5265","5270","5275","5280","5285","5290","5295","5300","5305","5310","5315","5320",
      //   "5500","5505","5510","5515","5520","5525","5530","5535","5540","5545","5550","5555","5560","5565","5570",
      //   "5575","5580","5585","5590","5595","5600","5605","5610","5615","5620","5625","5630","5635","5640","5645",
      //   "5650","5655","5660","5665","5670","5675","5680","5685","5690","5695","5700","5705","5710","5715","5735",
      //   "5740","5745","5750","5755","5760","5765","5770","5775","5780","5785","5790","5795","5800","5805","5810",
      //   "5815","5820","5825","5830","5835","5840","5845","5850","5855","5860","5865",
      //  ];
    } else if (s1.value == "40") {
      var min = 5170;
      var max = 5855;
      // var optionarr = [
      //   "Channel frequency",
      //   "5170","5175","5180","5185","5190","5195","5200","5205","5210","5215","5220","5225","5230","5270","5275",
      //   "5280","5285","5290","5295","5300","5305","5310","5510","5515","5520","5525","5530","5535","5540","5545",
      //   "5550","5555","5560","5565","5570","5575","5580","5585","5590","5595","5600","5605","5610","5615","5620",
      //   "5625","5630","5635","5640","5645","5650","5655","5660","5665","5670","5675","5680","5685","5690","5695",
      //   "5700","5705","5745","5750","5755","5760","5765","5770","5775","5780","5785","5790","5795","5800","5805",
      //   "5810","5815","5820","5825","5830","5835","5840","5845","5850","5855",
      //  ];
    } else if (s1.value == "80") {
      var min = 5190;
      var max = 5835;
      // var optionarr = [
      //   "Channel frequency", 
      //   "5190","5195","5200","5205","5210","5290","5530","5535","5540","5545","5550","5555","5560","5565","5570",
      //   "5575","5580","5585","5590","5595","5600","5605","5610","5615","5620","5625","5630","5635","5640","5645",
      //   "5650","5655","5660","5665","5670","5675","5680","5765","5770","5775","5780","5785","5790","5795","5800",
      //   "5805","5810","5815","5820","5825","5830", "5835",
      // ];
    
    }
    var optionarr=[];
    for(let i =min;i<=max;i+=5){
      optionarr.push(i);

    }
    for (var i in optionarr) {
      var newoption = document.createElement("option");
      newoption.innerHTML= optionarr[i];
      s2.options.add(newoption);
    }
  }
  function report(){
    console.log("hello");
    var s1 = document.getElementById("Bandwidth").value;
    var s2 = document.getElementById("channelFrequency").value;
    var addressa = document.getElementById("searchboxA").value;
    var addressb = document.getElementById("searchboxB").value ;
    var co1 = document.getElementById("lat1lon1").value;
    var co2 = document.getElementById("lat2lon2").value ;
    var anglea = document.getElementById("Azimuthanglea").value;
    var angleb = document.getElementById("Azimuthangleb").value;
    console.log(s1,s2,addressa);
    document.getElementById("Bandwidtha").value = s1;
    document.getElementById("Bandwidthb").value = s1;
    document.getElementById("channelFrequencya").value = s2;
    document.getElementById("channelFrequencyb").value = s2;
    document.getElementById("addressa").value = addressa;
    document.getElementById("addressb").value = addressb;
    document.getElementById("co1").value = co1;
    document.getElementById("co2").value = co2;
    document.getElementById("azimutha").value = anglea;
    document.getElementById("azimuthb").value = angleb;


    
    


  }
  function calculateeirp() {
    console.log("hello");
    //calculate fresnel radius
    var d = document.getElementById("linkDistance").value;
    var freq = document.getElementById("channelFrequency").value;
       var fres =
         17.32 * Math.sqrt(d / ((4 * freq)/1000) );
  
    document.getElementById("fresnelRadius").value = fres.toFixed(3);
console.log(freq);
//calculate EIRP
      if(freq<=5240){
        document.getElementById("eirpvalue").value = 47;
      }
      else if(freq<=5715){
        document.getElementById("eirpvalue").value = 30;
    
      }
      else{
        document.getElementById("eirpvalue").value = 53;
      }
      Radio();
      snr();

    
      }
    
   
  