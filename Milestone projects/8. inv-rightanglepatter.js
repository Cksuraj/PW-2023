
const i = 6;

for (let row = i; row >= 1; row--) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line += "*";
  }
  console.log(line);
}

