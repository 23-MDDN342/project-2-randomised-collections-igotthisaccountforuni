/*
 * This file should contain code that draws your faces.
 */

 // function getAveragedRandom(min, max, n){
 //   let sum = 0;
 //   for(let i = 0 ; i < n ; i++){
 //     sum = sum + random(min, max);
 //   }
 //   return sum / n;
 // }

function myFace(rotationValue, mouthValue, whiteOut, rTransparency, rColour) {
  const whiteDetails = [255, 255, 255, 200];
  let headSize = 20;
  let eyeSize = 3;//getAveragedRandom(1, 5, 4);
  let centerX = 0;

  // rotation in degrees
  angleMode(DEGREES);
  rotate(rotationValue);

 // head
  noStroke();

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
    fill(whiteDetails);
    stroke(255);
  }

  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
    fill(whiteDetails);
    ellipse(centerX - 3, -2, eyeSize,eyeSize);
    ellipse(centerX + 3, -2, eyeSize,eyeSize);

  // mouth
  fill(whiteDetails);
  ellipse(centerX, 5, 5, mouthValue);
}
