
function lefttoright(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   turnLeft();
   move();
}

function righttoleft(){
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
   move();
   turnRight();
}

function main(){
    lefttoright();
    righttoleft();
    lefttoright();
    righttoleft();
    lefttoright();   
}


function main(){
    beepersRight();
   goUpTurnLeft();
    beepersLeft();
  goUpTurnRight();
      beepersRight();
   goUpTurnLeft();
    beepersLeft();
  goUpTurnRight();
     beepersRight();
 }

function goUpTurnRight() {
 turnRight();
    move();
    turnRight();
 }
 function goUpTurnLeft() {
    turnLeft();
    move();
    turnLeft();
 }

 function beepersRight() {
    putBeeper();
    move();
  move();
  putBeeper();
    move();
   move();
    putBeeper();  
 }

 function beepersLeft() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
 move();
 }