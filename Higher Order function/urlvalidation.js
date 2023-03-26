// url Validation 


//  url Pattern to mathc the url 

let regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;

const weburl = "// https://www.google.com/search?sxsrf=APwXEdfEGDCnZguJd9bHWkST1REMI_Gp4w:1679800487570&q=javascript+book&spell=1&sa=X&ved=2ahUKEwicpOu60Pj9AhXzR2wGHW9RCIgQirwEKAB6BAgJEAE&biw=1309&bih=657&dpr=1";


//  useing the match method gives the output pattern
const Valid = weburl.match(regex)
console.log(Valid);


//  Useing Test method return boolean value
const testValid = regex.test(weburl);
console.log(testValid);