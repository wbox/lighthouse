
const phrase = "4311o th3r3 w0r1d x asdfad asdfa asdfad adfsadsf asdfa";


// const printWord = () => {
//   process.stdout.write("4311o ");
// };

// setTimeout(() => { process.stdout.write("4311o "); 
//   setTimeout(() => { process.stdout.write("th3r3 "); 
//     setTimeout(() => { process.stdout.write("w0r1d "); }, 1000);
//   }, 1000);
// }, 1000);



// const printThreeSecondsApart = (sentence) => {
//     setTimeout( function() { console.log(sentence); }, 3000);
// };

// const printOneSecondApart = (sentence) => {
//   setTimeout( function () { console.log(sentence); }, 1000);
// };

//console.log("----->",phrase);

//setTimeout(() => { console.log(phrase); }, 3000);
//printThreeSecondsApart(phrase);

// const printWord1 = () => {
//   process.stdout.write("4311o ");
// };

// const printWord2 = () => {
//   process.stdout.write("th3r3 ");
// };

// const printWord3 = () => {
//   process.stdout.write("w0r1d\n");
// };

// setTimeout(printWord1, 1000);
// setTimeout(printWord2, 2000);
// setTimeout(printWord3, 3000);

let delay = 1000;

for (let word of phrase.split(" ")) {
  setTimeout(() => process.stdout.write(word), delay);
  delay += 1000;
};
