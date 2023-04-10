const sayMessage = require("../messages/say-message");

const sayHelloTo = name => {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

module.exports = sayHelloTo;
