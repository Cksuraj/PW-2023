

// Creating funtion for checking is it presnce in array or not 

function checksum(number){
    return function(arr){
        return number.includes(arr);
    }
}

const number =[1,2,3,4,5]

const check=checksum(number);
console.log(check(9));

const check1=checksum(number)
console.log(check1(4)); 

// console.log(checksum(10));