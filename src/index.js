import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "/src/ball";

let canvas = document.getElementById("gameScreen"); // Grabbing the element from HTML by the id;
let ctx = canvas.getContext("2d"); // gives a rendering context when drawing on the canvas;

const GAME_WIDTH = 800; // Creating a game screen width 'boundary';
const GAME_HEIGHT = 600; // Creating a game screen height 'boundary';

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);

let lastTime = 0;
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT); // Clears rectangles after every update;

  paddle.update(deltaTime);
  paddle.draw(ctx);

  ball.update(deltaTime);
  ball.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
