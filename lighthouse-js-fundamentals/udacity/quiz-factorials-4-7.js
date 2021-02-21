/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here
var solution = 0;
for (var f = 12; f >=2; f--) {
  f === 12 ? solution = f * (f-1) : solution *= (f-1);
}
console.log(solution);

var solution = 1;
for (let i = 1; i <= 12; i++) {
  solution *= i;
}
console.log(solution);