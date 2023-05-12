

// Creating class for Employee to get salary 

class Emp{
    constructor(pos,sal,nav){
        this.Position= pos;
        this.Salary= sal;
        this.name= nav;
    }

    // this is use to display the output message 
    getsalary(){
        return `Hi Nikhil This your ${this.Salary}`
    }

}

const newemp= new Emp('Sineor Fullstack Dev', 150000, 'Nikhil').getsalary()

console.log(newemp);