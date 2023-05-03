[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/TMOxyln0)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10679852&assignment_repo_type=AssignmentRepo)
## 2023 MDDN342 Assignment 2: Randomised Collections
For this project, I was tasked with generating a system that would create a randomised collection of faces. These faces would vary in their details and remain distinct from one another. There would also be a select few that would have a rare and very separate appearance from the rest. Based on this idea, I created a multicoloured collection of subtly different faces and a selection system to highlight a select few to create a separate face from the rest. This forms a distinct shape in the randomness that changes randomly with each refresh. Enjoy!

Parameters creating randomness:
    myFace():
        rTransparency; 60, 220; continuous
        rColour; 1, 5; continuous

    arrangement():
        tilt_value; -180, 180; continuous
        mouth_value; 1, 7; continuous
        adjustX; -10, 10; continuous
        adjustY; -10, 10; continuous
        
        chooser; 1, 7; discrete