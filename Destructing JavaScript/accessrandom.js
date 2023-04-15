// varicable
const arr = [1, 2, 3, 4, 5];

// createing normal function that extract elements form array retuns 1st,2nd and last element of array

function extractingelements(arr) {
  const [first, second, ...rest] = arr;
  const last = rest.pop(); //useing pop methohd two remve elements and returing last element
  return [first, second, last];
}

const result = extractingelements(arr);
console.log(result);
