const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops=100;
var drops = [];

function preload(){
    thunderImg_1 = loadImage("images/thunderbolt/1.png");
    thunderImg_2 = loadImage("images/thunderbolt/2.png");
    thunderImg_3 = loadImage("images/thunderbolt/3.png");
    thunderImg_4 = loadImage("images/thunderbolt/4.png");

}

function setup(){
   createCanvas(500,600);
  engine = Engine.create();
  world = engine.world;
  umbrella = new Umbrella(250,350);
}

function draw(){
  background(2,5,21);
  Engine.update(engine);

  if (frameCount % 20 === 0) {
    thunder = createSprite(random(0, 500), 0, 100, 100);
    var rand = Math.round(random(1,4));
    switch(rand){
        case 1: thunder.addImage("thunder1",thunderImg_1);
        break;
        case 2: thunder.addImage("thunder1",thunderImg_2);
        break;
        case 3: thunder.addImage("thunder1",thunderImg_3);
        break;
        case 4: thunder.addImage("thunder1",thunderImg_4);
        break;
    }
  }

  if(frameCount%10===0){
    drops.push(new Drop(random(0,400),random(0,100)));
  }
  for (var j = 0; j < drops.length; j++){
    drops[j].display();
    drops[j].update();
  }
umbrella.display();

  
}