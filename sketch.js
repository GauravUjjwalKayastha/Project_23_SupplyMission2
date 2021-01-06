var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var fall=0;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	helicopterSprite=createSprite(width/2-300, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	packageSprite=createSprite(helicopterSprite.x, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite.depth=packageSprite.depth;
	helicopterSprite.depth=helicopterSprite.depth+1;
	


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2-300, 200 , 25 , {restitution:0.55, isStatic:true});
	World.add(world, packageBody);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 wall1=Bodies.rectangle(width/2-100,610,20,100,{ isStatic:true});
	World.add(world, wall1);
	 wall1Sprite=createSprite(wall1.position.x,wall1.position.y, 20,100);
	
	 wall2=Bodies.rectangle(width/2+100,wall1.position.y,20,100,{ isStatic:true});
	 World.add(world, wall2);
	  wall2Sprite=createSprite(wall2.position.x,wall2.position.y, 20,100);

	  wall3=Bodies.rectangle(width/2,wall1.position.y+40,200,20,{ isStatic:true});
	  World.add(world, wall3);
	   wall3Sprite=createSprite(wall3.position.x,wall3.position.y, 200,20);

	   wall1Sprite.shapeColor="red";
	   wall2Sprite.shapeColor="red";
	   wall3Sprite.shapeColor="red";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if (keyCode === LEFT_ARROW&&fall===0) { 
	 helicopterSprite.x=helicopterSprite.x-20;
	 translation={x:-20,y:0} 
	 Matter.Body.translate(packageBody, translation) 
	}
	else if (keyCode === RIGHT_ARROW&&fall===0) {
		 helicopterSprite.x=helicopterSprite.x+20; 
		 translation={x:20,y:0} 
		 Matter.Body.translate(packageBody, translation) 
		}
	if(keyCode === DOWN_ARROW&&fall===0){
		fall=1;
		helicopterSprite.x=helicopterSprite.x; 
		 translation={x:0,y:0} 
		 Matter.Body.translate(packageBody, translation) 
	}
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  keyPressed();
 
  drawSprites();
  
 


 


}




function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
	packageBody.position.x=packageBody.position.x;

	
	 
	 }
	
   }



