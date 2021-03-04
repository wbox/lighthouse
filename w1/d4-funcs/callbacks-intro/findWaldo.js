// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach((name, i) => {
    if (name === "Waldo") {
      found(name, i);   // execute callback
    }
  });
}

const actionWhenFound = function(name, index) {
  console.log(`Found ${name} at ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
