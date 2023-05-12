
// Creating class with car description 
class car{
    constructor(company,model,year){
        this.company= company;
        this.model= model;
        this.year= year;
    }
// This is method which will display the output message 
    getdesicreiption(){
        return `This is ${this.year} and ${this.company}  ${this.model}  number `
    }
}

const mycar=new car('BMW','TOP001',2024).getdesicreiption();

console.log(mycar);