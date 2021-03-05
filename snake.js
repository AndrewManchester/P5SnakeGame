class Snake {
  
  constructor() {
  	this.body = [];
    this.body[0] = createVector(floor(w/2), floor(h/2));
    this.xdir = 0;
    this.ydir = 0;
    //this.len = 0;
  }
  
  setDir(x, y) {
  	this.xdir = x;
    this.ydir = y;
  }
  
  update() {
    //Snake is array of vectors
    //Element 0 is the tail of the snake.
    //The last element is the head
    //when snake moves. We first lose the first element
    //from the array and then put at the end the new head
    //(position)
  	let head = this.body[this.body.length-1].copy();
    this.body.shift();
    //New position
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }
  
  grow() {
    //??? Push head on body twice
  	let head = this.body[this.body.length-1].copy();
    //this.len++;
    this.body.push(head);
  }
  
  endGame() {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x > w-1 || x < 0 || y > h-1 || y < 0) {
       return true;
    }
    //Loop does not do normal i <= length -1
    for(let i = 0; i < this.body.length-1; i++) {
    	let part = this.body[i];
      if(part.x == x && part.y == y) {
      	return true;
      }
    }
    return false;
  }
  
  eat(pos) {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }
  
  show() {
  	for(let i = 0; i < this.body.length; i++) {
    	fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1)
    }
  }

  snakeOverThisPosition(paramX,paramY) {
    let overPosition = false
    let x = 0
    let y = 0
    for(let i = 0; i <= this.body.length-1; i++) {
       x = this.body[i].x;
       y = this.body[i].y;
       if(x == paramX && y == paramY) {
          overPosition =true;
          break
       }
     }
     return overPosition
  }

}
