// let's create object first

const person={
name:'Suraj Chaudhary',
age:'25',
address:{
    stret:'New Skill learning center, Near to Developer',
    city:'Chhatrapati Sambhajinagar',
    email:'sjchaudhary00@gmail.com'
}
}

// writing a normal function for extracting only name and street from address OBJ

function nameandstreet(person){
    const {name,address:{stret}} = person;
    return {name,stret}
}


// calling a funtion to gain output name and stret

const result= nameandstreet(person);

// print the output 

console.log(result);