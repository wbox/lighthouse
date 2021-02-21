/*
  https://web.compass.lighthouselabs.ca/activities/642
*/
const repeatNumbers = function(data) {
  // Put your solution here
  var newString = "";
  for (var e = 0; e < data.length; e++) {
    for (var i = 0; i < data[e][data[e].length - 1]; i++) {
          newString += data[e][0];
    }
    e < (data.length - 1) ? newString += ", " : null;
  }
  return newString;
};
  
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));