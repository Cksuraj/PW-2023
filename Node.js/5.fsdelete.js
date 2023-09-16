
/*-------------------Question number 5 Answer -----------------*/

const fs= require ('fs');

fs.unlink('./nodejs_architecture.txt',(err) => {
    
    if(err)
    console.log(err.message);
else
console.log('File Deleted Successfully');
}) 