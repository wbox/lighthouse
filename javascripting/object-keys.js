/*
# JAVASCRIPTING  
   
 ## OBJECT KEYS (Exercise 17 of 20)  
   
  JavaScript provides a native way of listing all the available keys of an  
  object. This can be helpful for looping through all the properties of an  
  object and manipulating their values accordingly.  
   
  Here's an example of listing all object keys using the Object.keys()  
  prototype method.  
   
     const car = {  
       make: 'Toyota',  
       model: 'Camry',  
       year: 2020  
     }  
     const keys = Object.keys(car)  
       
     console.log(keys)  
   
  The above code will print an array of strings, where each string is a key  
  in the car object. ['make', 'model', 'year']  
   
 ## The challenge:  
   
  Create a file named object-keys.js.  
   
  In that file, define a variable named car like this:  
   
     const car = {  
       make: 'Honda',  
       model: 'Accord',  
       year: 2020  
     }  
   
  Then define another variable named keys like this:  
   
     const keys = Object.keys(car)  
   
  Use console.log() to print the keys variable to the terminal.  
   
  Check to see if your program is correct by running this command:  
   
     javascripting verify object-keys.js  
   
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
const car = {  
  make: 'Honda',  
  model: 'Accord',  
  year: 2020  
}

const keys = Object.keys(car);
console.log(keys);
