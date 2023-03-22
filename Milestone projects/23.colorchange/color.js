
  const colors = ["red", "orange", "yellow", "green", "blue", "purple" ,"black"];

  // Get the button element
  const colorButton = document.getElementById("color-button");

  // Add a click event listener to the button
  colorButton.addEventListener("click", function() {
    // Generate a random index from the colors array
    const randomIndex = Math.floor(Math.random() * colors.length);

    // Get the randomly selected color from the colors array
    const randomColor = colors[randomIndex];

    // Set the background color of the page to the random color
    document.body.style.backgroundColor = randomColor;
  });

