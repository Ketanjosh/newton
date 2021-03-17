
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;



var world;




function setup() {
	
	
	createCanvas(1000, 700);

	engine=Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	bobObj1=new Bob(300,500,50)	
	bobObj2=new Bob(400,500,50)	
	bobObj3=new Bob(500,500,50)	
	bobObj4=new Bob(600,500,50)	
	bobObj5=new Bob(700,500,50)

	roof=new Roof(500,100,500,50)
	
	rope1= new Rope(bobObj1.body,roof.body,-200,0)
	rope2= new Rope(bobObj2.body,roof.body,-100,0)
	rope3= new Rope(bobObj3.body,roof.body,0,0)
	rope4= new Rope(bobObj4.body,roof.body,100,0)
	rope5= new Rope(bobObj5.body,roof.body,200,0)


	 
	Engine.run(engine);
	//string = new String(rect.body,stringObj.body);
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
 
 

	roof.display();  

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();


}



function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-100,y:-60});
	}
}