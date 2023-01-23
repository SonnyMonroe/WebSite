// Get the body element
const body = document.querySelector("body");

// Create a new div element for the scrollbar
const scrollbar = document.createElement("div");

// Add a class to the scrollbar for styling
scrollbar.classList.add("scrollbar");

// Append the scrollbar to the body
body.appendChild(scrollbar);

// Get the scrollbar width
const scrollbarWidth = scrollbar.offsetWidth - scrollbar.clientWidth;

// Add the scrollbar width as a margin to the body
body.style.marginRight = `${scrollbarWidth}px`;

// Change the color of the scrollbar
scrollbar.style.backgroundColor = "#F9A1FF";

// Listen for scroll events on the body
body.addEventListener("scroll", () => {
  // Update the scrollbar position
  scrollbar.style.top = `${body.scrollTop}px`;
});
