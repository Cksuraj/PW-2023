// Define a function that takes in two colors 
function mixColors(color1, color2) {
    // Converting the colors to lowercase to avoid case sensitivity
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();
  
    // switch statement to determine the resulting color based on the input colors
    switch (color1 + " " + color2) {
      case "red red":
        return "red";
      case "blue blue":
        return "blue";
      case "yellow yellow":
        return "yellow";
      case "red blue":
      case "blue red":
        return "purple";
      case "red yellow":
      case "yellow red":
        return "orange";
      case "blue yellow":
      case "yellow blue":
        return "green";
      default:
        return "invalid";
    }
  }
  
  // Testing the function with input colors
  console.log(mixColors("red", "blue"));     // Output: purple
  console.log(mixColors("blue", "yellow"));  // Output: green
  console.log(mixColors("green", "blue"));  // Output: invalid
  