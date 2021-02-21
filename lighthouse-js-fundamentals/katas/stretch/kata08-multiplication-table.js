// https://web.compass.lighthouselabs.ca/prep/prep/activities/647

const multiplicationTable = function(maxValue) {
  // Your code here
  var multiplicationTable = "";
  for (var l = 1; l <= maxValue; l++) {
    for (var r = 1; r <= maxValue; r++) {
      multiplicationTable += (l * r) + " ";
    }
  multiplicationTable += "\n"
  }
  return multiplicationTable +"\n";
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
