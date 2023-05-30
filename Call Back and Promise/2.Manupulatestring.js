// Creating a function for manupulating the string with  inputstring and callback 

function manupulating(inputstring, callback) {
    const newstring = inputstring.toUpperCase();

    callback(newstring);
}
 

// declearing the output function for callback
function longstring(newstring) {
    console.log(`This is a manupulated string: ${newstring}`);
}

// calling the funtion 
manupulating("Hello world!",longstring);