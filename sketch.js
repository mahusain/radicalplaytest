
let state = 'title';
let cnv;
let canvasClicked;
let starterlevel;
let points = 0;
let w = 600;
let h = 600;
let player;
let coin;

function setup() {
  cnv = createCanvas(w, h);
  textFont('monospace');
  
  player = new Player();
  coin = new Coins();
}

function draw() {

  switch (state){
    case 'title': 
      title();
      cnv.mouseClicked(titleClicked);
      break;
      case 'starterlevel':
      level1();
      cnv.mouseClicked(starterlevelclicked);
      break;
      case 'boost complete':
      boostComplete();
      cnv.mouseClicked(boostCompleteClicked);
      break
      default:
      break;
  }
  
  if (state === 'title') {
  title();
  cnv.mouseClicked(titleClicked);
  } else if (state === 'starterlevel' && points > 50) {
  level1();
  cnv.mouseClicked(starterlevelclicked);

}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW){
    player.direction = 'right'
  } else if (keyCode == UP_ARROW){
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW){
    player.direction = 'down'
  } else if (key == ' '){
    player.direction = 'still'
  }
}

function title(){
  background(220);
  textSize(80);
  textAlign(CENTER);
  text('Pixel Wars', w/2, h/3);
  textSize(40);
  text('click to start', w/2 , h/2);
}
function titleClicked(){
  console.log('canvas is clicked');
  state = 'starterlevel';
}

function level1(){
  background(240, 200, 200);
  
  player.display();
  player.move();
  coin.display();
  coin.move();
}
function starterlevelclicked() {
  console.log('boost = ' + points);
  points++;
  
  if(points >= 51){
    state = 'boost complete';
  }
  }
function boostComplete(){
  background(220);
  textSize(40);
  text('BOOST COMPLETE', w/2, h/3);
  
  textSize(40);
  text('Click to go again!', w/2, h/2);
}
function boostCompleteClicked(){
  state = 'starterlevel';
  points = 0;
}
}