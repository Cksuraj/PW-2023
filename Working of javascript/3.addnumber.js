// value to the console before it is assigned a value to
// demonstrate variable hoisting.

function addnumber(a,b){
    console.log(sum);      
    var sum;              // var is undefine at this line of code 
    return sum=a+b;       // here is adding the value to sum 
}


console.log(addnumber(50,50));