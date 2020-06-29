const EventEmitter  = require('events');


//class 
class MyEventEmitter extends EventEmitter{};


//init obj
const myEventEmitterObj = new MyEventEmitter();


myEventEmitterObj.on('event',()=>console.log("Event Fired!"));

myEventEmitterObj.emit('event');

myEventEmitterObj.emit('event');

myEventEmitterObj.emit('event');

myEventEmitterObj.emit('event');