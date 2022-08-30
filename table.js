function showdiv(){
var openbtn = document.getElementById("openbutton");
console.log("hello");
openbtn.addEventListener('click',function(){
    document.getElementById("dis").style.display = "block";

});
}
function hidediv(){
var closebtn = document.getElementById("closebutton");
closebtn.addEventListener('click',function(){
    document.getElementById("dis").style.display = "none";
});
}