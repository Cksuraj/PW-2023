// variable
let x = 5;
let y = 10;


// function for swaping the Values
function swapValues(x, y) {
   [x, y] = [y, x];
   return [x, y];
 }

//  calling before swap
console.log(`Before swap: x = ${x}, y = ${y}`);

// calling function
[x, y] = swapValues(x, y);


// calling after swap
console.log(`After swap: x = ${x}, y = ${y}`);
