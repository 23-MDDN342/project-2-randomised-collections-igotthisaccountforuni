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

  //nested array for positions
  let defaultFace = [
                          [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1],
                    [6, 2],                                                 [13, 2],
            [5, 3],                                                               [14, 3],
    [4, 4],               [7, 4], [8, 4],                  [11, 4], [12, 4],              [15, 4],
    [4, 5],               [7, 5], [8, 5],                  [11, 5], [12, 5],              [15, 5],
    [4, 6],                                                                               [15, 6],
    [4, 7],               [7, 7],                                   [12, 7],              [15, 7],
            [5, 8],               [8, 8], [9, 8], [10, 8], [11, 8],                [14, 8],
                    [6, 9],                                                 [13, 9],
                      [7, 10], [8, 10], [9, 10], [10, 10], [11, 10], [12, 10]];

  // draw grid of faces
  let w = canvasWidth/20;
  let h = canvasHeight/12;
  let whitePoint = 0;

  for(let down = 0; down < 12; down++) {
    for(let across = 0; across < 20; across++) {
      let y = h/2 + h*down;
      let x = w/2 + w*across;

        // center face
        let eye_value = int(random(2,4));
        let tilt_value = random(-45, 45);
        let mouth_value = random(1,7);
        let adjustX = random(-8, 8);
        let adjustY = random(-8, 8);
        let whiteOut = 0;

        if(down == defaultFace[whitePoint][1]){
          if(across == defaultFace[whitePoint][0]){
            whiteOut = 1;
            if(whitePoint < defaultFace.length-1){
              whitePoint++;
            }
          }
        }


        push();
        translate(x + adjustX, y + adjustY);
        scale(w/15, h/15);

        myFace(tilt_value, eye_value, mouth_value, whiteOut);
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
