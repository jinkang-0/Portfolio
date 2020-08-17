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
    c.fillStyle = `rgba(30 , 60, ${this.color}, ${this.alpha})`;
    c.fill();
  }

}