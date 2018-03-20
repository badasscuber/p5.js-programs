var img;
function setup() {
  createCanvas(1000, 1000,WEBGL);
}
function preload(){
 

  img = loadImage("");
}

function draw() {
  background(51);
  texture(img);

}