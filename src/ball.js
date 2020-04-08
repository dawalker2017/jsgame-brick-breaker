export default class Ball {
  constructor(gameWidth, gameHeight) {
    this.image = document.getElementById("img_ball");
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.speed = { x: 2, y: 2 };
    this.position = { x: 10, y: 10 };
    this.size = 30;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (this.position.x > this.gameWidth || this.position.x < 0) {
      this.speed = -this.speed;
    }
  }
}
