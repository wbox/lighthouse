/*
  For this kata, we'll be adding only the numbers 
  in the array which match the given condition.

  Create a function named conditionalSum that will 
  be given an array of numbers and a condition, in 
  this case odd or even. Given this condition, add 
  up only the values which match that condition. 
  If no values match the condition, return 0.
*/

const conditionalSum = function(values, condition) {
  // Your code here
  var numberSum = 0;
  values.forEach(element => {
    condition === 'even' && element % 2 === 0 ? numberSum += element : condition === 'odd' && element % 2 !== 0 ? numberSum += element : null;
  });
  return numberSum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
