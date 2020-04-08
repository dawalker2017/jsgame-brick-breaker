import Game from "/src/game";

let canvas = document.getElementById("gameScreen"); // Grabbing the element from HTML by the id;
let ctx = canvas.getContext("2d"); // gives a rendering context when drawing on the canvas;

const GAME_WIDTH = 800; // Creating a game screen width 'boundary';
const GAME_HEIGHT = 600; // Creating a game screen height 'boundary';

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

let lastTime = 0;
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT); // Clears rectangles after every update;

  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
