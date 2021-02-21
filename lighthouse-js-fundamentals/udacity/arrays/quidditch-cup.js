
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

var hasEnoughPlayers = function (team) {
  return team.length >= 7 ? true : false;
}

console.log(hasEnoughPlayers(team));

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  //donut += " hole";
  //donut = donut.toUpperCase(donut += " hole");
  console.log(donut.toUpperCase(donut += " hole"));
});