/*
Write a program that takes any number of command line arguments,
all strings, and reverses them before outputting them one at a
time to the console.

Do NOT use JavaScript's Array.prototype.reverse or
Array.prototype.join functions to solve this problem.
*/

'use strict';

for (let i = 2; i < process.argv.length; i++) {
  let word = "";
  for (let c = (process.argv[i].length - 1); c >= 0; c--) {
    word += process.argv[i][c];
  }
  console.log(word);
}