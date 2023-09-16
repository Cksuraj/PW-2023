
/*---------------------------- Question number 2 Answer --------------------*/

var fs= require('fs');

const data="Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet.";

fs.writeFileSync("nodejs_architecture.txt", data);



/*------------ Question number 3 Answer ------------------*/

fs.readFile("nodejs_architecture.txt",'utf8',(err,data)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log(data);
    }
})



/* ------------------- Question number 4 Answer ----------------*/

// Appending additional data into the nodejs_architecture.txt file using fs module 

 newdata  ="provides an API to interact with the file system, allowing operations like reading, writing, and modifying files. It offers both asynchronous methods, which are non-blocking, and synchronous versions that block the event loop. This flexibility enables developers to choose the best approach for their specific use case."

fs.appendFileSync('nodejs_architecture.txt',newdata);

const read=fs.readFileSync('nodejs_architecture.txt');

console.log(read.toString());

