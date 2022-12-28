class Bird {
  constructor() {
    this.size = 0.05 * width
    this.aMax = 0.15
    this.floor = floorY
    this.reset()
    
  }
  draw () {
    this.vy = this.vy + this.ay
    this.y = this.y + this.vy
    
    if(this.ay < this.aMax) {
      this.ay = this.ay + 0.4 }
    else { 
      (this.a = this.aMax) }
    
    
    if (this.y > this.floor) {
    this.vy = 0
    this.ay = 0 
    this.y = this.floor
    this.health = 0
    }
    
    fill (0,200,0)
    ellipse(this.x, this.y, this.size, this.size)
  }
  
  jump() {
  this.vy = 0
  this.ay= -1.7 
  }
  reset(){
  this.x = width/3
  this.y = height/2
  this.vy = 0
  this.health = 1
  this.ay = this.aMax
  this.floor = floorY
  }
  
}
