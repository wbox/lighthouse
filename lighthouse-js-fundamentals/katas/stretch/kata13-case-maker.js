// https://web.compass.lighthouselabs.ca/prep/prep/activities/648

const makeCase = function(input, mcase) {
  // Put your solution here
  //console.log(typeof(mcase));
  
  if ( Array.isArray(mcase) ) {
    var tempRes;
    for ( var i = 0; i < mcase.length; i++ ) {
      if ( i === 0 && tempRes === undefined) {
        tempRes = makeCase(input,mcase[i]);
      } else {
        newString = makeCase(tempRes,mcase[i]);
      }
    } 
    return newString;
  } 

  const words = input.split(' ');
  var newString = "";
  //console.log(words);
  
  switch (mcase) {
    case "camel":
      newString = words[0];
      for (var i = 1; i < words.length ; i++) {
        newString += words[i].slice(0,1).toUpperCase() + words[i].slice(1,);
      }
      break;
    case "pascal":
      words.forEach(word => {
        newString += word.slice(0,1).toUpperCase() + word.slice(1,);
      });
      break;
    case "snake":
      newString = input.replace(/\ /g,"_");
      break;
    case "kebab":
      newString = input.replace(/\ /g,"-");
      break;
    case "title":
      for (var i = 0; i < words.length ; i++) {
        newString += words[i].slice(0,1).toUpperCase() + words[i].slice(1,) + " ";
      }
    case "vowel":
      newString = input.replace(/a|e|i|o|u/ig, function (v) { return v.toUpperCase(); });
      break;
    case "consonant":
      newString = input.replace(/[b-df-hj-np-tv-z]/ig, function (c) { return c.toUpperCase(); });
    default:
      break;
  }

  return newString;
  




}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
