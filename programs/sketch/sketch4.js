
function setup()
{
 createCanvas(1000,1000,WEBGL);

}

function draw()
{
 background(0);
 noStroke();
 fill(255,0,0);
 camera(100,100,100);
rotateX(radians(45)*frameCount*0.01);
rotateY(radians(45)*frameCount*0.01);
rotateZ(radians(45)*frameCount*0.01);
box(300,110,300);
fill(0,0,255);
torus(300);
fill(1,244,0);
cone(100,250,350);

 
 
}