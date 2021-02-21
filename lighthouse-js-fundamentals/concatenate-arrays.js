function concat(data1,data2) {
  var newArray = [];
  data1.forEach(element => {
    newArray.push(element);
  });
  data2.forEach(element => {
    newArray.push(element);
  });
  return newArray;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));
console.log(concat([], [ 9, 7, 2 ]));
console.log(concat([ 5, 10 ], []));