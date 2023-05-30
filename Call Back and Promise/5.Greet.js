// Creating function for greet the persong with the 

function Greet(name){
    // Promise has two perameters (resolve and reject ) 
    return new Promise((resolve)=>{
        let greet=`Hello ${name} !`;
        resolve(greet);
    });
}

// displaying the Greeting message with the promiss

Greet("Suraj").then((message)=>console.log(message));
