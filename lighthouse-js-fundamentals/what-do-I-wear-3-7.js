/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */
 


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/

// WRITE YOUR CODE HERE

/* This function will return the size based on the shirt width */
const sWidth = (width) => {
  if (width >= 18 && width < 20) {
    return "S";
  } else if (width >= 20 && width < 22) {
    return "M";
  } else if (width >= 22 && width < 24) {
    return "L";
  } else if (width >= 24 && width < 26) {
    return "XL";
  } else if (width >= 26 && width < 28) {
    return "2XL";
  } else if (width >= 28) {
    return "3XL";
  }
}

/* This function will return the size based on the shirt length */
const sLength = (length) => {
  if (length >= 28 && length < 29) {
    return "S";
  } else if (length >= 29 && length < 30) {
    return "M";
  } else if (length >= 30 && length < 31) {
    return "L";
  } else if (length >= 31 && length < 33) {
    return "XL";
  } else if (length >= 33 && length < 34) {
    return "2XL";
  } else if (length >= 34) {
    return "3XL";
  }
}

/* This function will return the size based on the shirt sleeve */
const sSleeve = (sleeve) => {
  if (sleeve >= 8.13 && sleeve < 8.38) {
    return "S";
  } else if (sleeve >= 8.38 && sleeve < 8.63) {
    return "M";
  } else if (sleeve >= 8.63 && sleeve < 8.88) {
    return "L";
  } else if (sleeve >= 8.88 && sleeve < 9.63) {
    return "XL";
  } else if (sleeve >= 9.63 && sleeve < 10.13) {
    return "2XL";
  } else if (sleeve >= 10.13) {
    return "3XL";
  }
}


const checkSize = (list) => {
  if (list) {
    /*
    console.log(list)
    console.log(list[0]);
    console.log(sWidth(list[0]));
    console.log(list.length-1);
    */
    if ( (sWidth(list[0]) === list[list.length-1]) && (sLength(list[1]) === list[list.length-1]) && (sSleeve(list[2]) === list[list.length-1]) ) {
      console.log(list[list.length-1]);
    } else {
      console.log("NA");
    }
  }
}



if ( (sWidth(shirtWidth) === sLength(shirtLength)) && (sLength(shirtLength) === sSleeve(shirtSleeve)) ) {
  console.log(sWidth(shirtWidth));
} else {
  console.log("NA");
}


//checkSize([18, 28, 8.13, 'S']);

