var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = 500;

var pCount = parseInt(innerWidth / 40);

window.addEventListener("resize", function() {
  pCount = parseInt(innerWidth / 40);
  canvas.width = innerWidth;
  canvas.height = 500;
  init();
})

class Circle {
  
  constructor(x, y, size, spawning) {
    this.x = x;
    this.y = y;
    this.velx = (Math.random() - 0.5) / 2;
    this.vely = -Math.random();
    
    this.radius = size;
    this.color = parseInt(random(40)) + 90;
    this.alpha = 0.01;
    this.decay = (random(10) / 1000) + 0.001;
    this.spawning = spawning;
  }

  update() {
    this.x += this.velx;
    this.y += this.vely;
    if (!this.spawning) this.alpha -= this.decay;
    if (this.spawning) this.alpha += this.decay * 2;
    if (this.alpha >= 1) this.spawning = false;
  }

  show() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 360);
    c.fillStyle = `rgba(30, 60, ${this.color}, ${this.alpha})`;
    c.fill();
  }

}

var circles = [];

function init() {

  circles = [];

  for (var i = 0; i < pCount; i++) {
    spawnCircle();
  }

}

function animate() {

  c.clearRect(0, 0, innerWidth, canvas.height);

  if (circles.length < pCount) {
    spawnCircle();
  }

  for (var i = circles.length - 1; i >= 0; i--) {
    circles[i].update();
    circles[i].show();
    if (circles[i].alpha <= 0) circles.splice(i, 1);
  }

  requestAnimationFrame(animate);

}

init();
animate();

function random(x) {
  return Math.random() * x;
}

function spawnCircle() {
  circles.push( new Circle(random(innerWidth * 18/20) + innerWidth/20, random(canvas.height) + canvas.height/10, random(5) + 10, true) );
}