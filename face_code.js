/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function myFace(tilt_value, eye_value, mouth_value, whiteOut) {
  const bg_color3 = [255, 255, 255, 200];

  let headSize = 20;
  let eyeSize = 3;
  let centerX = 0;
  let iy = -2;
  let distactBetweenEyes = 5;
  let mouthDrop = 7;

  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  let rTransparency = random(60, 255);
  let rColour = random(1, 5);
  let highlights = [
    [255, 154, 0, rTransparency],
    [0, 255, 4, rTransparency],
    [0, 197, 255, rTransparency],
    [255, 0, 167, rTransparency]
  ];

  if(whiteOut == 0){
    let cColour = int(rColour);
    if(cColour == 1){
      fill(highlights[0]);
    }
    if(cColour == 2){
      fill(highlights[1]);
    }
    if(cColour == 3){
      fill(highlights[2]);
    }
    if(cColour == 4){
      fill(highlights[3]);
    }
  }else if(whiteOut == 1){
    fill(bg_color3);
    stroke(255);
  }

  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
    fill(bg_color3);
    ellipse(centerX - 3, iy, eyeSize,eyeSize);
    ellipse(centerX + 3, iy, eyeSize,eyeSize);

  // mouth
  fill(bg_color3);
  ellipse(centerX, iy + mouthDrop, distactBetweenEyes, mouth_value);
}
