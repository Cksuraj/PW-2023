
// createing the funtion for getperson name and age

function getPerson(person) {
    if (typeof person !== "object" && !person.name && !person.age) {
      throw new Error("Invalid parameter type");
    }
    return ` Name: ${person.name}, Age: ${person.age}`;
  }
  
  try {                                 //using try catch block
    const person = {    
      name: "John",
      age: 30,
    };
    const result = getPerson(person);
    console.log(result); // Output: "Name: John, Age: 30"
  
    const invalidPerson = {
      firstName: "John",
      lastName: "Doe",
    };

    // storing the function into variable


    const invalidResult = getPerson(invalidPerson);
    console.log(invalidResult);
  } catch (error) {
    console.log(error.message); // Output: "Invalid parameter type"
  }