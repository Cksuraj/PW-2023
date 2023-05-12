

// Creating class for Value the person name and age 

class Person{
    constructor(Name="Unknown",age=0){
        this.name=Name;
        this.age=age;
    }
// This method is used to display output message

    getperson(){
        return `Name:${this.Name} Age:${this.age}`
    }
}

const person1= new Person('Nikhil' , 25).getperson();

console.log(person1);

const person2=new Person();
console.log(person2);