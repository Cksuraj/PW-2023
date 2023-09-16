const EventEmitter=require('events');

const Eventname=new EventEmitter();

const subscribemessage= (name)=>{
    console.log(`Thansks for Subscribing to : ${name}`);
}

console.log(' calling Befor removal of events');
Eventname.addListener('subscribe', subscribemessage);
Eventname.emit('subscribe','Code Master');

console.log();
console.log('After removal of Event ');
Eventname.removeListener('subscribe',subscribemessage);
Eventname.emit('subscribe', "Code Master");