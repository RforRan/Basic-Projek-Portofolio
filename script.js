// Greeting Function
function updateGreeting() {
  const hour = new Date().getHours();
  const greetingElement = document.getElementById("greeting");

  let greeting;
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good afternoon!";
  else greeting = "Good Evening!";

  if (greetingElement) {
    greetingElement.textContent = greeting;
    greetingElement.classList.add("fade-in");
  }
}

// Run when page loads
document.addEventListener("DOMContentLoaded", function () {
  updateGreeting();

  // Add fade-in animation to elements
  const animatedElements = document.querySelectorAll(
    ".profile-img, .display-4, .lead"
  );
  animatedElements.forEach((element) => {
    element.classList.add("fade-in");
  });
});
