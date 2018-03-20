function setup() {
  createCanvas(1200,1000);
  noStroke();
}

function draw() {
  background(204);
  
  line(20,80,420,110);
  rect(400,120,160,180);
  fill(123,32,12);
  ellipse(600,600,200,200);
  fill(0,255,0);
  arc(190, 60, 80, 80, 0, PI+HALF_PI);
  fill(0,0,220);
}