// Get the body and banner elements
var body = document.body;
var banner = document.getElementById('banner');

// Set the paths to the default and scrolled images
var defaultImage = 'images/cccc.jpg';
var scrolledImage = 'images/sunnystiches.jpg';

// Initialize the last scroll position
var lastScrollTop = 0;

// Calculate the height of the document
var documentHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

// Calculate the height at which the second image should start appearing
var startScrollHeight = documentHeight / 2;

// Calculate the height at which the second image should be fully visible
var endScrollHeight = documentHeight;

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // Get the current scroll position
  var st = window.pageYOffset || document.documentElement.scrollTop;
  
  // Calculate the opacity based on the scroll position
  var opacity = (st - startScrollHeight) / (endScrollHeight - startScrollHeight);
  
  // Limit the opacity value between 0 and 1
  opacity = Math.min(Math.max(opacity, 0), 1);
  
  // Calculate the translateY value for the banner
  var translateY = Math.min(st - startScrollHeight, 0);
  
  // Set the background image and opacity
  if (st > lastScrollTop) {
    // Scrolling down
    body.style.backgroundImage = 'url(' + defaultImage + ')';
    banner.style.opacity = 1 - opacity;
    banner.style.transform = 'translateY(' + translateY + 'px)';
  } else {
    // Scrolling up
    body.style.backgroundImage = 'url(' + scrolledImage + ')';
    banner.style.opacity = opacity;
    banner.style.transform = 'translateY(' + translateY + 'px)';
  }
  
  // Update the last scroll position with the current scroll position
  lastScrollTop = st;
});
