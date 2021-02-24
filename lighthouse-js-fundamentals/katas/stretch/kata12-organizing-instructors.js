// https://web.compass.lighthouselabs.ca/prep/prep/activities/783

const organizeInstructors = function(instructors) {
  // Put your solution here

  var courseInstructors = new Object();
  var newArray = [];  

  for ( var i = 0 ; i < instructors.length; i++) {

    if (courseInstructors.hasOwnProperty(instructors[i].course)) {

      var newArray = courseInstructors[instructors[i].course];
      newArray.push(instructors[i].name);
      courseInstructors[instructors[i].course] = newArray;

    } else {

      newArray = [];
      var k = instructors[i].course;
      var v = instructors[i].name; 
      newArray.push(`${v}`);
      courseInstructors[k] = newArray;
    }

  }

  return courseInstructors;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));


console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));


