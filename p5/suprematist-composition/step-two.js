function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(245);
  drawRandomQuads();
  noLoop();
}

function drawRandomQuads() {
  for (let i = 0; i < 12; i++) {
    if (i < 4) {
      fill(108, 148, 196); // blue
    } else if (i >= 4 && i < 8) {
      fill(253, 253, 139); //yellow
    } else {
      fill(255, 105, 97); //red
    }
    const deviate = random(30);
    approxQuad(deviate);
  }
}

// 1. generate quad
// 2. random color
// 3. randow width and randow height

function approxQuad(deviate) {
  const width = random(300);
  const height = random(300);
  const centerX = windowWidth / 2 + random(-300, 300);
  const centerY = windowHeight / 2 + random(-300, 300);

  quad(
    centerX - width,
    centerY - height,
    centerX + width + random(-deviate, deviate),
    centerY - height + random(-deviate, deviate),
    centerX + width + random(-deviate, deviate),
    centerY + height + random(-deviate, deviate),
    centerX - width + random(-deviate, deviate),
    centerY + height + random(-deviate, deviate)
  );
}

// use these two functions to get random numbers that don't draw on the sides of the screen
function randX() {
  return random(100, width - 100);
}

function randY() {
  return random(100, height - 100);
}
