function snr(){
   //snr,fade_margin,mcs, modulation
   console.log("hello");
   var band = parseFloat(document.getElementById("Bandwidth").value); 
   var rsla = parseFloat(document.getElementById("rsla").value);
   var rslb = parseFloat(document.getElementById("rslb").value);
   if(band == "20"){
      document.getElementById("snra").value = rsla+92;
      document.getElementById("snrb").value = rslb+92;
      var snra = document.getElementById("snra").value;
      var snrb = document.getElementById("snrb").value;
      var refertable = document.getElementById("Bandwidth20MHz");
      console.log(refertable.rows[1].cells.item(0).innerHTML);
      var fadea = parseInt(snra - refertable.rows[1].cells.item(0).innerHTML);
      var fadeb = parseInt(snrb - refertable.rows[1].cells.item(0).innerHTML);
      console.log(fadea);
      console.log(fadeb);
      document.getElementById("fademargina").value = fadea;
      document.getElementById("fademarginb").value = fadeb;
      var rowlength = refertable.rows.length;
      console.log(rowlength);
      for(let i=0;i<=rowlength;i++){
      var min = refertable.rows[i].cells.item(0).innerHTML;
      var max = refertable.rows[i].cells.item(1).innerHTML;
      console.log(min,max);
      // console.log(snra,min,max);
    if(snra >= min && snra <= max ){
      var mcsa = refertable.rows[i].cells.item(2).innerHTML;
      var mcsb = refertable.rows[i].cells.item(2).innerHTML;
      document.getElementById("mcsa").value = mcsa;
      document.getElementById("mcsb").value = mcsb;
      var modulationa = refertable.rows[i].cells.item(3).innerHTML;
      var modulationb = refertable.rows[i].cells.item(3).innerHTML;
      document.getElementById("modulationa").value = modulationa;
      document.getElementById("modulationb").value = modulationb;
      // console.log(modulationb);
      var feca = refertable.rows[i].cells.item(4).innerHTML;
      var fecb = refertable.rows[i].cells.item(4).innerHTML;
      document.getElementById("feca").value = feca;
      document.getElementById("fecb").value = fecb;
      // console.log(feca);
      var linkratea = refertable.rows[i].cells.item(5).innerHTML;
      var linkrateb = refertable.rows[i].cells.item(5).innerHTML;
      document.getElementById("linkratea").value = linkratea;
      document.getElementById("linkrateb").value = linkrateb;
      // console.log(linkratea);
      var throughputa = refertable.rows[i].cells.item(6).innerHTML;
      var throughputb = refertable.rows[i].cells.item(6).innerHTML;
      document.getElementById("throughputa").value = throughputa;
      document.getElementById("throughputb").value = throughputb;
      console.log(throughputa);
   break; 
   }
   else{
      continue;
   }

  
   }
   }
   
   else if(band == "40"){
      document.getElementById("snra").value = rsla+90;
      document.getElementById("snrb").value = rslb+90;
      var snra = document.getElementById("snra").value;
      var snrb = document.getElementById("snrb").value;
      var refertable = document.getElementById("Bandwidth40MHz");
      console.log(refertable);
      var fadea = parseInt(snra - refertable.rows[1].cells.item(0).innerHTML);
      var fadeb = parseInt(snrb - refertable.rows[1].cells.item(0).innerHTML);
      console.log(fadea);
      console.log(fadeb);
      document.getElementById("fademargina").value = fadea;
      document.getElementById("fademarginb").value = fadeb;
      var rowlength = refertable.rows.length;
      console.log(rowlength);
      for(let i=0;i<=rowlength;i++){
      var min = refertable.rows[i].cells.item(0).innerHTML;
      var max = refertable.rows[i].cells.item(1).innerHTML;
      if(snra>=min && snra <=max){
      var mcsa = refertable.rows[i].cells.item(2).innerHTML;
      var mcsb = refertable.rows[i].cells.item(2).innerHTML;
      document.getElementById("mcsa").value = mcsa;
      document.getElementById("mcsb").value = mcsb;
      var modulationa = refertable.rows[i].cells.item(3).innerHTML;
      var modulationb = refertable.rows[i].cells.item(3).innerHTML;
      document.getElementById("modulationa").value = modulationa;
      document.getElementById("modulationb").value = modulationb;
      // console.log(modulationb);
      var feca = refertable.rows[i].cells.item(4).innerHTML;
      var fecb = refertable.rows[i].cells.item(4).innerHTML;
      document.getElementById("feca").value = feca;
      document.getElementById("fecb").value = fecb;
      // console.log(feca);
      var linkratea = refertable.rows[i].cells.item(5).innerHTML;
      var linkrateb = refertable.rows[i].cells.item(5).innerHTML;
      document.getElementById("linkratea").value = linkratea;
      document.getElementById("linkrateb").value = linkrateb;
      // console.log(linkratea);
      var throughputa = refertable.rows[i].cells.item(6).innerHTML;
      var throughputb = refertable.rows[i].cells.item(6).innerHTML;
      document.getElementById("throughputa").value = throughputa;
      document.getElementById("throughputb").value = throughputb;
      // console.log(throughputa);
      break;
      }
      else{
         continue;
      }
   }
   }
   
   else if(band == "80"){
      document.getElementById("snra").value = rsla+90;
      document.getElementById("snrb").value = rslb+90;
      var snra = document.getElementById("snra").value;
      var snrb = document.getElementById("snrb").value;
      var refertable = document.getElementById("Bandwidth80MHz");
      console.log(refertable);
      var fadea = parseInt(snra - refertable.rows[1].cells.item(0).innerHTML);
      var fadeb = parseInt(snrb - refertable.rows[1].cells.item(0).innerHTML);
      console.log(fadea);
      console.log(fadeb);
      document.getElementById("fademargina").value = fadea;
      document.getElementById("fademarginb").value = fadeb;
      var rowlength = refertable.rows.length;
      console.log(rowlength);
      for(let i=0;i<=rowlength;i++){
      var min = refertable.rows[i].cells.item(0).innerHTML;
      var max = refertable.rows[i].cells.item(1).innerHTML;
      if(snra >= min && snra <= max){
      var mcsa = refertable.rows[i].cells.item(2).innerHTML;
      var mcsb = refertable.rows[i].cells.item(2).innerHTML;
      document.getElementById("mcsa").value = mcsa;
      document.getElementById("mcsb").value = mcsb;
      var modulationa = refertable.rows[i].cells.item(3).innerHTML;
      var modulationb = refertable.rows[i].cells.item(3).innerHTML;
      document.getElementById("modulationa").value = modulationa;
      document.getElementById("modulationb").value = modulationb;
      // console.log(modulationb);
      var feca = refertable.rows[i].cells.item(4).innerHTML;
      var fecb = refertable.rows[i].cells.item(4).innerHTML;
      document.getElementById("feca").value = feca;
      document.getElementById("fecb").value = fecb;
      // console.log(feca);
      var linkratea = refertable.rows[i].cells.item(5).innerHTML;
      var linkrateb = refertable.rows[i].cells.item(5).innerHTML;
      document.getElementById("linkratea").value = linkratea;
      document.getElementById("linkrateb").value = linkrateb;
      // console.log(linkratea);
      var throughputa = refertable.rows[i].cells.item(6).innerHTML;
      var throughputb = refertable.rows[i].cells.item(6).innerHTML;
      document.getElementById("throughputa").value = throughputa;
      document.getElementById("throughputb").value = throughputb;
      // console.log(feca);
      break;
      }
      else{
         continue;
      }
   }
   }
}