'use strict';

let sum = 0;
for (let j = 2; j < process.argv.length; j++) {
  sum += Number(process.argv[j]);
}
console.log(sum);

