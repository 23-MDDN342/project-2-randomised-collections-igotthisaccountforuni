/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;
let chooser;
let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));
  chooser = int(random(1,7));
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
  chooser = int(random(1,7));
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
  background(0);
  noStroke();

  //nested array for positions
  let noFace = [
                            [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1],
                      [6, 2],                                                 [13, 2],
              [5, 3],       [7, 3],                                   [12, 3],       [14, 3],
      [4, 4],                       [8, 4],                  [11, 4],                       [15, 4],
      [4, 5],                               [9, 5], [10, 5],                                [15, 5],
      [4, 6],                               [9, 6], [10, 6],                                [15, 6],
      [4, 7],                       [8, 7],                   [11, 7],                      [15, 7],
              [5, 8],       [7, 8],                                   [12, 8],       [14, 8],
                      [6, 9],                                                 [13, 9],
                        [7, 10], [8, 10], [9, 10], [10, 10], [11, 10], [12, 10]
  ];

  let smileyFace = [
                          [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1],
                    [6, 2],                                                 [13, 2],
            [5, 3],                                                               [14, 3],
    [4, 4],               [7, 4], [8, 4],                  [11, 4], [12, 4],              [15, 4],
    [4, 5],               [7, 5], [8, 5],                  [11, 5], [12, 5],              [15, 5],
    [4, 6],                                                                               [15, 6],
    [4, 7],               [7, 7],                                   [12, 7],              [15, 7],
            [5, 8],               [8, 8], [9, 8], [10, 8], [11, 8],                [14, 8],
                    [6, 9],                                                 [13, 9],
                      [7, 10], [8, 10], [9, 10], [10, 10], [11, 10], [12, 10]
  ];

  let frownyFace = [
                            [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1],
                      [6, 2],                                                 [13, 2],
              [5, 3],                                                               [14, 3],
      [4, 4],               [7, 4], [8, 4],                  [11, 4], [12, 4],              [15, 4],
      [4, 5],               [7, 5], [8, 5],                  [11, 5], [12, 5],              [15, 5],
      [4, 6],                                                                               [15, 6],
      [4, 7],                       [8, 7], [9, 7], [10, 7], [11, 7],                       [15, 7],
              [5, 8],       [7, 8],                                   [12, 8],       [14, 8],
                      [6, 9],                                                 [13, 9],
                        [7, 10], [8, 10], [9, 10], [10, 10], [11, 10], [12, 10]
  ];

  let goofyFace = [
                            [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1],
                      [6, 2],                                                 [13, 2],
              [5, 3],                                                               [14, 3],
      [4, 4],               [7, 4], [8, 4],                  [11, 4], [12, 4],              [15, 4],
      [4, 5],               [7, 5], [8, 5],                  [11, 5], [12, 5],              [15, 5],
      [4, 6],                                                                               [15, 6],
      [4, 7],               [7, 7],         [9, 7], [10, 7],          [12, 7],              [15, 7],
              [5, 8],               [8, 8],                  [11, 8],               [14, 8],
                      [6, 9],                                                 [13, 9],
                        [7, 10], [8, 10], [9, 10], [10, 10], [11, 10], [12, 10]
  ];

  let sickFace = [
                          [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1],
                    [6, 2],                                                 [13, 2],
            [5, 3],                                                               [14, 3],
    [4, 4],               [7, 4], [8, 4],                  [11, 4], [12, 4],              [15, 4],
    [4, 5],               [7, 5], [8, 5],                  [11, 5], [12, 5],              [15, 5],
    [4, 6],                                                                               [15, 6],
    [4, 7],                       [8, 7],         [10, 7],           [12, 7],              [15, 7],
            [5, 8],       [7, 8],         [9, 8],          [11, 8],               [14, 8],
                    [6, 9],                                                 [13, 9],
                        [7, 10], [8, 10], [9, 10], [10, 10], [11, 10], [12, 10]
  ];


  let flatFace = [
                            [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1],
                      [6, 2],                                                 [13, 2],
              [5, 3],                                                               [14, 3],
      [4, 4],               [7, 4], [8, 4],                  [11, 4], [12, 4],              [15, 4],
      [4, 5],               [7, 5], [8, 5],                  [11, 5], [12, 5],              [15, 5],
      [4, 6],                                                                               [15, 6],
      [4, 7],               [7, 7], [8, 7], [9, 7], [10, 7], [11, 7], [12, 7],              [15, 7],
              [5, 8],                                                                [14, 8],
                      [6, 9],                                                 [13, 9],
                        [7, 10], [8, 10], [9, 10], [10, 10], [11, 10], [12, 10]
  ];



  // draw grid of faces
  let w = canvasWidth/20;
  let h = canvasHeight/12;
  let whitePoint = 0;
  let chosenFace = [];

  if(chooser == 1){
    arrayCopy(noFace, chosenFace);
  }
  if(chooser == 2){
    arrayCopy(smileyFace, chosenFace);
  }
  if(chooser == 3){
    arrayCopy(frownyFace, chosenFace);
  }
  if(chooser == 4){
    arrayCopy(goofyFace, chosenFace);
  }
  if(chooser == 5){
    arrayCopy(sickFace, chosenFace);
  }
  if(chooser == 6){
    arrayCopy(flatFace, chosenFace);
  }

  for(let down = 0; down < 12; down++) {
    for(let across = 0; across < 20; across++) {
      let y = h/2 + h*down;
      let x = w/2 + w*across;

        // center face
        let rotationValue = random(-180, 180);
        let mouthValue = random(1,7);
        let adjustX = random(-10, 10);
        let adjustY = random(-10, 10);
        let whiteOut = 0;

        if(down == chosenFace[whitePoint][1]){
          if(across == chosenFace[whitePoint][0]){
            whiteOut = 1;
            if(whitePoint < chosenFace.length-1){
              whitePoint++;
            }
          }
        }

        push();
        translate(x + adjustX, y + adjustY);
        scale(w/15, w/15);

        let rTransparency = random(60, 220);
        let rColour = random(1, 5);

        myFace(rotationValue, mouthValue, whiteOut, rTransparency, rColour);
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
