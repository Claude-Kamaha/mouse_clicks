var content = document.getElementById("content");
var bottom = document.getElementById("bottom");
var up = document.getElementById("up");
var timein = new Date().toLocaleTimeString();

content.onclick = function(){
    var diver= document.createElement("div");
    diver.style.height="10vh";
    diver.style.width="10vw";
    diver.style.border = "1px solid white";
    diver.style. margin = "15px 9px 5px 5px" ;
    diver.style.display ="table-row";
    diver.style.display ="table-cell";
    diver.style.display ="inline-table";
    diver.style.backgroundColor = "grey";
    diver.style.color = "white"

   bottom.appendChild(diver);
    timein = new Date().toLocaleTimeString();
    
    var x = event.clientX;
    var y = event.clientY;
    diver.innerHTML = "X coords: " + x + " <br> Y coords: " + y + "<br>Time:" + timein;
    coordy = " Y coords: " + y;
    diver.appendchild(coordy);
   
diver.innerHTML= coordx <br> coordy<br> "Time:" + timein;
   
    
};
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coordx = "X coords: " + x ;
    var coordy = " Y coords: " + y;
    document.getElementById("x").innerHTML = coordx;
    document.getElementById("x").style.color = "white"
    document.getElementById("y").innerHTML = coordy;
    document.getElementById("y").style.color = "white"
    document.getElementById("time").innerHTML="Time: "+timein
    document.getElementById("time").style.color = "white"}

up.onmouseover = function(){
    showCoords(event);
   
    };

    diver.innerHTML= "Time:" +timein;