/*
<p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p>
*/

/* 
In this example we are acceing the content from the element
with id 'info' and calling the function alert to show it to
the user. innerHTML was the new thing here. :)

<p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p>


*/
var elm = document.getElementById('info').innerHTML;
alert(elm);

/*
 In this example the variable eml will receive
 an array from the document.getElementsByTagName('p'),
 with all elements from the html file with tag p as an object (array).
 The for loop is accessing the content of the p tags.
 The tricky part is also to use innerHTML method from the eml

 <p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p>

 */
var elm = document.getElementsByTagName('p');
for ( var i = 0; i < elm.length; i++) {
	alert(elm[i].innerHTML);
}



/*
  Same as the previous one but now using getElementsByClassName.
  Each value from any class named name will be added to an array
  and then alerted

  <h2>
  List of People:
</h2>

<ul class='people'>
  <li class='name'>
    Clara
  </li>
  <li class='name'>
    James
  </li>
  <li class='name'>
    Sara
  </li>
</ul>

*/
var names = [];
var classNames = document.getElementsByClassName('name');
for ( var i = 0; i < classNames.length; i++) {
	names.push(classNames[i].innerHTML);
  alert(classNames[i].innerHTML);
}
alert(names);

/* 
  Query Selectors
  Can be used to find any element by using a "special" identification
  character that represents the element type:
  # for id -> document.querySelector(#name-field), where name-field is the
    value of an id element in the page
  # for class -> document.querySelector('.my-class')
  # for tag -> document.querySelector('p)

  More info here: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

*/

/*
  Changing attributes

  Using innerHTML method you can change the page content without refresh the
  page

  <p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p>

*/

var elm;
elm = document.getElementById('info');
elm.innerHTML = "JavaScript Rocks!";



/*

// TODO:
// 1. Select the element who's attributes you'd like to change and set it to a variable
// 2. Change the width attribute of that element to 200 instead of the default 400 that it starts with in the HTML
// 3. Set a 1 second delay, then change it back to 400

<img id='lhl-logo' src='https://cl.ly/2O3Y2w1R2j0v/Image%202016-07-20%20at%201.16.13%20PM.png' width='400' />

*/

var elm = document.getElementById('lhl-logo');
elm.width= 200;
setTimeout(function () { elm.width = 400; }, 1000);


/* 
  Set (adding) attributes

  <input id='name' />

 / TODO:
// 1. Find the input element by the ID using the `querySelector` DOM method
// 2. Set the `placeholder` attribute to some text value

*/

document.querySelector('#name').setAttribute('placeholder','blablabla');