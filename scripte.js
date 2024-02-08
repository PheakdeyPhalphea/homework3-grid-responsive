function myFunction(img) {
  document.getElementById("expandedImg").src = img.src;

  // Show the full-screen section
  var fullScreenContainer = document.querySelector(".gallary-full-screen");
  fullScreenContainer.style.display = "block";

  // Function to close the full-screen section
  function closeFullScreen() {
    fullScreenContainer.style.display = "none";
    // Remove the event listener to prevent it from interfering with subsequent clicks
    fullScreenContainer.removeEventListener("click", closeFullScreen);
  }

  var closeButton = document.querySelector(".closebtn");
  closeButton.addEventListener("click", function (event) {
    // Prevent the click event from bubbling up to the parent container
    event.stopPropagation();
    fullScreenContainer.style.display = "none";
  });
}
