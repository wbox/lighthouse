
const range = (start, end, step) => {
  var rangeArray = [];
  if (step < 0) return rangeArray; 
  for ( var i = start; i <= end; i += step) {
    rangeArray.push(i);
  }
  return rangeArray;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));