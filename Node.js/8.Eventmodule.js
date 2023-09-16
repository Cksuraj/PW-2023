/*--------------- EventEmitter module -----------------------*/

const EventEmitter = require('events')

const Eventname= new EventEmitter();

const Subscribemessage= (name)=>{
    console.log(`Thanks for Subscribeing to : ${name} `);
}

Eventname.addListener("subscribe", Subscribemessage);
Eventname.emit("subscribe", "College Wallah");
