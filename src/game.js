import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "/src/ball";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);

    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.paddle.update(deltaTime);
    this.ball.update(deltaTime);
  }

  draw(ctx) {
    this.paddle.draw(ctx);
    this.ball.draw(ctx);
  }
}
