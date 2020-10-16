/* Navbar */

// get the hamburger element
var hamburger = document.getElementById("hamburger");

// get the menu element
var menu = document.getElementById("menu");

// get the overlay element
var overlay = document.getElementById("overlay");

// define toggle function
function toggleMenu() {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}

// execute toggle function from hamburger on click
hamburger.addEventListener("click", toggleMenu);

// exuecute toggle function from overlay on click
menu.addEventListener("click", toggleMenu)
overlay.addEventListener("click", toggleMenu);

/* Navbar */
