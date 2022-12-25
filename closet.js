closetimg=""
Status=""
function preload(){
    closetimg=loadImage('closet.jpg');
}
function setup(){
    canvas=createCanvas(500,300);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function draw()
{
    image(closetimg,0,0,500,300);
}
function modelLoaded(){
    console.log("Model Loaded ")
    Status=true;
    objectDetector.detect(img,gotResult);
}
    function gotResult(error,results){
        if(error){
            console.log(error);
        }
        console.log(results);
      }
 function back()
{
    window.location("index.html");
}