// https://web.compass.lighthouselabs.ca/prep/prep/activities/646

const camelCase = function(input) {
  // Your code here
  var camelCaseString = "";
  const words = input.split(' ');
  words.forEach(word => {
    camelCaseString += word.slice(0,1).toUpperCase() + word.slice(1,);
  });
  return camelCaseString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
