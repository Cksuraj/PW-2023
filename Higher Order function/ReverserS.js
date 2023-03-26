

// By useing inbuild methods of Javascript   

let string = "Birthday";

setTimeout(function () {
    let newString = string.split("").reverse().join("");

    console.log("The out put string is : " + newString);
}, 2000);



//  By useing for loop 


let str ="Birthday";

let revstr="";   // Empty String for stroing the new reverse string

setTimeout(function () {
    for(let i=str.length-1;i>=0;i--){
        revstr+=str[i];
    }
    
console.log("This is output =  " + revstr);
}, 2000);


