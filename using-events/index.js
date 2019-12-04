const EventEmitter = require('events');

// An event emitter extends the EventEmitter class
class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();

// Event emitters exposes the on method used to name an event and listener to be called when the event occures
myEmitter.on('myEvent', () => {
    console.log('An Event has occured');
});

// Firing a named event
setTimeout(() => {
  myEmitter.emit('myEvent');
}, 3000);

