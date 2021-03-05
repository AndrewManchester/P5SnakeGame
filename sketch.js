let snake;
let canvas
let rez = 20;
let food;
let w;
let h;
let score = 0
let scoreDiv
let startButton

function setup() {
  scoreDiv = select(".score")
  startButton = select("#start")
  startButton.mousePressed(setUpNewGame)
  startButton.elt.classList.add('hide')
  canvas = createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}


function setUpNewGame(){
  //So every frame we start blank and then redraw the screen
  startButton.elt.classList.add('hide')
  score = 0
  scoreDiv.html(score)
  snake = new Snake();
  foodLocation();
  //Put loop at end
  loop()
} 

function foodLocation() {
  let x = 0
  let y = 0
  do {
    x = floor(random(w-1));
    y = floor(random(h-1));
    if (x === 0) {
      x++
    }  
    if (y === 0) {
      y++
    }
  }
  //check position not on snake
  while (snake.snakeOverThisPosition(x,y))
  food = createVector(x, y);

}

function keyPressed() {
  print("here")
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(rez);
  background(220);
  if (snake.eat(food)) {
    scoreDiv.html(++score)
    foodLocation();
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {
    startButton.elt.classList.remove('hide')
    scoreDiv.html(`${score} Game Ended `)
    noLoop();
  }

  //Showed the snake now the fruit
  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}
