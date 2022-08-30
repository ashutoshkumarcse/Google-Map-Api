function Radio(){
  //Radio A and Radio B
  var dist = parseFloat(document.getElementById("linkDistance").value);
  var freq = parseFloat(document.getElementById("channelFrequency").value);
  var lossa = parseFloat(document.getElementById("cablelossa").value);
  var lossb= parseFloat(document.getElementById("cablelossb").value);
  var radioa = document.getElementById("radioA");
  var radioname = radioa.options[radioa.selectedIndex].innerHTML;
  var radiovalue = radioa.value;
  document.getElementById("rxa").value = radiovalue;

  var radiob = document.getElementById("radioB");
  var radionameB = radiob.options[radiob.selectedIndex].innerHTML;
  var radiovalue = radiob.value;
  document.getElementById("rxb").value = radiovalue;

  var antgainb = parseFloat(document.getElementById("rxb").value);
  var antgaina = parseFloat(document.getElementById("rxa").value);

  var eirp = parseFloat(document.getElementById("eirpvalue").value);
//transmit power
console.log(eirp);
  var a= parseFloat(eirp-antgaina);
  document.getElementById("txa").value = a;
  var b= parseFloat(eirp-antgainb);
  document.getElementById("txb").value = b;

//disable or enable radio
  if(radioname == "ion4le" ){
    
    document.getElementById("rxa").disabled = false;
    console.log(radioname)
  }
  else{
    console.log(radioname)
    document.getElementById("rxa").disabled = true;
  }
  
  if(radionameB == "ion4le" ){
    
    document.getElementById("rxb").disabled = false;
    console.log(radionameB)
  }
  else{
    console.log(radionameB)
    document.getElementById("rxb").disabled = true;
  }
  //RSl
  console.log( lossa, lossb, antgaina, antgainb, a, b);
  var rslB = Math.round(b + antgainb + antgaina - lossa - lossb- (20 * Math.log10(dist)  + 20* Math.log10(freq / 1000) + 92.45));

  document.getElementById("rslb").value= rslB;
  var rslA = Math.round(a+ antgainb + antgaina - lossa - lossb- (20 * Math.log10(dist) +  20* Math.log10(freq/1000) + 92.45));
  document.getElementById("rsla").value= rslA; 
  console.log(20 * Math.log10(dist) +  20* Math.log10(freq/1000) + 92.45)
snr();
}
