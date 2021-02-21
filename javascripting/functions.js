/*
 # JAVASCRIPTING  
   
 ## FUNCTIONS (Exercise 18 of 20)  
   
  A function is a block of code that takes input, processes that input, and  
  then produces output.  
   
  Here is an example:  
   
     function example (x) {  
       return x * 2  
     }  
   
  We can call that function like this to get the number 10:  
   
     example(5)  
   
  The above example assumes that the example function will take a number as  
  an argument –– as input –– and will return that number multiplied by 2.  
   
 ## The challenge:  
   
  Create a file named functions.js.  
   
  In that file, define a function named eat that takes an argument named  
  food that is expected to be a string.  
   
  Inside the function return the food argument like this:  
   
     return food + ' tasted really good.'  
   
  Inside of the parentheses of console.log(), call the eat() function with  
  the string bananas as the argument.  
   
  Check to see if your program is correct by running this command:  
   
     javascripting verify functions.js  
   
 ─────────────────────────────────────────────────────────────────────────────  
  Need help? View the README for this workshop:  
  (https://github.com/workshopper/javascripting)  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
   » To print these instructions again, run: javascripting print                 
   » To execute your program in a test environment, run: javascripting run                                                                            
     program.js                                                                  
   » To verify your program, run: javascripting verify program.js                
   » For help run: javascripting help
*/

const eat = (food) => {
  return food + " tasted really good.";
}

console.log(eat("bananas"));