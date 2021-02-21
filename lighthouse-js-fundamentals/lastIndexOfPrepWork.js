function lastIndexOf(sam, val){
  var i = 0;
  var index = -1;
  sam.forEach(element => {
    if (element === val) {
      index = i;
    } 
    i++;
  });
  return index;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));