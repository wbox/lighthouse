/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here
let countdown = 60;

while (countdown >= 0) {
  switch (countdown) {
    case 50:
      console.log("Orbiter transfers from ground to internal power");
      break;
    case 31:
      console.log("Ground launch sequencer is go for auto sequence start");
      break;
    case 16:
      console.log("Activate launch pad sound suppression system");
      break;
    case 10:
      console.log("Activate main engine hydrogen burnoff system");
      break;
    case 6:
      console.log("Main engine start");
      break;
    case 0:
      console.log("Solid rocket booster ignition and liftoff!");
      break;
    default:
      console.log(`T-${countdown} seconds`);
      break;
  }
  countdown -= 1;
}