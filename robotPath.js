
var x=250;
var y=480;
var cm=0;
var direction=' ';
var pathNumber;
var TotalPaths=[];// array of path objects
var Pnumber;
var Plength;
var Pdirection;
path= new Object();
function Path(Pnumber,Pdirection,Plength){
this.Pnumber=Pnumber;
this.Plength=Plength;
this.Pdirection=Pdirection;
}

window.onload=function(){


  document.getElementById("SetPathNum").onclick=function(){
    pathNumber=Number(document.getElementById("PathNumInput").value);
 }

    document.getElementById("r-submit").onclick=function(){
    cm=Number(document.getElementById("r-Coordination").value);
    drawPath(cm,'R');
    StorePath(pathNumber,'R',cm);
 }

document.getElementById("L-submit").onclick=function(){
    cm=Number(document.getElementById("L-Coordination").value);
      drawPath(cm,'L');
      StorePath(pathNumber,'L',cm);
}

document.getElementById("F-submit").onclick=function(){
    cm=Number(document.getElementById("F-Coordination").value);
    drawPath(cm,'F');
    StorePath(pathNumber,'F',cm);

}

document.getElementById("B-submit").onclick=function(){
  cm=Number(document.getElementById("B-Coordination").value);
  drawPath(cm,'B');
  StorePath(pathNumber,'B',cm);

}

document.getElementById("Restart").onclick=function(){
  
window.location.reload();

}


document.getElementById("save").onclick=function(){
    

  $.ajax({
    url:"sendPathData.php",
    method:"post",
    data:{element : JSON.stringify(TotalPaths)},//element is a key to refrence the element of the array (TotalPaths)
    success:function(res){
      console.log(res);
    }
})

}

}





function drawPath(cm,direction){

const elm=document.getElementById('myCanvas');
ctx=elm.getContext('2d'); 
ctx.moveTo(x,y);
ctx.strokeStyle="blue";

switch(direction){

   case 'F':
             ctx.lineTo(x,y-cm);
             ctx.stroke();
             y=y-cm;
             break;
   case 'B': 
             ctx.lineTo(x,y+cm);
             ctx.stroke();
             y=y+cm;
             break; 
    case 'L': 
             ctx.lineTo(x-cm,y);
             ctx.stroke();
             x-=cm;
             break;                  
    case 'R': 
             ctx.lineTo(x+cm,y);
             ctx.stroke();
             x+=cm;
             break;

}


}

function StorePath(pathNum,direc,pathLength){
// store the object in an object  then sent the objects values if "save path" is clicked 

  var path1=new Path(pathNum,direc,pathLength);

  TotalPaths.push(path1);
  

}





