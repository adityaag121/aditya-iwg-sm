const EventEmitter = require("events");
const eventEmitter = new EventEmitter.EventEmitter();

eventEmitter.on("myEvent", () => {
  console.log("My event was emitted");
});

eventEmitter.emit("myEvent");
eventEmitter.emit("myEvent");

class Person extends EventEmitter.EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

const aditya = new Person("Aditya");
aditya.on("name", () => {
  console.log(aditya.name);
});
aditya.emit("name");
aditya.emit("name");
