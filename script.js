// When the user scrolls the page, execute this function
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("main-header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position.
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}

// You can add a subtle style for the sticky class in your CSS if you want,
// but the current CSS already makes it sticky. This JS is here for robustness
// and for adding more complex effects later if needed.
// For example, in style.css, you could add:
// #main-header.sticky-header { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(5px); }