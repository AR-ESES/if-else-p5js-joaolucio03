let diam = 200

function setup() {
  createCanvas(800, 800);
  background(0)
}

function draw() {
  stroke(255)
  strokeWeight(5)
  circle(width/2, height/2, diam)
  if(mouseX > width/2){
    
    if(mouseY > height/2)
    fill(255)
    else
    fill(0,255,0)
    
 }
  
  else{
   if(mouseY >height/2)
     fill(0,0,255)
  else
    fill(255,0,0)
  }
}