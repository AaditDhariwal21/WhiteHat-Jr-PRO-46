const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState=0;
var menu;
var bg;
var pc,pcHealth=100;
var npc1,npc2,npc3,npc4,npc5;

function preload()
{
	bg=loadImage("bg.jpg")
}

function setup() {
	createCanvas(1500,900);
   
  spawnNPCandPC();
 
  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    menu=new MENU();
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  console.log(pcHealth);
  
  //gameStates

  if(gameState === 0){
    background(bg);
    menu.display();
	}
  
  if(gameState === 1 ){
    background("yellow");
	  menu.display();
}

if(gameState === 2){
  background("black");
  pc.shapeColor="lime";
  npc1.shapeColor="red";
  npc2.shapeColor="red";
  npc3.shapeColor="red";
  npc4.shapeColor="red";
  npc5.shapeColor="red";

  movement();

  follow(npc1,pc,7);
  follow(npc2,pc,7);
  follow(npc3,pc,7);
  follow(npc4,pc,7);
  follow(npc5,pc,7);

  //health and knockback
  textSize(30);
  fill("yellow");
  text("Health: "+pcHealth,1300,100);

  knockback();
 }
  
  drawSprites();
 
}


  function movement() {
    //movement
     
    if (keyWentDown("up")) {
      pc.velocityY=-10;
    }
    
    if (keyWentUp("up")) {
      pc.velocityY = 0;
    }
    
    if (keyWentDown("down")) {
      pc.velocityY = 10;
    }

    if (keyWentUp("down")) {
      pc.velocityY= 0;
    }

    if (keyWentDown("left")) {
      pc.velocityX = -10;
    }

    if (keyWentUp("left")) {
      pc.velocityX=0;
    }
    if (keyWentDown("right")) {
      pc.velocityX = 10;
    }

    if (keyWentUp("right")) {
      pc.velocityX=0;
    }
  }

  function follow(follower, followed, velocity) {
    //the follower follows the followed at a constant velocity
      deltaX = followed.x - follower.x;
      deltaY = followed.y - follower.y;
      var followerAngle = Math.atan(deltaY / deltaX); 
      if (deltaX < 0) {
        // the arctan assumes that the angle is in the first or 
        // fourth quadrants, so if it's in the second or third
        // (i.e. deltaX/cosign is negative) correct by adding PI
        followerAngle = followerAngle + Math.PI;
      }
      follower.velocityX = velocity * Math.cos(followerAngle);  
      follower.velocityY = velocity * Math.sin(followerAngle);
  }
  
  function spawnNPCandPC(){
    pc=createSprite(750,50,50,50);
    npc1=createSprite(random(20,1300),random(600,800),30,30);
    npc2=createSprite(random(20,1300),random(600,800),30,30);
    npc3=createSprite(random(20,1300),random(600,800),30,30);
    npc4=createSprite(random(20,1300),random(600,800),30,30);
    npc5=createSprite(random(20,1300),random(600,800),30,30);
  }

  function knockback(){
    if(npc1.isTouching(pc)){
      npc1.velocityX=0;
      npc1.velocityY=0;
      pc.shapeColor="red";
      
  
      if(npc1.x>pc.x){
        pc.x=pc.x-30;
      }
      if(npc1.x<pc){
       pc.x=pc.x+30;
      }
      if(npc1.y>pc.y){
       pc.y=pc.y-30;
      }
      if(npc1.y<pc.y){
       pc.y=pc.y+30;
      }
      pcHealth=pcHealth-1;
    }

   
    if(npc2.isTouching(pc)){
      npc2.velocityX=0;
      npc2.velocityY=0;
      pc.shapeColor="red";
      
  
      if(npc2.x>pc.x){
        pc.x=pc.x-30;
      }
      if(npc2.x<pc){
       pc.x=pc.x+30;
      }
      if(npc2.y>pc.y){
       pc.y=pc.y-30;
      }
      if(npc2.y<pc.y){
       pc.y=pc.y+30;
      }
      pcHealth=pcHealth-1;
    }

    if(npc3.isTouching(pc)){
      npc3.velocityX=0;
      npc3.velocityY=0;
      pc.shapeColor="red";
      
      if(npc3.x>pc.x){
        pc.x=pc.x-30;
      }
      if(npc3.x<pc){
       pc.x=pc.x+30;
      }
      if(npc3.y>pc.y){
       pc.y=pc.y-30;
      }
      if(npc3.y<pc.y){
       pc.y=pc.y+30;
      }
      pcHealth=pcHealth-1;
    }

    if(npc4.isTouching(pc)){
      npc4.velocityX=0;
      npc4.velocityY=0;
      pc.shapeColor="red";
      
  
      if(npc4.x>pc.x){
        pc.x=pc.x-30;
      }
      if(npc4.x<pc){
       pc.x=pc.x+30;
      }
      if(npc4.y>pc.y){
       pc.y=pc.y-30;
      }
      if(npc4.y<pc.y){
       pc.y=pc.y+30;
      }
      pcHealth=pcHealth-1;
    }

    if(npc5.isTouching(pc)){
      npc5.velocityX=0;
      npc5.velocityY=0;
      pc.shapeColor="red";
      
  
      if(npc5.x>pc.x){
        pc.x=pc.x-30;
      }
      if(npc5.x<pc){
       pc.x=pc.x+30;
      }
      if(npc5.y>pc.y){
       pc.y=pc.y-30;
      }
      if(npc5.y<pc.y){
       pc.y=pc.y+30;
      }
      pcHealth=pcHealth-1;
    }
  }