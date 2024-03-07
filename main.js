canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color= "black";
width= 5;
lmx="";
lmy="";
mouse_event="";
canvas.addEventListener("mousedown",mymd);

function mymd(e){
    mouse_event="md";
    color=document.getElementById("pcolor").value;
    width=document.getElementById("pwidth").value;
}
canvas.addEventListener("mouseup",mymu);
function mymu(e){
    mouse_event="mu";

}
canvas.addEventListener("mouseleave",myml);
function myml(e){
    mouse_event="ml";
}
canvas.addEventListener("mousemove",mymm);
function mymm(e){
    cmousex=e.clientX-canvas.offsetLeft;
    cmousey=e.clientY-canvas.offsetTop;
     if(mouse_event=="md"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
       ctx.arc(cmousex,cmousey,20,0,2*Math.PI);
        ctx.stroke();

     }
     lmx=cmousex;
     lmy=cmousey;
}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}