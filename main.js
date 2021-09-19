var mouseevent="empty";
var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
Widthofline=2;
var width=screen.width;
nw=screen.width-70;
nh=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=nw;
    document.getElementById("myCanvas").height=nh;
    
}
canvas.addEventListener("touchstart",md);
function md(e){
    color=document.getElementById("color").value;
Widthofline=document.getElementById("width").value;
lastx=e.touches[0].clientX-canvas.offsetLeft;
 lasty=e.touches[0].clientY-canvas.offsetTop;


}
canvas.addEventListener("touchmove",mm);
function mm(e){
    currentx=e.touches[0].clientX-canvas.offsetLeft;
     currenty=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
     ctx.strokeStyle=color;
      ctx.lineWidth=Widthofline;
       ctx.moveTo(lastx,lasty);
     ctx.lineTo(currentx,currenty);
      ctx.stroke();
    

lastx=currentx;
lasty=currenty;
}

function clearArea() {
 ctx.clearRect(0, 0,canvas.width,canvas.height); }