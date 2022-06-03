var backgroundImg;
var player,playerStanding,playerS;
var zombie,zombieImg;
var bullet,bulletImg;



function preload() {
  backgroundImg=loadImage("assets/bg.jpeg")
  playerStanding=loadImage("assets/shooter_1.png")
  playerS=loadImage("assets/shooter_3.png")
zombieImg=loadImage("assets/zombie.png")
bulletImg= loadImage("assets/bullet.png")

}
function setup() {
  createCanvas(windowWidth,windowHeight);

  player=createSprite(300,850,20,20);
  player.addImage(playerStanding);
  player.scale=0.6;

  
}
function draw() {
  background(backgroundImg);

if(keyDown("up")){
  player.y=player.y-30;
}

if(keyDown("down")){
  player.y=player.y+30;
}


if(keyDown("space")){
  player.addImage(playerS);
  bullet=createSprite(player.x,player.y);
  bullet.addImage(bulletImg)
  bullet.velocityX=50;
  bullet.scale=0.2;
}

else if(keyWentUp("space")){
  player.addImage(playerStanding);
  player.scale=0.8;
}

SpawnZombie();

  drawSprites();
}

function SpawnZombie(){
  if(frameCount%30===0){
  zombie=createSprite(windowWidth,random(100,1000),20,20);
  zombie.addImage(zombieImg);
  zombie.scale=0.34;
  zombie.velocityX=-5;


  }

}