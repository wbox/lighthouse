// titleCase("this is an example") should return "This Is An Example"
// titleCase("test") should return "Test"
// titleCase("i r cool") should return "I R Cool"
// titleCase("WHAT HAPPENS HERE") should return "What Happens Here"
// titleCase("") should return ""
// titleCase("A") should return "A"

const titleCase  = function(text) {
  
  if (text.length === 0) {
    return "";
  }
  
  if (text.length === 1) {
    return text.toUpperCase();
  }
  
  let previousC = " ";
  let newText = "";
  
  for (let word of text) {

    if (previousC === " ") {
      newText += word.toUpperCase();
    } else {
      newText += word.toLowerCase();
    }
    previousC = word;
  }

  console.log(newText);

};


titleCase("this is an example");
titleCase("test"); //should return "Test"
titleCase("i r cool"); //should return "I R Cool"
titleCase("WHAT HAPPENS HERE"); //should return "What Happens Here"
titleCase(""); //should return ""
titleCase("A"); //should return "A"