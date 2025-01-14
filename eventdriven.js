const events = require("events");

// Creating an event emitter
const eventEmitter = new events.EventEmitter();

// This is the event listener
eventEmitter.on("connection", () => {
  console.log("Connection is successfully successful");
});

// Firing the connection event
eventEmitter.emit("connection");
