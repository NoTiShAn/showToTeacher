var score = 0,balloon,hex,hexImg,HexGroup,balloonImg,bg,bgImg;
var PLAY = 1
var END = 0
var gameState = PLAY
var winSound,loseSound
function preload(){
balloonImg = loadImage('balloonImg.png')
bgImg = loadImage('bgForIMG.jpg')
hexImg = loadImage('hex.png')
}
function setup() {
	createCanvas(800,700);


	//engine = Engine.create();
	//world = engine.world;

HexGroup = new Group()

bg = createSprite(400,700,2000,1000)
bg.addImage('bgImg',bgImg)
bg.y = bg.width/2
bg.velocityY = -3

balloon = createSprite(400,300,20,40)
balloon.shapeColor = 'white'
balloon.addImage('balloonImg',balloonImg)
balloon.scale = 0.25
	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  
  if(gameState === PLAY){

    background(0);
    bg.velocityY = -3
  if(bg.y < 0){
  bg.y = bg.width/2
  if(keyCode === 37){
    balloon.x -= 5
      }
    if(keyCode === 39){
      balloon.x += 5
  }
      }
      spawnHex()
      if(HexGroup.isTouching(balloon)){
        gameState = END
        //gameEnd()
      }
  }
  if(gameState === END){

    textSize(50)
    fill('black')
  text('You Lose',400,350)
  text('press space bar to retry',600,350)
  if(keyCode === 32){
  gameState = PLAY
  score = 0
  }
    score = score + 0.1
  drawSprites();
  textSize(30)
  fill('red')
  text(Math.round(score),100,100) 
}

function spawnHex(){
if(frameCount % 10 === 0){
hex = createSprite(random(0,800),0,20,20)
hex.velocityY = 7
hex.addImage('hex',hexImg)
hex.scale = 0.3
if(score >= 50){
//play a sound
hex.velocityY = score % 5
}
HexGroup.add(hex)
}
}
}

