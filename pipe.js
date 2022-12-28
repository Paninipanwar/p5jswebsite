class Pipe {
  constructor (x) {
    this.x0 = x
    this.gapWidth = 0.05 * width
    this.gapHeight = 0.3 * height
    this.reset()
  
  }
  draw (bird) {
    fill (92,0,65)
    rect (this.x, 0, this.gapWidth, this.topGap)
    rect (this.x, this.topGap + this.gapHeight,
          this.gapWidth,
          height - this.topGap - this.gapHeight )
  
    if (bird.health == 1) {
    this.x = this.x -2 
    }
      if(this.x < - width/2) {
      this.x = width + this.gapWidth/2 
      this.topGap = map(random(0,1), 0,1,
                      0.1 * height,
                      0.6 * height)
      }  
      if(bird.x + bird.size/2 >= this.x &&
        bird.x - bird.size/2 <= this.x + this.gapWidth) {
        if(bird.y - bird.size/2 <= this.topGap ||
          bird.y + bird.size/2 >= this.topGap + this.gapHeight) {
          bird.health = 0
          
        if(bird.x > this.x &&
           bird.x < this.x + this.gapWidth){
        bird.floor= this.topGap + this.gapHeight
        }
        }
      }
  }
  reset () { 
    
    this.x = this.x0
    this.topGap = map(random(0,1), 0,1,
                      0.1 * height,
                      0.6 * height)}
}