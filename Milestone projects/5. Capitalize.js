
//  1 st method to upper case the first lattore of string ;

const str="suraj";

const str2=str.charAt(0).toUpperCase() + str.slice(1);

console.log(str2);

//Suraj

 

//  lets try arry to capitlizet the string of santanses

const str3= "my name is suraj i am developer";

// here we are using the split metod of arry 
//  when ever your string encounters blank space it will encounter the separate the stirn;
const arr=str3.split(" ");

//  let's use the for loop to itrare the through the string to upper case the string 

for (let i=0; i<arr.length;i++){
    arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

// lets join the whole string again after changing it touppercase 

const str4=arr.join(" ");

console.log(str4);



//  3rd method to uppercase the latter with the help of ternary operator


function capital(name){
    return name.charAt(0).toLowerCase() === name.charAt(0) ? name.charAt(0).toUpperCase()+ name.slice(1) : name;
}

console.log(capital("nikhil"));