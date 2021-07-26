const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world;
var ground;
var fruit;

function setup() {
  createCanvas(500, 600);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(250, 580, width, 20);
  rope = new Rope(6, { x: 250, y: 5 });

  var options = {
    restitution: 0.4,
    density: 0.00001
  }

  fruit = Bodies.circle(250, 100, 30, options);
  World.add(world, fruit)
  Matter.Composite.add(rope.body, fruit)
  link = new Link(rope, fruit);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
}

function draw() {
  background(51);
  Engine.update(engine);
  ground.display();
  rope.show();
  ellipse(fruit.position.x, fruit.position.y, 30, 30)

}




