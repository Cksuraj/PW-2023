// Creating Prototype object to display details

// Using Prototype

function pro(name){
    this.name=name

    pro.prototype.description=function(){
    console.log(`This is Studetn ${this.name}`);
    }
}


const per=new pro('Nikhil');
 per.description();
