// Global Scope
var bg, bgImage;
var mario, mario_running;
var ground;
var brickImage, bricksGroup;

var coinImage, coinsGroup;
var coinScore = 0;

var coinSound;

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
  brickImage = loadImage("images/brick.png");
  coinImage = loadAnimation(
    "images/con1.png",
    "images/con2.png",
    "images/con3.png",
    "images/con4.png",
    "images/con5.png",
    "images/con6.png"
  );
  coinSound = loadSound("sounds/coinSound.mp3");
  jumpSound = loadSound("sounds/jump.mp3");
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
  bricksGroup = new Group();
  coinsGroup = new Group();
}

// Used to redraw the Objects on the canvas
function draw() {
  // Make background move and repeate
  bg.velocityX = -5;
  if (bg.x < 100) bg.x = bg.width / 4;

  // mario Fly
  if (keyDown("space")) {
    mario.velocityY = -10;
    jumpSound.play();
  }

  // add Gravity
  mario.velocityY = mario.velocityY + 0.5;

  // mario stuck on ground
  mario.collide(ground);
  ground.visible = false;

  // call GenerateBricks
  generateBricks();

  for (var i = 0; i < bricksGroup.length; i++) {
    var temp = bricksGroup.get(i);
    if (mario.isTouching(temp)) {
      mario.collide(temp);
    }
  }
  if (mario.x < 200) {
    mario.x = 200;
  }
  if (mario.y < 50) {
    mario.y = 50;
  }

  generateCoins();

  for (var i = 0; i < coinsGroup.length; i++) {
    var temp = coinsGroup.get(i);
    if (mario.isTouching(temp)) {
      temp.destroy();
      coinSound.play();
      coinScore++;
      temp = null;
    }
  }

  // Redraw Objects
  drawSprites();

  // display Score
  textSize(20);
  fill("brown");
  text("Coins Collected: " + coinScore, 500, 50);
}

function generateBricks() {
  if (frameCount % 80 == 0) {
    console.log(frameCount);

    var brick = createSprite(1200, 100, 40, 10);
    brick.y = random(50, 450);
    brick.addImage(brickImage);
    brick.scale = 0.5;
    brick.velocityX = -5;
    brick.lifetime = 250;
    bricksGroup.add(brick);
  }
}

function generateCoins() {
  if (frameCount % 50 == 0) {
    var coin = createSprite(1200, 100, 40, 10);
    coin.y = random(50, 450);
    coin.addAnimation("rotate", coinImage);
    coin.scale = 0.1;
    coin.velocityX = -5;
    coin.lifetime = 250;
    coinsGroup.add(coin);
  }
}
