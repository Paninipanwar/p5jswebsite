var bird
var pipes = []
var floorY


function setup() {
  createCanvas(400, 400);
  noStroke()
  floorY = 0.9 * height
  
  bird = new Bird ()
  for(var i = 0; i < 3; i ++) {
  pipes[i] = new Pipe(width + width/2 * i)
  }
}

function draw() {
  background(0, 0, 255);
  for(var i = 0; i < pipes.length; i++) {
  pipes[i].draw(bird)
  }
  fill (0, 0, 100);
  rect (0, floorY, width, height-floorY)
  
 bird.draw()
  fill(0,0,0)
  if(bird.health == 0) {
    textSize(50)
    textAlign (CENTER,CENTER)
  text ("Game Over",width/2, height/2)
  }
}

function doAction() {
  
  if (bird.health == 1 ) { //alive
  bird.jump()  
  } else {
    for(var i = 0; i < pipes.length; i++) {
      pipes[i].reset() 
    }
    bird.reset()
  }
}

function mousePressed (){
  doAction()
}

function keyPressed() {
  if (key == " ") {
    doAction()
  }
}