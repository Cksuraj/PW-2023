
// Linkedin URL Vailidat programm

// My profile Linkedin url  https://www.linkedin.com/in/suraj-chaudhary-4406401b4/


// Linked Profile Pattern 

let regex = /[(https:\/\/www\.linkedin.com)]{20}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)+/g

let firstLinkedprofile ="https://www.linkedin.com/in/suraj-chaudhary-4406401b4/";

let secondLinkedprofile="// https://www.google.com/search?sxsrf=APwXEdfEGDCnZguJd9bHWkST1REMI_Gp4w:1679800487570&q=javascript+book&spell=1&sa=X&ved=2ahUKEwicpOu60Pj9AhXzR2wGHW9RCIgQirwEKAB6BAgJEAE&biw=1309&bih=657&dpr=1";


//  cheaking first input url
let  cheakurl=regex.test(firstLinkedprofile);
console.log(cheakurl);

cheakurl=firstLinkedprofile.match(regex);
console.log(" First profile Match the REGEX condition :"+ "\n" + cheakurl);


//  cheaking second input url

console.log(" \n Testing 2nd Web-Url for REGEX \n");



let cheakur2=regex.test(secondLinkedprofile)
console.log(cheakur2);


cheakur2= secondLinkedprofile.match(regex);
console.log( " This url does not match condition Henc : " + cheakur2);