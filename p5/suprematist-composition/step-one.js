function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(245);
  // Pastel red
  fill(255, 105, 97);
  approxQuad(30);
  noLoop();
}

function approxQuad(deviate) {
  // How will you create your rectangle with a deviation
  // rect(x, y, x2, y2);
  const x = randX();
  const y = randY();
  console.log(x, y, x + deviate, y + deviate);
  rect(x, y, x + deviate, y + deviate);
}

// use these two functions to get random numbers that don't draw on the sides of the screen
function randX() {
  return random(100, width - 100);
}

function randY() {
  return random(100, height - 100);
}
