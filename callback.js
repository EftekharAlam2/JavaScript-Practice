function greetUser(name, callback) {
  console.log("Hello, " + name + "!");
  if (typeof callback === "function") {
    callback();
  }
}

function sayGoodbye() {
  console.log("Goodbye, have a nice day!");
}

greetUser("John", sayGoodbye);
