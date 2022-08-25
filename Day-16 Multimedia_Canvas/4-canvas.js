// selectors
var canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// canvas.width = 200;
// canvas.width = window.innerWidth;

// Filled Rectangle
ctx.fillStyle = "red";
ctx.fillRect(50, 50, 150, 100);

// Stroke  Rectangle
ctx.lineWidth = 5;
ctx.strokeStyle = "blue";
ctx.strokeRect(250, 50, 150, 100);

// Rounded Rectangle
ctx.fillStyle = "orange";
ctx.roundRect(450, 50, 100, 100, [10]);
ctx.fill();

// clear Canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.font = "30px Arial";
ctx.fillStyle = "green";
ctx.fillText("Hello World", 200, 200);

ctx.lineWidth = 1;
ctx.strokeStyle = "purple";
ctx.strokeText("Hello World", 200, 300);

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Draw Triangle
// Path
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
ctx.lineTo(50, 50);
// ctx.closePath()
ctx.fillStyle = "coral";
// ctx.stroke();
ctx.fill();

// Stroke Triangle
ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(150, 200);
ctx.lineTo(250, 200);
ctx.closePath();
ctx.stroke();

// Filled Rectangle
ctx.beginPath();
ctx.rect(300, 50, 150, 100);
ctx.fillStyle = "blue";
ctx.fill();

// Draw Arc
ctx.beginPath();
ctx.fillStyle = "teal";
ctx.arc(300, 300, 100, 0, Math.PI * 2);
// ctx.stroke();
ctx.fill();

// radian = (Math.PI) * 2 ----> Full Circle
// radian = (Math.PI)     ----> Half Circle
clearCanvas();


// Face
ctx.beginPath();

// ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, Math.PI * 2);

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

// Draw Head
ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

// Move to mouth
ctx.moveTo(centerX + 100, centerY);

// Draw mouth
ctx.arc(centerX, centerY, 100, 0, Math.PI);

// Move to left eye
ctx.moveTo(centerX - 60, centerY - 80);

// Draw left eye
ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

// Move to right eye
ctx.moveTo(centerX + 100, centerY - 80);

// Draw right eye
ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);
ctx.stroke();