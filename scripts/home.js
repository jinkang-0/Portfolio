// add object class for circles
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
    if (this.alpha >= 0.8) this.spawning = false;
  }

  show() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 360);
    c.fillStyle = `rgba(30 , 60, ${this.color}, ${this.alpha})`;
    c.fill();
  }

}

// declare canvas and variables
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var pCount;
var circles;

window.addEventListener("resize", function() {
  init();
})

// sets up variables and spawns initial circles
function init() {

  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = window.innerHeight - 60;
  pCount = Math.floor(canvas.width / 100);
  circles = [];

  for (var i = 0; i < pCount; i++) {
    spawnCircle();
  }
}

// animates the scene
function animate() {

  c.clearRect(0, 0, canvas.width, canvas.height);

  if (circles.length < pCount) spawnCircle();
  for (var i = circles.length - 1; i >= 0; i--) {
    circles[i].update();
    circles[i].show();
    if (circles[i].alpha <= 0) circles.splice(i, 1);
  }

  requestAnimationFrame(animate);
}

// initialize and start animation
init();
animate();

// tool for randomization
function random(x) {
  return Math.random() * x;
}

// tool for spawning a new circle
function spawnCircle() {
  circles.push( 
    new Circle(
      random(canvas.width * 18/20) + canvas.width/20, 
      random(canvas.height) + canvas.height/10, 
      random(5) + 10, true
    ) 
  );
}



/*
  brainpopper
*/

var hairClicks = 0;
const hair = document.getElementById('hair');




/*
  inject featured projects
*/

function setFeatured(num) {
  const category = document.getElementById(`featured${num}-category`);
  const title = document.getElementById(`featured${num}-title`);
  const desc = document.getElementById(`featured${num}-desc`);
  const link = document.getElementById(`featured${num}-link`);
  const img = document.getElementById(`featured${num}-img`);

  category.innerHTML = featured[num-1].category.toUpperCase();
  title.innerHTML = featured[num-1].title;
  desc.innerHTML = featured[num-1].desc;
  link.href = featured[num-1].link;
  img.src = featured[num-1].img;
}

setFeatured(1);
setFeatured(2);
setFeatured(3);