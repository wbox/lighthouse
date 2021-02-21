/*
  In this exercise, we will be given a normal string of words 
  and turn it into a percent-encoded string by replacing all 
  whitespace with %20. 
  Take a look at the following URL, specifically the last part:

  https://www.google.com/search?q=lighthouse%20labs

  This URL will perform a google search for the term "lighthouse labs". 
  Notice that when the string "lighthouse labs" is part of a URL, 
  the space is replaced with %20.

  If we want to add a parameter to a url, there are certain characters 
  that must be encoded in order to make the URL valid. There are many 
  characters that must be encoded, including: , !, ", and #. For this 
  exercise, we will only be focusing on replacing the space with %20.

*/

const urlEncode = function(text) {
  var newText = "";
  for (var i = 0; i < text.length; i++) {
    text[i] === ' ' ? newText += '%20' : newText += text[i];
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
 