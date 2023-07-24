function greetUser(name, callback) {
  console.log("Hello, " + name + "!");
  //Callback
  if (typeof callback === "function") {
    callback();
  }
}

function sayGoodbye() {
  console.log("Goodbye, have a nice day!");
}

greetUser("John", sayGoodbye);
