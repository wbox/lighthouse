/*
  In this exercise, we will be given a list of instructors 
  and have to determine which instructor has the longest name.

  Create a function named instructorWithLongestName that will 
  receive an array of instructor objects, and return the object 
  that has the longest name. If there are two instructors with 
  the longest name, return the first one.
*/


const instructorWithLongestName = function(instructors) {
  // Put your solution here
  var longestNameObject;
  instructors.forEach(element => {
    !longestNameObject ? longestNameObject = element : element.name.length > longestNameObject.name.length ? longestNameObject = element : null; 
  });
  return longestNameObject;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
