var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

window.addEventListener("resize", function() {
  pCount = parseInt(innerWidth / 40);
  canvas.width = innerWidth;
  canvas.height = 500;
  init();
})

var pCount = parseInt(innerWidth / 100);

var circles = [];

function init() {

  canvas.width = innerWidth;
  canvas.height = 500;

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