/* Printing the maximum Event Listners */

/*--------- Here We are Using EventEmitter  to trigger an Event ---------- */

const EventEmitter =require('events');

const Eventname= new EventEmitter();

const subscribe=(name)=>{
    console.log(`Thnks for Subscribe to : ${name}`);
}

Eventname.addListener('subscribe',subscribe); 
Eventname.emit('subscribe','Code master'); 


console.log(
    `The default maximum number of event listners are: ${Eventname.getMaxListeners()}`
  );
  
  Eventname.setMaxListeners(5);
  
  console.log(
    `The updated maximum number of event listners are: ${Eventname.getMaxListeners()}`
  );