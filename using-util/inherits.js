const util = require('util');
const EventEmitter = require('events');

/* 
 * Extending the EventEmitter class using util.inherits method
 */
function MyStream() {
  EventEmitter.call(this)
}

// util.inherits(ChildConstructor, ParentConstructor)
util.inherits(MyStream, EventEmitter);

// using the inherited `emit` method of the EventEmitter to trigger a named event.
MyStream.prototype.write = function(data) {
    this.emit('data', data)
}

const stream = new MyStream();

console.log(stream instanceof EventEmitter); //true

// ChildConstructor.super_ returns a reference to the ParentConstructor
console.log(MyStream.super_ === EventEmitter); //true

// Nameing an event 
stream.on('data', data => {
  console.log(`Receiveing data: ${data}`);
});

setTimeout(()=> {
    stream.write('It works'); 
}, 2000);



/**
 * With ES6(class and extends) you can extend a class without using util.inherits. This is the prefered method.  
 */
class MyFlow extends EventEmitter {
  write(data) {
      this.emit('fuid', data);
  }
}

const myFlow = new MyFlow();
// Naming an event
myFlow.on('fuid', data => {
    console.log(`There was a flow of: ${data}`);
});

setTimeout(() => {
    myFlow.write('Water');
}, 4000);
