
//  declearing the array and values 
let setA=[1,2,3,4,5,7,7,5,"suraj", "nikhil" , "suraj"]
let setB=[ "chaudhary", "borse"];

let check=new Set([...setA,...setB])

//  using set method to dispaly unique array
function unique(){
    return new Set(setA)
}

console.log(unique(setA));

// console.log(check.has("suraj")); 

// using fillter method

