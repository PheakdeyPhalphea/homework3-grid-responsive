function myFunction(img) {
  // Set the full-screen image source
  document.getElementById("expandedImg").src = img.src;

  // Show the full-screen section
  document.querySelector(".gallary-full-screen .container").style.display = "block";
}
