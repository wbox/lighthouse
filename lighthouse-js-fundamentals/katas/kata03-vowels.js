/*
In this exercise, we will be counting the number of vowels 
that appear in a given string. For this exercise, consider 
the following to be vowels: a, e, i, o, and u.  

*/

const numberOfVowels = function(data) {
  var vowelsCount = 0;
  var vowels = 'aeiou';
  for (var v = 0; v < vowels.length; v++) {
    for (var d = 0; d < data.length; d++) {
      data[d] === vowels[v] ? vowelsCount++ : null;
    }
  }
  return vowelsCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
