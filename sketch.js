var bg,bgImg;
var black
var health1,health2;
var player1Hand,player2Hand;
var player1,player1Style1,player1Style2,player1Img;
var player2,player2Img,player2Style1,player2Style2;
var START = 1
var PLAY = 2
var END = 0
var gameState = PLAY

function preload(){
bgImg = loadImage("Images/bg.jpg")  



player2Style1 = loadAnimation ("Images/fighter1.png","Images/fighter2.png","Images/fighter3.png","Images/fighter4.png","Images/fighter5.png","Images/fighter6.png","Images/fighter7.png")
player2Img = loadAnimation("Images/fighter4.png")
}

function setup() {
 createCanvas(1200,700);


  health1 = createSprite(250,200,150,15)
  health2 = createSprite(950,200,150,15)
  player1 = createSprite(250,550,30,30)

  player1Hand = createSprite(300,550,70,10)
  

  player2 = createSprite(950,550,30,30)
 // player2.addAnimation("still",player2Img)
 // player2.addAnimation("fighting",player2Style1)
 // player2.scale=3

  
}

function draw() {
  background("black")

  if(gameState===START){ 
 // black = createSprite(1200,700,100,10) 
  textSize(60)   
  text("Player1",200,200)
}
  if(gameState===PLAY){
    drawSprites() 
  //background(bgImg) 

  if(keyIsDown(RIGHT_ARROW)){
    //player2.changeAnimation("fighting",player2Style1) 
    player2.x+=1  
  }

  if(keyDown("left")){
    player2.x-=1
    //player2.changeAnimation("fighting",player2Style1) 
  }

  if(keyDown("A")){
    player1.x-=1
    
   // player2.changeAnimation("fighting",player2Style1) 
  }

  if(keyDown("D")){
    player1.x+=1
    player1Hand.x=player1.x
    

   // player2.changeAnimation("fighting",player2Style1) 
  }

 
  if(player1.isTouching(player2)){

  }

  
  }
 
  
}