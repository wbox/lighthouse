/*
# JAVASCRIPTING  
   
 ## OBJECT PROPERTIES (Exercise 16 of 20)  
   
  You can access and manipulate object properties –– the keys and values  
  that an object contains –– using a method very similar to arrays.  
   
  Here's an example using square brackets:  
   
     const example = {  
       pizza: 'yummy'  
     }  
       
     console.log(example['pizza'])  
   
  The above code will print the string 'yummy' to the terminal.  
   
  Alternately, you can use dot notation to get identical results:  
   
     example.pizza  
       
     example['pizza']  
   
  The two lines of code above will both return yummy.  
   
 ## The challenge:  
   
  Create a file named object-properties.js.  
   
  In that file, define a variable named food like this:  
   
     const food = {  
       types: 'only pizza'  
     }  
   
  Use console.log() to print the types property of the food object to the  
  terminal.  
   
  Check to see if your program is correct by running this command:  
   
     javascripting verify object-properties.js  
   
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

  const food = {  
    types: 'only pizza'  
  }

  console.log(food.types);