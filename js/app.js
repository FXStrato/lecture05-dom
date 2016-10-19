'use strict';

/** exercise 1 **/
//Fill in the countdown() function so that it counts down ("5, 4, 3, 2, 1"), one number every second. Print "Blastoff!" when the countdown is completed!
function countdown(){

	//Define a variable to keep track of the count (start at 5)


	//Call the setInterval() and pass it an _anonymous_ callback function
	//and an interval of 1000 ms
	//Be sure to assign the result of the `setInterval` function (not the callback) to
	//a variable (e.g., `timerId`)


	//In the callback function, do the following:
			//Log out and decrement the count

			//If the count is 0, log out "Blast off!" and then call clearInterval() on the timerId

}
countdown(); //call the function





/** exercise 2 **/
// (a) Use JavaScript to dynamically add your name after "They call me..."

var elem = document.querySelector("#text .lead");
elem.innerHTML = elem.innerHTML + " Jeff Zhong";


// (b) Log out the contents of all elements in the DOM with the class hidden.
// Hint: use querySelectorAll() and the forEach() function!

function printContent(elem) {
  console.log(elem.innerHTML);
}

document.querySelectorAll(".hidden").forEach(printContent);




/** exercise 3 **/
// (a) Use JavaScript to move the ball (the <circle>) to the top of the slide by setting its cx attribute to 225 and its cy attribute to 95.

document.querySelector('circle').setAttribute('cx', 225);
document.querySelector('circle').setAttribute('cy', 95);

// (b) Add code that selects all links on the page and adds a target="_blank" attribute to them. This attribute causes the link to open in a new window!
// Hint: Use a loop!

document.querySelectorAll('a').forEach(function(elem) {
  elem.setAttribute('target', '_blank');
})



/** exercise 4 **/
// (a) Use JavaScript to move the ball to the bottom of the slide by giving it the down-slide class.
document.querySelector('circle').classList.toggle('down-slide');

// (b) Implement a function blink() that causes .important elements to change color from red to white every half second. Use the white class.
setInterval(function() {
  document.querySelectorAll('.important').forEach(function(elem) {
    elem.classList.toggle('white');
  });
}, 500);




/** exercise 5 **/
// Use JavaScript to dynamically add a new hyper link to the list. This link should point to your favorite website. You will need to create a new list item for this link.
// Challenge: Can you put that link first in the list?

let temp = document.createElement('LI');
temp.innerHTML= '<a href="https://imgur.com" target="_blank">Imgur</a>';
document.querySelector("#links").insertBefore(temp, document.querySelector("#links").childNodes[0]);



/** exercise 6 **/
// (a) Add an event handler so that when you click on the ball, it moves to the top of the slide from the bottom, or to the bottom from the top.
// Hint: try to toggle its down-slide class!

// (b) Add event listener s so that when the mouse is over the #cloud, it's opacity changes to 0.
// Hint: you can set a property for the element's style property.





/** exercise 7 **/
//Modify your script so it counts how many times the ball goes down the slide, logging out the count.

//Bonus: add an element to the HTML below the SVG that shows the count!
