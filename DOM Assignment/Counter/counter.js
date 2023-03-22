// getting the html elements
const dbtn = document.getElementById("down");
const ubtn = document.getElementById("up");
const resetbtn = document.getElementById("resetbtn");
const displayV= document.getElementById("displayValue");

// for decrement button click
dbtn.addEventListener("click", () => {
  const value = Number(displayV.innerText);
  if (value > 0) {
    displayV.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});

// for increment button click
ubtn.addEventListener("click", () => {
  const value = Number(displayV.innerText);
  if (value >= 10) {
    alert("10+ values are not allowed");
  } else {
    displayV.innerText = value + 1;
  }
});

// for reset button click
resetbtn.addEventListener("click", () => {
  displayV.innerText = 0;
});