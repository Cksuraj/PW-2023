let str = " My Name is is Wordcounter";

// Normal function for word counter
function wordCount(str) {
  const words = str.split(" "); // useing split inbuild method

  //    creating the map for counting the word
  const map = new Map();
  for (const word of words) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }

  return map;
}

//  returning the out put
console.log(wordCount(str));
