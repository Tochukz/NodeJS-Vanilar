# EventEmitter 
[Docs](https://nodejs.org/api/events.html)
The `events` native module holds the `EventEmitter` class. 
All objects that emit events are instances of the EventEmitter class.  
When the EventEmitter object emits and vent, all of the functions attached to that specific events are called synchronously. 
Any value returned by the called listeners are ignored and will be discarded.