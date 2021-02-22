// https://web.compass.lighthouselabs.ca/prep/prep/activities/644

const talkingCalendar = function(date) {
  // Your code here
  const dateArray = date.split('/');

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dateString = "";

  dateString = monthNames[(dateArray[1] - 1)] + " ";

  if ( dateArray[2][1] === "1" ) {
    dateString += Number(dateArray[2]) + "st, ";
  } else if ( dateArray[2][1] === "2" ) {
    dateString += Number(dateArray[2]) + "nd, ";
  } else if ( dateArray[2][1] === "3" ) {
      dateString += Number(dateArray[3]) + "rd, ";
  } else {
      dateString += dateArray[2] + "th, ";
  }

  return dateString + dateArray[0];

};



console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
