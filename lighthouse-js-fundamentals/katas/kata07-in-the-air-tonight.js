const checkAir = function (samples, threshold) {
  // Code here!
  var count = 0;
  samples.forEach(element => {
    element === 'dirty' ? count++ : null;
  });
  return count/samples.length > threshold ? "Polluted" : "Clean";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
