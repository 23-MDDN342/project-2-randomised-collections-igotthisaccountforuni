/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [0];
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}



function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  // draw grid of faces
  let w = canvasWidth/20;
  let h = canvasHeight/12;

  for(let i=0; i<w; i++) {
    for(let j=0; j<h; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;

        // center face
        let eye_value = int(random(2,4));
        let tilt_value = random(-45, 45);
        let mouth_value = random(1,7);
        let is_cyclops = random(0, 100);

        push();
        translate(x, y);
        scale(w/15, h/15);

        myFace(tilt_value, eye_value, mouth_value);
        pop();

    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
