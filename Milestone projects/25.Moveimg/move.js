
  // Get the image element
const image = document.getElementById("image");

// Set the initial position of the image
let x = 0;
let y = 0;

// Set the speed of the image
const speed = 10;

// Handle the arrow key events
document.addEventListener("keydown", event => {
  if (event.code === "ArrowUp") {
    y -= speed;
  } else if (event.code === "ArrowDown") {
    y += speed;
  } else if (event.code === "ArrowLeft") {
    x -= speed;
  } else if (event.code === "ArrowRight") {
    x += speed;
  }
  // Update the position of the image
  image.style.top = y + "px";
  image.style.left = x + "px";
});
