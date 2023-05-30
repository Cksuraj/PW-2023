// Creating a Object for a person 

const person={
    firstname:"suraj",
    lastname:"Chaudhary",
    age:26,
};

// creting a funtion for ageindays
function AgeIndays(personObject,callback){
    let fullname=`${personObject.firstname} ${personObject.lastname}`;
    let ageindays=person.age*365;
    // binding the fullname and ageindays into the callback
    return callback(fullname,ageindays);
}

// output funtion for personage(passing perameter of callback)

function personage(fullname,ageindays){
console.log(`This is person ${fullname} and has age indays ${ageindays}`);
}

// calculating the age in days of person 
AgeIndays(person,personage);

