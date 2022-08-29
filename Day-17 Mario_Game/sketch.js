// Global Scope
var bg, bgImage;
var mario, mario_running;
var ground;

// Load Assets
function preload() {
  bgImage = loadImage("images/bgnew.jpg");
  mario_running = loadAnimation(
    "images/mar1.png",
    "images/mar2.png",
    "images/mar3.png",
    "images/mar4.png",
    "images/mar5.png",
    "images/mar6.png"
  );
}

// create basic Scaleton with their required credentials
function setup() {
  // Create Canvas
  createCanvas(1000, 600);

  // create Objects
  bg = createSprite(600, 300, 150, 50);
  mario = createSprite(200, 520, 150, 50);

  // Add pictures on Objects
  bg.addImage(bgImage);
  mario.addAnimation("running", mario_running);

  // Scale Objects
  bg.scale = 0.5;
  mario.scale = 0.2;

  // create Ground
  ground = createSprite(200, 580, 400, 10);
}

// Used to redraw the Objects on the canvas
function draw() {
  // Make background move and repeate
  bg.velocityX = -5;
  if (bg.x < 100) bg.x = bg.width / 4;

  // mario Fly
  if (keyDown("space")) mario.velocityY = -10;

  // add Gravity
  mario.velocityY = mario.velocityY + 0.5;

  // mario stuck on ground
  mario.collide(ground);
  ground.visible = false;

  // Redraw Objects
  drawSprites();
}
