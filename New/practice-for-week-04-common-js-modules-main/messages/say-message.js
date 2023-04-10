const helloMessage = require("./hello-message");

const sayMessage = message => {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);

module.exports = sayMessage;
