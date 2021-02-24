// https://web.compass.lighthouselabs.ca/activities/645

const calculateChange = function(total, cash) {
  // Your code here
  var totalChange = cash - total;
  var change = {};
  
  // Twenty dollar bill
  if ( totalChange >= 2000 ) {
    change.twentyDollar = parseInt(totalChange / 2000);
    totalChange = totalChange % 2000;
  }

  // Ten dollar bill
  if ( totalChange >= 1000 ) {
    change.tenDollar = parseInt(totalChange / 1000);
    totalChange = totalChange % 1000;
  }

  // Five dollar bill
  if ( totalChange >= 500 ) {
    change.fiveDollar = parseInt(totalChange / 500);
    totalChange = totalChange % 500;
  }

  // Two dollar bill
  if ( totalChange >= 200 ) {
    change.twoDollar = parseInt(totalChange / 200);
    totalChange = totalChange % 200;
  }

  // One dollar bill
  if ( totalChange >= 100 ) {
    change.oneDollar = parseInt(totalChange / 100);
    totalChange = totalChange % 100;
  }

  // Quarter
  if ( totalChange >= 25 ) {
    change.quarter = parseInt(totalChange / 25);
    totalChange = totalChange % 25;
  }

  // Dime
  if ( totalChange >= 10 ) {
    change.dime = parseInt(totalChange / 10);
    totalChange = totalChange % 10;
  }

  // Nickel
  if ( totalChange >= 5 ) {
    change.nickel = parseInt(totalChange / 5);
    totalChange = totalChange % 5;
  }

  // Penny
  if ( totalChange >= 1 ) {
    change.penny = totalChange / 1;
  }

  return change;

  
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
