// Creating Function with parameter and callback

function dubblearray(arr,callback){
const dblarry= arr.map((num) =>{
return callback(num);
});
return dblarry;
}

// declearing the array 

let original=[1,2,3,4,50];

// declering a call back function 

function callback(num){
    return num*2;
}

// stroing the function into variable

const TwiseArray= dubblearray(original,callback);

console.log(TwiseArray);