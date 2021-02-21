/* 
  In this exercise, we will be given an array of 2 or more numbers. 
  We will then have to find the two largest numbers in that array, 
  and sum them together.
*/

const sumLargestNumbers = function(data) {
  // Put your solution here
  lnum1 = lnum2 = 0;
  data.forEach(element => {
    if (lnum1 === 0) {
      lnum1 = element;
    } 
    if (lnum1 < element) {
      lnum2 = lnum1;
      lnum1 = element;
    } else if (lnum2 < element) {
      lnum2 = element;
    }    
  });
  return lnum1+lnum2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
