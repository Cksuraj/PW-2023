// taking arr

let arr = [9, 3, 8, 5, 2];

// Normal function for Min and Max useing spreed opratore
function MinandMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return { min, max };
}

// calling and storing the function

const resutl = MinandMax(arr);

// printing the output

console.log(resutl);
