const sayHelloTo = require("./say-hello-to")

const giveMessageToMrsPotato = message => {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");

module.exports = giveMessageToMrsPotato;
