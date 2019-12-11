const EventEmitter = require('events');

// An event emitter extends the EventEmitter class
class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();

// Event emitters exposes the on method used to name an event and a listener to be called when the event occures
myEmitter.on('myEvent', () => {
    console.log('An Event has occured');
});

// triggering a named event
setTimeout(() => {
  myEmitter.emit('myEvent');
}, 2000);

/**
 * Passing argument to listeners 
 */
myEmitter.on('morning', function(date, month) {
  console.log('Time: %s', date);
  console.log('Month: %s', month);
  // The 'this' keyword is itentionally set to refernce the EventEmitter instance 
  console.log(this === myEmitter); // true
  console.log(this instanceof EventEmitter); //true
});

myEmitter.on('morning', () => {
  // For ES6 error function, this does not reference the EventEmitter instance
  console.log(this === myEmitter); //
  console.log(this instanceof EventEmitter); // false
});

setTimeout(() => {
  const date = new Date();
  myEmitter.emit('morning', date.getDate(), date.getMonth());
}, 3000);

/** 
 *  EventEmitter calls all listeners synchronously in the order in which they were registered.  
 * We switch listener functions to asynchronous mode of operation using the setImediate() or process.nextTick() method.
 */
class WorkEmitter extends EventEmitter {

}
const workEmitter = new WorkEmitter();

workEmitter.on('work', function(job) {
    console.log('Doing the %s work 1', job);
});
workEmitter.on('work', function(job) {
  setImmediate(() => {
    console.log('Doing the %s work 2', job)
  });

});
workEmitter.on('work', function(job) {
  console.log('Doing the %s work 3', job);
});

workEmitter.emit('work', 'Microservices');

/**
 * Handling events only once
 */


