// lets create function inside the funtion we will execute the try cathc block

let str='123';          // str declered 

function convertonum(str){            // Funtion for converting the str to  number
    const num=Number(str)
 try {                                                        
    if(isNaN(num)){                                         // ** Try Cathc ** // Dry Run and see how it works 
        throw new Error('  "Invilde Number"  ');
    }
    return num;
 } catch (Error) {
    return Error.message;                                 // Error meassge block by refereance 
 }   
}

convertonum('123');
console.log(convertonum(str));