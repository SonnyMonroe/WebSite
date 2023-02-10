// Create the button
let backToTopButton = document.createElement("button");
backToTopButton.innerHTML = "Back to Top";

// Add the button to the page
document.body.appendChild(backToTopButton);

// Add a click event listener to the button
backToTopButton.addEventListener("click", function () {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
});

// Listen for the user to scroll
window.addEventListener("scroll", function () {
  // If the user has scrolled down more than 100px
  if (window.pageYOffset > 100) {
    // Show the button
    backToTopButton.style.display = "block";
  } else {
    // Hide the button
    backToTopButton.style.display = "none";
  }
});
