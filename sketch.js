const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var character = "sprites/ff.png";
var gameState;
var fire = "sprites/fire.png";
var bg = "sprites/house.jpg";

function setup() {
    createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    character=createSprite(700,240,70,70);
    box4 = new Box(920,240,70,70);
}

function draw() {

}