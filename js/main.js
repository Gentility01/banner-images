// alert("hello")
// Get the banner element by its ID
var banner = document.getElementById('banner');
    
// Set the paths to the default and scrolled images
var defaultImage = 'images/cccc.jpg';
var scrolledImage = 'images/sunnystiches.jpg';

// Initialize the last scroll position
var lastScrollTop = 0;

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // Get the current scroll position
  var st = window.pageYOffset || document.documentElement.scrollTop;
  
  // Check if the current scroll position is greater than the last scroll position
  if (st > lastScrollTop) {
    // Set the background image to the scrolled image
    banner.style.backgroundImage = 'url(' + scrolledImage + ')';
  } else {
    // Set the background image to the default image
    banner.style.backgroundImage = 'url(' + defaultImage + ')';
  }
  
  // Update the last scroll position with the current scroll position
  lastScrollTop = st;
});