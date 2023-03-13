function preload()
{

}


function setup()
{
   canvas=createCanvas(640,480);
   canvas.position(150,250);

   video=createCapture(VIDEO);
   video.hide();

   tint_color="";
}

function draw()
{
      image(video,0,0,640,480);

      rect(60, 425, 500, 55);
     
      rect(60, 0, 500, 55);
      
      rect(585, 20, 55, 450);
      
      rect(0, 20, 55, 450);
      
      circle(30, 30, 140);
      
      circle(600, 30, 140);
      
      circle(30, 450, 140);
      
      circle(600, 450, 140);
      
     



}

function filter_tint()
{
    tint_color=document.getElementById("color_name").value;
}

function take_snapshot()
{
    save('filter.png');
}